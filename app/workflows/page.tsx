'use client';

import Header from '@/components/Header';
import WorkflowCard from '@/components/WorkflowCard';
import {
    Layers,
    Megaphone,
    Mail,
    PenTool,
    PieChart,
    LineChart,
    Image as ImageIcon,
    Video,
    Brain,
    Code,
    Filter
} from 'lucide-react';
import { clsx } from 'clsx';
import { useState } from 'react';

const categories = [
    { name: 'All Workflows', icon: Layers, active: true },
    { name: 'Marketing', icon: Megaphone, active: false },
    { name: 'Email', icon: Mail, active: false },
    { name: 'Content', icon: PenTool, active: false },
    { name: 'Analytics', icon: PieChart, active: false },
];

const workflows = [
    {
        title: 'Social Media Content',
        tools: 'ChatGPT + Canva + Buffer',
        category: 'Marketing',
        rating: 4.9,
        icon: PenTool,
        colorFrom: 'from-purple-500',
        colorTo: 'to-purple-700'
    },
    {
        title: 'Email Campaign Optimizer',
        tools: 'Copy.ai + Mailchimp + Analytics',
        category: 'Email',
        rating: 4.8,
        icon: LineChart,
        colorFrom: 'from-blue-500',
        colorTo: 'to-blue-700'
    },
    {
        title: 'Visual Content Creator',
        tools: 'Midjourney + Photoshop + Figma',
        category: 'Content',
        rating: 4.7,
        icon: ImageIcon,
        colorFrom: 'from-green-500',
        colorTo: 'to-green-700'
    },
    {
        title: 'Video Production Pipeline',
        tools: 'Descript + Adobe Premiere + YouTube',
        category: 'Content',
        rating: 4.9,
        icon: Video,
        colorFrom: 'from-orange-500',
        colorTo: 'to-orange-700'
    },
    {
        title: 'AI Research Assistant',
        tools: 'ChatGPT + Notion + Perplexity',
        category: 'Research',
        rating: 4.8,
        icon: Brain,
        colorFrom: 'from-pink-500',
        colorTo: 'to-pink-700'
    },
    {
        title: 'Code Documentation',
        tools: 'GitHub + ChatGPT + Confluence',
        category: 'Dev',
        rating: 4.6,
        icon: Code,
        colorFrom: 'from-indigo-500',
        colorTo: 'to-indigo-700'
    },
    {
        title: 'SEO Strategy Builder',
        tools: 'Semrush + Jasper + SurferSEO',
        category: 'Marketing',
        rating: 4.8,
        icon: Megaphone,
        colorFrom: 'from-red-500',
        colorTo: 'to-red-700'
    },
    {
        title: 'Customer Support Bot',
        tools: 'Intercom + OpenAI API + Zapier',
        category: 'Support',
        rating: 4.7,
        icon: Layers,
        colorFrom: 'from-teal-500',
        colorTo: 'to-teal-700'
    }
];

export default function WorkflowsPage() {
    const [activeCategory, setActiveCategory] = useState('All Workflows');

    return (
        <>
            <Header
                title="Workflows"
                description="Automate your marketing stack with proven AI workflows"
            />

            <div className="p-8">
                {/* Filters */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                className={clsx(
                                    'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap',
                                    activeCategory === cat.name
                                        ? 'bg-gray-900 text-white shadow-md'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                )}
                            >
                                <cat.icon className="w-4 h-4" />
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all">
                            <Filter className="w-4 h-4" />
                            <span>Filters</span>
                        </button>
                    </div>
                </div>

                {/* Workflows Grid */}
                <div className="grid grid-cols-4 gap-6">
                    {workflows.map((workflow, index) => (
                        <WorkflowCard key={index} {...workflow} />
                    ))}
                </div>
            </div>
        </>
    );
}
