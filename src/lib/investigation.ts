export type Environment = 'All' | 'AMI' | 'SCADA';
export const investigations = [
  { id: 'SIM-001', environment: 'SCADA', site: 'North substation', asset: 'Historian server H-01', actor: 'compromised_operator', risk: 'HIGH', volume: '48.2 MB', resource: 'Operational telemetry', time: '07:55:10', reason: 'Transfer attempted to an unapproved destination', destination: 'Unapproved external endpoint', stages: [
    { title: 'Unusual account access', detail: 'An operator account connects to the historian outside its expected access pattern.' },
    { title: 'Bulk resource reads', detail: 'The account reads a large set of operational telemetry records in a short interval.' },
    { title: 'Data collection', detail: 'Read activity is followed by aggregation of telemetry into an outbound payload.' },
    { title: 'Outbound transfer attempt', detail: 'The payload is addressed to an endpoint outside the approved destination list. Delivery is not confirmed.' },
  ] },
  { id: 'SIM-002', environment: 'AMI', site: 'East metering zone', asset: 'Meter data concentrator M-12', actor: 'meter_service_account', risk: 'HIGH', volume: '12.8 MB', resource: 'Meter readings', time: '07:52:10', reason: 'Unapproved export of metering records', destination: 'Unapproved external endpoint', stages: [
    { title: 'Unexpected service access', detail: 'A service account accesses the metering concentrator beyond its usual schedule.' },
    { title: 'Meter records queried', detail: 'The account queries readings from multiple meter groups rather than a single assigned group.' },
    { title: 'Readings aggregated', detail: 'Meter readings are assembled into an export payload containing customer usage patterns.' },
    { title: 'Export attempt flagged', detail: 'The export targets an unapproved endpoint. The alert indicates suspected data theft, not confirmed delivery.' },
  ] },
  { id: 'SIM-003', environment: 'SCADA', site: 'West control center', asset: 'Engineering workstation E-03', actor: 'engineering_account', risk: 'MEDIUM', volume: '6.4 MB', resource: 'Configuration records', time: '07:49:00', reason: 'Unusually high resource-read activity', destination: 'Internal staging folder', stages: [
    { title: 'Engineering session opened', detail: 'An engineering account opens a session to the control-center workstation.' },
    { title: 'Configuration reads spike', detail: 'Configuration reads exceed the account’s usual baseline.' },
    { title: 'Local collection observed', detail: 'Records are collected in an internal staging folder. Legitimate maintenance remains a possible explanation.' },
    { title: 'Review required', detail: 'No external transfer is evidenced in this scenario. Validate the maintenance schedule before escalating.' },
  ] },
] as const;
export function filterInvestigations(environment: Environment, risk: string, query: string) {
  const term = query.trim().toLowerCase();
  return investigations.filter(item => (environment === 'All' || item.environment === environment) && (risk === 'All' || item.risk === risk) && `${item.site} ${item.asset} ${item.actor} ${item.id}`.toLowerCase().includes(term));
}