"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navigation({ onPrevious, onNext, onToggle, isFlipped }) {
    return (
        <div className="w-full max-w-2xl mx-auto mt-4 px-4 sm:px-0">
            <div className="flex h-16 w-full bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-2xl items-center justify-between px-6 shadow-sm overflow-hidden font-bold">
                <button
                    onClick={onPrevious}
                    className="flex items-center gap-1 text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    <ChevronLeft size={20} />
                    <span>Previous</span>
                </button>

                <button
                    onClick={onToggle}
                    className="text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white transition-opacity font-bold"
                >
                    {isFlipped ? "Show Question" : "Show Answer"}
                </button>

                <button
                    onClick={onNext}
                    className="flex items-center gap-1 text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    <span>Next</span>
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
