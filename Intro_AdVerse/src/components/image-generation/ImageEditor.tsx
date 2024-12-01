import React, { useState } from 'react';
import { ImageResponse, ImageGenerationParams } from '../../types/image';
import { editImage } from '../../services/api';

interface ImageEditorProps {
  image: ImageResponse;
  onUpdate: (image: ImageResponse) => void;
}

export const ImageEditor = ({ image, onUpdate }: ImageEditorProps) => {
  const [editing, setEditing] = useState(false);
  const [params, setParams] = useState<Partial<ImageGenerationParams>>(image.parameters);

  const handleEdit = async () => {
    try {
      const updated = await editImage(image.imageUrl, params);
      onUpdate(updated);
      setEditing(false);
    } catch (error) {
      console.error('Error editing image:', error);
    }
  };

  return (
    <div className="space-y-4">
      {editing ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Style
              </label>
              <select
                value={params.stylePreferences?.artistic}
                onChange={(e) => setParams({
                  ...params,
                  stylePreferences: {
                    ...params.stylePreferences!,
                    artistic: e.target.value,
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="modern">Modern</option>
                <option value="vintage">Vintage</option>
                <option value="minimalist">Minimalist</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mood
              </label>
              <select
                value={params.stylePreferences?.mood}
                onChange={(e) => setParams({
                  ...params,
                  stylePreferences: {
                    ...params.stylePreferences!,
                    mood: e.target.value,
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="bright">Bright</option>
                <option value="dark">Dark</option>
                <option value="neutral">Neutral</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleEdit}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Apply Changes
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setEditing(true)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Edit Image
        </button>
      )}
    </div>
  );
};