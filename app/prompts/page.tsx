'use client';

import Header from '@/components/Header';
import PromptCard from '@/components/PromptCard';
import {
    PenTool,
    Mail,
    Hash,
    Code,
    Image as ImageIcon,
    Search,
    Filter
} from 'lucide-react';
import { clsx } from 'clsx';
import { useState } from 'react';

const categories = [
    { name: 'All Prompts', icon: PenTool, active: true },
    { name: 'Email Marketing', icon: Mail, active: false },
    { name: 'Social Media', icon: Hash, active: false },
    { name: 'Coding', icon: Code, active: false },
    { name: 'Image Gen', icon: ImageIcon, active: false },
];

const prompts = [
    {
        title: 'AI Waitlist Generator',
        description: 'Create an intelligent waitlist form in minutes.',
        authorName: 'Alex Chen',
        authorImage: 'https://i.pravatar.cc/40?u=alex',
        category: 'Writing',
        likes: 234
    },
    {
        title: 'SEO Blog Post Outline',
        description: 'Generate comprehensive SEO-optimized blog outlines.',
        authorName: 'Sarah Miller',
        authorImage: 'https://i.pravatar.cc/40?u=sarah',
        category: 'Marketing',
        likes: 892
    },
    {
        title: 'Midjourney Photorealism',
        description: 'Advanced prompt for photorealistic portraits.',
        authorName: 'David Park',
        authorImage: 'https://i.pravatar.cc/40?u=david',
        category: 'Image Gen',
        likes: 1543
    },
    {
        title: 'Cold Email Sequence',
        description: 'High-converting cold email templates for SaaS.',
        authorName: 'Emma Wilson',
        authorImage: 'https://i.pravatar.cc/40?u=emma',
        category: 'Sales',
        likes: 567
    },
    {
        title: 'Python Script Debugger',
        description: 'Find and fix bugs in Python code instantly.',
        authorName: 'James Lee',
        authorImage: 'https://i.pravatar.cc/40?u=james',
        category: 'Coding',
        likes: 345
    },
    {
        title: 'Instagram Caption Creator',
        description: 'Engaging captions with hashtags for any niche.',
        authorName: 'Lisa Wang',
        authorImage: 'https://i.pravatar.cc/40?u=lisa',
        category: 'Social Media',
        likes: 789
    }
];

export default function PromptsPage() {
    const [activeCategory, setActiveCategory] = useState('All Prompts');

    return (
        <>
            <Header
                title="Prompt Library"
                description="10,000+ optimized prompts for every marketing task"
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

                {/* Prompts Grid */}
                <div className="grid grid-cols-3 gap-6 mb-12">
                    {prompts.map((prompt, index) => (
                        <PromptCard key={index} {...prompt} />
                    ))}
                </div>

                {/* CTA */}
                <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 text-center text-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-3">Unlock the Full Library</h3>
                    <p className="text-purple-100 mb-8 max-w-2xl mx-auto">Get access to 10,000+ premium prompts, daily updates, and community contributions.</p>
                    <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all shadow-lg">Get Premium Access</button>
                </section>
            </div>
        </>
    );
}
