'use client';

import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useCallback } from 'react';

// Add this type definition at the top
type SearchResult = {
  section: string;
  title: string;
  content: string;
  href: string;
};

export default function DocsPage() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Search functionality
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Search through documentation content
    const results: SearchResult[] = [];
    const searchTerms = query.toLowerCase().split(' ');

    // Define searchable content
    const sections = [
      {
        section: 'Getting Started',
        title: 'Introduction',
        content: 'Learn about Dexari and how to get started with decentralized trading.',
        href: '#introduction'
      },
      {
        section: 'Getting Started',
        title: 'Account Setup',
        content: 'Set up your Dexari account and connect your wallet for trading.',
        href: '#getting-started'
      },
      {
        section: 'Features',
        title: 'Trading Interface',
        content: 'Explore Dexari\'s advanced trading features and tools.',
        href: '#features'
      },
      {
        section: 'Features',
        title: 'Portfolio Management',
        content: 'Manage your crypto portfolio with Dexari\'s comprehensive tools.',
        href: '#features'
      },
      {
        section: 'Security',
        title: 'Wallet Integration',
        content: 'Learn about secure wallet connections and transaction signing.',
        href: '#security'
      },
      {
        section: 'API',
        title: 'API Documentation',
        content: 'Integration guides and API references for developers.',
        href: '#api'
      }
    ];

    sections.forEach(section => {
      const matchesAllTerms = searchTerms.every(term => 
        section.section.toLowerCase().includes(term) ||
        section.title.toLowerCase().includes(term) ||
        section.content.toLowerCase().includes(term)
      );

      if (matchesAllTerms) {
        results.push(section);
      }
    });

    setSearchResults(results);
  }, []);

  // Function to highlight matching text
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={i} className="bg-[#e5dbb7]/20 text-[#e5dbb7]">{part}</span> : 
        part
    );
  };

  return (
    <div className="min-h-screen bg-[#202022]">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-[250px] h-full bg-[#181818] border-r border-zinc-700 hidden min-[900px]:block">
        <div className="p-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/dexari-logo.svg"
              alt="Dexari Logo"
              width={120}
              height={30}
              style={{ width: 'auto', height: '30px' }}
            />
          </button>
          
          <nav className="mt-8">
            <h3 className="text-zinc-400 text-sm font-medium mb-4 uppercase">Documentation</h3>
            <div className="flex flex-col gap-2">
              <a href="#introduction" className="text-zinc-400 hover:text-white text-sm py-2 px-3 rounded-md hover:bg-white/5 transition-colors">
                Introduction
              </a>
              <a href="#getting-started" className="text-zinc-400 hover:text-white text-sm py-2 px-3 rounded-md hover:bg-white/5 transition-colors">
                Getting Started
              </a>
              <a href="#features" className="text-zinc-400 hover:text-white text-sm py-2 px-3 rounded-md hover:bg-white/5 transition-colors">
                Features
              </a>
              <a href="#security" className="text-zinc-400 hover:text-white text-sm py-2 px-3 rounded-md hover:bg-white/5 transition-colors">
                Security
              </a>
              <a href="#api" className="text-zinc-400 hover:text-white text-sm py-2 px-3 rounded-md hover:bg-white/5 transition-colors">
                API Reference
              </a>
              <a href="#support" className="text-zinc-400 hover:text-white text-sm py-2 px-3 rounded-md hover:bg-white/5 transition-colors">
                Support
              </a>
              <a href="#terms" className="text-zinc-400 hover:text-white text-sm py-2 px-3 rounded-md hover:bg-white/5 transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="text-zinc-400 hover:text-white text-sm py-2 px-3 rounded-md hover:bg-white/5 transition-colors">
                Privacy Policy
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-[900px]:ml-[250px]">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#202022] border-b border-zinc-700">
          <div className="flex items-center justify-between h-[65px] px-[18px] min-[900px]:px-8 max-w-[1200px] mx-auto">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/')}
                className="min-[900px]:hidden"
              >
                <Image
                  src="/dexari-logo.svg"
                  alt="Dexari Logo"
                  width={100}
                  height={25}
                  style={{ width: 'auto', height: '25px' }}
                />
              </button>
              
              <div className="hidden min-[900px]:block w-[400px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search documentation..."
                    className="w-full h-[38px] pl-10 pr-4 rounded-full bg-[#2a2a2c] border border-zinc-700 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-[#e5dbb7]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => handleSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {searchResults.length > 0 && searchQuery && (
                  <div className="absolute mt-2 w-full bg-[#2a2a2c] border border-zinc-700 rounded-xl shadow-xl overflow-hidden z-50">
                    <div className="max-h-[400px] overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <a
                          key={index}
                          href={result.href}
                          onClick={() => {
                            setSearchQuery('');
                            setSearchResults([]);
                          }}
                          className="block p-4 hover:bg-white/5 border-b border-zinc-700 last:border-0"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-white">
                              {highlightText(result.title, searchQuery)}
                            </span>
                            <span className="text-xs text-zinc-500">
                              {result.section}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-400">
                            {highlightText(result.content, searchQuery)}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => router.push('/')}
              className="h-[38px] px-6 rounded-full bg-[#e5dbb7] hover:bg-[#d4c99a] transition-colors text-[#202022] text-sm font-semibold"
            >
              Download App
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-[18px] min-[900px]:p-8 max-w-[1200px] mx-auto">
          {/* Mobile Search Bar */}
          <div className="mb-6 min-[900px]:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search documentation..."
                className="w-full h-[38px] pl-10 pr-4 rounded-full bg-[#2a2a2c] border border-zinc-700 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-[#e5dbb7]"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Mobile Search Results Dropdown */}
            {searchResults.length > 0 && searchQuery && (
              <div className="absolute left-[18px] right-[18px] mt-2 bg-[#2a2a2c] border border-zinc-700 rounded-xl shadow-xl overflow-hidden z-50">
                <div className="max-h-[400px] overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <a
                      key={index}
                      href={result.href}
                      onClick={() => {
                        setSearchQuery('');
                        setSearchResults([]);
                      }}
                      className="block p-4 hover:bg-white/5 border-b border-zinc-700 last:border-0"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-white">
                          {highlightText(result.title, searchQuery)}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {result.section}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400">
                        {highlightText(result.content, searchQuery)}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mb-12">
            <h1 className="text-3xl min-[900px]:text-4xl font-medium text-white mb-4">
              Documentation
            </h1>
            <p className="text-zinc-400 text-lg">
              Everything you need to know about using Dexari for decentralized trading.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4">
            <a href="#introduction" className="group p-6 bg-[#2a2a2c] rounded-xl border border-zinc-700 hover:border-[#e5dbb7]/50 transition-colors">
              <h3 className="text-white text-xl font-medium mb-2">Introduction</h3>
              <p className="text-zinc-400 text-sm">Learn about Dexari and the future of decentralized trading.</p>
            </a>
            
            <a href="#getting-started" className="group p-6 bg-[#2a2a2c] rounded-xl border border-zinc-700 hover:border-[#e5dbb7]/50 transition-colors">
              <h3 className="text-white text-xl font-medium mb-2">Getting Started</h3>
              <p className="text-zinc-400 text-sm">Set up your account and start trading on Dexari.</p>
            </a>
            
            <a href="#features" className="group p-6 bg-[#2a2a2c] rounded-xl border border-zinc-700 hover:border-[#e5dbb7]/50 transition-colors">
              <h3 className="text-white text-xl font-medium mb-2">Features</h3>
              <p className="text-zinc-400 text-sm">Explore Dexari&apos;s powerful trading features and tools.</p>
            </a>
            
            <a href="#security" className="group p-6 bg-[#2a2a2c] rounded-xl border border-zinc-700 hover:border-[#e5dbb7]/50 transition-colors">
              <h3 className="text-white text-xl font-medium mb-2">Security</h3>
              <p className="text-zinc-400 text-sm">Learn about our security measures and best practices.</p>
            </a>
            
            <a href="#api" className="group p-6 bg-[#2a2a2c] rounded-xl border border-zinc-700 hover:border-[#e5dbb7]/50 transition-colors">
              <h3 className="text-white text-xl font-medium mb-2">API Reference</h3>
              <p className="text-zinc-400 text-sm">Integration guides and API documentation for developers.</p>
            </a>
            
            <a href="#support" className="group p-6 bg-[#2a2a2c] rounded-xl border border-zinc-700 hover:border-[#e5dbb7]/50 transition-colors">
              <h3 className="text-white text-xl font-medium mb-2">Support</h3>
              <p className="text-zinc-400 text-sm">Get help and find answers to common questions.</p>
            </a>
          </div>

          {/* Documentation Sections */}
          <div className="mt-16 space-y-16">
            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-20">
              <h2 className="text-2xl min-[900px]:text-3xl font-medium text-white mb-6">Introduction</h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-zinc-400 leading-relaxed">
                    Welcome to Dexari, the next generation of decentralized trading platforms. Our mission is to provide 
                    a seamless, secure, and powerful trading experience that puts you in complete control of your assets.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mt-4">
                    Built on cutting-edge blockchain technology, Dexari offers institutional-grade features with 
                    the transparency and security that only decentralized finance can provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-white mb-3">What Makes Dexari Different</h3>
                  <ul className="mt-3 space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-[#e5dbb7] mr-2">•</span>
                      <div>
                        <span className="font-medium text-white">Non-custodial Trading</span> - Your keys, your crypto. Trade directly from your wallet.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#e5dbb7] mr-2">•</span>
                      <div>
                        <span className="font-medium text-white">Advanced Features</span> - Professional trading tools with institutional-grade capabilities.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#e5dbb7] mr-2">•</span>
                      <div>
                        <span className="font-medium text-white">Transparent & Secure</span> - All transactions on-chain with complete transparency.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#e5dbb7] mr-2">•</span>
                      <div>
                        <span className="font-medium text-white">Community Driven</span> - Built by traders, for traders.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Getting Started Section */}
            <section id="getting-started" className="scroll-mt-20">
              <h2 className="text-2xl min-[900px]:text-3xl font-medium text-white mb-6">Getting Started</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-white mb-3">Setting Up Your Account</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Getting started with Dexari is simple and secure. Follow these steps to begin your decentralized trading journey.
                  </p>
                  <div className="mt-4 p-4 bg-[#2a2a2c] rounded-lg">
                    <p className="text-zinc-300 text-sm italic">
                      Content coming soon - Detailed setup instructions will be added here.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl text-white mb-3">Connecting Your Wallet</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Learn how to securely connect your wallet to Dexari and start trading.
                  </p>
                  <div className="mt-4 p-4 bg-[#2a2a2c] rounded-lg">
                    <p className="text-zinc-300 text-sm italic">
                      Content coming soon - Wallet connection guide will be added here.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="scroll-mt-20">
              <h2 className="text-2xl min-[900px]:text-3xl font-medium text-white mb-6">Features</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-white mb-3">Trading Interface</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Discover Dexari&apos;s powerful and intuitive trading interface designed for both beginners and professionals.
                  </p>
                  <div className="mt-4 p-4 bg-[#2a2a2c] rounded-lg">
                    <p className="text-zinc-300 text-sm italic">
                      Content coming soon - Trading interface documentation will be added here.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl text-white mb-3">Portfolio Management</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Manage your crypto portfolio with comprehensive tracking and analytics tools.
                  </p>
                  <div className="mt-4 p-4 bg-[#2a2a2c] rounded-lg">
                    <p className="text-zinc-300 text-sm italic">
                      Content coming soon - Portfolio management guide will be added here.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Section */}
            <section id="security" className="scroll-mt-20">
              <h2 className="text-2xl min-[900px]:text-3xl font-medium text-white mb-6">Security</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-white mb-3">Security Best Practices</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Learn about security best practices when using Dexari and managing your crypto assets.
                  </p>
                  <div className="mt-4 p-4 bg-[#2a2a2c] rounded-lg">
                    <p className="text-zinc-300 text-sm italic">
                      Content coming soon - Security best practices will be added here.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* API Section */}
            <section id="api" className="scroll-mt-20">
              <h2 className="text-2xl min-[900px]:text-3xl font-medium text-white mb-6">API Reference</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-white mb-3">Developer Documentation</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Integration guides and API references for developers building on Dexari.
                  </p>
                  <div className="mt-4 p-4 bg-[#2a2a2c] rounded-lg">
                    <p className="text-zinc-300 text-sm italic">
                      Content coming soon - API documentation will be added here.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Support Section */}
            <section id="support" className="scroll-mt-20">
              <h2 className="text-2xl min-[900px]:text-3xl font-medium text-white mb-6">Support</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-white mb-3">Getting Help</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Find answers to common questions and learn how to get support from our team.
                  </p>
                  <div className="mt-4 p-4 bg-[#2a2a2c] rounded-lg">
                    <p className="text-zinc-300 text-sm italic">
                      Content coming soon - Support documentation will be added here.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Terms Section */}
            <section id="terms" className="scroll-mt-20">
              <h2 className="text-2xl min-[900px]:text-3xl font-medium text-white mb-6">Terms of Service</h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-zinc-400 leading-relaxed">
                    Our terms of service outline the rules and guidelines for using Dexari.
                  </p>
                  <div className="mt-4 p-4 bg-[#2a2a2c] rounded-lg">
                    <p className="text-zinc-300 text-sm italic">
                      Content coming soon - Terms of service will be added here.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy Section */}
            <section id="privacy" className="scroll-mt-20">
              <h2 className="text-2xl min-[900px]:text-3xl font-medium text-white mb-6">Privacy Policy</h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-zinc-400 leading-relaxed">
                    Learn about how we handle and protect your data and privacy.
                  </p>
                  <div className="mt-4 p-4 bg-[#2a2a2c] rounded-lg">
                    <p className="text-zinc-300 text-sm italic">
                      Content coming soon - Privacy policy will be added here.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
} 