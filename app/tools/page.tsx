'use client';

import Header from '@/components/Header';
import ToolCard from '@/components/ToolCard';
import {
    LayoutGrid,
    PenTool,
    Image as ImageIcon,
    Video,
    BarChart,
    Bot,
    Search,
    Filter
} from 'lucide-react';
import { clsx } from 'clsx';
import { useState } from 'react';

const categories = [
    { name: 'All Tools', icon: LayoutGrid, active: true },
    { name: 'Copywriting', icon: PenTool, active: false },
    { name: 'Image Gen', icon: ImageIcon, active: false },
    { name: 'Video', icon: Video, active: false },
    { name: 'Marketing', icon: BarChart, active: false },
    { name: 'Chatbots', icon: Bot, active: false },
];

const tools = [
    {
        name: 'ChatGPT',
        category: 'AI Writing',
        description: 'Advanced conversational AI for content creation and marketing campaigns.',
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.8,
        reviews: '1.2K',
        isFreeTrial: true,
        colorFrom: 'from-teal-600',
        colorTo: 'to-teal-800'
    },
    {
        name: 'Midjourney',
        category: 'Image Generation',
        description: 'AI image generation for visual content creation and design projects.',
        image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        reviews: '980',
        isFreeTrial: true,
        colorFrom: 'from-purple-600',
        colorTo: 'to-purple-800'
    },
    {
        name: 'Copy.ai',
        category: 'Copywriting',
        description: 'AI copywriting for marketing campaigns and content creation.',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.6,
        reviews: '750',
        isFreeTrial: true,
        colorFrom: 'from-blue-600',
        colorTo: 'to-blue-800'
    },
    {
        name: 'Jasper',
        category: 'Content Strategy',
        description: 'Enterprise-grade AI content platform for marketing teams.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        reviews: '2.1K',
        isFreeTrial: true,
        colorFrom: 'from-orange-500',
        colorTo: 'to-orange-700'
    },
    {
        name: 'Synthesia',
        category: 'Video Creation',
        description: 'Create professional AI videos from text in minutes.',
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.8,
        reviews: '560',
        isFreeTrial: false,
        colorFrom: 'from-green-600',
        colorTo: 'to-green-800'
    },
    {
        name: 'Canva Magic',
        category: 'Design',
        description: 'AI-powered design tools for social media and marketing assets.',
        image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.9,
        reviews: '5K+',
        isFreeTrial: true,
        colorFrom: 'from-pink-500',
        colorTo: 'to-pink-700'
    }
];

export default function ToolsPage() {
    const [activeCategory, setActiveCategory] = useState('All Tools');

    return (
        <>
            <Header
                title="AI Tools Marketplace"
                description="Discover the best AI tools for your marketing stack"
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
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all">
                            <span>Sort by: Popular</span>
                        </button>
                    </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-3 gap-6">
                    {tools.map((tool) => (
                        <ToolCard key={tool.name} {...tool} />
                    ))}
                </div>
            </div>
        </>
    );
}
