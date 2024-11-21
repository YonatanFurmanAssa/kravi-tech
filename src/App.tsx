import React from 'react';
import { Linkedin, Users, Briefcase, UserCheck, UsersRound } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1624969862644-791f3dc98927?auto=format&fit=crop&q=80"
            alt="Tech background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Kravi Tech</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Bridging the gap between military service and high-tech careers
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-4xl font-bold mb-2">500+</h3>
            <p className="text-gray-400">Active Mentors</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-4xl font-bold mb-2">150+</h3>
            <p className="text-gray-400">Soldiers in Tech Industry</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <UserCheck className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-4xl font-bold mb-2">600+</h3>
            <p className="text-gray-400">Current Mentees</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <UsersRound className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-4xl font-bold mb-2">1000+</h3>
            <p className="text-gray-400">Total Program Participants</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/soldier-tech.jpg"
                alt="Soldier looking at tech city"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/mentorship.jpg"
                alt="Mentorship session"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Connect With Us</h2>
          <p className="text-xl text-gray-400 mb-8">
            Ready to start your journey in tech? Get in touch with us today.
          </p>
          <a
            href="https://www.linkedin.com/company/kravi-tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            Follow Us on LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Kravi Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;