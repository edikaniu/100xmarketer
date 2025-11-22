'use client';

import { clsx } from 'clsx';

interface NewsCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
    time: string;
    isBreaking?: boolean;
}

export default function NewsCard({
    title,
    description,
    image,
    category,
    time,
    isBreaking = false,
}: NewsCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer group">
            <div className="h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
                <p className={clsx(
                    "text-xs font-bold mb-2 uppercase tracking-wide",
                    isBreaking ? "text-purple-600" : "text-blue-600"
                )}>
                    {category}
                </p>
                <h4 className="font-bold text-gray-900 mb-2 text-lg leading-snug group-hover:text-purple-700 transition-colors">{title}</h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{description}</p>
                <p className="text-xs text-gray-500 font-medium">{time}</p>
            </div>
        </div>
    );
}
