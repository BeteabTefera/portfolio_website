'use client'
import {House, Moon, Sun} from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '../app/providers/theme-provider'

export function Nav() {
    const {theme, toggleTheme} = useTheme()

    return(
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Link
                            href = "/"
                            className="dark:text-white"
                        >
                            <House/>
                        </Link>
                    </div>
                    <div>
                        <Link
                            href = "/experiences"
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium"
                        >
                            Experience
                        </Link>
                    </div>
                    <div>
                        <Link
                            href = "/projects"
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium"
                        >
                            Projects
                        </Link>
                    </div>
                    <div>
                        <Link
                            href = "/contact"
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className=" p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={20}/> : <Sun size={20}/>}
                    </button>
                </div>
            </div>
        </nav>
    )
}