import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// 1. Apenas o ícone 'Sparkles' é necessário agora
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface QuizStartProps {
  onStart: () => void;
}

// Objeto de "variantes" para controlar as animações de forma organizada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background overflow-hidden">
      <motion.div
        className="max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="p-8 md:p-12 shadow-2xl shadow-primary/10">
          <div className="text-center space-y-8">
            
            {/* --- INÍCIO DA ALTERAÇÃO: Novo elemento gráfico --- */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center gap-3 mb-4"
            >
              <Sparkles className="w-8 h-8 text-primary/60" />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1], // Efeito de pulsação sutil
                  opacity: [1, 0.8, 1],
                  transition: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Sparkles className="w-12 h-12 text-primary glow-primary" />
              </motion.div>
              <Sparkles className="w-8 h-8 text-primary/60" />
            </motion.div>
            {/* --- FIM DA ALTERAÇÃO --- */}

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent !leading-tight"
            >
              Quem domina o tempo, domina a si mesmo.
            </motion.h1>

            <div className="pt-6 space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-lg text-foreground/80"
              >
                Existe uma ordem oculta na Trindade do Tempo… e você só precisa de <span className="font-bold text-primary"><br />9 respostas</span> para revelar A SUA.
              </motion.p>

              <motion.div
                variants={itemVariants}
                animate={{
                  scale: [1, 1.03, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Button
                  onClick={onStart}
                  size="lg"
                  className="w-full md:w-auto px-10 py-7 text-xl font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105"
                >
                  Iniciar 
                </Button>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default QuizStart;