import { Link } from "react-router-dom"
import { MapPin, Compass, Calendar, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function LandingPage() {
  
  const [loggedInUser, setLoggedInUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setLoggedInUser(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setLoggedInUser(false);
    
    // Navigate to the home page and then reload the page
    navigate('/', { replace: true });
    window.location.reload();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <Compass className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">AI Travel Planner</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            How It Works
          </Link>
          {loggedInUser && <Link className="text-sm font-medium hover:underline underline-offset-4" to="/profile">
            Profile
          </Link>}
        </nav>
        {
        loggedInUser ? 
          <button
          onClick={handleLogout} 
          className="ml-4 px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">
            <Link to="/">Logout</Link>
          </button>
          : <button className="ml-4 px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">
            <Link to="/login">Sign In</Link>
          </button>
          }
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Personal AI Travel Assistant
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Plan your perfect trip with the power of AI. Personalized itineraries, local insights, and seamless planning - all in one place.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input className="flex-1 px-3 py-2 border rounded-md" placeholder="Enter your email" type="email" />
                  <Link to="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Get Started</Link>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start planning your dream vacation today. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose AI Travel Planner?</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <MapPin className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold">Personalized Itineraries</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Tailored travel plans based on your preferences, budget, and travel style.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Compass className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold">Local Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Discover hidden gems and local favorites with AI-powered recommendations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Calendar className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold">Smart Scheduling</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Optimize your time with intelligent scheduling and real-time updates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">1</div>
                <h3 className="text-xl font-bold">Share Your Preferences</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Tell us about your travel style, interests, and must-see destinations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">2</div>
                <h3 className="text-xl font-bold">AI Creates Your Plan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI analyzes thousands of options to create your perfect itinerary.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">3</div>
                <h3 className="text-xl font-bold">Enjoy Your Trip</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Experience a seamless, personalized journey tailored just for you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Travelers Say</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Sparkles className="h-8 w-8 text-yellow-500" />
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  "AI Travel Planner made our family vacation a breeze. The personalized itinerary was perfect!"
                </p>
                <p className="font-bold">- Sarah T.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Sparkles className="h-8 w-8 text-yellow-500" />
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  "I discovered amazing local spots I would have never found on my own. Truly a game-changer!"
                </p>
                <p className="font-bold">- Mike R.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Sparkles className="h-8 w-8 text-yellow-500" />
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  "The AI's ability to adjust our plans on the fly saved us so much time and stress."
                </p>
                <p className="font-bold">- Emily L.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Plan Your Dream Trip?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of happy travelers and start your AI-powered journey today.
                </p>
              </div>
              <Link to="/dashboard" className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AI Travel Planner. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
