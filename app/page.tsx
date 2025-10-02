import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { BookOpen, Brain, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-4">
            Master JEE with Confidence
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight px-4">
            Practice JEE Exam Questions <span className="text-primary">Online</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-4">
            Sharpen your skills with curated Physics, Chemistry, and Mathematics questions. Get instant feedback and
            track your progress.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 h-11 sm:h-12 rounded-full w-full sm:w-auto"
            >
              <Link href="/dashboard">Start Practicing</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 h-11 sm:h-12 rounded-full bg-transparent w-full sm:w-auto"
            >
              <Link href="/dashboard">View Questions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-3 sm:space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">Comprehensive Coverage</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Practice questions across Physics, Chemistry, and Mathematics tailored for JEE preparation.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-3 sm:space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">Instant Feedback</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Get immediate results on your answers with clear explanations to learn from mistakes.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-3 sm:space-y-4 hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">Track Progress</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Monitor your performance and identify areas that need more focus and practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
