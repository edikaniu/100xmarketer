'use client';

import { Star } from 'lucide-react';

interface ToolCardProps {
    name: string;
    category: string;
    description: string;
    image: string;
    rating: number;
    reviews: string;
    isFreeTrial?: boolean;
    colorFrom?: string;
    colorTo?: string;
}

export default function ToolCard({
    name,
    category,
    description,
    image,
    rating,
    reviews,
    isFreeTrial = false,
    colorFrom = 'from-gray-100',
    colorTo = 'to-gray-200',
}: ToolCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all group cursor-pointer">
            {/* Image with gradient overlay */}
            <div className={`relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br ${colorFrom} ${colorTo}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={name} className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 md:p-6">
                {/* Category */}
                <div className="flex items-center gap-1.5 text-gray-600 text-xs sm:text-sm mb-2">
                    <span>{category}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-purple-600 transition-colors truncate">{name}</h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2">{description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900 text-xs sm:text-sm">{rating}</span>
                        <span className="text-gray-500 text-xs">({reviews})</span>
                    </div>

                    {/* Pricing */}
                    <span className={`text-xs sm:text-sm font-semibold ${isFreeTrial ? 'text-green-600' : 'text-orange-600'}`}>
                        {isFreeTrial ? 'Free Trial' : 'Paid'}
                    </span>
                </div>
            </div>
        </div>
    );
}
