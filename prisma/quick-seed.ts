// @ts-nocheck
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    // Create Default User
    const user = await prisma.user.upsert({
        where: { email: 'demo@100xmarketer.com' },
        update: {},
        create: {
            email: 'demo@100xmarketer.com',
            name: 'Demo User',
            clerkId: 'user_demo123',
            image: 'https://i.pravatar.cc/150?u=demo',
            role: 'ADMIN'
        }
    });

    console.log('User created')

    // Seed a few tools
    await prisma.tool.createMany({
        data: [
            {
                name: 'ChatGPT',
                category: 'AI Writing',
                description: 'Advanced conversational AI for content creation and marketing campaigns.',
                image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
                rating: 4.8,
                url: 'https://chat.openai.com',
                pricing: 'Freemium',
                isVerified: true,
                reviewsCount: '1.2K',
                colorFrom: 'from-teal-600',
                colorTo: 'to-teal-800',
                authorId: user.id
            },
            {
                name: 'Midjourney',
                category: 'Image Generation',
                description: 'AI image generation for visual content creation and design projects.',
                image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800',
                rating: 4.7,
                url: 'https://midjourney.com',
                pricing: 'Paid',
                isVerified: true,
                reviewsCount: '980',
                colorFrom: 'from-purple-600',
                colorTo: 'to-purple-800',
                authorId: user.id
            }
        ]
    });

    console.log('Tools created')

    // Seed prompts
    await prisma.prompt.createMany({
        data: [
            {
                title: 'AI Waitlist Generator',
                description: 'Create an intelligent waitlist form in minutes.',
                content: 'Act as an expert marketer. Create a waitlist landing page copy for...',
                category: 'Writing',
                categoryColor: 'bg-purple-100 text-purple-700',
                authorId: user.id,
                likes: 150
            },
            {
                title: 'AI Sentence Expander',
                description: 'Take short, simple text and develop it into polished, well-structured content.',
                content: 'Expand the following sentence into a paragraph...',
                category: 'Content',
                categoryColor: 'bg-blue-100 text-blue-700',
                authorId: user.id,
                likes: 200
            }
        ]
    });

    console.log('Prompts created')

    // Seed workflows
    await prisma.workflow.createMany({
        data: [
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
            }
        ]
    });

    console.log('Workflows created')

    // Seed case studies
    await prisma.caseStudy.createMany({
        data: [
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
            }
        ]
    });

    console.log('Case studies created')

    // Seed news
    await prisma.news.createMany({
        data: [
            {
                title: 'OpenAI Releases GPT-5 with Enhanced Marketing Capabilities',
                description: 'New model shows 40% improvement in campaign optimization tasks and content generation speed.',
                image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Breaking',
                source: 'TechCrunch',
                url: 'https://techcrunch.com/gpt5-release',
                isBreaking: true
            },
            {
                title: 'AI Tool Adoption Reaches 78% Among Marketing Teams',
                description: 'Latest survey reveals significant shift in marketing automation and budget allocation for AI tools.',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'Industry',
                source: 'Marketing Week',
                url: 'https://marketingweek.com/ai-adoption',
                isBreaking: false
            }
        ]
    });

    console.log('News created')
    console.log('Seeding finished successfully!')
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
