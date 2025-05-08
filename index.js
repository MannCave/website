import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MannCaveMedia() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:px-8 bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">MannCave Media</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#portfolio" className="hover:text-yellow-400">Portfolio</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-gray-700">
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#portfolio" className="hover:text-yellow-400">Portfolio</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-gray-800 to-black">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Unleashing Creative Media Solutions</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">Empowering brands and creators through professional content production and digital storytelling.</p>
        <Button className="text-lg px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black">Get Started</Button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["Video Production", "Photography", "Brand Strategy"].map((service, idx) => (
            <Card key={idx} className="bg-gray-900 text-white border border-gray-700">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">{service}</h4>
                <p className="text-gray-300">Professional {service.toLowerCase()} tailored to elevate your brand presence.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-gray-900">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Work</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-gray-800 border border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-video bg-gray-600 mb-4"></div>
                <h4 className="text-xl font-bold mb-2">Project Title {item}</h4>
                <p className="text-gray-300">Brief description of the project goes here, showcasing skills and creativity.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-10">Get in Touch</h3>
        <form className="max-w-2xl mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400" />
          <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400" rows="5"></textarea>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-900 border-t border-gray-700">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} MannCave Media. All rights reserved.</p>
      </footer>
    </div>
  );
}
