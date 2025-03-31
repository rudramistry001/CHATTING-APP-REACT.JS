import React from 'react';

const HomePage = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to ApnaChat</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          A secure messaging platform for connecting with friends and family.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Private Messaging</h3>
            <p>Send encrypted messages to anyone on the platform</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Group Chats</h3>
            <p>Create groups with your contacts for team discussions</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Media Sharing</h3>
            <p>Share photos, videos and documents securely</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
