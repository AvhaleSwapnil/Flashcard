"use client";

import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import Flashcard from "@/components/Flashcard";
import Navigation from "@/components/Navigation";
import flashcardData from "@/lib/flashcardData";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const totalCards = flashcardData.length;
  const currentCard = flashcardData[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 150);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    }, 150);
  };

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-2">
        <ProgressBar current={currentIndex + 1} total={totalCards} />

        <div className="relative group">
          {/* Decorative outer border effect to match reference shadow/border */}
          <div className="absolute -inset-1 bg-gray-200 dark:bg-zinc-800 rounded-[2.2rem] opacity-50 blur-sm -z-10 group-hover:opacity-75 transition duration-500" />
          <div className="bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-[2.1rem] p-3 shadow-xl">
            {currentCard ? (
              <Flashcard
                question={currentCard.question}
                answer={currentCard.answer}
                isFlipped={isFlipped}
              />
            ) : (
              <div className="h-64 flex items-center justify-center text-zinc-500">
                Loading flashcard...
              </div>
            )}
            <Navigation
              onPrevious={handlePrevious}
              onNext={handleNext}
              onToggle={handleToggle}
              isFlipped={isFlipped}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
