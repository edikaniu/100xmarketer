import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { prisma } from '@/lib/db';
import {
    Newspaper,
    Zap,
    TrendingUp,
    FlaskConical,
    Filter
} from 'lucide-react';
import { clsx } from 'clsx';
import Link from 'next/link';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const categories = [
    { name: 'All News', icon: Newspaper },
    { name: 'Breaking', icon: Zap },
    { name: 'Industry', icon: TrendingUp },
    { name: 'Research', icon: FlaskConical },
];

function getRelativeTime(date: Date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return date.toLocaleDateString();
}

interface NewsPageProps {
    searchParams: {
        category?: string;
    };
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
    const activeCategory = searchParams.category || 'All News';

    // Build where clause based on category
    const where = activeCategory !== 'All News' ? {
        category: activeCategory
    } : {};

    // Fetch news from database
    const newsItems = await prisma.news.findMany({
        where,
        orderBy: {
            publishedAt: 'desc'
        }
    });

    // Transform news to match NewsCard props
    const formattedNews = newsItems.map(item => ({
        title: item.title,
        description: item.description,
        image: item.image,
        category: item.category,
        source: item.source,
        time: getRelativeTime(item.publishedAt),
        isBreaking: item.isBreaking
    }));

    return (
        <>
            <Header
                title="AI News Hub"
                description="Stay ahead with the latest updates in AI marketing"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Filters */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                    <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={`/news?category=${encodeURIComponent(cat.name)}`}
                                className={clsx(
                                    'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-shrink-0',
                                    activeCategory === cat.name
                                        ? 'bg-gray-900 text-white shadow-md'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                )}
                            >
                                <cat.icon className="w-4 h-4" />
                                <span>{cat.name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all w-full sm:w-auto">
                            <Filter className="w-4 h-4" />
                            <span>Filters</span>
                        </button>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {formattedNews.map((news, index) => (
                        <NewsCard key={index} {...news} />
                    ))}
                </div>
            </div>
        </>
    );
}
