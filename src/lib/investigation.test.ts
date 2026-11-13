import { describe, expect, it } from 'vitest';
import { filterInvestigations } from './investigation';
describe('investigation filters', () => {
  it('combines environment and severity filters', () => {
    expect(filterInvestigations('SCADA', 'HIGH', '').map(item => item.id)).toEqual(['SIM-001']);
  });
  it('searches locations without case sensitivity', () => {
    expect(filterInvestigations('All', 'All', ' EAST ').map(item => item.id)).toEqual(['SIM-002']);
  });
  it('returns no incidents for an unmatched search', () => {
    expect(filterInvestigations('AMI', 'MEDIUM', 'unknown')).toEqual([]);
  });
});