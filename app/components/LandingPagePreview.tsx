import type { Theme } from '../types';
import { Star, ArrowRight, Check } from 'lucide-react';

interface LandingPagePreviewProps {
  theme: Theme;
}

export default function LandingPagePreview({ theme }: LandingPagePreviewProps) {
  return (
    <div id="preview-container" className={`min-h-screen ${theme.colors.background} ${theme.colors.text}`}>
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Star className={`w-4 h-4 ${theme.colors.accent}`} />
              <span className="text-sm font-medium">New Release</span>
            </div>
            <h1 className={`text-5xl md:text-7xl ${theme.fonts.heading} mb-6 animate-slide-up`}>
              {theme.content.headline}
            </h1>
            <p className={`text-xl md:text-2xl ${theme.fonts.body} mb-10 max-w-3xl mx-auto opacity-90`}>
              {theme.content.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <button className={`bg-gradient-to-r ${theme.colors.primary} ${theme.style.buttonStyle} text-white font-semibold flex items-center gap-2`}>
                {theme.content.ctaText}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className={`${theme.style.buttonStyle} bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20`}>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl ${theme.fonts.heading} mb-4`}>
              Powerful Features
            </h2>
            <p className={`text-lg ${theme.fonts.body} opacity-80`}>
              Everything you need to succeed
            </p>
          </div>
          <div className={`grid md:grid-cols-3 gap-8 ${theme.style.layoutStyle === 'grid-layout' ? 'grid-rows-1' : ''}`}>
            {theme.content.features.map((feature, index) => (
              <div
                key={index}
                className={`${theme.style.cardStyle} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className={`text-2xl ${theme.fonts.heading} mb-3`}>
                  {feature.title}
                </h3>
                <p className={`${theme.fonts.body} opacity-80`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className={`${theme.style.cardStyle} text-center`}>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-8 h-8 fill-current ${theme.colors.accent}`} />
              ))}
            </div>
            <p className={`text-2xl ${theme.fonts.body} mb-4`}>
              "This is exactly what we needed. The results have been incredible!"
            </p>
            <p className={`${theme.fonts.body} opacity-70`}>
              — Sarah Johnson, CEO at TechCorp
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={`text-5xl md:text-6xl ${theme.fonts.heading} ${theme.colors.accent} mb-2`}>
                  {stat.value}
                </div>
                <div className={`text-lg ${theme.fonts.body} opacity-80`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl ${theme.fonts.heading} mb-4`}>
              Simple Pricing
            </h2>
            <p className={`text-lg ${theme.fonts.body} opacity-80`}>
              Choose the perfect plan for your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$29', features: ['5 Projects', 'Basic Support', '10GB Storage'] },
              { name: 'Pro', price: '$99', features: ['Unlimited Projects', 'Priority Support', '100GB Storage', 'Advanced Analytics'], popular: true },
              { name: 'Enterprise', price: '$299', features: ['Unlimited Everything', '24/7 Support', 'Custom Solutions', 'Dedicated Manager'] },
            ].map((plan, index) => (
              <div
                key={index}
                className={`${theme.style.cardStyle} relative animate-fade-in ${plan.popular ? 'scale-105 border-2 border-white/40' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${theme.colors.primary} px-4 py-1 rounded-full text-sm font-semibold`}>
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl ${theme.fonts.heading} mb-2`}>{plan.name}</h3>
                <div className={`text-5xl ${theme.fonts.heading} ${theme.colors.accent} mb-6`}>
                  {plan.price}
                  <span className="text-lg opacity-70">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className={`w-5 h-5 ${theme.colors.accent}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full bg-gradient-to-r ${theme.colors.primary} ${theme.style.buttonStyle} text-white font-semibold`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className={`text-4xl md:text-6xl ${theme.fonts.heading} mb-6`}>
            Ready to Get Started?
          </h2>
          <p className={`text-xl ${theme.fonts.body} mb-10 opacity-90`}>
            Join thousands of satisfied customers today
          </p>
          <button className={`bg-gradient-to-r ${theme.colors.secondary} ${theme.style.buttonStyle} text-white font-bold text-lg`}>
            {theme.content.ctaText}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className={`${theme.fonts.heading} text-lg mb-4`}>Product</h4>
              <ul className="space-y-2 opacity-80">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className={`${theme.fonts.heading} text-lg mb-4`}>Company</h4>
              <ul className="space-y-2 opacity-80">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className={`${theme.fonts.heading} text-lg mb-4`}>Resources</h4>
              <ul className="space-y-2 opacity-80">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className={`${theme.fonts.heading} text-lg mb-4`}>Legal</h4>
              <ul className="space-y-2 opacity-80">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="text-center opacity-60 pt-8 border-t border-white/10">
            <p>© 2024 Landing Page Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
