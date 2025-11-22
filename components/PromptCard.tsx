'use client';

import { Heart } from 'lucide-react';

interface PromptCardProps {
    title: string;
    description: string;
    authorName: string;
    authorImage: string;
    category: string;
    likes: number;
}

export default function PromptCard({
    title,
    description,
    authorName,
    authorImage,
    category,
    likes,
}: PromptCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{title}</h4>
                    <p className="text-gray-600 text-sm">{description}</p>
                </div>
                <div className="flex items-center gap-1 text-red-500">
                    <Heart className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{likes}</span>
                </div>
            </div>
            <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={authorImage} alt={authorName} className="w-8 h-8 rounded-full" />
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{authorName}</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">{category}</span>
            </div>
        </div>
    );
}
