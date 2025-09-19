
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Assess Teams',
      description: 'Run EI assessments to baseline self-awareness, empathy, and communication across your organization.'
    },
    {
      number: '02',
      title: 'Personalize Learning',
      description: 'Deliver targeted micro-learnings and practices tailored to each person’s growth areas.'
    },
    {
      number: '03',
      title: 'Enable in the Flow',
      description: 'Provide tips and nudges inside daily workflows to reinforce better conversations and decisions.'
    },
    {
      number: '04',
      title: 'Measure Progress',
      description: 'Track team sentiment and collaboration metrics to see tangible improvement over time.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-rebuttl-purple to-rebuttl-blue bg-clip-text text-transparent">
            How Lumi6 Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A simple path from awareness to action, helping teams build everyday emotional intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="absolute -top-5 -left-2 text-6xl font-bold text-rebuttl-blue/10 group-hover:text-rebuttl-blue/20 transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-6">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connection line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-rebuttl-blue/60 to-rebuttl-purple/60 z-10"></div>
              )}
            </div>
          ))}
          
          {/* Background decorative grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxwYXRoIGQ9Ik0zNiAzNmgyNHYtMTJIMzZ2MTJ6TTAgMzZoMjR2LTEySDB2MTJ6IiBmaWxsPSIjZWFlYWVhIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 -z-10"></div>
        </div>
        
        <div className="mt-16 p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxwYXRoIGQ9Ik0zNiAzNmgyNHYtMTJIMzZ2MTJ6TTAgMzZoMjR2LTEySDB2MTJ6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
          <div className="relative z-10 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Why Emotional Intelligence is the #1 Future Skill</h3>
            <div className="max-w-3xl mx-auto space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✔</span>
                <span>90% of top performers score high in EQ</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✔</span>
                <span>EQ drives collaboration, adaptability, and resilience</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✔</span>
                <span>AI automates tasks — EQ is the human edge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why EQ Matters two-column section */}
        <section id="why-eq" className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Why Emotional Intelligence is the #1 future skill</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-rebuttl-blue mt-1">✔</span> 90% of top performers score high in EQ</li>
              <li className="flex items-start gap-3"><span className="text-rebuttl-blue mt-1">✔</span> EQ drives collaboration, adaptability & resilience</li>
              <li className="flex items-start gap-3"><span className="text-rebuttl-blue mt-1">✔</span> AI automates tasks — EQ is the human advantage</li>
            </ul>
          </div>
          <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            {/* simple radial chart mock */}
            <div className="mx-auto w-72 h-72 relative">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="90" fill="#F8FAFF" />
                <g>
                  <path d="M100,100 L100,20 A80,80 0 0,1 168,132 Z" fill="#4263EB33" />
                  <path d="M100,100 L168,132 A80,80 0 0,1 60,176 Z" fill="#6366F133" />
                  <path d="M100,100 L60,176 A80,80 0 0,1 32,84 Z" fill="#F9731633" />
                  <path d="M100,100 L32,84 A80,80 0 0,1 100,20 Z" fill="#22C55E33" />
                </g>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Domains</div>
                  <div className="text-lg font-semibold">EI Competencies</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
              <div><span className="inline-block w-3 h-3 mr-2 bg-[#4263EB] opacity-60"></span>Self-Awareness</div>
              <div><span className="inline-block w-3 h-3 mr-2 bg-[#6366F1] opacity-60"></span>Self-Management</div>
              <div><span className="inline-block w-3 h-3 mr-2 bg-[#F97316] opacity-60"></span>Social Awareness</div>
              <div><span className="inline-block w-3 h-3 mr-2 bg-[#22C55E] opacity-60"></span>Relationship Management</div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowItWorks;
