import React from 'react'
import './Footer.css'

const Footer = () => {
    const footerLinks = {
        Product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
        Company: ['About', 'Blog', 'Careers', 'Press'],
        Resources: ['Help Center', 'Community', 'Templates', 'Developers'],
        Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="8" fill="url(#footer-logo-gradient)" />
                                <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32">
                                        <stop stopColor="#3b82f6" />
                                        <stop offset="1" stopColor="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>IssueTracker</span>
                        </a>
                        <p>The modern issue tracking platform built for teams that ship fast.</p>

                        <div className="social-links">
                            <a href="#" aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="footer-column">
                                <h4>{category}</h4>
                                <ul>
                                    {links.map(link => (
                                        <li key={link}>
                                            <a href={`#${link.toLowerCase()}`}>{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 IssueTracker. All rights reserved.</p>
                    <div className="footer-status">
                        <span className="status-dot"></span>
                        <span>All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer