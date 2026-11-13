import { useRef, useState } from 'react';
import { Copy, LoaderCircle, Sparkles, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { investigationSummaryInput } from '@/lib/investigation-summary';

export function InvestigationSummary() {
  const [alert, setAlert] = useState('');
  const [notes, setNotes] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const abort = useRef<AbortController | null>(null);
  async function generate(event: React.FormEvent) {
    event.preventDefault();
    const parsed = investigationSummaryInput.safeParse({ alert, notes });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? 'Check your input.'); return; }
    setError(''); setSummary(''); setStatus(''); setBusy(true);
    const controller = new AbortController(); abort.current = controller;
    try {
      const response = await fetch('/api/investigation-summary', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data), signal: controller.signal });
      if (!response.ok) throw new Error(await response.text());
      if (!response.body) throw new Error('The AI service returned no summary.');
      const reader = response.body.getReader(); const decoder = new TextDecoder(); let buffer = '';
      while (true) {
        const { value, done } = await reader.read();
        buffer += decoder.decode(value, { stream: !done });
        const lines = buffer.split('\n'); buffer = lines.pop() ?? '';
        for (const line of lines) {
          if (!line.trim()) continue;
          const data = JSON.parse(line) as { type: string; text?: string; message?: string };
          if (data.type === 'text') setSummary(current => current + (data.text ?? ''));
          if (data.type === 'error') throw new Error(data.message ?? 'The AI service could not complete this request.');
          if (data.type === 'done') setStatus('Summary complete');
        }
        if (done) break;
      }
    } catch (failure) {
      if (controller.signal.aborted) setStatus('Generation stopped');
      else setError(failure instanceof Error ? failure.message : 'Summary generation failed.');
    } finally { setBusy(false); abort.current = null; }
  }
  return <section className="ai-investigation" aria-labelledby="ai-investigation-title">
    <div className="ai-investigation-heading"><div><p className="eyebrow">Operator workspace</p><h2 id="ai-investigation-title">AI investigation summary</h2></div><Sparkles className="size-5 text-primary" aria-hidden="true" /></div>
    <form onSubmit={generate} className="ai-investigation-form">
      <div className="ai-investigation-inputs">
        <label className="ai-investigation-field"><span>Detection alert</span><Textarea aria-label="Detection alert" required maxLength={12000} value={alert} onChange={event => setAlert(event.target.value)} disabled={busy} placeholder="Alert ID, environment, affected asset, observed activity and risk…" /></label>
        <label className="ai-investigation-field"><span>Investigation notes</span><Textarea aria-label="Investigation notes" required maxLength={16000} value={notes} onChange={event => setNotes(event.target.value)} disabled={busy} placeholder="Evidence reviewed, timestamps, known context and unanswered questions…" /></label>
      </div>
      <div className="ai-investigation-actions"><Button variant="investigation" type="submit" disabled={busy}>{busy ? <LoaderCircle className="animate-spin" /> : <Sparkles />}{busy ? 'Generating summary…' : 'Generate summary'}</Button>{busy && <Button variant="outline" type="button" onClick={() => abort.current?.abort()}><Square />Stop</Button>}<p>AI-assisted · Operator verification required</p></div>
    </form>
    {error && <p className="ai-investigation-error" role="alert">{error}</p>}
    {(summary || busy) && <div className="ai-investigation-output" aria-busy={busy}><div className="ai-investigation-heading"><h3>Investigation summary</h3>{summary && !busy && <Button variant="ghost" size="icon" title="Copy summary" aria-label="Copy summary" onClick={async () => { try { await navigator.clipboard.writeText(summary); setStatus('Summary copied'); } catch { setError('Unable to copy the summary.'); } }}><Copy /></Button>}</div><div className="ai-investigation-text">{summary || 'Reviewing alert and investigation notes…'}</div></div>}
    {status && <p className="ai-investigation-status" role="status">{status}</p>}
  </section>;
}
