import { z } from 'zod';

export const investigationSummaryInput = z.object({
  alert: z.string().trim().min(1, 'Provide a detection alert.').max(12000, 'Keep the alert under 12,000 characters.'),
  notes: z.string().trim().min(1, 'Provide investigation notes.').max(16000, 'Keep notes under 16,000 characters.'),
});
