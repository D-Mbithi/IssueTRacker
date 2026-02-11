import React from 'react'
import './CTA.css'

const CTA = () => {
    return (
        <section className="cta">
            <div className="cta-bg">
                <div className="cta-gradient"></div>
            </div>

            <div className="cta-container">
                <div className="cta-content">
                    <h2>Ready to transform your workflow?</h2>
                    <p>Join thousands of teams shipping better products with IssueTracker.</p>

                    <div className="cta-actions">
                        <button className="btn-primary btn-lg">
                            Start Free Trial
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="btn-outline btn-lg">Talk to Sales</button>
                    </div>

                    <div className="cta-features">
                        <div className="cta-feature">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>14-day free trial</span>
                        </div>
                        <div className="cta-feature">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>No credit card required</span>
                        </div>
                        <div className="cta-feature">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA