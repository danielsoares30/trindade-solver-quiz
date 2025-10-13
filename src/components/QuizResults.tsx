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
        "Você tem boas ideias, mas sente que está patinando no mesmo lugar. A procrastinação e a sobrecarga de tarefas estão drenando sua energia e impedindo que seu potencial se transforme em resultados.",
      solution:
        "O ebook 'A Trindade do Tempo' foi desenhado para você. A primeira Trindade, a da Execução (Clareza, Foco e Ação), vai te dar o passo a passo para transformar o caos em clareza e a paralisia em ação imediata.",
      cta: "QUERO DOMINAR A EXECUÇÃO",
      // --- MUDANÇA AQUI ---
      gradient: "from-blue-600 to-cyan-500", // Gradiente azul vibrante
      textColor: "text-blue-500",
    },
    resilience: {
      icon: Zap,
      title: "Seu maior desafio está na RESILIÊNCIA.",
      description:
        "Você é ótimo(a) em começar, mas manter o ritmo a longo prazo é uma luta. A consistência falha e seus dias parecem uma batalha constante contra o caos, impedindo a construção de resultados duradouros.",
      solution:
        "O coração do ebook 'A Trindade do Tempo' fala diretamente com você. A segunda Trindade, a da Resiliência (Consistência, Disciplina Emocional e Gestão do Tempo), vai te ensinar a construir sistemas à prova de falhas e a dominar suas emoções.",
      cta: "QUERO CONSTRUIR MINHA RESILIÊNCIA",
      // --- MUDANÇA AQUI ---
      gradient: "from-green-500 to-emerald-500", // Gradiente verde vibrante
      textColor: "text-green-500",
    },
    meaning: {
      icon: Sparkles,
      title: "Seu maior desafio está no SIGNIFICADO.",
      description:
        "Você é produtivo(a), mas no fundo, sente um vazio. Falta um brilho nos olhos, uma direção que te inspire. Você pode estar subindo a escada do sucesso, mas com a sensação de que ela está na parede errada.",
      solution:
        "O ebook 'A Trindade do Tempo' vai te guiar na jornada mais importante. A terceira Trindade, a do Significado (Autoconhecimento, Propósito e Contribuição), é um mapa para você se reconectar com sua essência e descobrir seu 'porquê'.",
      cta: "QUERO ENCONTRAR MEU SIGNIFICADO",
      // --- MUDANÇA AQUI ---
      gradient: "from-orange-500 to-amber-500", // Gradiente laranja vibrante
      textColor: "text-orange-500",
    },
  };

  const result = results[weakestTrinity];
  const Icon = result.icon;
  const checkoutLink = "https://pay.kirvano.com/2fd2f53e-4c3f-4d53-848a-4d6ba8140d41";

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Card className="max-w-5xl w-full shadow-2xl overflow-hidden border-none">
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
              <h1 className="text-3xl md:text-4xl font-bold text-foreground !leading-tight">
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
                  // --- MUDANÇA AQUI ---
                  className={`w-full px-8 py-7 text-lg font-semibold text-white bg-gradient-to-r ${result.gradient} hover:opacity-90 shadow-lg hover:shadow-xl transition-all group`}
                >
                  <a href={checkoutLink} target="_blank" rel="noopener noreferrer">
                    {result.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 text-yellow-500 mb-1" />
                  <p className="font-bold text-foreground">9 Poderes</p>
                  <p className="text-xs text-muted-foreground">Revelados</p>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-6 h-6 text-green-500 mb-1" />
                  <p className="font-bold text-foreground">Ação Prática</p>
                  <p className="text-xs text-muted-foreground">Garantida</p>
                </div>
                <div className="flex flex-col items-center">
                  <BookOpen className="w-6 h-6 text-blue-500 mb-1" />
                  <p className="font-bold text-foreground">Guia Completo</p>
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