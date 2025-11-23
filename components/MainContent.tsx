'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import { clsx } from 'clsx';

export default function MainContent({ children }: { children: React.ReactNode }) {
    const { isCollapsed } = useSidebar();

    return (
        <main
            className={clsx(
                'flex-1 overflow-y-auto transition-all duration-300',
                // Mobile: no margin (sidebar is overlay)
                'ml-0',
                // Desktop: margin based on sidebar state
                isCollapsed ? 'md:ml-20' : 'md:ml-64'
            )}
        >
            {children}
        </main>
    );
}
