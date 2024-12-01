import React, { useState } from 'react';
import { ImageGenerationParams } from '../../types/image';
import { validateImageParams } from '../../utils/validation';
import { generateImage } from '../../services/api';

export const ImageGenerationForm = () => {
  const [params, setParams] = useState<ImageGenerationParams>({
    description: '',
    dimensions: { width: 1024, height: 1024 },
    stylePreferences: {
      artistic: 'modern',
      mood: 'bright',
      lighting: 'natural',
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      validateImageParams(params);
      const response = await generateImage(params);
      console.log('Image generated:', response);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image Description
        </label>
        <textarea
          value={params.description}
          onChange={(e) => setParams({ ...params, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={4}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Width</label>
          <input
            type="number"
            value={params.dimensions.width}
            onChange={(e) => setParams({
              ...params,
              dimensions: { ...params.dimensions, width: Number(e.target.value) }
            })}
            min="256"
            max="4096"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Height</label>
          <input
            type="number"
            value={params.dimensions.height}
            onChange={(e) => setParams({
              ...params,
              dimensions: { ...params.dimensions, height: Number(e.target.value) }
            })}
            min="256"
            max="4096"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate Image
      </button>
    </form>
  );
};