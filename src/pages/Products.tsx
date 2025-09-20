import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const Products: React.FC = () => {
  const products = [
    {
      id: 'discover',
      name: 'Lumi6 Discover',
      category: 'Assessment Platform',
      description: 'Comprehensive EQ assessments that reveal team strengths and growth areas with precision.',
      focus: 'measuring EQ in context',
      features: [
        'Industry-specific scenarios',
        '12-competency EQ model',
        'Real-time insights',
        'Team benchmarking'
      ],
      icon: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/discovery-and-assess.svg',
      color: 'purple'
    },
    {
      id: 'insights',
      name: 'Lumi6 Insights',
      category: 'Analytics & Reports',
      description: 'Transform assessment data into actionable growth paths with detailed analytics.',
      focus: 'making sense of EQ data',
      features: [
        'Personalized reports',
        'Team dashboards',
        'Progress tracking',
        'ROI measurement'
      ],
      icon: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/report-and-insights.svg',
      color: 'blue'
    },
    {
      id: 'grow',
      name: 'Lumi6 Grow',
      category: 'Learning Platform',
      description: 'Personalized learning plans that build emotional intelligence habits over time.',
      focus: 'building EQ skills daily',
      features: [
        'Micro-learning modules',
        'Adaptive curriculum',
        'Progress milestones',
        'Multi-format content'
      ],
      icon: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/learn-.svg',
      color: 'orange'
    },
    {
      id: 'flow',
      name: 'Lumi6 Flow',
      category: 'Workplace Integration',
      description: 'Real-time EQ nudges and guidance integrated into your daily workflow.',
      focus: 'applying EQ in the moment',
      features: [
        'Context-aware nudges',
        'Meeting preparation',
        'Conflict resolution',
        'Team dynamics'
      ],
      icon: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/nudges-activate.svg',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete emotional intelligence platform designed for modern teams. 
              Measure, learn, and grow together.
            </p>
            
            {/* Product Tags */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {/* Discover Tags */}
              <div className="bg-rebuttl-purple/10 text-rebuttl-purple px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🏭</span>Industry-Specific
              </div>
              <div className="bg-rebuttl-purple/10 text-rebuttl-purple px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <span className="mr-2">💼</span>Role-Relevant
              </div>
              <div className="bg-rebuttl-purple/10 text-rebuttl-purple px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🔍</span>Contextual Precision
              </div>
              
              {/* Insights Tags */}
              <div className="bg-rebuttl-blue/10 text-rebuttl-blue px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🌟</span>Strengths Uncovered
              </div>
              <div className="bg-rebuttl-blue/10 text-rebuttl-blue px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <span className="mr-2">📈</span>Growth Pathways
              </div>
              <div className="bg-rebuttl-blue/10 text-rebuttl-blue px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <span className="mr-2">💡</span>Actionable Intelligence
              </div>
              
              {/* Grow Tags */}
              <div className="bg-rebuttl-orange/10 text-rebuttl-orange px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🤝</span>EI in Action
              </div>
              <div className="bg-rebuttl-orange/10 text-rebuttl-orange px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🕊️</span>Resilience Habits
              </div>
              <div className="bg-rebuttl-orange/10 text-rebuttl-orange px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🔄</span>Continuous Growth
              </div>
              
              {/* Flow Tags */}
              <div className="bg-rebuttl-orange/10 text-rebuttl-orange px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
                <span className="mr-2">👥</span>Teamwork Amplified
              </div>
              <div className="bg-rebuttl-orange/10 text-rebuttl-orange px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
                <span className="mr-2">⚡</span>In-the-Moment Nudges
              </div>
              <div className="bg-rebuttl-orange/10 text-rebuttl-orange px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🗣️</span>Better Conversations
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => {
              const getGradientClass = (color: string) => {
                switch (color) {
                  case 'purple': return 'bg-gradient-to-br from-purple-100 to-purple-200';
                  case 'blue': return 'bg-gradient-to-br from-blue-100 to-blue-200';
                  case 'orange': return 'bg-gradient-to-br from-orange-100 to-orange-200';
                  case 'green': return 'bg-gradient-to-br from-green-100 to-green-200';
                  default: return 'bg-gradient-to-br from-gray-100 to-gray-200';
                }
              };

              const getTextColor = (color: string) => {
                switch (color) {
                  case 'purple': return 'text-purple-600';
                  case 'blue': return 'text-blue-600';
                  case 'orange': return 'text-orange-600';
                  case 'green': return 'text-green-600';
                  default: return 'text-gray-600';
                }
              };

              const getDotColor = (color: string) => {
                switch (color) {
                  case 'purple': return 'bg-purple-500';
                  case 'blue': return 'bg-blue-500';
                  case 'orange': return 'bg-orange-500';
                  case 'green': return 'bg-green-500';
                  default: return 'bg-gray-500';
                }
              };

              const getCategoryColor = (color: string) => {
                switch (color) {
                  case 'purple': return 'text-purple-600';
                  case 'blue': return 'text-blue-600';
                  case 'orange': return 'text-orange-600';
                  case 'green': return 'text-green-600';
                  default: return 'text-gray-600';
                }
              };

              return (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-gray-200 relative overflow-hidden bg-white">
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                        <img 
                          src={product.icon} 
                          alt={`${product.name} icon`}
                          className="w-10 h-10"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${getCategoryColor(product.color)} mb-2`}>{product.category}</div>
                        <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                        <div className="text-sm font-medium text-gray-700 mb-4 italic">
                          Focus: {product.focus}
                        </div>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">Key Features:</h4>
                          <ul className="space-y-1">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <span className={`w-1.5 h-1.5 rounded-full ${getDotColor(product.color)}`}></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Animated background effect - removed blur */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${product.color}-50/30 via-transparent to-${product.color}-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple rounded-2xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Team's EQ?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Start with a free assessment and see the difference emotional intelligence can make.
              </p>
              <button className="bg-white text-rebuttl-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
