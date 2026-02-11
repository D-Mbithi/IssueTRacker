import React, { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-brand">
                    <div className="logo-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
                            <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
                                    <stop stopColor="#3b82f6" />
                                    <stop offset="1" stopColor="#8b5cf6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="brand-text">IssueTracker</span>
                </a>

                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                    </ul>

                    <div className="nav-actions">
                        <button className="btn-ghost">Sign In</button>
                        <button className="btn-primary">
                            Get Started
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation