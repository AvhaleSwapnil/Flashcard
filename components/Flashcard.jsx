"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Flashcard({ question, answer, isFlipped }) {
    return (
        <div className="w-full max-w-2xl aspect-[16/10] perspective-1000 mx-auto px-4 sm:px-0 cursor-pointer">
            <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                    {!isFlipped ? (
                        <motion.div
                            key="question"
                            initial={{ rotateY: -90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: 90, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-3xl p-8 flex items-center justify-center text-center shadow-md overflow-hidden"
                        >
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
                                {question}
                            </h2>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="answer"
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 rounded-3xl p-8 flex items-center justify-center text-center shadow-md overflow-hidden"
                        >
                            <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-zinc-300 leading-relaxed">
                                {answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
