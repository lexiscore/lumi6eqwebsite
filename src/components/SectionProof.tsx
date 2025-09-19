import React from 'react';

const quotes = [
  {
    name: 'N. Patel',
    title: 'Head of People',
    text: 'Managers finally have actionable guidance in the moments that matter.',
  },
  {
    name: 'T. Kim',
    title: 'Engineering Manager',
    text: 'The nudges are small, timely, and surprisingly effective at reducing friction.',
  },
  {
    name: 'Dr. A. Rivera',
    title: 'Organizational Psychologist',
    text: 'Lumi6 operationalizes EQ development with a rare balance of rigor and usability.',
  },
];

const SectionProof: React.FC = () => {
  return (
    <section id="proof" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
            What Leaders Are Saying
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Built on a 12-competency EQ model.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="text-gray-800">“{q.text}”</div>
              <div className="mt-4 text-sm text-gray-600">{q.name} — {q.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70">
          <div className="h-10 bg-gray-100 rounded" />
          <div className="h-10 bg-gray-100 rounded" />
          <div className="h-10 bg-gray-100 rounded" />
          <div className="h-10 bg-gray-100 rounded" />
        </div>
      </div>
    </section>
  );
};

export default SectionProof;


