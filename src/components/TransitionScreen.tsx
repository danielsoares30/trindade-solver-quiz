import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
// 1. Importar o motion
import { motion, Variants } from "framer-motion";

interface TransitionScreenProps {
  title: string;
  subtitle: string;
  onContinue: () => void;
  duration?: number;
}

// -- Variantes de Animação --

// Orquestra a entrada de todos os elementos filhos
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso de 0.2s entre cada elemento
    },
  },
};

// Animação para o ícone "pular" na tela
const iconVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

// Animação para os textos surgirem de baixo
const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
};

// Animação para os pontos de carregamento pulsarem
const dotVariants: Variants = {
  pulse: {
    scale: [1, 1.4, 1], // Escala do ponto
    transition: {
      duration: 0.8,
      repeat: Infinity, // Repete infinitamente
      repeatType: "reverse" as const, // Vai e volta
      ease: "easeInOut",
    },
  },
};


const TransitionScreen = ({ title, subtitle, onContinue, duration = 7000 }: TransitionScreenProps) => {
  // A lógica de duração permanece intacta
  useEffect(() => {
    const timer = setTimeout(() => {
      onContinue();
    }, duration);

    return () => clearTimeout(timer);
  }, [onContinue, duration]);

  return (
    // A estrutura de posicionamento permanece intacta
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-xl text-center border-none">
        {/* 2. Aplicamos as variantes de animação ao container */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={iconVariants}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {title}
          </motion.h2>
          
          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-muted-foreground"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex justify-center gap-3 pt-4" // Aumentei o gap
          >
            {/* 3. Pontos de carregamento agora usam motion para uma animação mais fluida */}
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 bg-secondary rounded-full"
                variants={dotVariants}
                animate="pulse"
                transition={{
                  // Atraso para cada ponto começar em um tempo diferente
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </Card>
    </div>
  );
};

export default TransitionScreen;