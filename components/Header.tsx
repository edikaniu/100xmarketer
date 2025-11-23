import { Search, Bell, User } from 'lucide-react';
import MobileMenuButton from './MobileMenuButton';

interface HeaderProps {
    title: string;
    description: string;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
            <div className="p-4 md:p-6">
                <div className="flex items-center justify-between gap-4">
                    {/* Left: Mobile Menu + Title/Description */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <MobileMenuButton />
                        <div className="min-w-0">
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight truncate">{title}</h1>
                            <p className="text-xs md:text-sm text-gray-600 mt-0.5 truncate">{description}</p>
                        </div>
                    </div>

                    {/* Right: Search + Actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Search - hidden on mobile */}
                        <div className="hidden sm:flex items-center bg-gray-50 rounded-lg px-3 py-2 w-64">
                            <Search className="w-4 h-4 text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* Notification */}
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Notifications">
                            <Bell className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Profile */}
                        <button className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-1.5 md:p-2 transition-colors">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
