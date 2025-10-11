import { useState } from "react";
import QuizStart from "@/components/QuizStart";
import QuizQuestion from "@/components/QuizQuestion";
import TransitionScreen from "@/components/TransitionScreen";
import QuizResults from "@/components/QuizResults";

// 1. Adicionamos um novo estado para a transição final
type QuizState = "start" | "question" | "transition" | "final-transition" | "results";

interface Question {
  text: string;
  options: { label: string; text: string; value: number }[];
  trinity: "execution" | "resilience" | "meaning";
}

const questions: Question[] = [
  // BLOCO 1 - Execução
  {
    text: "Como você descreveria o início do seu dia?",
    options: [
      { label: "A", text: "Sou reativo(a) e apago incêndios o dia todo, sem focar no que importa.", value: 1 },
      { label: "B", text: "Tenho um plano, mas as urgências e interrupções sempre vencem.", value: 2 },
      { label: "C", text: "Sei qual é minha prioridade e protejo meu tempo para executá-la primeiro.", value: 3 },
    ],
    trinity: "execution",
  },
  {
    text: "Quando você senta para fazer uma tarefa importante, o que geralmente acontece?",
    options: [
      { label: "A", text: "Qualquer notificação ou distração quebra totalmente minha concentração.", value: 1 },
      { label: "B", text: "Consigo focar por um tempo, mas a força de vontade acaba e eu me distraio.", value: 2 },
      { label: "C", text: "Crio um ambiente sem distrações e trabalho focado em uma única tarefa.", value: 3 },
    ],
    trinity: "execution",
  },
  {
    text: "Qual sua relação com novos projetos ou grandes metas?",
    options: [
      { label: "A", text: "Planejo muito, mas fico preso(a) na análise e demoro para começar.", value: 1 },
      { label: "B", text: "Começo com empolgação, mas o primeiro obstáculo geralmente me desanima.", value: 2 },
      { label: "C", text: "Começo imediatamente com uma pequena ação para quebrar a inércia.", value: 3 },
    ],
    trinity: "execution",
  },
  // BLOCO 2 - Resiliência
  {
    text: "Pense em um novo hábito que você tentou criar. Qual foi o resultado?",
    options: [
      { label: "A", text: "Começo com muita animação, mas a motivação inicial some e eu paro.", value: 1 },
      { label: "B", text: "Tento ser consistente, mas se eu falho um dia, sinto culpa e desisto.", value: 2 },
      { label: "C", text: "Se falho um dia, volto ao plano no dia seguinte. Foco na consistência.", value: 3 },
    ],
    trinity: "resilience",
  },
  {
    text: "Como você reage quando enfrenta um obstáculo inesperado ou uma crítica?",
    options: [
      { label: "A", text: "Reajo por impulso à frustração e ansiedade, o que consome minha energia.", value: 1 },
      { label: "B", text: "Tento ser racional, mas acabo remoendo o problema por dias.", value: 2 },
      { label: "C", text: "Pauso para entender minhas emoções e escolho a melhor resposta.", value: 3 },
    ],
    trinity: "resilience",
  },
  {
    text: "Olhando para a sua última semana, como você descreveria o uso do seu tempo?",
    options: [
      { label: "A", text: "Minha semana é reativa e sinto que meu tempo é controlado pelos outros.", value: 1 },
      { label: "B", text: "Estou sempre ocupado(a), mas não tenho certeza se estou progredindo.", value: 2 },
      { label: "C", text: "Planejo minha semana com antecedência e protejo o tempo para minhas prioridades.", value: 3 },
    ],
    trinity: "resilience",
  },
  // BLOCO 3 - Significado
  {
    text: "Ao tomar uma decisão importante, qual é o seu principal guia?",
    options: [
      { label: "A", text: "Tomo decisões baseado no que os outros vão pensar ou esperar de mim.", value: 1 },
      { label: "B", text: "Tomo decisões focado(a) na lógica e na segurança, ignorando a paixão.", value: 2 },
      { label: "C", text: "Tomo decisões alinhadas com meus valores e com quem eu quero ser.", value: 3 },
    ],
    trinity: "meaning",
  },
  {
    text: "Qual destas frases melhor descreve sua motivação no trabalho?",
    options: [
      { label: "A", text: "Trabalho para cumprir obrigações, mas sinto falta de um significado maior.", value: 1 },
      { label: "B", text: "Gosto de bater metas, mas sinto um certo vazio depois de cada conquista.", value: 2 },
      { label: "C", text: 'Sinto que minhas ações diárias estão conectadas a um "porquê" maior.', value: 3 },
    ],
    trinity: "meaning",
  },
  {
    text: "Como você enxerga seu impacto no mundo ao seu redor?",
    options: [
      { label: "A", text: 'Estou muito focado(a) em "sobreviver" para pensar no meu impacto.', value: 1 },
      { label: "B", text: "Quero ajudar, mas vejo isso como algo para o futuro, não para agora.", value: 2 },
      { label: "C", text: "Busco ativamente usar meus talentos para contribuir com os outros no dia a dia.", value: 3 },
    ],
    trinity: "meaning",
  },
];

const transitions = [
  {
    title: "Ótimo! Primeira parte concluída.",
    subtitle: "Você já avaliou como começa sua jornada. Agora, vamos ver como você a sustenta.",
  },
  {
    title: "Excelente! Estamos quase no fim.",
    subtitle: "Você sabe como agir e como persistir. Mas a pergunta final é: na direção certa?",
  },
];

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ execution: 0, resilience: 0, meaning: 0 });

  const handleStart = () => {
    setQuizState("question");
  };

  const handleAnswer = (value: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const trinity = currentQuestion.trinity;

    setScores((prev) => ({
      ...prev,
      [trinity]: prev[trinity] + value,
    }));

    if (currentQuestionIndex === 2 || currentQuestionIndex === 5) {
      setQuizState("transition");
    } else if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // 2. Quando a última pergunta é respondida, vamos para a transição final
      setQuizState("final-transition");
    }
  };

  const handleTransitionComplete = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setQuizState("question");
  };

  // 3. Nova função para ser chamada após o carregamento final
  const handleShowResults = () => {
    setQuizState("results");
  };

  const getWeakestTrinity = (): "execution" | "resilience" | "meaning" => {
    const entries = Object.entries(scores) as [keyof typeof scores, number][];
    const sorted = entries.sort((a, b) => a[1] - b[1]);
    return sorted[0][0];
  };

  const getTransitionIndex = () => {
    if (currentQuestionIndex === 2) return 0;
    if (currentQuestionIndex === 5) return 1;
    return 0;
  };

  if (quizState === "start") {
    return <QuizStart onStart={handleStart} />;
  }

  if (quizState === "transition") {
    const transition = transitions[getTransitionIndex()];
    return (
      <TransitionScreen
        title={transition.title}
        subtitle={transition.subtitle}
        onContinue={handleTransitionComplete}
      />
    );
  }

  // 4. Lógica para renderizar a tela de carregamento final
  if (quizState === "final-transition") {
    return (
      <TransitionScreen
        title="Calculando seu resultado..."
        subtitle="Estamos analisando suas respostas para revelar seu maior desafio."
        onContinue={handleShowResults}
      />
    );
  }

  if (quizState === "results") {
    return <QuizResults weakestTrinity={getWeakestTrinity()} />;
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <QuizQuestion
      question={currentQuestion.text}
      options={currentQuestion.options}
      onAnswer={handleAnswer}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={questions.length}
    />
  );
};

export default Index;