'use client';

import Header from '@/components/Header';
import CaseStudyCard from '@/components/CaseStudyCard';
import {
    Users,
    Heart,
    Globe,
    Award,
    ArrowRight
} from 'lucide-react';

const caseStudies = [
    {
        title: 'RetailPro Boosted Sales by 280%',
        description: 'Used AI copywriting and image generation to scale product listings across 50+ channels.',
        image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'E-commerce',
        categoryColor: 'text-blue-600',
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-blue-700',
        readTime: '5 min read'
    },
    {
        title: 'CreativeHub Tripled Client Output',
        description: 'Implemented AI workflows to handle 3x more client projects with same team size.',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Agency',
        categoryColor: 'text-green-600',
        gradientFrom: 'from-green-500',
        gradientTo: 'to-green-700',
        readTime: '6 min read'
    },
    {
        title: 'GrowthLabs Raised $5M Series A',
        description: 'Used AI-driven analytics and content to build compelling investor pitch deck.',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Startup',
        categoryColor: 'text-orange-600',
        gradientFrom: 'from-orange-500',
        gradientTo: 'to-orange-700',
        readTime: '4 min read'
    },
    {
        title: 'GlobalCorp Cut Costs by $2.3M',
        description: 'Automated marketing workflows reduced manual work and improved campaign efficiency.',
        image: 'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Enterprise',
        categoryColor: 'text-pink-600',
        gradientFrom: 'from-pink-500',
        gradientTo: 'to-pink-700',
        readTime: '7 min read'
    },
    {
        title: 'DataSync Improved Conversion 156%',
        description: 'AI-powered personalization increased landing page conversion rates significantly.',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'SaaS',
        categoryColor: 'text-indigo-600',
        gradientFrom: 'from-indigo-500',
        gradientTo: 'to-indigo-700',
        readTime: '5 min read'
    },
    {
        title: 'FashionHub Reduced Time-to-Market',
        description: 'AI content generation cut campaign launch time from 2 weeks to 2 days.',
        image: 'https://images.pexels.com/photos/3765681/pexels-photo-3765681.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'E-commerce',
        categoryColor: 'text-teal-600',
        gradientFrom: 'from-teal-500',
        gradientTo: 'to-teal-700',
        readTime: '6 min read'
    }
];

export default function CaseStudiesPage() {
    return (
        <>
            <Header
                title="Case Studies"
                description="Real-world success stories from AI-powered marketing teams"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Hero Section */}
                <section id="section-hero" className="bg-gradient-to-r from-purple-600 via-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-lg">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">Proven Results from Industry Leaders</h2>
                    <p className="text-purple-50 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl">Discover how top companies are using AI tools to accelerate growth, reduce costs, and scale their marketing operations</p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button className="bg-white text-purple-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-md w-full sm:w-auto text-center">Download Report</button>
                        <button className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all w-full sm:w-auto text-center">View All Studies</button>
                    </div>
                </section>

                {/* Filter Section */}
                <section id="section-filters" className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition-all whitespace-nowrap flex-shrink-0">All Industries</button>
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-gray-400 transition-all whitespace-nowrap flex-shrink-0">SaaS</button>
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-gray-400 transition-all whitespace-nowrap flex-shrink-0">E-commerce</button>
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-gray-400 transition-all whitespace-nowrap flex-shrink-0">Agency</button>
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-gray-400 transition-all whitespace-nowrap flex-shrink-0">Enterprise</button>
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-gray-400 transition-all whitespace-nowrap flex-shrink-0">Startup</button>
                </section>

                {/* Featured Case Study */}
                <section id="section-featured" className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative h-48 sm:h-64 lg:h-96 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Featured" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">FEATURED</div>
                        </div>
                        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                            <p className="text-purple-600 text-xs sm:text-sm font-bold uppercase tracking-wide mb-2">SaaS Success Story</p>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">TechFlow Increased Revenue by 340% in 6 Months</h3>
                            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">How a B2B SaaS company leveraged AI-powered content generation and marketing automation to scale their customer acquisition pipeline and reduce CAC by 45%.</p>
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 py-4 sm:py-6 border-y border-gray-200">
                                <div>
                                    <p className="text-lg sm:text-2xl font-bold text-purple-600">340%</p>
                                    <p className="text-xs sm:text-sm text-gray-600">Revenue Growth</p>
                                </div>
                                <div>
                                    <p className="text-lg sm:text-2xl font-bold text-purple-600">45%</p>
                                    <p className="text-xs sm:text-sm text-gray-600">CAC Reduction</p>
                                </div>
                                <div>
                                    <p className="text-lg sm:text-2xl font-bold text-purple-600">6mo</p>
                                    <p className="text-xs sm:text-sm text-gray-600">Time to Results</p>
                                </div>
                            </div>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full sm:w-fit">Read Full Case Study →</button>
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section id="section-case-studies-grid">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">More Success Stories</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {caseStudies.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section id="section-impact-stats" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight text-center">Impact Across Our Community</h3>
                        <p className="text-blue-100 text-center mb-8 sm:mb-12 text-base sm:text-lg">Measurable results that drive real change</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                            {/* Stat Card 1 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-blue-500/30 rounded-lg p-3">
                                        <Users className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <span className="text-blue-200 text-xs font-bold bg-blue-900/30 px-2 py-1 rounded-full">+12%</span>
                                </div>
                                <h4 className="text-3xl sm:text-4xl font-bold mb-1">50K+</h4>
                                <p className="text-blue-100 text-xs sm:text-sm font-medium">Community Members</p>
                            </div>

                            {/* Stat Card 2 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-pink-500/30 rounded-lg p-3">
                                        <Heart className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <span className="text-pink-200 text-xs font-bold bg-pink-900/30 px-2 py-1 rounded-full">+8%</span>
                                </div>
                                <h4 className="text-3xl sm:text-4xl font-bold mb-1">2.3M</h4>
                                <p className="text-blue-100 text-xs sm:text-sm font-medium">Lives Positively Impacted</p>
                            </div>

                            {/* Stat Card 3 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-green-500/30 rounded-lg p-3">
                                        <Globe className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <span className="text-green-200 text-xs font-bold bg-green-900/30 px-2 py-1 rounded-full">+15%</span>
                                </div>
                                <h4 className="text-3xl sm:text-4xl font-bold mb-1">145</h4>
                                <p className="text-blue-100 text-xs sm:text-sm font-medium">Countries Reached</p>
                            </div>

                            {/* Stat Card 4 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-yellow-500/30 rounded-lg p-3">
                                        <Award className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <span className="text-yellow-200 text-xs font-bold bg-yellow-900/30 px-2 py-1 rounded-full">+20%</span>
                                </div>
                                <h4 className="text-3xl sm:text-4xl font-bold mb-1">89</h4>
                                <p className="text-blue-100 text-xs sm:text-sm font-medium">Awards & Recognition</p>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-8 sm:mt-12 text-center">
                            <p className="text-blue-100 mb-4 sm:mb-6 font-medium">Join thousands making a difference every day</p>
                            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto">
                                Get Involved Today
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
