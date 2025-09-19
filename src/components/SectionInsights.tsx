import React, { useState } from 'react';

const personas = [
  {
    key: 'hiring',
    title: 'For Hiring Managers',
    desc: 'Benchmark candidates beyond resumes.',
  },
  {
    key: 'ld',
    title: 'For L&D Leaders',
    desc: 'Upskill employees with EQ micro-training.',
  },
  {
    key: 'individuals',
    title: 'For Individuals',
    desc: 'Discover strengths & growth areas.',
  },
];

const SectionInsights: React.FC = () => {
  const [active, setActive] = useState('hiring');
  return (
    <section id="insights" className="py-16 md:py-24 bg-rebuttl-lightBg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
            For Hiring, Development & Everyday Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {personas.map(p => (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`text-left p-5 rounded-2xl border transition-all ${active === p.key ? 'border-rebuttl-blue bg-white shadow-sm' : 'border-gray-200 bg-white/60 hover:bg-white'} `}
            >
              <div className="font-semibold">{p.title}</div>
              <div className="text-gray-600 text-sm mt-1">{p.desc}</div>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          {active === 'hiring' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Benchmark beyond resumes</h3>
                <p className="text-gray-700">Compare candidates on collaboration, empathy, and adaptability with situational responses.</p>
              </div>
              <div className="aspect-video bg-gradient-to-br from-rebuttl-blue/10 to-rebuttl-purple/10 rounded-xl" />
            </div>
          )}
          {active === 'ld' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Upskill at scale</h3>
                <p className="text-gray-700">Auto-curated micro-learning mapped to each team’s competency gaps.</p>
              </div>
              <div className="aspect-video bg-gradient-to-br from-rebuttl-blue/10 to-rebuttl-purple/10 rounded-xl" />
            </div>
          )}
          {active === 'individuals' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Know your strengths</h3>
                <p className="text-gray-700">Personal EQ profile, growth areas, and recommended practices.</p>
              </div>
              <div className="aspect-video bg-gradient-to-br from-rebuttl-blue/10 to-rebuttl-purple/10 rounded-xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionInsights;


