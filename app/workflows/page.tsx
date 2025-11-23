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
    Code
} from 'lucide-react';


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
    return (
        <>
            <Header
                title="Workflows"
                description="Automate your marketing tasks with multi-tool chains"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Filter Section */}
                <section id="section-filters" className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    {[
                        { name: 'All Workflows', icon: Layers, active: true },
                        { name: 'Marketing', icon: Megaphone, active: false },
                        { name: 'Email', icon: Mail, active: false },
                        { name: 'Content', icon: PenTool, active: false },
                        { name: 'Analytics', icon: PieChart, active: false },
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

                {/* Workflows Grid */}
                <section id="section-workflows-grid">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {workflows.map((workflow) => (
                            <WorkflowCard key={workflow.title} {...workflow} />
                        ))}
                    </div>
                </section>

                {/* Load More */}
                <div className="flex justify-center pt-4">
                    <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all w-full sm:w-auto">Load More Workflows</button>
                </div>

                {/* CTA Section */}
                <section id="section-cta-workflows" className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-6 sm:p-10 text-center shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight">Build Your Own Workflow</h3>
                    <p className="text-blue-200 mb-6 sm:mb-7 text-sm sm:text-base">Connect your favorite AI tools to create powerful automations</p>
                    <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-all w-full sm:w-auto">Start Building</button>
                </section>
            </div>
        </>
    );
}
