import React from 'react';
import { Ambulance, Brain, Clock, Download, Guitar as Hospital, MapPin, Phone, Shield, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Emergency Button */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4">
        <button className="mx-auto flex items-center justify-center w-full max-w-md bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105">
          <Phone className="w-6 h-6 mr-2" />
          Emergency: Call 911
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Emergency Medical Care at Your Fingertips
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                One-Click Access to Hospitals, Ambulances, and 24/7 Medical Support
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                  Get Emergency Help Now
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-all">
                  Learn More
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <Hospital className="w-5 h-5 mr-2 text-blue-600" />
                  1000+ Hospitals Connected
                </span>
                <span className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  24/7 Emergency Support
                </span>
                <span className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-blue-600" />
                  98% Response Rate
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80"
                alt="Emergency Response Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Ambulance className="w-8 h-8 text-blue-600" />}
              title="One-Click Emergency System"
              description="Instant access to emergency services with just one tap"
            />
            <FeatureCard
              icon={<Hospital className="w-8 h-8 text-blue-600" />}
              title="Real-time Hospital Bed Booking"
              description="Check and book available hospital beds in real-time"
            />
            <FeatureCard
              icon={<MapPin className="w-8 h-8 text-blue-600" />}
              title="Location-Based Hospital Finder"
              description="Find the nearest hospitals and medical facilities"
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-blue-600" />}
              title="AI Medical Assistant"
              description="Get instant medical guidance powered by AI"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Digital Health Records"
              description="Secure access to your medical history anytime"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-blue-600" />}
              title="24/7 Medical Support"
              description="Round-the-clock access to medical professionals"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Thousands</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <TestimonialCard
              quote="This platform saved my life. The emergency response was incredibly fast."
              author="Sarah Johnson"
              role="Patient"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              quote="As a healthcare provider, this platform has revolutionized how we handle emergencies."
              author="Dr. Michael Chen"
              role="Emergency Physician"
              image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              quote="The real-time bed tracking system has improved our efficiency significantly."
              author="Emma Williams"
              role="Hospital Administrator"
              image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Download Our App Today</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full flex items-center">
              <Download className="w-6 h-6 mr-2" />
              Download for iOS
            </button>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full flex items-center">
              <Download className="w-6 h-6 mr-2" />
              Download for Android
            </button>
          </div>
          <div className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email for updates"
              className="w-full px-4 py-3 rounded-full text-gray-900 mb-4"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              Sign Up for Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Emergency Access</h3>
            <ul className="space-y-2">
              <li>Emergency Hotline: 911</li>
              <li>Find Nearest Hospital</li>
              <li>Book Ambulance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>HIPAA Compliance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 mb-4">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
