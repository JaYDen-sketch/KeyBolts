import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Check, Star, Play, Tv, Film, Music } from 'lucide-react';

const OTTSection = () => {
  const ottPlans = [
    {
      id: 1,
      name: 'Netflix Premium',
      originalPrice: '₹649',
      discountedPrice: '₹399',
      duration: '1 Month',
      features: ['4K Ultra HD', '4 Screens', 'Download on 6 devices', 'All Content Access'],
      icon: <Tv className="h-8 w-8" />,
      popular: true,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 2,
      name: 'Amazon Prime Video',
      originalPrice: '₹299',
      discountedPrice: '₹199',
      duration: '1 Month',
      features: ['HD Streaming', '3 Screens', 'Prime Benefits', 'Exclusive Content'],
      icon: <Play className="h-8 w-8" />,
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Disney+ Hotstar',
      originalPrice: '₹299',
      discountedPrice: '₹179',
      duration: '1 Month',
      features: ['HD Streaming', '2 Screens', 'Live Sports', 'Disney Content'],
      icon: <Star className="h-8 w-8" />,
      popular: false,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      name: 'Spotify Premium',
      originalPrice: '₹119',
      discountedPrice: '₹79',
      duration: '1 Month',
      features: ['Ad-free Music', 'Offline Download', 'High Quality Audio', 'Unlimited Skips'],
      icon: <Music className="h-8 w-8" />,
      popular: false,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 5,
      name: 'YouTube Premium',
      originalPrice: '₹129',
      discountedPrice: '₹89',
      duration: '1 Month',
      features: ['Ad-free Videos', 'Background Play', 'YouTube Music', 'Offline Download'],
      icon: <Film className="h-8 w-8" />,
      popular: false,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 6,
      name: 'SonyLIV Premium',
      originalPrice: '₹299',
      discountedPrice: '₹149',
      duration: '1 Month',
      features: ['HD Streaming', 'Live TV', 'Sports Content', 'Original Shows'],
      icon: <Tv className="h-8 w-8" />,
      popular: false,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="ott" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">OTT Subscriptions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get access to your favorite streaming platforms at unbeatable prices. 
            All subscriptions are genuine and come with full warranty.
          </p>
        </div>

        {/* OTT Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ottPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                <div className="text-white">
                  {plan.icon}
                </div>
              </div>

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-white">{plan.discountedPrice}</span>
                  <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                </div>
                <span className="text-gray-400">per {plan.duration}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-medium py-2`}
              >
                Get Subscription
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose KeyBolt?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-500/20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">100% Genuine</h4>
                <p className="text-gray-400">All subscriptions are authentic and verified</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Star className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Instant Delivery</h4>
                <p className="text-gray-400">Get your subscription details within minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Play className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
                <p className="text-gray-400">Round-the-clock customer assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OTTSection;

