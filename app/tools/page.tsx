import Header from '@/components/Header';
import ToolCard from '@/components/ToolCard';
import ToolsSearchBar from '@/components/ToolsSearchBar';
import { prisma } from '@/lib/db';
import {
    Layers,
    PenTool,
    ImageIcon,
    Video,
    Mic,
    Zap
} from 'lucide-react';
import Link from 'next/link';
import { clsx } from 'clsx';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const categories = [
    { name: 'All Tools', icon: Layers, value: '' },
    { name: 'AI Writing', icon: PenTool, value: 'AI Writing' },
    { name: 'Image Generation', icon: ImageIcon, value: 'Image Generation' },
    { name: 'Video Generation', icon: Video, value: 'Video Generation' },
    { name: 'Text-to-Speech', icon: Mic, value: 'Text-to-Speech' },
    { name: 'Productivity', icon: Zap, value: 'Productivity' },
];

interface ToolsPageProps {
    searchParams: {
        category?: string;
        search?: string;
    };
}

export default async function ToolsPage({ searchParams }: ToolsPageProps) {
    const { category, search } = searchParams;

    // Build where clause for filtering
    const where: any = {};

    if (category) {
        where.category = category;
    }

    if (search) {
        where.OR = [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } }
        ];
    }

    // Fetch tools from database with filters
    const tools = await prisma.tool.findMany({
        where,
        orderBy: {
            createdAt: 'desc'
        }
    });

    // Transform tools to match ToolCard props
    const formattedTools = tools.map(tool => ({
        name: tool.name,
        category: tool.category,
        description: tool.description,
        image: tool.image,
        rating: tool.rating,
        reviews: tool.reviewsCount || '0',
        isFreeTrial: tool.pricing === 'Freemium',
        colorFrom: tool.colorFrom || 'from-gray-500',
        colorTo: tool.colorTo || 'to-gray-700'
    }));

    return (
        <>
            <Header
                title="AI Tools Marketplace"
                description="Explore 500+ AI tools for every marketing need"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Filter Section */}
                <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 w-full sm:w-auto">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={`/tools${cat.value ? `?category=${encodeURIComponent(cat.value)}` : ''}${search ? `${cat.value ? '&' : '?'}search=${encodeURIComponent(search)}` : ''}`}
                                className={clsx(
                                    'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0',
                                    (category === cat.value || (!category && !cat.value))
                                        ? 'bg-purple-600 text-white shadow-md'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-200 hover:bg-purple-50'
                                )}
                            >
                                <cat.icon className={clsx('w-4 h-4', (category === cat.value || (!category && !cat.value)) ? 'text-white' : 'text-gray-500')} />
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                    <ToolsSearchBar />
                </section>

                {/* Results Count */}
                {(search || category) && (
                    <div className="text-sm text-gray-600">
                        Found <span className="font-bold text-gray-900">{formattedTools.length}</span> tools
                        {search && <> matching "<span className="font-semibold">{search}</span>"</>}
                        {category && <> in <span className="font-semibold">{category}</span></>}
                    </div>
                )}

                {/* Tools Grid */}
                <section id="section-tools-grid">
                    {formattedTools.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {formattedTools.map((tool) => (
                                <ToolCard key={tool.name} {...tool} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-gray-500 mb-2">No tools found</p>
                            <Link href="/tools" className="text-purple-600 font-semibold hover:underline">
                                Clear filters
                            </Link>
                        </div>
                    )}
                </section>

                {/* Load More - Only show if there are results and no filters */}
                {formattedTools.length > 0 && !search && !category && (
                    <div className="flex justify-center pt-4">
                        <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all w-full sm:w-auto">
                            Load More Tools
                        </button>
                    </div>
                )}

                {/* CTA Section */}
                <section id="section-cta-tools" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 sm:p-10 text-center shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight">Can't Find What You're Looking For?</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">Submit your favorite AI tool and help other marketers discover great resources.</p>
                    <button className="bg-white text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-md text-sm sm:text-base">
                        Submit a Tool
                    </button>
                </section>
            </div>
        </>
    );
}
