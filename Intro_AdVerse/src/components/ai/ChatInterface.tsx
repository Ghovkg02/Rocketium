import React, { useState } from 'react';
import { Send, Image, Wand2 } from 'lucide-react';

export const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'How can I help you create your advertisement today?' }
  ]);

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">AI Design Assistant</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2 mb-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Image className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Wand2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};