const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateTrip = async (req, res) => {
    const { destination, duration, budget, travelStyle, activities } = req.body;

    console.log('Received request:', { destination, duration, budget, travelStyle, activities });

    const prompt = `Create a comprehensive travel guide for a ${duration}-day trip to ${destination} with a budget of ${budget}. The traveler's style is ${travelStyle} and their activities include ${activities}. Provide the following information in a JSON format:

    1. "about": A brief introduction to ${destination} (100-150 words)
    2. "topPlaces": A list of 5-7 top places to visit that fit the budget and activities, each with a name, brief description, and estimated cost
    3. "hotels": 3-5 hotel recommendations that fit the budget, each with a name, brief description, and estimated price per night
    4. "itinerary": A day-by-day itinerary for ${duration} days, with budget-friendly activities for morning, afternoon, and evening
    5. "bestTimeToVisit": Information about the best time to visit ${destination} (50-75 words)
    6. "localCuisine": 5-7 local cuisine recommendations that fit the budget, each with a name, brief description, and estimated cost
    7. "budgetBreakdown": A rough breakdown of the budget for accommodation, food, activities, and transportation

    IMPORTANT: Format the response as a raw JSON object. Start your response with an opening curly brace '{' and end with a closing curly brace '}'. Do not include any text, formatting, or code block markers outside of the JSON object. Ensure the JSON is valid and can be parsed directly.`;

    try {
        console.log('Generating content with prompt:', prompt);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        let text = response.text();
        console.log('Generated text:', text);

        let tripPlan;
        try {
            // Remove any non-JSON content at the beginning of the string
            text = text.substring(text.indexOf('{'));

            // Remove any markdown formatting and extract JSON
            const jsonString = text.replace(/```json\s*|\s*```/g, '').trim();
            tripPlan = JSON.parse(jsonString);
        } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);

            // If parsing fails, attempt to fix common issues
            const cleanedJson = text
                .replace(/```json\s*|\s*```/g, '')
                .replace(/^JSON\s*/, '')
                .replace(/\\n/g, '\\n')
                .replace(/\\'/g, "\\'")
                .replace(/\\"/g, '\\"')
                .replace(/\\&/g, '\\&')
                .replace(/\\r/g, '\\r')
                .replace(/\\t/g, '\\t')
                .replace(/\\b/g, '\\b')
                .replace(/\\f/g, '\\f')
                .replace(/[\u0000-\u0019]+/g, '')
                .replace(/,\s*}/g, '')
                .replace(/,\s*]/g, ']')
                .trim();

            try {
                tripPlan = JSON.parse(cleanedJson);
            } catch (cleanedJsonError) {
                console.error('Error parsing cleaned JSON:', cleanedJsonError);
                console.log('Cleaned JSON string:', cleanedJson);
                throw new Error('Failed to parse the generated content as JSON after cleaning');
            }
        }

        console.log('Parsed trip plan:', tripPlan);
    res.status(200).json(tripPlan);
    } catch (error) {
        console.error('Error generating trip plan:', error);
        res.status(500).json({ error: 'Failed to generate trip plan', details: error.message });
    }
};

module.exports = generateTrip;
