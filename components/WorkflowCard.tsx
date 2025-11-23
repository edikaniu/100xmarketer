'use client';

import { GitBranch, Star, ArrowRight, LucideIcon } from 'lucide-react';

interface WorkflowCardProps {
    title: string;
    tools: string | string[];
    category: string;
    rating: number;
    icon?: LucideIcon;
    colorFrom: string;
    colorTo: string;
}

export default function WorkflowCard({
    title,
    tools,
    category,
    rating,
    icon: Icon = GitBranch,
    colorFrom,
    colorTo,
}: WorkflowCardProps) {
    const toolsList = Array.isArray(tools) ? tools : tools.split(' + ');

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 md:p-6 hover:shadow-lg hover:border-purple-200 transition-all cursor-pointer group h-full flex flex-col">
            <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${colorFrom} ${colorTo} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs sm:text-sm font-bold text-gray-700">{rating}</span>
                </div>
            </div>

            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-purple-600 transition-colors">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
                {toolsList.map((tool) => (
                    <span key={tool} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                        {tool}
                    </span>
                ))}
            </div>

            <div className="mt-auto flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">{category}</span>
                <ArrowRight className="w-4 h-4 text-purple-600 transform group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    );
}
