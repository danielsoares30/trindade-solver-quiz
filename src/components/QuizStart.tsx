import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Target, Zap } from "lucide-react";

interface QuizStartProps {
  onStart: () => void;
}

const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-lg">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Descubra Seu Maior Desafio
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Está cansado de procrastinar, se sentir sobrecarregado e ver seus dias passarem sem direção clara?
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5">
              <Target className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-medium">Execução</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/5">
              <Zap className="w-8 h-8 text-secondary mb-2" />
              <p className="text-sm font-medium">Resiliência</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-accent/5">
              <Sparkles className="w-8 h-8 text-accent mb-2" />
              <p className="text-sm font-medium">Significado</p>
            </div>
          </div>
          
          <div className="pt-6 space-y-4">
            <p className="text-base text-foreground/80">
              Em apenas <span className="font-bold text-primary">9 perguntas</span>, você vai descobrir qual das Três Trindades está te impedindo de alcançar seu potencial.
            </p>
            
            <Button 
              onClick={onStart}
              size="lg"
              className="w-full md:w-auto px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all"
            >
              Começar o Diagnóstico
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⏱️ Tempo estimado: 2-3 minutos
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuizStart;
