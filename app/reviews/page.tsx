'use client';

import Header from '@/components/Header';
import {
    Star,
    ThumbsUp,
    ThumbsDown,
    Check,
    X,
    Search,
    ChevronDown,
    MoreHorizontal
} from 'lucide-react';
import { clsx } from 'clsx';
import { useState } from 'react';

const tools = [
    { name: 'ChatGPT', rating: 4.8, reviews: 1240, image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=200', active: true },
    { name: 'Midjourney', rating: 4.7, reviews: 980, image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=200', active: false },
    { name: 'Jasper', rating: 4.6, reviews: 850, image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200', active: false },
    { name: 'Copy.ai', rating: 4.5, reviews: 720, image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200', active: false },
];

const reviews = [
    {
        user: 'Sarah Jenkins',
        role: 'Content Manager',
        image: 'https://i.pravatar.cc/150?u=sarah',
        rating: 5,
        date: '2 days ago',
        title: 'Game changer for our content workflow',
        content: 'ChatGPT has completely transformed how we approach content creation. The ability to brainstorm ideas and generate outlines in seconds is invaluable.',
        pros: ['Fast generation', 'Versatile', 'Easy to use'],
        cons: ['Occasional inaccuracies', 'Requires fact-checking'],
        helpful: 24
    },
    {
        user: 'Mike Ross',
        role: 'SEO Specialist',
        image: 'https://i.pravatar.cc/150?u=mike',
        rating: 4,
        date: '1 week ago',
        title: 'Great tool but needs specific prompting',
        content: 'It is powerful, but you really need to know how to prompt it correctly to get the best results. Once you master that, it is amazing.',
        pros: ['Powerful logic', 'Good for coding'],
        cons: ['Learning curve for prompts'],
        helpful: 12
    }
];

export default function ReviewsPage() {
    const [selectedTool, setSelectedTool] = useState('ChatGPT');

    return (
        <>
            <Header
                title="Reviews"
                description="Discover what users think about 100+ AI tools"
            />

            <div className="p-8">
                {/* Filter and Sort Section */}
                <section className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select className="bg-white pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm appearance-none cursor-pointer">
                                <option>All Categories</option>
                                <option>Text Generation</option>
                                <option>Image Generation</option>
                                <option>Code Generation</option>
                                <option>Video Generation</option>
                                <option>Audio</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-3 h-3 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="bg-white pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm appearance-none cursor-pointer">
                                <option>All Ratings</option>
                                <option>5 Stars</option>
                                <option>4+ Stars</option>
                                <option>3+ Stars</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-3 h-3 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="bg-white pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm appearance-none cursor-pointer">
                                <option>All Sources</option>
                                <option>Verified Users</option>
                                <option>Experts</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-3 h-3 pointer-events-none" />
                        </div>
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="Search reviews..." className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-64 text-sm transition-all" />
                        <Search className="absolute left-3.5 top-3 text-gray-400 w-4 h-4" />
                    </div>
                </section>

                <div className="grid grid-cols-12 gap-8">
                    {/* Left Column - Tools List */}
                    <div className="col-span-4 space-y-4">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                onClick={() => setSelectedTool(tool.name)}
                                className={clsx(
                                    'bg-white p-5 rounded-xl border transition-all cursor-pointer flex items-center gap-4 hover:shadow-md',
                                    selectedTool === tool.name
                                        ? 'border-purple-500 ring-1 ring-purple-500 shadow-md'
                                        : 'border-gray-200 hover:border-purple-200'
                                )}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={tool.image} alt={tool.name} className="w-16 h-16 rounded-lg object-cover" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">{tool.name}</h4>
                                    <div className="flex items-center gap-1 mb-3">
                                        <div className="flex text-yellow-400 text-xs">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className={clsx("w-3 h-3", star <= Math.round(tool.rating) ? "fill-current" : "text-gray-300")} />
                                            ))}
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm ml-1">{tool.rating}</span>
                                    </div>
                                    <button className="text-purple-600 text-sm font-bold hover:underline">View Reviews</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Selected Tool Reviews */}
                    <div className="col-span-8">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                            {/* Tool Header */}
                            <div className="p-8 border-b border-gray-100 bg-gray-50">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-5">
                                        <div className="w-20 h-20 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=200" alt="ChatGPT" className="w-full h-full object-cover rounded-lg" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-1">ChatGPT</h2>
                                            <p className="text-gray-600 text-sm mb-2">OpenAI • AI Writing Assistant</p>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1">
                                                    <div className="flex text-yellow-400 text-sm">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <Star key={star} className={clsx("w-4 h-4", star <= 4 ? "fill-current" : "text-gray-300")} />
                                                        ))}
                                                    </div>
                                                    <span className="font-bold text-gray-900 ml-1">4.8</span>
                                                </div>
                                                <span className="text-gray-400 text-sm">|</span>
                                                <span className="text-gray-600 text-sm font-medium">1,240 Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="bg-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md">
                                        Write a Review
                                    </button>
                                </div>

                                {/* Rating Distribution */}
                                <div className="flex gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-gray-700 w-3">5</span>
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-yellow-400 w-[75%]"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-gray-700 w-3">4</span>
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-yellow-400 w-[15%]"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-gray-700 w-3">3</span>
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-yellow-400 w-[5%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-8">
                                        <div className="text-center px-4 border-l border-gray-200">
                                            <p className="text-2xl font-bold text-gray-900">98%</p>
                                            <p className="text-xs text-gray-500 font-medium">Recommendation</p>
                                        </div>
                                        <div className="text-center px-4 border-l border-gray-200">
                                            <p className="text-2xl font-bold text-gray-900">4.9</p>
                                            <p className="text-xs text-gray-500 font-medium">Ease of Use</p>
                                        </div>
                                        <div className="text-center px-4 border-l border-gray-200">
                                            <p className="text-2xl font-bold text-gray-900">4.7</p>
                                            <p className="text-xs text-gray-500 font-medium">Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Reviews List */}
                            <div className="p-8 space-y-6">
                                {reviews.map((review, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={review.image} alt={review.user} className="w-10 h-10 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">{review.user}</h4>
                                                    <p className="text-xs text-gray-500">{review.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex text-yellow-400 text-xs">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className={clsx("w-3 h-3", star <= review.rating ? "fill-current" : "text-gray-300")} />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-400">{review.date}</span>
                                            </div>
                                        </div>
                                        <h5 className="font-bold text-gray-900 mb-2">{review.title}</h5>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{review.content}</p>

                                        <div className="flex gap-6 mb-4">
                                            <div>
                                                <p className="text-xs font-bold text-green-600 mb-1 flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> Pros</p>
                                                <ul className="text-xs text-gray-600 space-y-0.5">
                                                    {review.pros.map((pro) => <li key={pro} className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> {pro}</li>)}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-red-600 mb-1 flex items-center gap-1"><ThumbsDown className="w-3 h-3" /> Cons</p>
                                                <ul className="text-xs text-gray-600 space-y-0.5">
                                                    {review.cons.map((con) => <li key={con} className="flex items-center gap-1"><X className="w-3 h-3 text-red-500" /> {con}</li>)}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors">
                                                <ThumbsUp className="w-3.5 h-3.5" />
                                                Helpful ({review.helpful})
                                            </button>
                                            <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors">
                                                <MoreHorizontal className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
