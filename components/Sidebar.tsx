'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles,
  Home,
  Wand2,
  Book,
  GitBranch,
  Briefcase,
  Star,
  Scale,
  Newspaper
} from 'lucide-react';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'AI Tools', href: '/tools', icon: Wand2 },
  { name: 'Prompts Library', href: '/prompts', icon: Book },
  { name: 'Workflows', href: '/workflows', icon: GitBranch },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Reviews', href: '/reviews', icon: Star },
  { name: 'Comparisons', href: '/comparisons', icon: Scale },
  { name: 'AI News', href: '/news', icon: Newspaper },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside id="sidebar-navigation" className="w-64 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto shadow-sm z-50">
      <div className="p-6">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <Sparkles className="text-white w-4 h-4" />
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900">LayerAI</span>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all',
                  isActive
                    ? 'bg-purple-50 text-purple-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                <item.icon className={clsx('w-5 h-5', isActive ? 'text-purple-700' : 'text-gray-500')} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
