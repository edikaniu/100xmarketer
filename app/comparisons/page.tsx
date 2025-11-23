import Header from '@/components/Header';
import { prisma } from '@/lib/db';
import {
    Check,
    X,
    Star,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

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

interface ComparisonsPageProps {
    searchParams: {
        tool1?: string;
        tool2?: string;
        tool3?: string;
    };
}

export default async function ComparisonsPage({ searchParams }: ComparisonsPageProps) {
    // Fetch all tools for dropdowns
    const allTools = await prisma.tool.findMany({
        orderBy: { name: 'asc' }
    });

    // Determine selected tools
    // Default to first 3 tools if not specified
    const tool1Id = searchParams.tool1 || allTools[0]?.id;
    const tool2Id = searchParams.tool2 || allTools[1]?.id;
    const tool3Id = searchParams.tool3 || allTools[2]?.id;

    const selectedToolIds = [tool1Id, tool2Id, tool3Id].filter(Boolean);

    const selectedTools = await prisma.tool.findMany({
        where: {
            id: { in: selectedToolIds }
        }
    });

    // Sort selected tools to match the order of IDs (to keep column order consistent)
    const comparisonTools = selectedToolIds.map(id => selectedTools.find(t => t.id === id)).filter(Boolean);

    return (
        <>
            <Header
                title="Compare Tools"
                description="Side-by-side comparison to help you choose the right tool"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Tool Selector */}
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm mb-6 sm:mb-8">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Select Tools to Compare</h3>
                    <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 sm:mb-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-700">Tool 1</label>
                            <div className="relative">
                                <select
                                    name="tool1"
                                    defaultValue={tool1Id}
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer appearance-none"
                                >
                                    {allTools.map(tool => (
                                        <option key={tool.id} value={tool.id}>{tool.name}</option>
                                    ))}
                                </select>
                                <ArrowRight className="absolute right-3 top-3 text-gray-400 w-4 h-4 rotate-90 pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-700">Tool 2</label>
                            <div className="relative">
                                <select
                                    name="tool2"
                                    defaultValue={tool2Id}
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer appearance-none"
                                >
                                    {allTools.map(tool => (
                                        <option key={tool.id} value={tool.id}>{tool.name}</option>
                                    ))}
                                </select>
                                <ArrowRight className="absolute right-3 top-3 text-gray-400 w-4 h-4 rotate-90 pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-700">Tool 3</label>
                            <div className="relative">
                                <select
                                    name="tool3"
                                    defaultValue={tool3Id}
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer appearance-none"
                                >
                                    {allTools.map(tool => (
                                        <option key={tool.id} value={tool.id}>{tool.name}</option>
                                    ))}
                                </select>
                                <ArrowRight className="absolute right-3 top-3 text-gray-400 w-4 h-4 rotate-90 pointer-events-none" />
                            </div>
                        </div>
                        <button type="submit" className="hidden">Update</button>
                    </form>
                    <p className="text-xs text-gray-500 text-center">Press Enter to update comparison</p>
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="p-4 sm:p-6 text-left w-1/4 font-bold text-gray-500 text-xs sm:text-sm uppercase tracking-wider sticky left-0 bg-gray-50 z-10">Features</th>
                                    {comparisonTools.map((tool) => (
                                        <th key={tool?.id} className="p-4 sm:p-6 text-left w-1/4">
                                            <div className="flex flex-col items-center">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={tool?.image} alt={tool?.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover mb-3 shadow-sm" />
                                                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">{tool?.name}</h4>
                                                <div className="flex items-center gap-1 mb-3">
                                                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                                                    <span className="font-bold text-gray-900 text-sm">{tool?.rating}</span>
                                                </div>
                                                <Link href={tool?.url || '#'} target="_blank" className="w-full bg-purple-600 text-white py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-purple-700 transition-colors text-center block">
                                                    Try Free
                                                </Link>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {features.map((feature) => (
                                    <tr key={feature.key} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-gray-700 bg-gray-50/50 sticky left-0 z-10">{feature.name}</td>
                                        {comparisonTools.map((tool) => {
                                            // Extract feature value from JSON or direct field
                                            let value: any = 'N/A';
                                            if (tool) {
                                                if (feature.key === 'pricing') value = tool.pricing;
                                                // @ts-ignore
                                                else if (tool.features && tool.features[feature.key] !== undefined) {
                                                    // @ts-ignore
                                                    value = tool.features[feature.key];
                                                }
                                            }

                                            return (
                                                <td key={tool?.id} className="p-4 sm:p-6 text-center text-xs sm:text-sm text-gray-600">
                                                    {typeof value === 'boolean' ? (
                                                        value ? (
                                                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" />
                                                        ) : (
                                                            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 mx-auto" />
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
                </div>

                {/* Similar Products */}
                <div className="mt-8 sm:mt-12">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Similar Products You Might Like</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {allTools.slice(0, 4).map((tool) => (
                            <Link key={tool.id} href={`/tools/${tool.id}`} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={tool.image} alt={tool.name} className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 object-cover" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{tool.name}</h4>
                                    <p className="text-xs text-gray-500">{tool.category}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
