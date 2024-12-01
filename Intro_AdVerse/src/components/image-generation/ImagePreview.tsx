import React from 'react';
import { ImageResponse } from '../../types/image';
import { confirmImage } from '../../services/api';

interface ImagePreviewProps {
  image: ImageResponse;
  onConfirm: () => void;
}

export const ImagePreview = ({ image, onConfirm }: ImagePreviewProps) => {
  const handleConfirm = async () => {
    try {
      await confirmImage(image.imageUrl);
      onConfirm();
    } catch (error) {
      console.error('Error confirming image:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <img
          src={image.imageUrl}
          alt="Generated preview"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleConfirm}
          className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Confirm
        </button>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900">Generation Parameters</h4>
        <dl className="mt-2 divide-y divide-gray-200">
          <div className="py-2 flex justify-between">
            <dt className="text-sm text-gray-500">Dimensions</dt>
            <dd className="text-sm text-gray-900">
              {image.parameters.dimensions.width} x {image.parameters.dimensions.height}
            </dd>
          </div>
          {image.parameters.stylePreferences && (
            <div className="py-2 flex justify-between">
              <dt className="text-sm text-gray-500">Style</dt>
              <dd className="text-sm text-gray-900">
                {image.parameters.stylePreferences.artistic}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};