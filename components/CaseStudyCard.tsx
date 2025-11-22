'use client';

import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
    metric: string;
}

export default function CaseStudyCard({
    title,
    description,
    image,
    category,
    metric,
}: CaseStudyCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all group cursor-pointer">
            <div className="h-48 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {category}
                </div>
            </div>
            <div className="p-6">
                <div className="mb-4">
                    <span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded">{metric}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2 leading-snug group-hover:text-purple-600 transition-colors">{title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
                <div className="flex items-center text-purple-600 font-semibold text-sm gap-2">
                    Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    );
}
