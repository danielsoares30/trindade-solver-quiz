import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
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
      staggerChildren: 0.1,
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

  // --- INÍCIO DA ALTERAÇÃO DA PROGRESSÃO ---

  // 1. Lógica para definir a cor da barra em 3 estágios de laranja
  const getProgressBarColor = () => {
    if (questionNumber <= 3) {
      return "bg-gradient-to-r from-amber-400 to-orange-400"; // Laranja Claro
    }
    if (questionNumber <= 6) {
      return "bg-gradient-to-r from-orange-500 to-red-500"; // Laranja Médio
    }
    return "bg-gradient-to-r from-red-600 to-rose-700"; // Laranja Escuro/Avermelhado
  };

  const progressBarColor = getProgressBarColor();

  // 2. Lógica para o progresso da barra não chegar a 100%
  // Usamos 'totalQuestions + 1' como denominador para que na última pergunta (9/10) o resultado seja 90%
  const initialWidth = ((questionNumber - 1) / (totalQuestions + 1)) * 100;
  const finalWidth = (questionNumber / (totalQuestions + 1)) * 100;

  // --- FIM DA ALTERAÇÃO ---

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="max-w-3xl w-full p-6 md:p-10 shadow-xl">
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
                className={`h-full ${progressBarColor}`} // Aplica a cor dinâmica
                initial={{ width: `${initialWidth}%` }} // Usa a largura inicial calculada
                animate={{ width: `${finalWidth}%` }} // Usa a largura final calculada
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* O resto do componente continua o mesmo... */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-foreground leading-tight"
          >
            {question}
          </motion.h2>

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

          <div className="h-20 flex items-end justify-start">
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