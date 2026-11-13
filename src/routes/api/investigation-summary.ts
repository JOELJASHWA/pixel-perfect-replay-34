import { createFileRoute } from '@tanstack/react-router';
import { handleInvestigationSummary } from '@/lib/investigation-summary.server';

export const Route = createFileRoute('/api/investigation-summary')({
  server: { handlers: { POST: ({ request }) => handleInvestigationSummary(request) } },
});
