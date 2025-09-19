import React from 'react';

const SectionContinuous: React.FC = () => {
  return (
    <section id="continuous" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
            From assessments to action
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            See progress with a live dashboard and a feed of helpful nudges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Radar chart mock */}
          <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="mx-auto w-full max-w-md aspect-square">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <polygon points="100,20 176,60 176,140 100,180 24,140 24,60" fill="#EEF2FF" />
                <polygon points="100,40 160,72 160,128 100,160 40,128 40,72" fill="#E0E7FF" />
                <polygon points="100,60 144,84 144,116 100,140 56,116 56,84" fill="#C7D2FE" />
                <polygon points="100,70 138,90 138,110 100,130 62,110 62,90" fill="#6366F166" />
              </svg>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div><span className="inline-block w-3 h-3 mr-2 bg-[#6366F1] opacity-60"></span>Self-Awareness</div>
              <div><span className="inline-block w-3 h-3 mr-2 bg-[#22C55E] opacity-60"></span>Self-Management</div>
              <div><span className="inline-block w-3 h-3 mr-2 bg-[#F97316] opacity-60"></span>Social Awareness</div>
              <div><span className="inline-block w-3 h-3 mr-2 bg-[#0EA5E9] opacity-60"></span>Relationship Management</div>
            </div>
          </div>

          {/* Nudges feed mock */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Upcoming 1:1</div>
              <div className="text-gray-800">Before your 1:1, remember: your teammate thrives on structure — frame your feedback with clear next steps.</div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Team Standup</div>
              <div className="text-gray-800">Try a quick check-in question to surface blockers proactively.</div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Performance Review</div>
              <div className="text-gray-800">Balance constructive points with specific appreciation to reinforce strengths.</div>
            </div>
            <div className="pt-2">
              <a href="#cta" className="inline-block bg-rebuttl-blue text-white px-6 py-3 rounded-md hover:bg-rebuttl-blue/90 transition-colors">See Sample Dashboard</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContinuous;


