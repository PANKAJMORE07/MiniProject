import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { destination, duration, budget, travelStyle, interests } = req.body;

  const prompt = `Create a comprehensive travel guide for a ${duration}-day trip to ${destination} with a budget of ${budget}. The traveler's style is ${travelStyle} and their interests include ${interests}. Please provide the following information in a JSON format:

  1. "about": A brief introduction to ${destination} (100-150 words)
  2. "topPlaces": A list of 5-7 top places to visit that fit the budget and interests, each with a name, brief description, and estimated cost
  3. "hotels": 3-5 hotel recommendations that fit the budget, each with a name, brief description, and estimated price per night
  4. "itinerary": A day-by-day itinerary for ${duration} days, with budget-friendly activities for morning, afternoon, and evening
  5. "bestTimeToVisit": Information about the best time to visit ${destination} (50-75 words)
  6. "localCuisine": 5-7 local cuisine recommendations that fit the budget, each with a name, brief description, and estimated cost
  7. "budgetBreakdown": A rough breakdown of the budget for accommodation, food, activities, and transportation

  Format the response as a JSON object with keys for 'about', 'topPlaces', 'hotels', 'itinerary', 'bestTimeToVisit', 'localCuisine', and 'budgetBreakdown'.`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    let tripPlan = JSON.parse(text);

    console.log('Generated trip plan:', JSON.stringify(tripPlan, null, 2));

    res.status(200).json(tripPlan);
  } catch (error) {
    console.error('Error generating trip plan:', error);
    res.status(500).json({ error: 'Failed to generate trip plan' });
  }
}