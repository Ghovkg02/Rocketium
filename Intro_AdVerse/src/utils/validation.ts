import { z } from 'zod';

export const imageGenerationSchema = z.object({
  description: z.string().min(1).max(1000),
  dimensions: z.object({
    width: z.number().min(256).max(4096),
    height: z.number().min(256).max(4096),
  }),
  colorPreferences: z.array(z.string()).optional(),
  stylePreferences: z.object({
    artistic: z.string(),
    mood: z.string(),
    lighting: z.string(),
  }).optional(),
});

export const validateImageParams = (params: unknown) => {
  return imageGenerationSchema.parse(params);
};