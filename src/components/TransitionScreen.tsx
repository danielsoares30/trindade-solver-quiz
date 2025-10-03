import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

interface TransitionScreenProps {
  title: string;
  subtitle: string;
  onContinue: () => void;
  duration?: number;
}

const TransitionScreen = ({ title, subtitle, onContinue, duration = 2000 }: TransitionScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onContinue();
    }, duration);

    return () => clearTimeout(timer);
  }, [onContinue, duration]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-lg text-center">
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            {subtitle}
          </p>

          <div className="flex justify-center gap-2 pt-4">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TransitionScreen;
