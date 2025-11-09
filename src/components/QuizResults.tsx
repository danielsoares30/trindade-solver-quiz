import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Zap, Sparkles, ArrowRight, BookOpen, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

interface QuizResultsProps {
  weakestTrinity: "execution" | "resilience" | "meaning";
}

const QuizResults = ({ weakestTrinity }: QuizResultsProps) => {
  const results = {
    execution: {
      icon: Target,
      title: "Seu maior desafio está na EXECUÇÃO.",
      description:
        "Apesar de ter boas ideias, a procrastinação e a sobrecarga de tarefas te impedem de transformar seu potencial em resultados.",
      solution:
        "Este ebook foi feito para você. Com a Trindade da Execução (Clareza, Foco e Ação), você terá o mapa definitivo para transformar o caos em clareza e a indecisão em ação poderosa.",
      cta: "QUERO DOMINAR A EXECUÇÃO",
      gradient: "from-blue-600 to-cyan-500", 
      textColor: "text-blue-500",
    },
    resilience: {
      icon: Zap,
      title: "Seu maior desafio está na RESILIÊNCIA.",
      description:
        "Você é ótimo(a) em começar, mas sua dificuldade em manter a consistência e o ritmo a longo prazo te impede de construir resultados duradouros.",
      solution:
        "A Trindade da Resiliência é o coração deste ebook. Com ela, você aprenderá a construir sistemas que realmente funcionam e a ter controle total sobre suas emoções.",
      cta: "QUERO CONSTRUIR MINHA RESILIÊNCIA",
      gradient: "from-green-500 to-emerald-500", 
      textColor: "text-green-500",
    },
    meaning: {
      icon: Sparkles,
      title: "Seu maior desafio está no SIGNIFICADO.",
      description:
        "Apesar de ser produtivo(a), você sente um vazio e falta de inspiração, como se estivesse perseguindo os objetivos errados.",
      solution:
        "O ebook usa a Trindade do Significado para te ajudar a encontrar seu 'porquê' e se reconectar com sua essência.",
      cta: "QUERO ENCONTRAR MEU SIGNIFICADO",
      gradient: "from-orange-500 to-amber-500", 
      textColor: "text-orange-500",
    },
  };

  const result = results[weakestTrinity];
  const Icon = result.icon;
  const checkoutLink = "https://pay.kirvano.com/2fd2f53e-4c3f-4d53-848a-4d6ba8140d41";

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* --- MUDANÇA 1: max-w-full no mobile, max-w-5xl no desktop --- */}
      <Card className="max-w-full md:max-w-5xl w-full shadow-2xl overflow-hidden border-none">
        <div className="grid md:grid-cols-2">
          
          <motion.div 
            className={`hidden md:flex flex-col items-center justify-center p-12 bg-gradient-to-br ${result.gradient}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="text-center text-white mb-8">
              <BookOpen className="mx-auto w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold">A Trindade do Tempo</h3>
              <p className="opacity-80">Seu guia prático para o domínio pessoal</p>
            </div>
            <div className="w-48 h-64 bg-white/90 rounded-lg shadow-2xl p-4 flex flex-col justify-between backdrop-blur-sm">
                <div className="space-y-2">
                    <div className="h-2 w-1/3 bg-gray-400 rounded"></div>
                    <div className="h-2 w-full bg-gray-300 rounded"></div>
                    <div className="h-2 w-2/3 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-center items-center h-full">
                    <Icon className={`w-16 h-16 ${result.textColor}`} />
                </div>
                <div className="h-2 w-1/2 bg-gray-400 rounded self-end"></div>
            </div>
          </motion.div>

          <motion.div 
            className="p-8 md:p-12"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="font-semibold text-primary">Seu Diagnóstico Personalizado</p>
              {/* --- MUDANÇA 2: Ajuste no tamanho da fonte H1 para mobile --- */}
              <h1 className="text-2xl md:text-4xl font-bold text-foreground !leading-tight">
                Seu maior desafio está na <span className={`bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>{result.title.split(' ').pop()?.replace('.', '')}</span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                {result.description}
              </p>

              <div className="p-6 bg-muted/50 rounded-lg space-y-4">
                <h2 className="text-xl font-bold text-foreground">Como 'A Trindade do Tempo' vai te ajudar:</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {result.solution}
                </p>
                <Button
                  asChild
                  size="lg"
                  // --- MUDANÇA 3: Adiciona text-wrap para quebra de linha no botão ---
                  className={`w-full px-8 py-7 text-lg font-semibold text-white bg-gradient-to-r ${result.gradient} hover:opacity-90 shadow-lg hover:shadow-xl transition-all group text-wrap`}
                >
                  <a href={checkoutLink} target="_blank" rel="noopener noreferrer">
                    {result.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* --- MUDANÇA 4: Grid com ajuste de espaçamento e possível empilhamento para mobile --- */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 pt-4 text-center">
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 text-yellow-500 mb-1" />
                  <p className="font-bold text-foreground text-sm">9 Poderes</p> {/* Ajuste de fonte */}
                  <p className="text-xs text-muted-foreground">Revelados</p>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-6 h-6 text-green-500 mb-1" />
                  <p className="font-bold text-foreground text-sm">Ação Prática</p> {/* Ajuste de fonte */}
                  <p className="text-xs text-muted-foreground">Garantida</p>
                </div>
                {/* O terceiro item agora se ajusta melhor ou some em telas pequenas, dependendo do design */}
                <div className="flex flex-col items-center col-span-2 md:col-span-1 mt-4 md:mt-0"> {/* Ajustado para ocupar 2 colunas e empilhar no mobile, ou 1 no desktop */}
                  <BookOpen className="w-6 h-6 text-blue-500 mb-1" />
                  <p className="font-bold text-foreground text-sm">Guia Completo</p> {/* Ajuste de fonte */}
                  <p className="text-xs text-muted-foreground">Passo a passo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default QuizResults;