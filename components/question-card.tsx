"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2, XCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Question {
  id: number
  subject: string
  question: string
  options: string[]
  correctAnswer: number
}

interface QuestionCardProps {
  question: Question
}

export function QuestionCard({ question }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
  }

  const isCorrect = selectedAnswer === question.correctAnswer
  const hasAnswered = selectedAnswer !== null

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
              {question.subject}
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground">Question {question.id}</span>
          </div>
          <CardTitle className="text-lg sm:text-xl mt-4 text-card-foreground leading-relaxed">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswer?.toString()}
            onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
            className="space-y-3"
          >
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrectOption = index === question.correctAnswer
              const showFeedback = hasAnswered

              let optionClasses =
                "flex items-center space-x-3 p-3 sm:p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-muted/50"

              if (showFeedback) {
                if (isSelected && isCorrect) {
                  optionClasses += " border-success bg-success/10"
                } else if (isSelected && !isCorrect) {
                  optionClasses += " border-destructive bg-destructive/10"
                } else if (isCorrectOption) {
                  optionClasses += " border-success bg-success/10"
                } else {
                  optionClasses += " border-border opacity-60"
                }
              } else {
                optionClasses += " border-border"
              }

              return (
                <motion.div
                  key={index}
                  className={optionClasses}
                  initial={false}
                  animate={showFeedback && isSelected ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <RadioGroupItem value={index.toString()} id={`q${question.id}-option${index}`} className="shrink-0" />
                  <Label
                    htmlFor={`q${question.id}-option${index}`}
                    className="flex-1 cursor-pointer text-sm sm:text-base leading-relaxed"
                  >
                    {option}
                  </Label>
                  {showFeedback && isSelected && (
                    <motion.div
                      className="shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                    </motion.div>
                  )}
                  {showFeedback && !isSelected && isCorrectOption && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </RadioGroup>

          <AnimatePresence>
            {hasAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 p-3 sm:p-4 rounded-lg ${isCorrect ? "bg-success/10" : "bg-destructive/10"}`}
              >
                <p
                  className={`font-semibold text-sm sm:text-base ${isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                </p>
                {!isCorrect && (
                  <p className="text-xs sm:text-sm mt-1 text-muted-foreground">
                    The correct answer is: {question.options[question.correctAnswer]}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}
