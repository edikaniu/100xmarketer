import Header from '@/components/Header';
import WorkflowCard from '@/components/WorkflowCard';
import { prisma } from '@/lib/db';
import {
    Layers,
    Megaphone,
    Mail,
    PenTool,
    Brain,
    Code
} from 'lucide-react';
import Link from 'next/link';
import { clsx } from 'clsx';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const categories = [
    { name: 'All Workflows', icon: Layers, value: '' },
    { name: 'Marketing', icon: Megaphone, value: 'Marketing' },
    { name: 'Email', icon: Mail, value: 'Email' },
    { name: 'Content', icon: PenTool, value: 'Content' },
    { name: 'Research', icon: Brain, value: 'Research' },
    { name: 'Dev', icon: Code, value: 'Dev' },
];

// Helper to map category to icon
const getCategoryIcon = (category: string) => {
    const map: Record<string, any> = {
        'Marketing': Megaphone,
        'Email': Mail,
        'Content': PenTool,
        'Research': Brain,
        'Dev': Code,
        'Support': Layers,
    };
    return map[category] || Layers;
};

interface WorkflowsPageProps {
    searchParams: {
        category?: string;
    };
}

export default async function WorkflowsPage({ searchParams }: WorkflowsPageProps) {
    const { category } = searchParams;

    // Build where clause for filtering
    const where: any = {};

    if (category) {
        where.category = category;
    }

    // Fetch workflows from database with filters
    const workflows = await prisma.workflow.findMany({
        where,
        orderBy: {
            rating: 'desc'
        }
    });

    // Transform workflows to match WorkflowCard props
    const formattedWorkflows = workflows.map(workflow => ({
        title: workflow.title,
        tools: workflow.tools,
        category: workflow.category,
        rating: workflow.rating,
        icon: getCategoryIcon(workflow.category),
        colorFrom: workflow.colorFrom || 'from-gray-500',
        colorTo: workflow.colorTo || 'to-gray-700'
    }));

    return (
        <>
            <Header
                title="Workflows"
                description="Automate your marketing tasks with multi-tool chains"
            />

            <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Filter Section */}
                <section className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={`/workflows${cat.value ? `?category=${encodeURIComponent(cat.value)}` : ''}`}
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
                </section>

                {/* Results Count */}
                {category && (
                    <div className="text-sm text-gray-600">
                        Found <span className="font-bold text-gray-900">{formattedWorkflows.length}</span> workflows in <span className="font-semibold">{category}</span>
                    </div>
                )}

                {/* Workflows Grid */}
                <section id="section-workflows-grid">
                    {formattedWorkflows.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {formattedWorkflows.map((workflow, index) => (
                                <WorkflowCard key={index} {...workflow} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-gray-500 mb-2">No workflows found</p>
                            <Link href="/workflows" className="text-purple-600 font-semibold hover:underline">
                                Clear filters
                            </Link>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}
