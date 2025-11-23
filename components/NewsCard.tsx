'use client';

import { clsx } from 'clsx';
import { ArrowUpRight } from 'lucide-react';

interface NewsCardProps {
    title: string;
    source: string;
    image: string;
    category: string;
    time: string;
    isBreaking?: boolean;
}

export default function NewsCard({
    title,
    source,
    time,
    image,
    category
}: NewsCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all group cursor-pointer flex flex-col h-full">
            <div className="relative h-40 sm:h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold text-gray-900 shadow-sm">
                        {category}
                    </span>
                </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-purple-600 font-semibold text-xs sm:text-sm">{source}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-xs sm:text-sm">{time}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {title}
                </h3>
                <div className="mt-auto flex items-center text-purple-600 font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />
                </div>
            </div>
        </div>
    );
}
