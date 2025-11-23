'use client';

import Header from '@/components/Header';
import ToolCard from '@/components/ToolCard';
import {
    Layers,
    PenTool,
    Image as ImageIcon,
    Video,
    Mic,
    Zap
} from 'lucide-react';

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
        isFreeTrial: false,
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
        name: 'Descript',
        category: 'Video Editing',
        description: 'AI-powered video editing and transcription for content creators.',
        image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.9,
        reviews: '1.1K',
        isFreeTrial: true,
        colorFrom: 'from-pink-600',
        colorTo: 'to-pink-800'
    },
    {
        name: 'Jasper',
        category: 'Content Marketing',
        description: 'Enterprise AI writing platform for marketing teams and agencies.',
        image: 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        reviews: '890',
        isFreeTrial: false,
        colorFrom: 'from-green-600',
        colorTo: 'to-green-800'
    },
    {
        name: 'Synthesia',
        category: 'Video Generation',
        description: 'AI video generation with avatars for marketing and training content.',
        image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.8,
        reviews: '650',
        isFreeTrial: false,
        colorFrom: 'from-indigo-600',
        colorTo: 'to-indigo-800'
    },
    {
        name: 'Runway',
        category: 'AI Creative Suite',
        description: 'Generative AI tools for video, image, and creative content production.',
        image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        reviews: '920',
        isFreeTrial: true,
        colorFrom: 'from-cyan-600',
        colorTo: 'to-cyan-800'
    },
    {
        name: 'ElevenLabs',
        category: 'Text-to-Speech',
        description: 'AI voice generation and text-to-speech for content creators and developers.',
        image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.8,
        reviews: '1.3K',
        isFreeTrial: true,
        colorFrom: 'from-amber-600',
        colorTo: 'to-amber-800'
    },
    {
        name: 'Perplexity AI',
        category: 'AI Search',
        description: 'AI-powered search engine with real-time information and citations.',
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.6,
        reviews: '1.0K',
        isFreeTrial: true,
        colorFrom: 'from-violet-600',
        colorTo: 'to-violet-800'
    },
    {
        name: 'Claude',
        category: 'AI Assistant',
        description: 'Advanced AI assistant for analysis, writing, coding, and research tasks.',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.9,
        reviews: '1.5K',
        isFreeTrial: true,
        colorFrom: 'from-orange-600',
        colorTo: 'to-orange-800'
    },
    {
        name: 'Google Gemini',
        category: 'AI Model',
        description: "Google's multimodal AI model for text, images, and code generation.",
        image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        reviews: '1.1K',
        isFreeTrial: true,
        colorFrom: 'from-red-600',
        colorTo: 'to-red-800'
    },
    {
        name: 'Notion AI',
        category: 'Productivity',
        description: 'AI-powered workspace for notes, databases, and collaborative content creation.',
        image: 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        reviews: '2.5K',
        isFreeTrial: false,
        colorFrom: 'from-slate-600',
        colorTo: 'to-slate-800'
    }
];

export default function ToolsPage() {
    return (
        <>
            <Header
                title="AI Tools Marketplace"
                description="Explore 500+ AI tools for every marketing need"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Filter Section */}
                <section id="section-filters" className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    {[
                        { name: 'All Tools', icon: Layers, active: true },
                        { name: 'Writing', icon: PenTool, active: false },
                        { name: 'Image Generation', icon: ImageIcon, active: false },
                        { name: 'Video', icon: Video, active: false },
                        { name: 'Audio', icon: Mic, active: false },
                        { name: 'Productivity', icon: Zap, active: false },
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

                {/* Tools Grid */}
                <section id="section-tools-grid">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {tools.map((tool) => (
                            <ToolCard key={tool.name} {...tool} />
                        ))}
                    </div>
                </section>

                {/* Load More */}
                <div className="flex justify-center pt-4">
                    <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all w-full sm:w-auto">Load More Tools</button>
                </div>

                {/* CTA Section */}
                <section id="section-cta-tools" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 sm:p-10 text-center shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight">Can't Find What You're Looking For?</h3>
                    <p className="text-gray-300 mb-6 sm:mb-7 text-sm sm:text-base">Request a tool or suggest an integration to our community</p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">Submit Request</button>
                </section>
            </div>
        </>
    );
}
