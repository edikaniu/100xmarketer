'use client';

import Header from '@/components/Header';
import {
    Check,
    X,
    Star,
    ArrowRight
} from 'lucide-react';

const features = [
    { name: 'Pricing', key: 'pricing' },
    { name: 'AI Model', key: 'model' },
    { name: 'Content Types', key: 'content' },
    { name: 'API Access', key: 'api' },
    { name: 'Team Collab', key: 'collab' },
    { name: 'Custom Training', key: 'training' },
    { name: 'Speed', key: 'speed' },
    { name: 'Free Trial', key: 'trial' },
];

const tools = [
    {
        name: 'ChatGPT',
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=200',
        rating: 4.8,
        pricing: '$20/mo',
        model: 'GPT-4',
        content: 'Text, Code',
        api: true,
        collab: true,
        training: false,
        speed: 'Fast',
        trial: 'Free Tier'
    },
    {
        name: 'Jasper',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
        rating: 4.7,
        pricing: '$49/mo',
        model: 'Proprietary',
        content: 'Marketing Copy',
        api: true,
        collab: true,
        training: true,
        speed: 'Medium',
        trial: '7 Days'
    },
    {
        name: 'Copy.ai',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200',
        rating: 4.6,
        pricing: '$36/mo',
        model: 'GPT-3.5/4',
        content: 'Short Form',
        api: false,
        collab: true,
        training: false,
        speed: 'Fast',
        trial: 'Free Tier'
    }
];

export default function ComparisonsPage() {
    return (
        <>
            <Header
                title="Compare Tools"
                description="Side-by-side comparison to help you choose the right tool"
            />

            <div className="p-8">
                {/* Tool Selector */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
                    <h3 className="font-bold text-gray-900 mb-4">Select Tools to Compare</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-700">Tool 1</label>
                            <div className="relative">
                                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer appearance-none">
                                    <option value="chatgpt">ChatGPT</option>
                                    <option value="midjourney">Midjourney</option>
                                    <option value="copyai">Copy.ai</option>
                                    <option value="claude">Claude</option>
                                    <option value="gemini">Gemini</option>
                                </select>
                                <ArrowRight className="absolute right-3 top-3 text-gray-400 w-4 h-4 rotate-90 pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-700">Tool 2</label>
                            <div className="relative">
                                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer appearance-none" defaultValue="midjourney">
                                    <option value="chatgpt">ChatGPT</option>
                                    <option value="midjourney">Midjourney</option>
                                    <option value="copyai">Copy.ai</option>
                                    <option value="claude">Claude</option>
                                    <option value="gemini">Gemini</option>
                                </select>
                                <ArrowRight className="absolute right-3 top-3 text-gray-400 w-4 h-4 rotate-90 pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-700">Tool 3</label>
                            <div className="relative">
                                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer appearance-none" defaultValue="copyai">
                                    <option value="chatgpt">ChatGPT</option>
                                    <option value="midjourney">Midjourney</option>
                                    <option value="copyai">Copy.ai</option>
                                    <option value="claude">Claude</option>
                                    <option value="gemini">Gemini</option>
                                </select>
                                <ArrowRight className="absolute right-3 top-3 text-gray-400 w-4 h-4 rotate-90 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-6 text-left w-1/4 font-bold text-gray-500 text-sm uppercase tracking-wider">Features</th>
                                {tools.map((tool) => (
                                    <th key={tool.name} className="p-6 text-left w-1/4">
                                        <div className="flex flex-col items-center">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={tool.image} alt={tool.name} className="w-16 h-16 rounded-xl object-cover mb-3 shadow-sm" />
                                            <h4 className="font-bold text-gray-900 text-lg mb-1">{tool.name}</h4>
                                            <div className="flex items-center gap-1 mb-3">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span className="font-bold text-gray-900">{tool.rating}</span>
                                            </div>
                                            <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                                                Try Free
                                            </button>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {features.map((feature) => (
                                <tr key={feature.key} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 text-sm font-bold text-gray-700 bg-gray-50/50">{feature.name}</td>
                                    {tools.map((tool) => {
                                        // @ts-expect-error - dynamic access
                                        const value = tool[feature.key];
                                        return (
                                            <td key={tool.name} className="p-6 text-center text-sm text-gray-600">
                                                {typeof value === 'boolean' ? (
                                                    value ? (
                                                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                    ) : (
                                                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                                                    )
                                                ) : (
                                                    <span className="font-medium">{value}</span>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Similar Products */}
                <div className="mt-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Similar Products You Might Like</h3>
                    <div className="grid grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Writesonic</h4>
                                    <p className="text-xs text-gray-500">AI Writer</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
