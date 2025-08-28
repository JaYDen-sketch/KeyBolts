import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Gamepad2, Download, Star, Trophy, Zap, Shield } from 'lucide-react';

const GamesSection = () => {
  const gameCategories = [
    {
      id: 1,
      title: 'Steam Games',
      description: 'Premium PC games at discounted prices',
      icon: <Gamepad2 className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      games: [
        { name: 'Cyberpunk 2077', price: '₹1,999', originalPrice: '₹2,999' },
        { name: 'Red Dead Redemption 2', price: '₹1,499', originalPrice: '₹2,499' },
        { name: 'GTA V Premium', price: '₹899', originalPrice: '₹1,499' },
        { name: 'Witcher 3 Complete', price: '₹599', originalPrice: '₹999' }
      ]
    },
    {
      id: 2,
      title: 'Epic Games Store',
      description: 'Exclusive titles and free weekly games',
      icon: <Trophy className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      games: [
        { name: 'Fortnite V-Bucks', price: '₹799', originalPrice: '₹999' },
        { name: 'Rocket League Credits', price: '₹499', originalPrice: '₹699' },
        { name: 'Fall Guys Crowns', price: '₹299', originalPrice: '₹399' },
        { name: 'Assassin\'s Creed Valhalla', price: '₹1,799', originalPrice: '₹2,999' }
      ]
    },
    {
      id: 3,
      title: 'Mobile Gaming',
      description: 'In-game currencies and premium passes',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      games: [
        { name: 'PUBG Mobile UC', price: '₹399', originalPrice: '₹499' },
        { name: 'Free Fire Diamonds', price: '₹299', originalPrice: '₹399' },
        { name: 'COD Mobile CP', price: '₹599', originalPrice: '₹799' },
        { name: 'Clash of Clans Gems', price: '₹199', originalPrice: '₹299' }
      ]
    }
  ];

  const features = [
    {
      icon: <Download className="h-6 w-6 text-blue-400" />,
      title: 'Instant Delivery',
      description: 'Get your game keys and credits instantly after purchase'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-400" />,
      title: 'Secure Transactions',
      description: 'All purchases are protected with bank-level security'
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      title: 'Best Prices',
      description: 'Guaranteed lowest prices on all gaming products'
    },
    {
      icon: <Trophy className="h-6 w-6 text-purple-400" />,
      title: 'Premium Support',
      description: '24/7 customer support for all your gaming needs'
    }
  ];

  return (
    <section id="games" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gaming <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Paradise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Level up your gaming experience with discounted games, in-game currencies, 
            and premium content from top gaming platforms.
          </p>
        </div>

        {/* Game Categories */}
        <div className="space-y-12">
          {gameCategories.map((category) => (
            <div key={category.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Games Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.games.map((game, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-colors">
                    <h4 className="text-white font-semibold mb-2">{game.name}</h4>
                    <div className="flex items-baseline space-x-2 mb-3">
                      <span className="text-lg font-bold text-white">{game.price}</span>
                      <span className="text-sm text-gray-400 line-through">{game.originalPrice}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white`}
                    >
                      Buy Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Gamers Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800/50 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Level Up?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied gamers who trust KeyBolt for their gaming needs. 
              Get the best deals on games, DLCs, and in-game content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3">
                Browse All Games
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

