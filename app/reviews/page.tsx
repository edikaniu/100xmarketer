import Header from '@/components/Header';
import { prisma } from '@/lib/db';
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
import Link from 'next/link';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

interface ReviewsPageProps {
    searchParams: {
        tool?: string;
    };
}

export default async function ReviewsPage({ searchParams }: ReviewsPageProps) {
    // Fetch all tools for the sidebar
    const tools = await prisma.tool.findMany({
        orderBy: {
            reviewsCount: 'desc'
        },
        take: 20 // Limit sidebar items
    });

    // Determine selected tool (default to first one if not specified)
    const selectedToolName = searchParams.tool || tools[0]?.name;
    const selectedTool = tools.find(t => t.name === selectedToolName) || tools[0];

    // Fetch reviews for the selected tool
    const reviews = selectedTool ? await prisma.review.findMany({
        where: {
            toolId: selectedTool.id
        },
        include: {
            user: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    }) : [];

    return (
        <>
            <Header
                title="Reviews"
                description="Discover what users think about 100+ AI tools"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Filter and Sort Section */}
                <section className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                        <div className="relative w-full sm:w-auto">
                            <select className="bg-white pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm appearance-none cursor-pointer w-full">
                                <option>All Categories</option>
                                <option>Text Generation</option>
                                <option>Image Generation</option>
                                <option>Code Generation</option>
                                <option>Video Generation</option>
                                <option>Audio</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-3 h-3 pointer-events-none" />
                        </div>
                        <div className="relative w-full sm:w-auto">
                            <select className="bg-white pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm appearance-none cursor-pointer w-full">
                                <option>All Ratings</option>
                                <option>5 Stars</option>
                                <option>4+ Stars</option>
                                <option>3+ Stars</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-3 h-3 pointer-events-none" />
                        </div>
                        <div className="relative w-full sm:w-auto">
                            <select className="bg-white pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm appearance-none cursor-pointer w-full">
                                <option>All Sources</option>
                                <option>Verified Users</option>
                                <option>Experts</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-3 h-3 pointer-events-none" />
                        </div>
                    </div>
                    <div className="relative w-full lg:w-auto">
                        <input type="text" placeholder="Search reviews..." className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full lg:w-64 text-sm transition-all" />
                        <Search className="absolute left-3.5 top-3 text-gray-400 w-4 h-4" />
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Left Column - Tools List */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex gap-4 overflow-x-auto pb-2 lg:pb-0 lg:flex-col lg:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0">
                            {tools.map((tool) => (
                                <Link
                                    key={tool.name}
                                    href={`/reviews?tool=${encodeURIComponent(tool.name)}`}
                                    className={clsx(
                                        'bg-white p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-center gap-4 hover:shadow-md min-w-[280px] lg:min-w-0 flex-shrink-0',
                                        selectedTool?.name === tool.name
                                            ? 'border-purple-500 ring-1 ring-purple-500 shadow-md'
                                            : 'border-gray-200 hover:border-purple-200'
                                    )}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={tool.image} alt={tool.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">{tool.name}</h4>
                                        <div className="flex items-center gap-1 mb-2 sm:mb-3">
                                            <div className="flex text-yellow-400 text-xs">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} className={clsx("w-3 h-3", star <= Math.round(tool.rating) ? "fill-current" : "text-gray-300")} />
                                                ))}
                                            </div>
                                            <span className="font-bold text-gray-900 text-sm ml-1">{tool.rating}</span>
                                        </div>
                                        <span className="text-purple-600 text-xs sm:text-sm font-bold hover:underline">View Reviews</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Selected Tool Reviews */}
                    <div className="lg:col-span-8">
                        {selectedTool ? (
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                                {/* Tool Header */}
                                <div className="p-6 sm:p-8 border-b border-gray-100 bg-gray-50">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                                        <div className="flex items-center gap-4 sm:gap-5">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex-shrink-0">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={selectedTool.image} alt={selectedTool.name} className="w-full h-full object-cover rounded-lg" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{selectedTool.name}</h2>
                                                <p className="text-gray-600 text-xs sm:text-sm mb-2">{selectedTool.category}</p>
                                                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <div className="flex text-yellow-400 text-xs sm:text-sm">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star key={star} className={clsx("w-3 h-3 sm:w-4 sm:h-4", star <= Math.round(selectedTool.rating) ? "fill-current" : "text-gray-300")} />
                                                            ))}
                                                        </div>
                                                        <span className="font-bold text-gray-900 ml-1 text-sm">{selectedTool.rating}</span>
                                                    </div>
                                                    <span className="text-gray-400 text-sm hidden sm:inline">|</span>
                                                    <span className="text-gray-600 text-xs sm:text-sm font-medium">{selectedTool.reviewsCount || '0'} Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="bg-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md w-full sm:w-auto text-sm sm:text-base">
                                            Write a Review
                                        </button>
                                    </div>

                                    {/* Rating Distribution (Mocked for now as we don't have aggregate stats) */}
                                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
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
                                        <div className="flex justify-between sm:justify-start gap-4 sm:gap-8 border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-8">
                                            <div className="text-center sm:px-4">
                                                <p className="text-xl sm:text-2xl font-bold text-gray-900">98%</p>
                                                <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Recommendation</p>
                                            </div>
                                            <div className="text-center sm:px-4 sm:border-l border-gray-200">
                                                <p className="text-xl sm:text-2xl font-bold text-gray-900">4.9</p>
                                                <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Ease of Use</p>
                                            </div>
                                            <div className="text-center sm:px-4 sm:border-l border-gray-200">
                                                <p className="text-xl sm:text-2xl font-bold text-gray-900">4.7</p>
                                                <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews List */}
                                <div className="p-6 sm:p-8 space-y-6">
                                    {reviews.length > 0 ? (
                                        reviews.map((review) => (
                                            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                                                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                                                    <div className="flex items-center gap-3">
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img src={review.user.image || 'https://i.pravatar.cc/150?u=default'} alt={review.user.name || 'User'} className="w-10 h-10 rounded-full" />
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 text-sm">{review.user.name || 'Anonymous'}</h4>
                                                            <p className="text-xs text-gray-500">{review.user.role || 'User'}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 ml-12 sm:ml-0">
                                                        <div className="flex text-yellow-400 text-xs">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star key={star} className={clsx("w-3 h-3", star <= review.rating ? "fill-current" : "text-gray-300")} />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-gray-400">{new Date(review.createdAt).toLocaleDateString()}</span>
                                                    </div>
                                                </div>
                                                {/* Title is not in schema, using comment start or generic */}
                                                <h5 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Review</h5>
                                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{review.comment}</p>

                                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
                                                    {review.pros.length > 0 && (
                                                        <div>
                                                            <p className="text-xs font-bold text-green-600 mb-1 flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> Pros</p>
                                                            <ul className="text-xs text-gray-600 space-y-0.5">
                                                                {review.pros.map((pro, i) => <li key={i} className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> {pro}</li>)}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {review.cons.length > 0 && (
                                                        <div>
                                                            <p className="text-xs font-bold text-red-600 mb-1 flex items-center gap-1"><ThumbsDown className="w-3 h-3" /> Cons</p>
                                                            <ul className="text-xs text-gray-600 space-y-0.5">
                                                                {review.cons.map((con, i) => <li key={i} className="flex items-center gap-1"><X className="w-3 h-3 text-red-500" /> {con}</li>)}
                                                            </ul>
                                                        </div>
                                                    )}
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
                                        ))
                                    ) : (
                                        <div className="text-center py-12 text-gray-500">
                                            <p>No reviews yet for this tool.</p>
                                            <button className="mt-4 text-purple-600 font-semibold hover:underline">Be the first to write a review</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-20 text-gray-500 bg-white rounded-2xl border border-gray-200">
                                <p>Select a tool to view reviews.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
