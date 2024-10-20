import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Compass, Calendar, Sparkles, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Compass className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">AI Travel Planner</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </Link>
        </nav>
        <Button className="ml-4" variant="outline">
          Sign Up
        </Button>
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
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start planning your dream vacation today. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose AI Travel Planner?</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <MapPin className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Personalized Itineraries</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Tailored travel plans based on your preferences, budget, and travel style.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Compass className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Local Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Discover hidden gems and local favorites with AI-powered recommendations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Calendar className="h-8 w-8 text-primary" />
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">1</div>
                <h3 className="text-xl font-bold">Share Your Preferences</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Tell us about your travel style, interests, and must-see destinations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">2</div>
                <h3 className="text-xl font-bold">AI Creates Your Plan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI analyzes thousands of options to create your perfect itinerary.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">3</div>
                <h3 className="text-xl font-bold">Enjoy Your Trip</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Experience a seamless, personalized journey tailored just for you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
              <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AI Travel Planner. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}