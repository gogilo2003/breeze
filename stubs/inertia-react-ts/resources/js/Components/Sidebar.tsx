import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <Link href={route('dashboard')}>
                                <svg className="h-8 w-auto fill-current text-gray-800 dark:text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </Link>
                        </div>
                        <nav className="mt-5 flex-1 px-2 space-y-1">
                            <Link href={route('dashboard')} className="text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                Dashboard
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" onClick={close}></div>
                    <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-gray-800 pt-5 pb-4">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button onClick={close} className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Close sidebar</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-shrink-0 items-center px-4">
                            <Link href={route('dashboard')} onClick={close}>
                                <svg className="h-8 w-auto fill-current text-gray-800 dark:text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </Link>
                        </div>
                        <div className="mt-5 h-0 flex-1 overflow-y-auto">
                            <nav className="space-y-1 px-2">
                                <Link href={route('dashboard')} onClick={close} className="text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    Dashboard
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="w-14 flex-shrink-0"></div>
                </div>
            )}
        </>
    );
}
