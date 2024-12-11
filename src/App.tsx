import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 mr-80">
          <Feed />
        </main>
        <RightPanel />
      </div>
    </div>
  );
}

export default App;