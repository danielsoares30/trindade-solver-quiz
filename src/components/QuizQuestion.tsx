import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface QuizQuestionProps {
  question: string;
  options: { label: string; text: string; value: number }[];
  onAnswer: (value: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion = ({ question, options, onAnswer, questionNumber, totalQuestions }: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setSelectedOption(value);
  };

  const handleContinue = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption);
      setSelectedOption(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="max-w-3xl w-full p-6 md:p-10 shadow-lg">
        <div className="space-y-8">
          {/* Progress indicator */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Pergunta {questionNumber} de {totalQuestions}</span>
              <span>{Math.round((questionNumber / totalQuestions) * 100)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleSelect(option.value)}
                className={`w-full p-5 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                  selectedOption === option.value
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedOption === option.value
                      ? "border-primary bg-primary"
                      : "border-muted-foreground/30"
                  }`}>
                    {selectedOption === option.value && (
                      <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-primary mr-2">{option.label})</span>
                    <span className="text-foreground">{option.text}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Continue button */}
          <Button
            onClick={handleContinue}
            disabled={selectedOption === null}
            size="lg"
            className="w-full md:w-auto px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
          >
            Continuar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default QuizQuestion;
