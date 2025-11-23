'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  Sparkles,
  Home,
  Wand2,
  Book,
  GitBranch,
  Briefcase,
  Star,
  Scale,
  Newspaper,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { clsx } from 'clsx';
import { useSidebar } from '@/contexts/SidebarContext';

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
  const { isCollapsed, setIsCollapsed, isMobileMenuOpen, toggleMobileMenu } = useSidebar();

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        toggleMobileMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, toggleMobileMenu]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar-navigation"
        className={clsx(
          'bg-white border-r border-gray-200 fixed h-screen overflow-y-auto shadow-sm z-50 transition-all duration-300',
          // Mobile: overlay that slides in from left
          'md:translate-x-0',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
          // Desktop: collapsible sidebar
          'md:block',
          isCollapsed ? 'md:w-20' : 'md:w-64',
          // Mobile: full width sidebar
          'w-64'
        )}
      >
        <div className="p-6">
          {/* Header with Logo and Collapse Button */}
          <div className="flex items-center justify-between mb-8">
            <div className={clsx('flex items-center gap-2.5', isCollapsed && 'md:justify-center md:w-full')}>
              <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                <Sparkles className="text-white w-4 h-4" />
              </div>
              {!isCollapsed && (
                <span className="font-bold text-lg tracking-tight text-gray-900">100X Marketer</span>
              )}
            </div>
            {/* Desktop collapse button */}
            {!isCollapsed && (
              <button
                onClick={() => setIsCollapsed(true)}
                className="hidden md:block p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Collapse sidebar"
              >
                <ChevronLeft className="w-5 h-5 text-gray-500" />
              </button>
            )}
          </div>

          {/* Expand Button (shown when collapsed on desktop) */}
          {isCollapsed && (
            <button
              onClick={() => setIsCollapsed(false)}
              className="hidden md:flex w-full p-2 hover:bg-gray-100 rounded-lg transition-colors mb-4 items-center justify-center"
              aria-label="Expand sidebar"
            >
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          )}

          {/* Navigation */}
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    // Close mobile menu when navigating
                    if (isMobileMenuOpen) {
                      toggleMobileMenu();
                    }
                  }}
                  className={clsx(
                    'flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all',
                    isActive
                      ? 'bg-purple-50 text-purple-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50',
                    isCollapsed && 'md:justify-center'
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className={clsx('w-5 h-5 flex-shrink-0', isActive ? 'text-purple-700' : 'text-gray-500')} />
                  <span className={clsx(isCollapsed && 'md:hidden')}>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
