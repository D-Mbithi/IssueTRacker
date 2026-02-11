import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            {/* Background effects */}
            <div className="hero-bg">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Now with AI-powered insights</span>
                    </div>

                    <h1 className="hero-title">
                        Track Issues.<br />
                        <span className="gradient-text">Ship Faster.</span>
                    </h1>

                    <p className="hero-subtitle">
                        The modern issue tracking platform built for agile teams.
                        Streamline your workflow, collaborate seamlessly, and deliver
                        exceptional products on time.
                    </p>

                    <div className="hero-cta">
                        <button className="btn-primary btn-lg">
                            Start Free Trial
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="btn-secondary btn-lg">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8.5 7.5l4 2.5-4 2.5V7.5z" fill="currentColor" />
                            </svg>
                            Watch Demo
                        </button>
                    </div>

                    <div className="hero-social-proof">
                        <div className="avatar-stack">
                            <img src="https://i.pravatar.cc/40?img=1" alt="" />
                            <img src="https://i.pravatar.cc/40?img=2" alt="" />
                            <img src="https://i.pravatar.cc/40?img=3" alt="" />
                            <img src="https://i.pravatar.cc/40?img=4" alt="" />
                            <span className="avatar-count">+2.5k</span>
                        </div>
                        <div className="proof-text">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FBBF24">
                                        <path d="M8 1l2.245 4.548 5.02.73-3.632 3.54.857 5.002L8 12.39l-4.49 2.43.857-5.002-3.632-3.54 5.02-.73L8 1z" />
                                    </svg>
                                ))}
                            </div>
                            <span>Trusted by 2,500+ teams worldwide</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="dashboard-card">
                        <div className="card-header">
                            <div className="window-controls">
                                <span className="control red"></span>
                                <span className="control yellow"></span>
                                <span className="control green"></span>
                            </div>
                            <div className="card-tabs">
                                <span className="tab active">Issues</span>
                                <span className="tab">Board</span>
                                <span className="tab">Analytics</span>
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-value">24</span>
                                    <span className="stat-label">Open</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">12</span>
                                    <span className="stat-label">In Progress</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">156</span>
                                    <span className="stat-label">Closed</span>
                                </div>
                            </div>

                            <div className="issues-list">
                                <div className="issue-row">
                                    <div className="issue-priority critical"></div>
                                    <div className="issue-info">
                                        <span className="issue-id">#1234</span>
                                        <span className="issue-title">Fix authentication flow</span>
                                    </div>
                                    <div className="issue-meta">
                                        <img src="https://i.pravatar.cc/24?img=5" alt="" className="assignee" />
                                        <span className="issue-tag">Bug</span>
                                    </div>
                                </div>
                                <div className="issue-row">
                                    <div className="issue-priority high"></div>
                                    <div className="issue-info">
                                        <span className="issue-id">#1235</span>
                                        <span className="issue-title">Implement dark mode</span>
                                    </div>
                                    <div className="issue-meta">
                                        <img src="https://i.pravatar.cc/24?img=6" alt="" className="assignee" />
                                        <span className="issue-tag feature">Feature</span>
                                    </div>
                                </div>
                                <div className="issue-row">
                                    <div className="issue-priority medium"></div>
                                    <div className="issue-info">
                                        <span className="issue-id">#1236</span>
                                        <span className="issue-title">Update API documentation</span>
                                    </div>
                                    <div className="issue-meta">
                                        <img src="https://i.pravatar.cc/24?img=7" alt="" className="assignee" />
                                        <span className="issue-tag docs">Docs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating elements */}
                    <div className="float-card float-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="2" />
                        </svg>
                        <span>Issue resolved!</span>
                    </div>
                    <div className="float-card float-2">
                        <div className="notification-pulse"></div>
                        <span>3 new updates</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero