'use client';

import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import {
    Newspaper,
    Zap,
    TrendingUp,
    FlaskConical,
    Filter
} from 'lucide-react';
import { clsx } from 'clsx';
import { useState } from 'react';

const categories = [
    { name: 'All News', icon: Newspaper, active: true },
    { name: 'Breaking', icon: Zap, active: false },
    { name: 'Industry', icon: TrendingUp, active: false },
    { name: 'Research', icon: FlaskConical, active: false },
];

const newsItems = [
    {
        title: 'OpenAI Releases GPT-5 with Enhanced Marketing Capabilities',
        description: 'New model shows 40% improvement in campaign optimization tasks and content generation speed.',
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Breaking',
        source: 'TechCrunch',
        time: '2 hours ago',
        isBreaking: true
    },
    {
        title: 'AI Tool Adoption Reaches 78% Among Marketing Teams',
        description: 'Latest survey reveals significant shift in marketing automation and budget allocation for AI tools.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Industry',
        source: 'Marketing Week',
        time: '4 hours ago',
        isBreaking: false
    },
    {
        title: 'Google Announces New AI Features for Ads Platform',
        description: 'Automated asset creation and performance prediction coming to Google Ads next month.',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Industry',
        source: 'Google Blog',
        time: '6 hours ago',
        isBreaking: false
    },
    {
        title: 'DeepMind Publishes Research on Consumer Behavior Prediction',
        description: 'New algorithm predicts purchase intent with 92% accuracy using minimal data points.',
        image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Research',
        source: 'Nature Machine Intelligence',
        time: '12 hours ago',
        isBreaking: false
    },
    {
        title: 'Midjourney V7 Alpha Testing Begins',
        description: 'Select users report photorealistic text rendering and improved composition controls.',
        image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Breaking',
        source: 'The Verge',
        time: '1 day ago',
        isBreaking: true
    },
    {
        title: 'The State of AI Marketing 2025 Report',
        description: 'Comprehensive analysis of trends, spending, and ROI across 5,000 companies.',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Industry',
        source: 'Forrester',
        time: '1 day ago',
        isBreaking: false
    }
];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState('All News');

    return (
        <>
            <Header
                title="AI News Hub"
                description="Stay ahead with the latest updates in AI marketing"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Filters */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                    <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                className={clsx(
                                    'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-shrink-0',
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
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all w-full sm:w-auto">
                            <Filter className="w-4 h-4" />
                            <span>Filters</span>
                        </button>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {newsItems.map((news, index) => (
                        <NewsCard key={index} {...news} />
                    ))}
                </div>
            </div>
        </>
    );
}
