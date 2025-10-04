import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, Gem, Puzzle, Sparkles } from "lucide-react";
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
      staggerChildren: 0.1, // Anima os filhos com um pequeno atraso entre eles
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// Variantes para os estados iniciais e visíveis
const pillarVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

// Objeto separado apenas para o efeito de hover
const pillarHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300 },
};
const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background overflow-hidden">
      {/* Usamos motion.div como o container principal da animação */}
      <motion.div
        className="max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="p-8 md:p-12 shadow-2xl shadow-primary/10">
          <div className="text-center space-y-8">
            <motion.div variants={itemVariants}>
              
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent !leading-tight"
            >
              Qual é a chave que destrava seu próximo nível?
            </motion.h1>

            {/* Container para os pilares com animação própria */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-4 pt-4"
            >
              <motion.div
                variants={pillarVariants}
                whileHover="hover"
                className="flex flex-col items-center p-4 rounded-lg bg-primary/5 cursor-pointer"
              >
                <Puzzle className="w-8 h-8 text-primary mb-2" />
                <p className="font-semibold text-primary/90">Execução</p>
              </motion.div>
              <motion.div
                variants={pillarVariants}
                whileHover="hover"
                className="flex flex-col items-center p-4 rounded-lg bg-secondary/5 cursor-pointer"
              >
                <Gem className="w-8 h-8 text-secondary mb-2" />
                <p className="font-semibold text-secondary/90">Resiliência</p>
              </motion.div>
              <motion.div
                variants={pillarVariants}
                whileHover="hover"
                className="flex flex-col items-center p-4 rounded-lg bg-accent/5 cursor-pointer"
              >
                <Compass className="w-8 h-8 text-accent mb-2" />
                <p className="font-semibold text-accent/90">Significado</p>
              </motion.div>
            </motion.div>

            <div className="pt-6 space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-lg text-foreground/80"
              >
                Existe uma ordem oculta na Tríade do Tempo… e você só precisa de <span className="font-bold text-primary"><br />9 respostas</span> para revelar A SUA.
              </motion.p>

              <motion.div
                variants={itemVariants}
                animate={{
                  scale: [1, 1.03, 1], // Efeito de pulsação
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
                  Iniciar minha jornada
                </Button>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-sm text-muted-foreground pt-2"
              >
              
              </motion.p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default QuizStart;