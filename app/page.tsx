'use client';

import Header from '@/components/Header';
import ToolCard from '@/components/ToolCard';
import WorkflowCard from '@/components/WorkflowCard';
import NewsCard from '@/components/NewsCard';
import {
  Wand2,
  Book,
  GitBranch,
  Trophy,
  ArrowRight,
  Sparkles,
  Zap,
  Newspaper,
  PenTool,
  LineChart,
  Image as ImageIcon,
  Video,
  Brain,
  Code
} from 'lucide-react';

// Dummy data
const featuredTools = [
  {
    name: "ChatGPT",
    category: "AI Writing",
    description: "Advanced conversational AI for content creation and marketing campaigns.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    reviews: "1.2K",
    isFreeTrial: true,
    colorFrom: "from-teal-600",
    colorTo: "to-teal-800",
  },
  {
    name: "Midjourney",
    category: "Image Generation",
    description: "AI image generation for visual content creation and design projects.",
    image: "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    reviews: "980",
    isFreeTrial: true,
    colorFrom: "from-purple-600",
    colorTo: "to-purple-800",
  },
  {
    name: "Copy.ai",
    category: "Copywriting",
    description: "AI copywriting for marketing campaigns and content creation.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    reviews: "750",
    isFreeTrial: true,
    colorFrom: "from-blue-600",
    colorTo: "to-blue-800",
  },
];

const recentWorkflows = [
  {
    title: "Social Media Content Generator",
    tools: ["ChatGPT", "Canva", "Buffer"],
    category: "Content",
    rating: 4.9,
    colorFrom: "from-purple-500",
    colorTo: "to-indigo-600"
  },
  {
    title: "Email Campaign Optimizer",
    tools: ["Copy.ai", "Mailchimp", "Analytics"],
    category: "Email",
    rating: 4.8,
    colorFrom: "from-blue-500",
    colorTo: "to-cyan-600"
  },
  {
    title: "Visual Content Creator",
    tools: ["Midjourney", "Photoshop", "Figma"],
    category: "Design",
    rating: 4.7,
    colorFrom: "from-green-500",
    colorTo: "to-emerald-600"
  },
];

const latestNews = [
  {
    title: "OpenAI Releases GPT-5 with Enhanced Marketing Capabilities",
    source: "TechCrunch",
    time: "2 hours ago",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Breaking"
  },
  {
    title: "AI Tool Adoption Reaches 78% Among Marketing Teams",
    source: "Marketing Week",
    time: "4 hours ago",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Industry"
  },
];

export default function Home() {
  return (
    <>
      <Header
        title="Dashboard"
        description="Welcome back, Alex! Here's what's happening today."
      />

      <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
        {/* Hero Section */}
        <section id="section-hero" className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span>New Feature: AI Workflow Builder</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">Supercharge Your Marketing with AI</h2>
            <p className="text-purple-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Discover the latest AI tools, prompts, and workflows to 10x your productivity and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all shadow-md flex items-center justify-center gap-2">
                Explore Tools <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-purple-700/50 hover:bg-purple-700/70 text-white px-6 py-3 rounded-lg font-bold backdrop-blur-sm transition-all border border-white/20 flex items-center justify-center">
                View Tutorials
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mask-gradient"></div>
        </section>

        {/* Quick Stats */}
        <section id="section-stats" className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            { label: 'Saved Tools', value: '12', icon: Wand2, color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Active Workflows', value: '5', icon: GitBranch, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Prompt Library', value: '48', icon: Book, color: 'text-pink-600', bg: 'bg-pink-50' },
            { label: 'Community Rank', value: 'Top 5%', icon: Trophy, color: 'text-yellow-600', bg: 'bg-yellow-50' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`${stat.bg} p-2 sm:p-3 rounded-lg`}>
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Featured Tools */}
        <section id="section-featured-tools">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                Trending AI Tools
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Most popular tools this week</p>
            </div>
            <button className="text-purple-600 text-xs sm:text-sm font-semibold hover:text-purple-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Recent Workflows */}
        <section id="section-workflows">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                Recent Workflows
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Automate your marketing tasks</p>
            </div>
            <button className="text-purple-600 text-xs sm:text-sm font-semibold hover:text-purple-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {recentWorkflows.map((workflow) => (
              <WorkflowCard key={workflow.title} {...workflow} />
            ))}
          </div>
        </section>

        {/* Latest News */}
        <section id="section-news">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                Latest AI News
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Stay updated with the industry</p>
            </div>
            <button className="text-purple-600 text-xs sm:text-sm font-semibold hover:text-purple-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.title} {...news} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
