import { describe, expect, it } from 'vitest';
import { investigationSummaryInput } from './investigation-summary';
describe('AI investigation summary input', () => {
  it('requires a detection alert', () => expect(investigationSummaryInput.safeParse({ alert: ' ', notes: 'Reviewed logs' }).success).toBe(false));
  it('requires investigation notes', () => expect(investigationSummaryInput.safeParse({ alert: 'AMI anomaly', notes: ' ' }).success).toBe(false));
  it('accepts and trims operator evidence', () => expect(investigationSummaryInput.parse({ alert: ' AMI anomaly ', notes: ' Reviewed logs ' })).toEqual({ alert: 'AMI anomaly', notes: 'Reviewed logs' }));
});
