import React from 'react';
import { Users, Home, Group, MessageSquare, ShoppingBag, Play, MoreHorizontal, Bookmark } from 'lucide-react';

const menuItems = [
  { icon: Home, text: 'Home' },
  { icon: Users, text: 'Find Friends' },
  { icon: Group, text: 'Groups' },
  { icon: MessageSquare, text: 'Most Recent' },
  { icon: ShoppingBag, text: 'Marketplace' },
  { icon: Play, text: 'Watch' },
  { icon: MoreHorizontal, text: 'See More' }
];

const shortcuts = [
  { icon: Bookmark, text: 'UX/UI Designer Community' },
  { icon: Group, text: 'Web Development Group' },
  { icon: Users, text: 'Memes Group' }
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-4 h-screen fixed left-0 top-0 overflow-y-auto border-r">
      <div className="space-y-6">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium">{item.text}</span>
            </button>
          ))}
        </div>
        
        <div className="border-t pt-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Your shortcuts</h3>
          <div className="space-y-2">
            {shortcuts.map((item, index) => (
              <button
                key={index}
                className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}