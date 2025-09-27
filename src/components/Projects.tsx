import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowLeft, Code, Palette, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Projects() {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="w-full min-h-screen bg-gradient-to-br from-friends-nude/10 to-friends-maroon/10">
      <Header />
      <main className="w-full py-24">
        <div className="container mx-auto px-4">
          {/* Go Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center space-x-2 text-friends-maroon hover:text-friends-nude transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Go Back</span>
          </button>

          {/* Main Content */}
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-friends-maroon mb-4 animate-pulse">
                Coming Soon
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                I'm working on some amazing projects that will showcase my skills and creativity. 
                Stay tuned for something special!
              </p>
            </div>

            {/* Animated Icons */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="animate-bounce">
                <Code size={48} className="text-friends-maroon" />
              </div>
              <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
                <Palette size={48} className="text-friends-maroon" />
              </div>
              <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
                <Zap size={48} className="text-friends-maroon" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="text-sm text-gray-600 mb-2">Project Progress</div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-friends-maroon to-friends-nude h-3 rounded-full animate-pulse" style={{ width: '75%' }}></div>
              </div>
              <div className="text-sm text-gray-500 mt-2">75% Complete</div>
            </div>

            {/* Feature Preview Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-friends-maroon mb-2">Web Development</h3>
                <p className="text-gray-600">Modern, responsive websites built with cutting-edge technologies</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-friends-maroon mb-2">UI/UX Design</h3>
                <p className="text-gray-600">Beautiful, intuitive user interfaces that enhance user experience</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-friends-maroon mb-2">Creative Solutions</h3>
                <p className="text-gray-600">Innovative approaches to complex problems and challenges</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}

