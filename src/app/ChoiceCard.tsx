import Image from "next/image";
import { type AnswerOption, type CoffeeGroup } from "./quizData";

export default function ChoiceCard({
  answer,
  idx,
  handleAnswer,
}: {
  answer: AnswerOption;
  idx: number;
  handleAnswer: (group: CoffeeGroup) => void;
}) {
  return (
    <button
      onClick={() => handleAnswer(answer.group)}
      className="flex h-40 w-80 flex-row justify-start rounded-lg border border-gray-200 bg-white shadow-sm transition motion-translate-x-in-[5%] motion-duration-300 motion-ease-in-quad hover:bg-gray-50 hover:shadow-md hover:motion-translate-x-out-[5%] hover:motion-ease-in-out focus:bg-gray-50 focus:shadow-md focus:motion-translate-x-out-[5%] focus:motion-ease-in-quad"
    >
      <Image
        src={`/images/${answer.image}`}
        alt={answer.label}
        width="160"
        height="80"
      />
      <p className="flex h-full flex-col justify-center p-2">
        <span>{answer.label}</span>
      </p>
      <span className="absolute right-2 top-2 inline-block rounded border border-gray-300 px-2 py-0 text-sm opacity-50">
        {idx + 1}
      </span>
    </button>
  );
}
