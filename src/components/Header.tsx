import React from 'react';
import { Bell, Heart, ShoppingCart, User } from 'lucide-react';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <Zap className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">DreamCoach</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-medium hover:text-blue-500">Home</a>
          <a href="#" className="font-medium hover:text-blue-500">Courses</a>
          <a href="#" className="font-medium hover:text-blue-500">Chat</a>
          <a href="#" className="font-medium text-blue-500">Community</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}