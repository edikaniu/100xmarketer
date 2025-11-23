import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const tools = [
    {
        name: 'ChatGPT',
        category: 'AI Writing',
        description: 'Advanced conversational AI for content creation and marketing campaigns.',
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.8,
        url: 'https://chat.openai.com',
        pricing: 'Freemium',
        isVerified: true
    },
    {
        name: 'Midjourney',
        category: 'Image Generation',
        description: 'AI image generation for visual content creation and design projects.',
        image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        url: 'https://midjourney.com',
        pricing: 'Paid',
        isVerified: true
    },
    {
        name: 'Copy.ai',
        category: 'Copywriting',
        description: 'AI copywriting for marketing campaigns and content creation.',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.6,
        url: 'https://copy.ai',
        pricing: 'Freemium',
        isVerified: true
    },
    {
        name: 'Descript',
        category: 'Video Editing',
        description: 'AI-powered video editing and transcription for content creators.',
        image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.9,
        url: 'https://descript.com',
        pricing: 'Freemium',
        isVerified: true
    },
    {
        name: 'Jasper',
        category: 'Content Marketing',
        description: 'Enterprise AI writing platform for marketing teams and agencies.',
        image: 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        url: 'https://jasper.ai',
        pricing: 'Paid',
        isVerified: true
    },
    {
        name: 'Synthesia',
        category: 'Video Generation',
        description: 'AI video generation with avatars for marketing and training content.',
        image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.8,
        url: 'https://synthesia.io',
        pricing: 'Paid',
        isVerified: true
    },
    {
        name: 'Runway',
        category: 'AI Creative Suite',
        description: 'Generative AI tools for video, image, and creative content production.',
        image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        url: 'https://runwayml.com',
        pricing: 'Freemium',
        isVerified: true
    },
    {
        name: 'ElevenLabs',
        category: 'Text-to-Speech',
        description: 'AI voice generation and text-to-speech for content creators and developers.',
        image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.8,
        url: 'https://elevenlabs.io',
        pricing: 'Freemium',
        isVerified: true
    },
    {
        name: 'Perplexity AI',
        category: 'AI Search',
        description: 'AI-powered search engine with real-time information and citations.',
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.6,
        url: 'https://perplexity.ai',
        pricing: 'Freemium',
        isVerified: true
    },
    {
        name: 'Claude',
        category: 'AI Assistant',
        description: 'Advanced AI assistant for analysis, writing, coding, and research tasks.',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.9,
        url: 'https://anthropic.com/claude',
        pricing: 'Freemium',
        isVerified: true
    },
    {
        name: 'Google Gemini',
        category: 'AI Model',
        description: "Google's multimodal AI model for text, images, and code generation.",
        image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        url: 'https://gemini.google.com',
        pricing: 'Freemium',
        isVerified: true
    },
    {
        name: 'Notion AI',
        category: 'Productivity',
        description: 'AI-powered workspace for notes, databases, and collaborative content creation.',
        image: 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        url: 'https://notion.so',
        pricing: 'Paid',
        isVerified: true
    }
]

const prompts = [
    {
        title: 'AI Waitlist Generator',
        description: 'Create an intelligent waitlist form in minutes.',
        content: 'Act as an expert marketer. Create a waitlist landing page copy for...',
        category: 'Writing',
        categoryColor: 'bg-purple-100 text-purple-700',
    },
    {
        title: 'AI Sentence Expander',
        description: 'Take short, simple text and develop it into polished, well-structured content.',
        content: 'Expand the following sentence into a paragraph...',
        category: 'Content',
        categoryColor: 'bg-blue-100 text-blue-700',
    },
    {
        title: 'AI Sentence Rewriter',
        description: 'Struggling to make your sentences flow or hit the right tone?',
        content: 'Rewrite the following text to be more professional...',
        category: 'Editing',
        categoryColor: 'bg-green-100 text-green-700',
    },
    {
        title: 'AI Presentation Maker',
        description: 'Revolutionize your workflow with our AI presentation maker.',
        content: 'Create an outline for a 10-slide presentation about...',
        category: 'Design',
        categoryColor: 'bg-orange-100 text-orange-700',
    },
    {
        title: 'AI Email Composer',
        description: 'Generate professional emails tailored to any situation or context.',
        content: 'Write a cold email to a potential client about...',
        category: 'Communication',
        categoryColor: 'bg-pink-100 text-pink-700',
    },
    {
        title: 'AI Code Generator',
        description: 'Write clean, efficient code snippets for any programming language.',
        content: 'Write a Python function to...',
        category: 'Development',
        categoryColor: 'bg-indigo-100 text-indigo-700',
    }
]

const workflows = [
    {
        title: 'Social Media Content',
        description: 'Automate social media content creation and scheduling.',
        tools: ['ChatGPT', 'Canva', 'Buffer'],
        category: 'Marketing',
        rating: 4.9,
        colorFrom: 'from-purple-500',
        colorTo: 'to-purple-700'
    },
    {
        title: 'Email Campaign Optimizer',
        description: 'Optimize email campaigns for higher open rates.',
        tools: ['Copy.ai', 'Mailchimp', 'Analytics'],
        category: 'Email',
        rating: 4.8,
        colorFrom: 'from-blue-500',
        colorTo: 'to-blue-700'
    },
    {
        title: 'Visual Content Creator',
        description: 'Generate unique visuals for your brand.',
        tools: ['Midjourney', 'Photoshop', 'Figma'],
        category: 'Content',
        rating: 4.7,
        colorFrom: 'from-green-500',
        colorTo: 'to-green-700'
    },
    {
        title: 'Video Production Pipeline',
        description: 'Streamline video production from script to publish.',
        tools: ['Descript', 'Adobe Premiere', 'YouTube'],
        category: 'Content',
        rating: 4.9,
        colorFrom: 'from-orange-500',
        colorTo: 'to-orange-700'
    },
    {
        title: 'AI Research Assistant',
        description: 'Accelerate research with AI-powered tools.',
        tools: ['ChatGPT', 'Notion', 'Perplexity'],
        category: 'Research',
        rating: 4.8,
        colorFrom: 'from-pink-500',
        colorTo: 'to-pink-700'
    },
    {
        title: 'Code Documentation',
        description: 'Automate code documentation and maintenance.',
        tools: ['GitHub', 'ChatGPT', 'Confluence'],
        category: 'Dev',
        rating: 4.6,
        colorFrom: 'from-indigo-500',
        colorTo: 'to-indigo-700'
    },
    {
        title: 'SEO Strategy Builder',
        description: 'Build a comprehensive SEO strategy.',
        tools: ['Semrush', 'Jasper', 'SurferSEO'],
        category: 'Marketing',
        rating: 4.8,
        colorFrom: 'from-red-500',
        colorTo: 'to-red-700'
    },
    {
        title: 'Customer Support Bot',
        description: 'Automate customer support with AI chatbots.',
        tools: ['Intercom', 'OpenAI API', 'Zapier'],
        category: 'Support',
        rating: 4.7,
        colorFrom: 'from-teal-500',
        colorTo: 'to-teal-700'
    }
]

const newsItems = [
    {
        title: 'OpenAI Releases GPT-5 with Enhanced Marketing Capabilities',
        description: 'New model shows 40% improvement in campaign optimization tasks and content generation speed.',
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Breaking',
        source: 'TechCrunch',
        isBreaking: true
    },
    {
        title: 'AI Tool Adoption Reaches 78% Among Marketing Teams',
        description: 'Latest survey reveals significant shift in marketing automation and budget allocation for AI tools.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Industry',
        source: 'Marketing Week',
        isBreaking: false
    },
    {
        title: 'Google Announces New AI Features for Ads Platform',
        description: 'Automated asset creation and performance prediction coming to Google Ads next month.',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Industry',
        source: 'Google Blog',
        isBreaking: false
    },
    {
        title: 'DeepMind Publishes Research on Consumer Behavior Prediction',
        description: 'New algorithm predicts purchase intent with 92% accuracy using minimal data points.',
        image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Research',
        source: 'Nature Machine Intelligence',
        isBreaking: false
    },
    {
        title: 'Midjourney V7 Alpha Testing Begins',
        description: 'Select users report photorealistic text rendering and improved composition controls.',
        image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Breaking',
        source: 'The Verge',
        isBreaking: true
    },
    {
        title: 'The State of AI Marketing 2025 Report',
        description: 'Comprehensive analysis of trends, spending, and ROI across 5,000 companies.',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Industry',
        source: 'Forrester',
        isBreaking: false
    }
]

const caseStudies = [
    {
        title: 'RetailPro Boosted Sales by 280%',
        description: 'Used AI copywriting and image generation to scale product listings across 50+ channels.',
        image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'E-commerce',
        categoryColor: 'text-blue-600',
        gradientFrom: 'from-blue-500',
        gradientTo: 'to-blue-700',
        readTime: '5 min read'
    },
    {
        title: 'CreativeHub Tripled Client Output',
        description: 'Implemented AI workflows to handle 3x more client projects with same team size.',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Agency',
        categoryColor: 'text-green-600',
        gradientFrom: 'from-green-500',
        gradientTo: 'to-green-700',
        readTime: '6 min read'
    },
    {
        title: 'GrowthLabs Raised $5M Series A',
        description: 'Used AI-driven analytics and content to build compelling investor pitch deck.',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Startup',
        categoryColor: 'text-orange-600',
        gradientFrom: 'from-orange-500',
        gradientTo: 'to-orange-700',
        readTime: '4 min read'
    },
    {
        title: 'GlobalCorp Cut Costs by $2.3M',
        description: 'Automated marketing workflows reduced manual work and improved campaign efficiency.',
        image: 'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Enterprise',
        categoryColor: 'text-pink-600',
        gradientFrom: 'from-pink-500',
        gradientTo: 'to-pink-700',
        readTime: '7 min read'
    },
    {
        title: 'DataSync Improved Conversion 156%',
        description: 'AI-powered personalization increased landing page conversion rates significantly.',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'SaaS',
        categoryColor: 'text-indigo-600',
        gradientFrom: 'from-indigo-500',
        gradientTo: 'to-indigo-700',
        readTime: '5 min read'
    },
    {
        title: 'FashionHub Reduced Time-to-Market',
        description: 'AI content generation cut campaign launch time from 2 weeks to 2 days.',
        image: 'https://images.pexels.com/photos/3765681/pexels-photo-3765681.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'E-commerce',
        categoryColor: 'text-teal-600',
        gradientFrom: 'from-teal-500',
        gradientTo: 'to-teal-700',
        readTime: '6 min read'
    }
]

async function main() {
    console.log('Start seeding...')

    // Seed Tools
    for (const tool of tools) {
        await prisma.tool.create({
            data: tool,
        })
    }

    // Seed Prompts
    for (const prompt of prompts) {
        await prisma.prompt.create({
            data: prompt,
        })
    }

    // Seed Workflows
    for (const workflow of workflows) {
        await prisma.workflow.create({
            data: workflow,
        })
    }

    // Seed News
    for (const news of newsItems) {
        await prisma.news.create({
            data: news,
        })
    }

    // Seed Case Studies
    for (const study of caseStudies) {
        await prisma.caseStudy.create({
            data: study,
        })
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
