import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Play, Gamepad2, Star, Users, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Premium <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">OTT</span> & 
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Gaming</span> Subscriptions
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Unlock unlimited entertainment with our exclusive deals on Netflix, Prime Video, Disney+, 
            Steam, Epic Games, and more at unbeatable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Browse OTT Plans
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Explore Games
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-gray-400">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-400">Secure Payments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

