import axios from 'axios';
import { ImageGenerationParams, ImageResponse } from '../types/image';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateImage = async (params: ImageGenerationParams): Promise<ImageResponse> => {
  const response = await api.post<ImageResponse>('/generate-image', params);
  return response.data;
};

export const editImage = async (imageId: string, changes: Partial<ImageGenerationParams>): Promise<ImageResponse> => {
  const response = await api.put<ImageResponse>(`/edit-image/${imageId}`, changes);
  return response.data;
};

export const getImageStatus = async (imageId: string): Promise<ImageResponse> => {
  const response = await api.get<ImageResponse>(`/image-status/${imageId}`);
  return response.data;
};

export const confirmImage = async (imageId: string): Promise<ImageResponse> => {
  const response = await api.post<ImageResponse>(`/confirm-image/${imageId}`);
  return response.data;
};