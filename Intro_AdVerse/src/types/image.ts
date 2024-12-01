export interface ImageGenerationParams {
  description: string;
  dimensions: {
    width: number;
    height: number;
  };
  colorPreferences?: string[];
  stylePreferences?: {
    artistic: string;
    mood: string;
    lighting: string;
  };
}

export interface ImageResponse {
  imageUrl: string;
  parameters: ImageGenerationParams;
  status: 'pending' | 'completed' | 'failed';
  editHistory: ImageEdit[];
}

export interface ImageEdit {
  timestamp: number;
  type: 'dimension' | 'color' | 'style' | 'composition';
  changes: Record<string, any>;
}