'use client';

import { LucideIcon } from 'lucide-react';

interface WorkflowCardProps {
    title: string;
    tools: string;
    category: string;
    rating: number;
    icon: LucideIcon;
    colorFrom: string;
    colorTo: string;
}

export default function WorkflowCard({
    title,
    tools,
    category,
    rating,
    icon: Icon,
    colorFrom,
    colorTo,
}: WorkflowCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-purple-300 transition-all cursor-pointer group">
            <div className={`relative h-32 bg-gradient-to-br ${colorFrom} ${colorTo} flex items-center justify-center overflow-hidden`}>
                <Icon className="text-white w-10 h-10 opacity-20 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-5">
                <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
                <p className="text-gray-600 text-xs mb-3">{tools}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-medium">{category}</span>
                    <span className="text-xs text-gray-500">⭐ {rating}</span>
                </div>
            </div>
        </div>
    );
}
