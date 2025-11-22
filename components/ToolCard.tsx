'use client';

import { ExternalLink, Star } from 'lucide-react';

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
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all flex flex-col h-full">
            <div className={`relative h-40 bg-gradient-to-br ${colorFrom} ${colorTo} flex items-center justify-center overflow-hidden`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h4 className="font-bold text-gray-900 text-xl mb-1.5 tracking-tight">{name}</h4>
                <div className="flex items-center gap-2 mb-3">
                    <ExternalLink className="text-gray-400 w-3.5 h-3.5" />
                    <span className="text-gray-600 text-xs font-medium">{category}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">{description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {isFreeTrial && (
                        <span className="text-orange-600 text-xs font-bold uppercase tracking-wide">Free Trial</span>
                    )}
                    {!isFreeTrial && <span></span>}
                    <div className="flex items-center gap-2">
                        <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                        <span className="text-sm font-bold text-gray-900">{rating}</span>
                        <span className="text-xs text-gray-500">({reviews})</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
