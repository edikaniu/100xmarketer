import Header from '@/components/Header';
import PromptCard from '@/components/PromptCard';
import PromptsSearchBar from '@/components/PromptsSearchBar';
import { prisma } from '@/lib/db';
import {
    Layers,
    PenTool,
    Megaphone,
    Code,
    Palette,
    Briefcase
} from 'lucide-react';
import Link from 'next/link';
import { clsx } from 'clsx';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const categories = [
    { name: 'All Prompts', icon: Layers, value: '' },
    { name: 'Writing', icon: PenTool, value: 'Writing' },
    { name: 'Content', icon: Megaphone, value: 'Content' },
    { name: 'Development', icon: Code, value: 'Development' },
    { name: 'Design', icon: Palette, value: 'Design' },
    { name: 'Communication', icon: Briefcase, value: 'Communication' },
];

interface PromptsPageProps {
    searchParams: {
        category?: string;
        search?: string;
    };
}

export default async function PromptsPage({ searchParams }: PromptsPageProps) {
    const { category, search } = searchParams;

    // Build where clause for filtering
    const where: any = {};

    if (category) {
        where.category = category;
    }

    if (search) {
        where.OR = [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } }
        ];
    }

    // Fetch prompts from database with filters
    const prompts = await prisma.prompt.findMany({
        where,
        include: {
            author: true
        },
        orderBy: {
            likes: 'desc'
        }
    });

    // Transform prompts to match PromptCard props
    const formattedPrompts = prompts.map(prompt => ({
        title: prompt.title,
        description: prompt.description,
        authorName: prompt.author?.name || 'Unknown Author',
        authorImage: prompt.author?.image || 'https://i.pravatar.cc/150?u=unknown',
        category: prompt.category,
        categoryColor: prompt.categoryColor || 'bg-gray-100 text-gray-700',
        likes: prompt.likes
    }));

    return (
        <>
            <Header
                title="Prompt Library"
                description="10,000+ optimized prompts for marketing tasks"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Filter Section */}
                <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 w-full sm:w-auto">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={`/prompts${cat.value ? `?category=${encodeURIComponent(cat.value)}` : ''}${search ? `${cat.value ? '&' : '?'}search=${encodeURIComponent(search)}` : ''}`}
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
                    <PromptsSearchBar />
                </section>

                {/* Results Count */}
                {(search || category) && (
                    <div className="text-sm text-gray-600">
                        Found <span className="font-bold text-gray-900">{formattedPrompts.length}</span> prompts
                        {search && <> matching "<span className="font-semibold">{search}</span>"</>}
                        {category && <> in <span className="font-semibold">{category}</span></>}
                    </div>
                )}

                {/* Prompts Grid */}
                <section id="section-prompts-grid">
                    {formattedPrompts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {formattedPrompts.map((prompt, index) => (
                                <PromptCard key={index} {...prompt} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-gray-500 mb-2">No prompts found</p>
                            <Link href="/prompts" className="text-purple-600 font-semibold hover:underline">
                                Clear filters
                            </Link>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}
