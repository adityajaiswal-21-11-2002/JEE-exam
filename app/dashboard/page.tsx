import { Navbar } from "@/components/navbar"
import { QuestionCard } from "@/components/question-card"
import { questions } from "@/lib/questions"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Practice Questions</h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Select your answer for each question and get instant feedback. Challenge yourself across Physics,
              Chemistry, and Mathematics.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
