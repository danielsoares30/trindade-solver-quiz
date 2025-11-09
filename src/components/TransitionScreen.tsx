import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { motion, Variants } from "framer-motion";

interface TransitionScreenProps {
  title: string;
  subtitle: string;
  onContinue: () => void;
  duration?: number;
}

// -- Variantes de Animação --

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
};

const dotVariants: Variants = {
  pulse: {
    scale: [1, 1.4, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  },
};

const TransitionScreen = ({ title, subtitle, onContinue, duration = 6000 }: TransitionScreenProps) => { // Ajustei duration para 3000ms como padrão para o quiz
  useEffect(() => {
    const timer = setTimeout(() => {
      onContinue();
    }, duration);

    return () => clearTimeout(timer);
  }, [onContinue, duration]);

  return (
    // AQUI: Fundo do site - Alterado para gradiente de azuis
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-900/10 via-background to-blue-500/10">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-xl text-center border-none">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={iconVariants}>
            {/* AQUI: Fundo do ícone de check - Alterado para gradiente de azuis */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-400">
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
            className="flex justify-center gap-3 pt-4"
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                // AQUI: Bolinhas de carregamento - Alteradas para azul
                className="w-2.5 h-2.5 bg-blue-500 rounded-full"
                variants={dotVariants}
                animate="pulse"
                transition={{
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