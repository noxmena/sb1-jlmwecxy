import React from 'react';
import { X, Check } from 'lucide-react';

const contacts = [
  { name: 'Sarah Parker', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
  { name: 'John Smith', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
  { name: 'Emma Wilson', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' }
];

const sponsoredItems = [
  {
    title: 'Best Perfume for him',
    company: 'PerfumeShop.ps',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f'
  },
  {
    title: 'High Heels new style',
    company: 'StyleFashion.com',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2'
  }
];

export default function RightPanel() {
  return (
    <div className="w-80 fixed right-0 top-16 h-screen p-4 space-y-6 bg-white border-l overflow-y-auto">
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-500">Sponsored</h3>
        {sponsoredItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 cursor-pointer">
            <img
              src={`${item.image}?w=100&h=100&fit=crop`}
              alt={item.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">{item.company}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-gray-500">Friend requests</h3>
        <div className="bg-white rounded-lg p-3 border">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium">Alex Johnson</p>
              <div className="flex space-x-2 mt-2">
                <button className="px-4 py-1 bg-blue-500 text-white rounded-md flex items-center space-x-1">
                  <Check className="w-4 h-4" />
                  <span>Confirm</span>
                </button>
                <button className="px-4 py-1 bg-gray-200 text-gray-800 rounded-md flex items-center space-x-1">
                  <X className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-gray-500">Contacts</h3>
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-3 cursor-pointer">
              <img
                src={`${contact.image}?w=50&h=50&fit=crop`}
                alt={contact.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}