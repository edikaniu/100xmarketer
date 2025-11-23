'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import { Menu, X } from 'lucide-react';

export default function MobileMenuButton() {
    const { isMobileMenuOpen, toggleMobileMenu } = useSidebar();

    return (
        <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
        >
            {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
            ) : (
                <Menu className="w-6 h-6 text-gray-700" />
            )}
        </button>
    );
}
