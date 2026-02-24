"use client";

import React from "react";

export default function ProgressBar({ current, total }) {
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="w-full max-w-2xl mx-auto mb-8 px-4 sm:px-0">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Flash Cards
                </h1>
            </div>

            <div className="relative h-12 w-full bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex items-center px-4 shadow-sm">
                <div
                    className="absolute left-1 top-1 bottom-1 bg-zinc-400 dark:bg-zinc-600 rounded-xl transition-all duration-500 ease-out z-0"
                    style={{ width: `calc(${percentage}% - 8px)` }}
                />
                <div className="relative flex justify-between w-full z-10 font-bold text-gray-900 dark:text-gray-100">
                    <span className="ml-24 sm:ml-28">{percentage}%</span>
                    <span>{current} of {total}</span>
                </div>
            </div>
        </div>
    );
}
