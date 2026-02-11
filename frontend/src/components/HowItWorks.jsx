import React, { useState, useEffect } from 'react'
import './Navigation.css'
import './HowItWorks.css'

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

    const steps = [
        {
            number: '01',
            title: 'Create Your Workspace',
            description: 'Sign up in under 60 seconds. No credit card required. Get a dedicated workspace for your team instantly.',
            visual: '🏢'
        },
        {
            number: '02',
            title: 'Add Your Team',
            description: 'Invite team members via email or link. Set roles and permissions to match your workflow.',
            visual: '👥'
        },
        {
            number: '03',
            title: 'Track & Collaborate',
            description: 'Create issues, assign tasks, set priorities. Everything syncs in real-time across all devices.',
            visual: '🚀'
        },
        {
            number: '04',
            title: 'Measure & Improve',
            description: 'Use analytics to identify bottlenecks, track velocity, and continuously improve your process.',
            visual: '📊'
        }
    ]

    return (
        <>
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

            <section id="how-it-works" className="how-it-works">
                <div className="how-it-works-container">
                    <div className="section-header">
                        <span className="section-tag">How It Works</span>
                        <h2>Get started in <span className="gradient-text">minutes, not hours</span></h2>
                        <p>Simple setup process designed for busy teams.</p>
                    </div>

                    <div className="timeline">
                        <div className="timeline-line"></div>
                        {steps.map((step, index) => (
                            <div key={step.number} className="timeline-item">
                                <div className="timeline-marker">
                                    <span className="step-number">{step.number}</span>
                                </div>
                                <div className="timeline-content">
                                    <div className="step-visual">{step.visual}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navigation