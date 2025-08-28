import React from 'react';
import { Users, Target, Award, Heart, Shield, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: <Users className="h-6 w-6" /> },
    { number: '100+', label: 'OTT Platforms', icon: <Target className="h-6 w-6" /> },
    { number: '1000+', label: 'Games Available', icon: <Award className="h-6 w-6" /> },
    { number: '24/7', label: 'Customer Support', icon: <Heart className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: 'Trust & Security',
      description: 'We prioritize the security of your data and transactions with bank-level encryption and secure payment gateways.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: 'Instant Delivery',
      description: 'Get your subscriptions and game keys delivered instantly to your email within minutes of purchase.'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-400" />,
      title: 'Quality Assurance',
      description: 'All our products are genuine and verified. We guarantee 100% working subscriptions and game keys.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: 'Customer First',
      description: 'Our dedicated support team is available 24/7 to help you with any questions or concerns.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'Passionate about bringing affordable entertainment to everyone.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      description: 'Ensures smooth operations and customer satisfaction.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Amit Patel',
      role: 'Technical Lead',
      description: 'Maintains our platform security and performance.',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">KeyBolt</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're on a mission to make premium entertainment accessible to everyone. 
            Since 2020, we've been providing genuine OTT subscriptions and gaming content at unbeatable prices.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="flex justify-center mb-3 text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-4">
                  KeyCreat was born from a simple idea: everyone deserves access to premium entertainment 
                  without breaking the bank. What started as a small venture to help friends get affordable 
                  Netflix subscriptions has grown into India's most trusted platform for OTT and gaming content.
                </p>
                <p className="text-gray-300 mb-4">
                  We understand the struggle of choosing between multiple streaming services or missing out 
                  on the latest games due to high prices. That's why we've partnered with official distributors 
                  to bring you genuine subscriptions and game keys at prices that won't hurt your wallet.
                </p>
                <p className="text-gray-300">
                  Today, we serve over 50,000 happy customers across India, and we're just getting started. 
                  Our commitment to quality, security, and customer satisfaction remains unwavering.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
                <p className="text-gray-300 mb-4">
                  To democratize access to premium entertainment by providing genuine, affordable subscriptions 
                  and gaming content to everyone.
                </p>
                <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
                <p className="text-gray-300">
                  To become the go-to platform for all entertainment needs, where quality meets affordability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-3">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-1">{member.name}</h4>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

