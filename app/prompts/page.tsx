'use client';

import Header from '@/components/Header';
import PromptCard from '@/components/PromptCard';
import {
    Layers,
    PenTool,
    Megaphone,
    Code,
    Palette,
    Briefcase,
    Sparkles,
    ArrowRight
} from 'lucide-react';

const prompts = [
    {
        title: 'AI Waitlist Generator',
        description: 'Create an intelligent waitlist form in minutes.',
        authorName: 'Alex Chen',
        authorImage: 'https://i.pravatar.cc/40?u=alex',
        category: 'Writing',
        categoryColor: 'bg-purple-100 text-purple-700',
        likes: 234
    },
    {
        title: 'AI Sentence Expander',
        description: 'Take short, simple text and develop it into polished, well-structured content.',
        authorName: 'Jordan Smith',
        authorImage: 'https://i.pravatar.cc/40?u=jordan',
        category: 'Content',
        categoryColor: 'bg-blue-100 text-blue-700',
        likes: 189
    },
    {
        title: 'AI Sentence Rewriter',
        description: 'Struggling to make your sentences flow or hit the right tone?',
        authorName: 'Casey Williams',
        authorImage: 'https://i.pravatar.cc/40?u=casey',
        category: 'Editing',
        categoryColor: 'bg-green-100 text-green-700',
        likes: 156
    },
    {
        title: 'AI Presentation Maker',
        description: 'Revolutionize your workflow with our AI presentation maker.',
        authorName: 'Morgan Lee',
        authorImage: 'https://i.pravatar.cc/40?u=morgan',
        category: 'Design',
        categoryColor: 'bg-orange-100 text-orange-700',
        likes: 312
    },
    {
        title: 'AI Email Composer',
        description: 'Generate professional emails tailored to any situation or context.',
        authorName: 'Taylor Brown',
        authorImage: 'https://i.pravatar.cc/40?u=taylor',
        category: 'Communication',
        categoryColor: 'bg-pink-100 text-pink-700',
        likes: 267
    },
    {
        title: 'AI Code Generator',
        description: 'Write clean, efficient code snippets for any programming language.',
        authorName: 'Alex Rivera',
        authorImage: 'https://i.pravatar.cc/40?u=alex2',
        category: 'Development',
        categoryColor: 'bg-indigo-100 text-indigo-700',
        likes: 428
    }
];

export default function PromptsPage() {
    return (
        <>
            <Header
                title="Prompt Library"
                description="10,000+ optimized prompts for marketing tasks"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Filter Section */}
                <section id="section-filters" className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    {[
                        { name: 'All Prompts', icon: Layers, active: true },
                        { name: 'Copywriting', icon: PenTool, active: false },
                        { name: 'Social Media', icon: Megaphone, active: false },
                        { name: 'SEO', icon: Code, active: false },
                        { name: 'Email', icon: Palette, active: false },
                        { name: 'Strategy', icon: Briefcase, active: false },
                    ].map((category) => (
                        <button
                            key={category.name}
                            className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0
                ${category.active
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-200 hover:bg-purple-50'
                                }
              `}
                        >
                            <category.icon className={`w-4 h-4 ${category.active ? 'text-white' : 'text-gray-500'}`} />
                            {category.name}
                        </button>
                    ))}
                </section>

                {/* Popular Prompts */}
                <section id="section-prompts-grid">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                            Popular Prompts
                        </h3>
                        <button className="text-purple-600 text-xs sm:text-sm font-semibold hover:text-purple-700 flex items-center gap-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {prompts.map((prompt) => (
                            <PromptCard key={prompt.title} {...prompt} />
                        ))}
                    </div>
                </section>

                {/* Load More */}
                <div className="flex justify-center pt-4">
                    <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all w-full sm:w-auto">Load More Prompts</button>
                </div>

                {/* CTA Section */}
                <section id="section-cta-prompts" className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-2xl p-6 sm:p-10 text-center shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight">Submit Your Own Prompt</h3>
                    <p className="text-purple-200 mb-6 sm:mb-7 text-sm sm:text-base">Share your best prompts with the community and earn rewards</p>
                    <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-all w-full sm:w-auto">Submit Prompt</button>
                </section>
            </div>
        </>
    );
}
