import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
// 1. Importar motion e AnimatePresence
import { motion, AnimatePresence } from "framer-motion";

interface QuizQuestionProps {
  question: string;
  options: { label: string; text: string; value: number }[];
  onAnswer: (value: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

// Variantes para animar as opções em sequência
const optionsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Atraso de 0.1s entre cada opção
    },
  },
};

const optionItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


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
    // Esta parte do layout continua exatamente a mesma
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="max-w-3xl w-full p-6 md:p-10 shadow-xl">
        {/* 2. Adicionamos uma key aqui para que a animação reinicie a cada nova pergunta */}
        <motion.div
          key={questionNumber}
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Barra de Progresso */}
          <div className="space-y-2">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
                animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Pergunta */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-foreground leading-tight"
          >
            {question}
          </motion.h2>

          {/* Opções */}
          <motion.div
            className="space-y-3"
            variants={optionsContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {options.map((option) => (
              <motion.button
                key={option.label}
                variants={optionItemVariants}
                onClick={() => handleSelect(option.value)}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
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
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-primary-foreground rounded-full" 
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-primary mr-2">{option.label})</span>
                    <span className="text-foreground">{option.text}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Botão Continuar */}
          <div className="h-20 flex items-end justify-start"> {/* Container para evitar pulo de layout */}
            <AnimatePresence>
              {selectedOption !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <Button
                    onClick={handleContinue}
                    disabled={selectedOption === null}
                    size="lg"
                    className="w-full md:w-auto px-8 py-6 text-lg font-semibold shadow-lg transition-all"
                  >
                    Continuar
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </Card>
    </div>
  );
};

export default QuizQuestion;