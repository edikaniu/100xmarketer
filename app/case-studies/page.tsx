'use client';

import Header from '@/components/Header';
import CaseStudyCard from '@/components/CaseStudyCard';
import {
    Building2,
    ShoppingCart,
    Laptop,
    HeartPulse,
    ArrowRight,
    Filter
} from 'lucide-react';
import { clsx } from 'clsx';
import { useState } from 'react';

const categories = [
    { name: 'All Industries', icon: Building2, active: true },
    { name: 'E-commerce', icon: ShoppingCart, active: false },
    { name: 'SaaS', icon: Laptop, active: false },
    { name: 'Healthcare', icon: HeartPulse, active: false },
];

const caseStudies = [
    {
        title: 'FashionBrand Scales Content Production by 10x',
        description: 'Using Midjourney and ChatGPT to automate product descriptions and social media visuals.',
        image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'E-commerce',
        metric: '+450% Engagement'
    },
    {
        title: 'HealthTech Startup Automates Patient Support',
        description: 'Implementing a custom AI chatbot to handle 80% of level-1 support queries.',
        image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Healthcare',
        metric: '80% Auto-Resolution'
    },
    {
        title: 'FinTech App Personalizes User Onboarding',
        description: 'Leveraging predictive AI to tailor the onboarding experience for every user.',
        image: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'FinTech',
        metric: '+25% Retention'
    }
];

export default function CaseStudiesPage() {
    const [activeCategory, setActiveCategory] = useState('All Industries');

    return (
        <>
            <Header
                title="Case Studies"
                description="Real-world examples of AI marketing success"
            />

            <div className="p-8 space-y-12">
                {/* Filters */}
                <div className="flex items-center justify-between">
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

                {/* Featured Case Study */}
                <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="grid grid-cols-2">
                        <div className="relative h-96 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Featured" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">FEATURED</div>
                        </div>
                        <div className="p-10 flex flex-col justify-center">
                            <p className="text-purple-600 text-sm font-bold uppercase tracking-wide mb-2">SaaS Success Story</p>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">TechFlow Increased Revenue by 340% in 6 Months</h3>
                            <p className="text-gray-600 text-base mb-6 leading-relaxed">How a B2B SaaS company leveraged AI-powered content generation and marketing automation to scale their customer acquisition pipeline and reduce CAC by 45%.</p>
                            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-100">
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">340%</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Revenue Growth</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">45%</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">CAC Reduction</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">2 Mo</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Time to Results</p>
                                </div>
                            </div>
                            <button className="w-fit bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center gap-2">
                                Read Full Story <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-3 gap-6">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={index} {...study} />
                    ))}
                </div>

                {/* Impact Stats */}
                <section className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-12 text-white text-center">
                    <h3 className="text-2xl font-bold mb-10">Impact Across Our Community</h3>
                    <div className="grid grid-cols-4 gap-8">
                        <div>
                            <p className="text-4xl font-bold mb-2 text-purple-300">$50M+</p>
                            <p className="text-sm text-purple-100 opacity-80">Revenue Generated</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2 text-blue-300">1.2M</p>
                            <p className="text-sm text-purple-100 opacity-80">Hours Saved</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2 text-green-300">500k+</p>
                            <p className="text-sm text-purple-100 opacity-80">Content Pieces</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2 text-orange-300">10k+</p>
                            <p className="text-sm text-purple-100 opacity-80">Active Marketers</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
