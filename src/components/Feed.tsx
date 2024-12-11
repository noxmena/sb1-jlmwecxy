import React from 'react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: 'Design Community',
    content: 'Check out this amazing AI-generated artwork! What do you think about the future of AI in design?',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    likes: 128,
    comments: 45
  },
  {
    id: 2,
    author: 'Web Dev Group',
    content: 'What are your favorite new features in the latest React 18 release? Share your thoughts below! 👇',
    likes: 89,
    comments: 32
  }
];

export default function Feed() {
  return (
    <div className="max-w-2xl mx-auto pt-20 pb-8 px-4">
      {/* Create Post */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex space-x-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 bg-gray-100 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="mb-4">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <div className="flex items-center justify-between pt-4 border-t">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}