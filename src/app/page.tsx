"use client";

import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import ChoiceCard from "./ChoiceCard";
import {
  type CoffeeGroup,
  type QuizQuestion,
  quizQuestions,
  resultMapping,
} from "./quizData";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => (
  <div className="mx-auto max-w-2xl rounded-xl bg-white/95 p-8 text-center font-sans backdrop-blur motion-scale-in-[0] motion-translate-x-in-[200%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-duration-[0.90s] motion-duration-[1s]/opacity motion-ease-bounce">
    <div className="mb-6">
      <h1 className="mb-2 text-3xl font-bold">Coffee Personality Quiz</h1>
      <p className="text-balance text-gray-700">
        Calling all coffee lovers! Take our totally unscientific, but undeniably
        fun quiz to discover your true coffee personality!
      </p>
    </div>
    <button
      onClick={onStart}
      className="rounded-lg bg-rich-brown px-6 py-2 text-white shadow transition hover:bg-light-brown"
    >
      Start Quiz
      <span className="pl-2 text-sm opacity-60">⏎</span>
    </button>
  </div>
);

interface QuizScreenProps {
  question: QuizQuestion;
  onAnswer: (group: CoffeeGroup) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, onAnswer }) => (
  <div className="mx-auto max-w-3xl rounded-xl bg-white/95 p-8 text-center font-sans backdrop-blur">
    <div className="mb-6">
      <h1 className="mb-2 text-3xl font-bold">Coffee Personality Quiz</h1>
      <p className="text-balance text-gray-700">
        Calling all coffee lovers! Take our totally unscientific, but undeniably
        fun quiz to discover your true coffee personality!
      </p>
    </div>
    <div>
      <h2 className="mb-3 text-xl font-semibold">{question.text}</h2>
      <div className="mt-4 flex flex-wrap justify-center gap-8" id="choices">
        {question.answers.map((answer, idx) => (
          <ChoiceCard
            key={uuid()}
            idx={idx}
            answer={answer}
            handleAnswer={onAnswer}
          />
        ))}
      </div>
    </div>
  </div>
);

interface ResultsScreenProps {
  title: string;
  description: string;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  title,
  description,
  onRestart,
}) => (
  <div className="mx-auto max-w-2xl rounded-xl bg-white/95 p-8 text-center font-sans backdrop-blur">
    <h1 className="loading-text mb-4 text-3xl font-bold motion-scale-loop-[1.1] motion-duration-[1000ms] motion-ease-in-out">
      Brewing your results… ☕️
    </h1>
    <div className="results motion-preset-confetti hidden motion-duration-[2s]">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="mb-6 text-balance text-lg text-gray-700">{description}</p>
      <button
        type="button"
        onClick={onRestart}
        className="rounded-lg bg-rich-brown px-6 py-2 text-white shadow transition hover:bg-light-brown"
      >
        Restart Quiz
        <span className="pl-2 text-sm opacity-60">⌘R</span>
      </button>
    </div>
  </div>
);

const CoffeeQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(-1); // Start at -1 to show start screen
  const [answers, setAnswers] = useState<CoffeeGroup[]>([]);

  const handleAnswer = (group: CoffeeGroup) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = group;
    setAnswers(newAnswers);

    (document.activeElement as HTMLElement)?.blur();

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentQuestionIndex(quizQuestions.length);
    }
  };

  const isQuizFinished = currentQuestionIndex >= quizQuestions.length;

  useEffect(() => {
    const handleStartQuizOnEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setCurrentQuestionIndex(0);
      }
    };

    const handleQuizPageKeyPress = (e: KeyboardEvent) => {
      let button: HTMLButtonElement | null = null;
      const answersContainer = document.querySelector("#choices");
      const buttons = answersContainer
        ? Array.from(answersContainer.querySelectorAll("button"))
        : [];
      for (let i = 1; i <= 6; i++) {
        if (e.key === i.toString()) {
          e.preventDefault();
          button = buttons[i - 1] ?? null;
          button?.focus();
          setTimeout(() => button?.click(), 500);
          break;
        }
      }

      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        e.preventDefault();
        const answersContainer = document.querySelector("#choices");
        const buttons = answersContainer
          ? Array.from(answersContainer.querySelectorAll("button"))
          : [];
        const activeElement = document.activeElement;
        let currentIndex = buttons.findIndex((btn) => btn === activeElement);
        if (currentIndex === -1) currentIndex = 0;
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          currentIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          currentIndex = (currentIndex + 1) % buttons.length;
        }
        button = buttons[currentIndex] ?? null;
        button?.focus();
      }
    };

    if (isQuizFinished) {
      setTimeout(() => {
        document.querySelector(".loading-text")?.classList.add("hidden");
        document.querySelector(".results")?.classList.remove("hidden");
      }, 1500);
    } else if (currentQuestionIndex === -1) {
      document.addEventListener("keydown", handleStartQuizOnEnter);
    } else {
      document.removeEventListener("keydown", handleStartQuizOnEnter);
      document.addEventListener("keydown", handleQuizPageKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleStartQuizOnEnter);
      document.removeEventListener("keydown", handleQuizPageKeyPress);
    };
  }, [isQuizFinished, currentQuestionIndex]);

  let resultTitle = "";
  let resultDescription = "";

  if (isQuizFinished) {
    const q1Group = answers[0];
    const subsequentGroups = answers.slice(1);

    const counts = { A: 0, B: 0, C: 0 };
    subsequentGroups.forEach((g) => {
      counts[g] = (counts[g] || 0) + 1;
    });

    const maxCount = Math.max(counts.A, counts.B, counts.C);
    const groupsWithMax = (Object.entries(counts) as [CoffeeGroup, number][])
      .filter(([_, val]) => val === maxCount)
      .map(([key]) => key);

    let majorityGroup: CoffeeGroup | "TIE" = "TIE";
    if (groupsWithMax.length === 1) {
      majorityGroup = groupsWithMax[0]!;
    }

    const finalResult = resultMapping[q1Group!][majorityGroup];
    resultTitle = finalResult.title;
    resultDescription = finalResult.description;
  }

  const handleRestart = () => {
    window.location.reload();
  };

  if (currentQuestionIndex === -1) {
    return <StartScreen onStart={() => setCurrentQuestionIndex(0)} />;
  }

  if (!isQuizFinished) {
    const currentQuestion = quizQuestions[currentQuestionIndex]!;
    return <QuizScreen question={currentQuestion} onAnswer={handleAnswer} />;
  }

  return (
    <ResultsScreen
      title={resultTitle}
      description={resultDescription}
      onRestart={handleRestart}
    />
  );
};

export default CoffeeQuiz;
