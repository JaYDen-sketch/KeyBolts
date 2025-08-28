import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HeadphonesIcon } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'support@keycreat.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Mon-Sun 9AM-9PM IST'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: 'Mumbai, Maharashtra',
      description: 'India'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: '24/7 Support',
      description: 'Always here to help'
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-400" />,
      title: 'WhatsApp Support',
      description: 'Get instant help via WhatsApp',
      action: 'Chat Now',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-400" />,
      title: 'Email Support',
      description: 'Detailed assistance via email',
      action: 'Send Email',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-purple-400" />,
      title: 'Live Chat',
      description: 'Real-time chat support',
      action: 'Start Chat',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I receive my subscription?',
      answer: 'All subscriptions are delivered instantly to your email within 5 minutes of successful payment.'
    },
    {
      question: 'Are the subscriptions genuine?',
      answer: 'Yes, all our subscriptions are 100% genuine and sourced from official distributors.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, Credit/Debit Cards, Net Banking, and popular digital wallets.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer refunds within 24 hours if there are any issues with your subscription.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions? Need help? Our friendly support team is here to assist you 24/7. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center">
              <div className="flex justify-center mb-4 text-purple-400">
                {info.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{info.title}</h3>
              <p className="text-white font-medium mb-1">{info.details}</p>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Support Channels */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Quick Support</h3>
            <div className="space-y-4 mb-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${channel.color}`}>
                      {channel.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{channel.title}</h4>
                      <p className="text-gray-400 text-sm">{channel.description}</p>
                    </div>
                    <Button 
                      size="sm" 
                      className={`bg-gradient-to-r ${channel.color} hover:opacity-90 text-white`}
                    >
                      {channel.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h4>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h5 className="text-white font-medium mb-2">{faq.question}</h5>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h3>
            <p className="text-gray-300 mb-6">
              For urgent issues or payment problems, contact our emergency support line
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3">
                <Phone className="mr-2 h-4 w-4" />
                Emergency Support
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

