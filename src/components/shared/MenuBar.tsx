// src/components/shared/MenuBar.tsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { useThemeStore } from '@/store/themeStore'
import ThemeSelector from './ThemeSelector'

const MenuBar: React.FC = () => {
    const location = useLocation()
    //   const { specialty /*, mode */ } = useThemeStore()

    return (
        <nav className="bg-primary text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link
                        to="/"
                        className={`px-3 py-2 rounded-md ${
                            location.pathname === '/' ? 'bg-primary-deep' : ''
                        }`}
                    >
                        Home
                    </Link>
                </div>

                <ThemeSelector />
            </div>
        </nav>
    )
}

export default MenuBar
