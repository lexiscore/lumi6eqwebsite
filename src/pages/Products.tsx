import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Play, MessageSquare, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Products: React.FC = () => {
  const products = [
    {
      id: 'discover',
      name: 'Lumi6 Discover',
      category: 'Assessment Platform',
      description: 'Comprehensive EQ assessments that reveal team strengths and growth areas with precision.',
      features: [
        'Industry-specific scenarios',
        '12-competency EQ model',
        'Real-time insights',
        'Team benchmarking'
      ],
      icon: Users,
      color: 'rebuttl-purple'
    },
    {
      id: 'insights',
      name: 'Lumi6 Insights',
      category: 'Analytics & Reports',
      description: 'Transform assessment data into actionable growth paths with detailed analytics.',
      features: [
        'Personalized reports',
        'Team dashboards',
        'Progress tracking',
        'ROI measurement'
      ],
      icon: Play,
      color: 'rebuttl-blue'
    },
    {
      id: 'grow',
      name: 'Lumi6 Grow',
      category: 'Learning Platform',
      description: 'Personalized learning plans that build emotional intelligence habits over time.',
      features: [
        'Micro-learning modules',
        'Adaptive curriculum',
        'Progress milestones',
        'Multi-format content'
      ],
      icon: MessageSquare,
      color: 'rebuttl-orange'
    },
    {
      id: 'flow',
      name: 'Lumi6 Flow',
      category: 'Workplace Integration',
      description: 'Real-time EQ nudges and guidance integrated into your daily workflow.',
      features: [
        'Context-aware nudges',
        'Meeting preparation',
        'Conflict resolution',
        'Team dynamics'
      ],
      icon: Zap,
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete emotional intelligence platform designed for modern teams. 
              Measure, learn, and grow together.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`bg-${product.color}/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-${product.color}/20 transition-all duration-300 flex-shrink-0`}>
                        <IconComponent className={`w-8 h-8 text-${product.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-500 mb-2">{product.category}</div>
                        <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">Key Features:</h4>
                          <ul className="space-y-1">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <span className={`w-1.5 h-1.5 rounded-full bg-${product.color}`}></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
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
