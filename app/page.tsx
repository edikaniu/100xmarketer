'use client';

import Header from '@/components/Header';
import ToolCard from '@/components/ToolCard';
import {
  Wand2,
  Book,
  GitBranch,
  Briefcase,
  PenTool,
  LineChart,
  Image as ImageIcon,
  Video,
  Brain,
  Code,
  ArrowRight
} from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      <Header
        title="Welcome Back, Sarah"
        description="Discover and operationalize AI tools 100× faster"
      />

      <div className="p-8 space-y-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-purple-600 to-blue-600 rounded-2xl p-10 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Your AI Marketing Command Center</h2>
          <p className="text-purple-50 mb-7 text-base">Access 500+ curated AI tools, 10K+ prompts, and real-time insights—all in one place</p>
          <div className="flex gap-4">
            <button className="bg-white text-purple-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-md cursor-pointer">Explore Tools</button>
            <button className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all cursor-pointer">View Workflows</button>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Total Tools</p>
                <p className="text-3xl font-bold text-gray-900">500+</p>
              </div>
              <Wand2 className="text-purple-600 w-8 h-8 opacity-15" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Prompts</p>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
              </div>
              <Book className="text-blue-600 w-8 h-8 opacity-15" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Workflows</p>
                <p className="text-3xl font-bold text-gray-900">250+</p>
              </div>
              <GitBranch className="text-green-600 w-8 h-8 opacity-15" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Case Studies</p>
                <p className="text-3xl font-bold text-gray-900">150+</p>
              </div>
              <Briefcase className="text-orange-600 w-8 h-8 opacity-15" />
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Featured AI Tools</h3>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors">View All →</a>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <ToolCard
              name="ChatGPT"
              category="AI Writing"
              description="Advanced conversational AI for content creation and marketing campaigns."
              image="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
              rating={4.8}
              reviews="1.2K"
              isFreeTrial={true}
              colorFrom="from-teal-600"
              colorTo="to-teal-800"
            />
            <ToolCard
              name="Midjourney"
              category="Image Generation"
              description="AI image generation for visual content creation and design projects."
              image="https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800"
              rating={4.7}
              reviews="980"
              isFreeTrial={true}
              colorFrom="from-purple-600"
              colorTo="to-purple-800"
            />
            <ToolCard
              name="Copy.ai"
              category="Copywriting"
              description="AI copywriting for marketing campaigns and content creation."
              image="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
              rating={4.6}
              reviews="750"
              isFreeTrial={true}
              colorFrom="from-blue-600"
              colorTo="to-blue-800"
            />
          </div>
        </section>

        {/* Trending Workflows */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Trending Workflows</h3>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors">View All →</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              {/* Workflow 1 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md cursor-pointer transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PenTool className="text-purple-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-0.5">Social Media Content Generator</h4>
                      <p className="text-gray-600 text-xs">ChatGPT + Canva + Buffer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600 font-medium">⭐ 4.9 (234 uses)</span>
                    <ArrowRight className="text-gray-400 w-4 h-4" />
                  </div>
                </div>
              </div>
              {/* Workflow 2 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md cursor-pointer transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LineChart className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-0.5">Email Campaign Optimizer</h4>
                      <p className="text-gray-600 text-xs">Copy.ai + Mailchimp + Analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600 font-medium">⭐ 4.8 (189 uses)</span>
                    <ArrowRight className="text-gray-400 w-4 h-4" />
                  </div>
                </div>
              </div>
              {/* Workflow 3 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md cursor-pointer transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-0.5">Visual Content Creator</h4>
                      <p className="text-gray-600 text-xs">Midjourney + Photoshop + Figma</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600 font-medium">⭐ 4.7 (156 uses)</span>
                    <ArrowRight className="text-gray-400 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {/* Workflow 4 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md cursor-pointer transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="text-orange-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-0.5">Video Production Pipeline</h4>
                      <p className="text-gray-600 text-xs">Descript + Adobe Premiere + YouTube</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600 font-medium">⭐ 4.9 (267 uses)</span>
                    <ArrowRight className="text-gray-400 w-4 h-4" />
                  </div>
                </div>
              </div>
              {/* Workflow 5 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md cursor-pointer transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="text-pink-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-0.5">AI Research Assistant</h4>
                      <p className="text-gray-600 text-xs">ChatGPT + Notion + Perplexity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600 font-medium">⭐ 4.8 (198 uses)</span>
                    <ArrowRight className="text-gray-400 w-4 h-4" />
                  </div>
                </div>
              </div>
              {/* Workflow 6 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md cursor-pointer transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-0.5">Code Documentation Generator</h4>
                      <p className="text-gray-600 text-xs">GitHub + ChatGPT + Confluence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600 font-medium">⭐ 4.6 (142 uses)</span>
                    <ArrowRight className="text-gray-400 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI News Feed */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Latest AI Marketing News</h3>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors">View All →</a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400" alt="News" className="w-full h-36 object-cover" />
              <div className="p-5">
                <p className="text-xs text-purple-600 font-bold mb-2 uppercase tracking-wide">Breaking</p>
                <h4 className="font-bold text-gray-900 mb-2 text-base leading-snug">OpenAI Releases GPT-5 with Enhanced Marketing Capabilities</h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">New model shows 40% improvement in campaign optimization tasks</p>
                <p className="text-xs text-gray-500 font-medium">2 hours ago</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" alt="News" className="w-full h-36 object-cover" />
              <div className="p-5">
                <p className="text-xs text-blue-600 font-bold mb-2 uppercase tracking-wide">Industry</p>
                <h4 className="font-bold text-gray-900 mb-2 text-base leading-snug">AI Tool Adoption Reaches 78% Among Marketing Teams</h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">Latest survey reveals significant shift in marketing automation</p>
                <p className="text-xs text-gray-500 font-medium">4 hours ago</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-10 text-center mb-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-3 tracking-tight">Ready to Transform Your Marketing?</h3>
          <p className="text-gray-300 mb-7 text-base">Join 10,000+ marketers using LayerAI to discover and operationalize AI tools</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer">Start Free Trial</button>
        </section>
      </div>
    </>
  );
}
