'use client';

import { Heart, Copy } from 'lucide-react';

interface PromptCardProps {
    title: string;
    description: string;
    authorName: string;
    authorImage: string;
    category: string;
    categoryColor: string;
    likes: number;
}

export default function PromptCard({
    title,
    description,
    authorName,
    authorImage,
    category,
    categoryColor,
    likes,
}: PromptCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 md:p-6 hover:shadow-lg hover:border-purple-200 transition-all cursor-pointer group h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-3 sm:mb-4">
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${categoryColor}`}>
                    {category}
                </span>
                <div className="flex items-center gap-1 text-gray-400 group-hover:text-pink-500 transition-colors">
                    <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">{likes}</span>
                </div>
            </div>

            {/* Content */}
            <div className="mb-4 sm:mb-6 flex-1">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={authorImage} alt={authorName} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-600 font-medium truncate max-w-[100px] sm:max-w-none">{authorName}</span>
                </div>
                <button className="text-purple-600 hover:text-purple-700 text-xs sm:text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    Copy <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
            </div>
        </div>
    );
}
