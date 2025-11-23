import Header from '@/components/Header';
import CaseStudyCard from '@/components/CaseStudyCard';
import { prisma } from '@/lib/db';
import Link from 'next/link';
import { clsx } from 'clsx';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const categories = [
    { name: 'All Industries', value: '' },
    { name: 'SaaS', value: 'SaaS' },
    { name: 'E-commerce', value: 'E-commerce' },
    { name: 'Agency', value: 'Agency' },
    { name: 'Enterprise', value: 'Enterprise' },
    { name: 'Startup', value: 'Startup' },
];

interface CaseStudiesPageProps {
    searchParams: {
        category?: string;
    };
}

export default async function CaseStudiesPage({ searchParams }: CaseStudiesPageProps) {
    const { category } = searchParams;

    // Build where clause for filtering
    const where: any = {};

    if (category) {
        where.category = category;
    }

    // Fetch case studies from database with filters
    const caseStudies = await prisma.caseStudy.findMany({
        where,
        orderBy: {
            createdAt: 'desc'
        }
    });

    // Transform case studies to match CaseStudyCard props
    const formattedCaseStudies = caseStudies.map(study => ({
        title: study.title,
        description: study.description,
        image: study.image,
        category: study.category,
        categoryColor: study.categoryColor || 'text-gray-600',
        gradientFrom: study.gradientFrom || 'from-gray-500',
        gradientTo: study.gradientTo || 'to-gray-700',
        readTime: study.readTime || '5 min read',
        company: study.company || undefined,
        metric: study.metric || undefined,
    }));

    // Get featured case study (first one)
    const featuredStudy = formattedCaseStudies[0];
    const otherStudies = formattedCaseStudies.slice(1);

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
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={`/case-studies${cat.value ? `?category=${encodeURIComponent(cat.value)}` : ''}`}
                            className={clsx(
                                'px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0',
                                (category === cat.value || (!category && !cat.value))
                                    ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                            )}
                        >
                            {cat.name}
                        </Link>
                    ))}
                </section>

                {/* Results Count */}
                {category && (
                    <div className="text-sm text-gray-600">
                        Found <span className="font-bold text-gray-900">{formattedCaseStudies.length}</span> case studies in <span className="font-semibold">{category}</span>
                    </div>
                )}

                {/* Featured Case Study */}
                {featuredStudy && !category && (
                    <section id="section-featured">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Featured Case Study</h3>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative h-64 md:h-auto">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={featuredStudy.image} alt={featuredStudy.title} className="w-full h-full object-cover" />
                                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${featuredStudy.gradientFrom} ${featuredStudy.gradientTo} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                                        Featured
                                    </div>
                                </div>
                                <div className="p-6 sm:p-8 flex flex-col justify-center">
                                    <span className={`${featuredStudy.categoryColor} text-xs sm:text-sm font-bold mb-2`}>{featuredStudy.category}</span>
                                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{featuredStudy.title}</h4>
                                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{featuredStudy.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500 text-xs sm:text-sm">{featuredStudy.readTime}</span>
                                        <button className="text-purple-600 font-semibold hover:text-purple-700 text-sm">Read Full Story →</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Case Studies Grid */}
                <section id="section-case-studies-grid">
                    {(category ? formattedCaseStudies : otherStudies).length > 0 ? (
                        <>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                                {category ? `${category} Case Studies` : 'More Success Stories'}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {(category ? formattedCaseStudies : otherStudies).map((study, index) => (
                                    <CaseStudyCard key={index} {...study} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-gray-500 mb-2">No case studies found</p>
                            <Link href="/case-studies" className="text-purple-600 font-semibold hover:underline">
                                Clear filters
                            </Link>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}
