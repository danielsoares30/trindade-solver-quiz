import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Zap, Sparkles, ArrowRight } from "lucide-react";

interface QuizResultsProps {
  weakestTrinity: "execution" | "resilience" | "meaning";
}

const QuizResults = ({ weakestTrinity }: QuizResultsProps) => {
  const results = {
    execution: {
      icon: Target,
      color: "primary",
      title: "Seu Diagnóstico: Seu maior desafio está na EXECUÇÃO.",
      description:
        "Você tem boas ideias e grandes ambições, mas sente que está patinando no mesmo lugar. A procrastinação, a sobrecarga de tarefas e a dificuldade em manter o foco no dia a dia estão drenando sua energia e impedindo que seu potencial se transforme em resultados. A boa notícia é que isso não é uma falha de caráter, mas sim a falta de um sistema claro para agir.",
      solution:
        "O ebook 'A Trindade do Tempo' foi desenhado para você. A primeira Trindade, a da Execução (Clareza, Foco e Ação), vai te dar o passo a passo para transformar o caos em clareza, a distração em foco e a paralisia em ação imediata. Clique abaixo para destravar os poderes que vão tirar seus projetos do papel.",
      cta: "QUERO DOMINAR A EXECUÇÃO",
      gradient: "from-primary to-primary/70",
    },
    resilience: {
      icon: Zap,
      color: "secondary",
      title: "Seu Diagnóstico: Seu maior desafio está na RESILIÊNCIA.",
      description:
        "Você é ótimo(a) em começar. O entusiasmo inicial te move, mas manter o ritmo a longo prazo é uma luta. A consistência falha, as emoções te tiram do curso e seus dias parecem uma batalha constante contra o caos. Você sente que tem potencial, mas a falta de estrutura e força mental te impede de construir resultados duradouros.",
      solution:
        "O coração do ebook 'A Trindade do Tempo' fala diretamente com você. A segunda Trindade, a da Resiliência (Consistência, Disciplina Emocional e Gestão do Tempo), vai te ensinar a construir sistemas à prova de falhas, a dominar suas emoções e a gerenciar seu tempo como um verdadeiro arquiteto da sua vida. Clique abaixo para construir a força que te levará até o fim.",
      cta: "QUERO CONSTRUIR MINHA RESILIÊNCIA",
      gradient: "from-secondary to-secondary/70",
    },
    meaning: {
      icon: Sparkles,
      color: "accent",
      title: "Seu Diagnóstico: Seu maior desafio está no SIGNIFICADO.",
      description:
        "Você é produtivo(a) e consegue realizar tarefas, mas, no fundo, sente um vazio. Você cumpre suas obrigações, mas falta um brilho nos olhos, uma direção que te inspire. Você pode estar subindo a escada do sucesso muito rápido, mas tem a sensação incômoda de que ela pode estar apoiada na parede errada.",
      solution:
        "O ebook 'A Trindade do Tempo' vai te guiar na jornada mais importante. A terceira Trindade, a do Significado (Autoconhecimento, Propósito e Contribuição), é um mapa para você se reconectar com sua essência, descobrir seu 'porquê' e alinhar suas ações com uma vida autêntica e realizadora. Clique abaixo para encontrar a direção que vai dar sentido a todo o seu esforço.",
      cta: "QUERO ENCONTRAR MEU SIGNIFICADO",
      gradient: "from-accent to-accent/70",
    },
  };

  const result = results[weakestTrinity];
  const Icon = result.icon;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Card className="max-w-3xl w-full p-8 md:p-12 shadow-xl">
        <div className="space-y-8 animate-in fade-in duration-700">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${result.gradient} shadow-lg`}>
            <Icon className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              {result.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Solution */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              A Solução Está Aqui
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {result.solution}
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className={`w-full md:w-auto px-8 py-6 text-lg font-semibold bg-gradient-to-r ${result.gradient} hover:opacity-90 shadow-lg hover:shadow-xl transition-all group`}
            >
              {result.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-border">
            <div className="text-center p-4">
              <p className="text-2xl font-bold text-foreground">9</p>
              <p className="text-sm text-muted-foreground">Poderes Revelados</p>
            </div>
            <div className="text-center p-4">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-sm text-muted-foreground">Trindades do Sucesso</p>
            </div>
            <div className="text-center p-4">
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Ação Prática</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuizResults;
