'use client';

import { Clock, ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
    categoryColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
    readTime: string;
    company?: string;
    metric?: string;
}

export default function CaseStudyCard({
    title,
    description,
    image,
    category,
    readTime,
    gradientFrom = 'from-purple-600',
    gradientTo = 'to-blue-600',
    company,
    metric
}: CaseStudyCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all group cursor-pointer h-full flex flex-col">
            {/* Image Section */}
            <div className={`relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold text-gray-900 shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                    {company && (
                        <>
                            <span className="font-semibold text-purple-600 text-xs sm:text-sm uppercase tracking-wide">{company}</span>
                            <span className="text-gray-300">•</span>
                        </>
                    )}
                    <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                        {readTime}
                    </div>
                </div>

                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        {metric ? (
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-0.5">Impact</p>
                                <p className="text-lg sm:text-2xl font-bold text-gray-900">{metric}</p>
                            </div>
                        ) : (
                            <span className="text-sm font-semibold text-purple-600 group-hover:underline">Read Case Study</span>
                        )}
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
