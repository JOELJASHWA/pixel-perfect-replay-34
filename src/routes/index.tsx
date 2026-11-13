import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Building2, Gauge, Globe, Pause, Play, RotateCcw, ShieldAlert, X } from "lucide-react";
import { filterInvestigations, type Environment } from "@/lib/investigation";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Overview & Investigation · SmartGrid Sentinel" },
    { name: "description", content: "Explore AMI and SCADA alerts and replay fictional data-theft scenarios across grid locations." },
    { property: "og:title", content: "Overview & Investigation · SmartGrid Sentinel" },
    { property: "og:description", content: "Explore suspected data-theft paths, affected assets, and synthetic incident evidence." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "className": "dark", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [phone, setPhone] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => { setPhone(media.matches); setSidebarOpen(!media.matches); };
    update(); media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setSidebarOpen(false); triggerRef.current?.focus(); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"flex min-h-svh w-full \x68as-[[\x64ata-variant=\x69nset]]:\x62g-sidebar"} style={{ "--sidebar-width": "16rem", "--sidebar-width-icon": "3rem" } as CSSProperties}>
        <div className="flex min-h-screen w-full">
          {phone && sidebarOpen && <Button className="sidebar-dismiss" aria-label="Close navigation" onClick={() => { setSidebarOpen(false); triggerRef.current?.focus(); }} variant="ghost" />}
          <div className={"import-sidebar group peer hidden text-sidebar-foreground \x6dd:\x62lock"} data-state={sidebarOpen ? "expanded" : "collapsed"} role={phone && sidebarOpen ? "dialog" : undefined} aria-label="Navigation" data-variant="sidebar" data-side="left">
            <div className={"relative \x77-(\x2d-sidebar-width) bg-transparent transition-[width] duration-200 ease-linear \x67roup-data-[\x63ollapsible=\x6fffcanvas]:\x77-0 \x67roup-data-[\x73ide=\x72ight]:\x72otate-180 \x67roup-data-[\x63ollapsible=\x69con]:\x77-(\x2d-sidebar-width-icon)"} />
            <div className={"fixed \x69nset-y-0 z-10 hidden h-svh \x77-(\x2d-sidebar-width) transition-[left,right,width] duration-200 ease-linear \x6dd:\x66lex left-0 \x67roup-data-[\x63ollapsible=\x6fffcanvas]:\x6ceft-[\x63alc(\x76ar(\x2d-sidebar-width)*\x2d1)] \x67roup-data-[\x63ollapsible=\x69con]:\x77-(\x2d-sidebar-width-icon) \x67roup-data-[\x73ide=\x6ceft]:\x62order-r \x67roup-data-[\x73ide=\x72ight]:\x62order-l \x62order-sidebar-border"}>
              <div className={"flex h-full w-full flex-col \x62g-sidebar \x67roup-data-[\x76ariant=\x66loating]:\x72ounded-lg \x67roup-data-[\x76ariant=\x66loating]:\x62order \x67roup-data-[\x76ariant=\x66loating]:\x62order-sidebar-border \x67roup-data-[\x76ariant=\x66loating]:\x73hadow"} data-sidebar="sidebar">
                <div className={"flex flex-col gap-2 p-2 \x62order-b \x62order-sidebar-border px-3 py-3"} data-sidebar="header">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className={"flex size-8 shrink-0 items-center justify-center rounded-md \x62order \x62order-primary/\x340 \x62g-primary/\x310 text-primary"}>
                      <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="M12 22V2" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <p className="truncate text-sm font-semibold text-sidebar-accent-foreground">SmartGrid Sentinel</p>
                      <p className="truncate text-[10.5px] text-muted-foreground">AMI &amp; SCADA theft detection</p>
                    </div>
                  </div>
                </div>
                <div className={"flex min-h-0 flex-1 flex-col gap-2 overflow-auto \x67roup-data-[\x63ollapsible=\x69con]:\x6fverflow-hidden py-2"} data-sidebar="content">
                  <div className="relative flex w-full min-w-0 flex-col p-2" data-sidebar="group">
                    <div className={"flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium \x74ext-sidebar-foreground/\x370 \x6futline-none \x72ing-sidebar-ring transition-[margin,opacity] duration-200 ease-linear \x66ocus-visible:\x72ing-2 [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x67roup-data-[\x63ollapsible=\x69con]:\x2dmt-8 \x67roup-data-[\x63ollapsible=\x69con]:\x6fpacity-0 eyebrow"} data-sidebar="group-label">Monitor</div>
                    <div className="w-full text-sm" data-sidebar="group-content">
                      <ul className="flex w-full min-w-0 flex-col gap-1" data-sidebar="menu">
                        <li className="group/menu-item relative" data-sidebar="menu-item">
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} aria-current="page" data-active="true" data-sidebar="menu-button" data-size="default" data-state="closed" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width="7" height="9" x="3" y="3" rx="1" />
                              <rect width="7" height="5" x="14" y="3" rx="1" />
                              <rect width="7" height="9" x="14" y="12" rx="1" />
                              <rect width="7" height="5" x="3" y="16" rx="1" />
                            </svg>
                            <span>Overview</span>
                          </a>
                        </li>
                        <li className="group/menu-item relative" data-sidebar="menu-item">
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} data-sidebar="menu-button" data-size="default" data-state="closed" href="/ami">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m12 14 4-4" />
                              <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                            </svg>
                            <span>AMI Monitoring</span>
                          </a>
                        </li>
                        <li className="group/menu-item relative" data-sidebar="menu-item">
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} data-sidebar="menu-button" data-size="default" data-state="closed" href="/scada">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 20v2" />
                              <path d="M12 2v2" />
                              <path d="M17 20v2" />
                              <path d="M17 2v2" />
                              <path d="M2 12h2" />
                              <path d="M2 17h2" />
                              <path d="M2 7h2" />
                              <path d="M20 12h2" />
                              <path d="M20 17h2" />
                              <path d="M20 7h2" />
                              <path d="M7 20v2" />
                              <path d="M7 2v2" />
                              <rect x="4" y="4" width="16" height="16" rx="2" />
                              <rect x="8" y="8" width="8" height="8" rx="1" />
                            </svg>
                            <span>SCADA Monitoring</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex w-full min-w-0 flex-col p-2" data-sidebar="group">
                    <div className={"flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium \x74ext-sidebar-foreground/\x370 \x6futline-none \x72ing-sidebar-ring transition-[margin,opacity] duration-200 ease-linear \x66ocus-visible:\x72ing-2 [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x67roup-data-[\x63ollapsible=\x69con]:\x2dmt-8 \x67roup-data-[\x63ollapsible=\x69con]:\x6fpacity-0 eyebrow"} data-sidebar="group-label">Investigate</div>
                    <div className="w-full text-sm" data-sidebar="group-content">
                      <ul className="flex w-full min-w-0 flex-col gap-1" data-sidebar="menu">
                        <li className="group/menu-item relative" data-sidebar="menu-item">
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} data-sidebar="menu-button" data-size="default" data-state="closed" href="/alerts">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
                              <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
                              <path d="M21 12h1" />
                              <path d="M18.5 4.5 18 5" />
                              <path d="M2 12h1" />
                              <path d="M12 2v1" />
                              <path d="m4.929 4.929.707.707" />
                              <path d="M12 12v6" />
                            </svg>
                            <span>Detection Alerts</span>
                          </a>
                        </li>
                        <li className="group/menu-item relative" data-sidebar="menu-item">
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} data-sidebar="menu-button" data-size="default" data-state="closed" href="/events">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M8 5h13" />
                              <path d="M13 12h8" />
                              <path d="M13 19h8" />
                              <path d="M3 10a2 2 0 0 0 2 2h3" />
                              <path d="M3 5v12a2 2 0 0 0 2 2h3" />
                            </svg>
                            <span>Event Explorer</span>
                          </a>
                        </li>
                        <li className="group/menu-item relative" data-sidebar="menu-item">
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} data-sidebar="menu-button" data-size="default" data-state="closed" href="/explainability">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                              <circle cx="12" cy="12" r="3" />
                              <path d="m16 16-1.9-1.9" />
                            </svg>
                            <span>Explainability</span>
                          </a>
                        </li>
                        <li className="group/menu-item relative" data-sidebar="menu-item">
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} data-sidebar="menu-button" data-size="default" data-state="closed" href="/analytics">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                              <path d="M18 17V9" />
                              <path d="M13 17V5" />
                              <path d="M8 17v-3" />
                            </svg>
                            <span>Dataset Analytics</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex w-full min-w-0 flex-col p-2" data-sidebar="group">
                    <div className={"flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium \x74ext-sidebar-foreground/\x370 \x6futline-none \x72ing-sidebar-ring transition-[margin,opacity] duration-200 ease-linear \x66ocus-visible:\x72ing-2 [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x67roup-data-[\x63ollapsible=\x69con]:\x2dmt-8 \x67roup-data-[\x63ollapsible=\x69con]:\x6fpacity-0 eyebrow"} data-sidebar="group-label">System</div>
                    <div className="w-full text-sm" data-sidebar="group-content">
                      <ul className="flex w-full min-w-0 flex-col gap-1" data-sidebar="menu">
                        <li className="group/menu-item relative" data-sidebar="menu-item">
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} data-sidebar="menu-button" data-size="default" data-state="closed" href="/settings">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span>System Settings</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={"flex flex-col gap-2 \x62order-t \x62order-sidebar-border p-3"} data-sidebar="footer">
                  <div className={"rounded-md \x62order \x62order-dashed \x62order-synthetic/\x335 px-2.5 py-2 text-[11px] leading-relaxed text-muted-foreground"}>
                    <p className="flex items-center gap-1.5 font-medium text-synthetic"><svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg> Research prototype</p>
                    <p className="mt-0.5">Synthetic data only. Monitoring view — no control actions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className={"relative flex w-full flex-1 flex-col \x6dd:\x70eer-data-[\x76ariant=\x69nset]:\x6d-2 \x6dd:\x70eer-data-[\x73tate=\x63ollapsed]:\x70eer-data-[\x76ariant=\x69nset]:\x6dl-2 \x6dd:\x70eer-data-[\x76ariant=\x69nset]:\x6dl-0 \x6dd:\x70eer-data-[\x76ariant=\x69nset]:\x72ounded-xl \x6dd:\x70eer-data-[\x76ariant=\x69nset]:\x73hadow min-w-0 bg-background"}>
            <ImportedHeader expanded={sidebarOpen} triggerRef={triggerRef} onToggle={() => setSidebarOpen(open => !open)} />
            <div className={"mx-auto w-full max-w-[1600px] flex-1 \x73pace-y-5 px-4 py-5 md:px-6"}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="min-w-0 max-w-3xl">
                  <p className="eyebrow mb-1.5">Security operations · Research prototype</p>
                  <h1 className="text-xl font-semibold tracking-tight text-foreground">Overview</h1>
                  <p className="mt-1 text-sm text-muted-foreground">Explainable AMI &amp; SCADA data theft detection. Captured research records and fictional investigation scenarios. No live grid connection.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className={"inline-flex items-center rounded-md \x62order px-2 py-0.5 text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x62order-dashed \x62order-synthetic/\x345 bg-transparent text-synthetic gap-1"}><svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg>Synthetic data</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
                <div className="panel px-4 py-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="eyebrow">Dataset records</p>
                    <span className={"[&\x5fsvg]:\x73ize-4 text-muted-foreground"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                        <path d="M3 12A9 3 0 0 0 21 12" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-2 font-mono text-2xl font-medium tabular text-foreground">650</div>
                  <p className="mt-1 text-xs text-muted-foreground">Synthetic events</p>
                </div>
                <div className="panel px-4 py-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="eyebrow">AMI records</p>
                    <span className={"[&\x5fsvg]:\x73ize-4 text-primary"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m12 14 4-4" />
                        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-2 font-mono text-2xl font-medium tabular text-foreground">325</div>
                  <p className="mt-1 text-xs text-muted-foreground">Smart-metering</p>
                </div>
                <div className="panel px-4 py-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="eyebrow">SCADA records</p>
                    <span className={"[&\x5fsvg]:\x73ize-4 text-info"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 20v2" />
                        <path d="M12 2v2" />
                        <path d="M17 20v2" />
                        <path d="M17 2v2" />
                        <path d="M2 12h2" />
                        <path d="M2 17h2" />
                        <path d="M2 7h2" />
                        <path d="M20 12h2" />
                        <path d="M20 17h2" />
                        <path d="M20 7h2" />
                        <path d="M7 20v2" />
                        <path d="M7 2v2" />
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="8" y="8" width="8" height="8" rx="1" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-2 font-mono text-2xl font-medium tabular text-foreground">325</div>
                  <p className="mt-1 text-xs text-muted-foreground">Operational telemetry</p>
                </div>
                <div className="panel px-4 py-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="eyebrow">Detection alerts</p>
                    <span className={"[&\x5fsvg]:\x73ize-4 text-muted-foreground"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
                        <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
                        <path d="M21 12h1" />
                        <path d="M18.5 4.5 18 5" />
                        <path d="M2 12h1" />
                        <path d="M12 2v1" />
                        <path d="m4.929 4.929.707.707" />
                        <path d="M12 12v6" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-2 font-mono text-2xl font-medium tabular text-foreground">170</div>
                  <p className="mt-1 text-xs text-muted-foreground">Rule-based, from /detect</p>
                </div>
                <div className="panel px-4 py-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="eyebrow">High risk</p>
                    <span className={"[&\x5fsvg]:\x73ize-4 text-risk-high"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-2 font-mono text-2xl font-medium tabular text-foreground">70</div>
                  <p className="mt-1 text-xs text-muted-foreground">Needs review</p>
                </div>
                <div className="panel px-4 py-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="eyebrow">Medium risk</p>
                    <span className={"[&\x5fsvg]:\x73ize-4 text-risk-medium"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-2 font-mono text-2xl font-medium tabular text-foreground">100</div>
                  <p className="mt-1 text-xs text-muted-foreground">Needs review</p>
                </div>
              </div>
              <TheftInvestigation />
              <div className="grid gap-4 lg:grid-cols-2">
                <ImportedSectionAMIVsSCADAEvents />
                <ImportedSectionGroundTruthScenarioDistribution />
              </div>
              <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_22rem]">
                <ImportedSectionRecentDetectionEvents />
                <ImportedSectionBackendConnection />
              </div>
            </div>
          </main>
        </div>
      </div>
      <span style={{ position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre" } as CSSProperties} id="recharts_measurement_span" aria-hidden="true">0</span>
    </>
  );
}

function ImportedHeader({ expanded, onToggle, triggerRef }: { expanded: boolean; onToggle: () => void; triggerRef: React.RefObject<HTMLButtonElement | null> }) {
  const [updated, setUpdated] = useState('Captured snapshot');
  return <header className="sticky top-0 z-20 flex h-12 items-center gap-3 border-b border-border bg-background px-3">
    <Button ref={triggerRef} variant="ghost" size="icon" aria-label="Toggle Sidebar" aria-expanded={expanded} onClick={onToggle}><Building2 /></Button>
    <span className="investigation-badge"><Activity className="size-3" />Synthetic snapshot</span>
    <span className="ml-auto text-xs text-muted-foreground" role="status">{updated}</span>
    <Button variant="investigation" size="sm" onClick={() => setUpdated(`Reviewed ${new Date().toLocaleTimeString()}`)}><RotateCcw />Refresh</Button>
  </header>;
}

function ImportedSectionAMIVsSCADAEvents() {
  return (
    <section className="panel flex min-w-0 flex-col">
      <header className={"flex flex-wrap items-start justify-between gap-3 \x62order-b \x62order-border px-4 py-3"}>
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-foreground">AMI vs SCADA events</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">Event distribution by source environment</p>
        </div>
      </header>
      <div className="flex-1 p-4">
        <div className={"flex flex-col items-center gap-4 \x73m:\x66lex-row"}>
          <div className="import-donut relative shrink-0 [@media(width_>=_1024px)]:float-left">
            <div style={{ width: "100%", height: "100%", minWidth: "0px" }}>
              <div className="max-h-[220px]" style={{ position: "relative", cursor: "default", width: "100%", height: "100%", maxWidth: "220px" }}>
                <svg className="recharts-surface" style={{ width: "100%", height: "100%" }} cx="50%" cy="50%" width="220" height="220" viewBox="0 0 220 220">
                  <title />
                  <desc />
                  <defs>
                    <clipPath id="recharts1-clip">
                      <rect x="5" y="5" height="210" width="210" />
                    </clipPath>
                  </defs>
                  <g className="recharts-layer" tabIndex={0}>
                    <g className="recharts-layer" tabIndex={-1}>
                      <path className="recharts-sector" cx="110" cy="110" stroke="none" fill="var(--chart-1)" tabIndex={-1} d={"M 207,110\n    A 97,97,0,\n    0,0,\n    13.01477356983004,108.3071165755835\n  L 42.0103567293654,108.81323636226473\n            A 68,68,0,\n            0,1,\n            178,110 Z"} role="img" {...({ name: "AMI" } as any)} />
                    </g>
                    <g className="recharts-layer" tabIndex={-1}>
                      <path className="recharts-sector" cx="110" cy="110" stroke="none" fill="var(--chart-2)" tabIndex={-1} d={"M 13,109.99999999999999\n    A 97,97,0,\n    0,0,\n    206.98522643016997,111.69288342441651\n  L 177.9896432706346,111.18676363773528\n            A 68,68,0,\n            0,1,\n            42,109.99999999999999 Z"} role="img" {...({ name: "SCADA" } as any)} />
                    </g>
                  </g>
                </svg>
                <div style={{ visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px" }} tabIndex={-1} />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-xl">650</span>
              <span className="eyebrow">Total</span>
            </div>
          </div>
          <div className={"w-full \x73pace-y-2"}>
            <div className="flex items-center gap-2 text-xs">
              <span className="size-2 rounded-sm bg-primary" />
              <span>AMI</span>
              <span className="ml-auto font-mono text-muted-foreground">325 · 50.0%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="size-2 rounded-sm bg-info" />
              <span>SCADA</span>
              <span className="ml-auto font-mono text-muted-foreground">325 · 50.0%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionGroundTruthScenarioDistribution() {
  return (
    <section className="panel flex min-w-0 flex-col">
      <header className={"flex flex-wrap items-start justify-between gap-3 \x62order-b \x62order-border px-4 py-3"}>
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-foreground">Ground-truth scenario distribution</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">Synthetic reference labels — shown for context, never used by the detector</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className={"inline-flex items-center rounded-md \x62order px-2 py-0.5 text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x62order-dashed \x62order-synthetic/\x345 bg-transparent text-synthetic gap-1"}><svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg>Reference only</div>
        </div>
      </header>
      <div className="flex-1 p-4">
        <div className="import-bars">
          <div style={{ width: "100%", height: "100%", minWidth: "0px" }}>
            <div className="max-h-[230px]" style={{ position: "relative", cursor: "default", width: "100%", height: "100%", maxWidth: "569px" }}>
              <svg className="recharts-surface" style={{ width: "100%", height: "100%" }} width="569" height="230" viewBox="0 0 569 230">
                <title />
                <desc />
                <defs>
                  <clipPath id="recharts3-clip">
                    <rect x="0" y="0" height="230" width="545" />
                  </clipPath>
                </defs>
                <g className="recharts-cartesian-grid">
                  <g>
                    <line stroke="var(--grid-line)" fill="none" x="0" y="0" width="545" height="230" x1="136.25" y1="0" x2="136.25" y2="230" />
                    <line stroke="var(--grid-line)" fill="none" x="0" y="0" width="545" height="230" x1="272.5" y1="0" x2="272.5" y2="230" />
                    <line stroke="var(--grid-line)" fill="none" x="0" y="0" width="545" height="230" x1="408.75" y1="0" x2="408.75" y2="230" />
                    <line stroke="var(--grid-line)" fill="none" x="0" y="0" width="545" height="230" x1="545" y1="0" x2="545" y2="230" />
                    <line stroke="var(--grid-line)" fill="none" x="0" y="0" width="545" height="230" x1="0" y1="0" x2="0" y2="230" />
                  </g>
                </g>
                <g className="recharts-layer">
                  <g className="recharts-layer">
                    <g className="recharts-layer">
                      <path className="recharts-rectangle" x="0" y="3.833333333333334" width="545" height="30" fill="var(--chart-1)" d={"M 0,5.833333333333334\n            A 2,2,0,0,1,2,3.833333333333334\n            L 543,3.833333333333334\n            A 2,2,0,0,1,545,5.833333333333334\n            L 545,31.833333333333336\n            A 2,2,0,0,1,543,33.833333333333336\n            L 2,33.833333333333336\n            A 2,2,0,0,1,0,31.833333333333336 Z"} {...({ radius: "2", name: "normal" } as any)} />
                    </g>
                    <g className="recharts-layer">
                      <path className="recharts-rectangle" x="0" y="42.16666666666667" width="109" height="30" fill="var(--chart-2)" d={"M 0,44.16666666666667\n            A 2,2,0,0,1,2,42.16666666666667\n            L 107,42.16666666666667\n            A 2,2,0,0,1,109,44.16666666666667\n            L 109,70.16666666666667\n            A 2,2,0,0,1,107,72.16666666666667\n            L 2,72.16666666666667\n            A 2,2,0,0,1,0,70.16666666666667 Z"} {...({ radius: "2", name: "normal_maintenance" } as any)} />
                    </g>
                    <g className="recharts-layer">
                      <path className="recharts-rectangle" x="0" y="80.5" width="40.875" height="30" fill="var(--chart-3)" d={"M 0,82.5\n            A 2,2,0,0,1,2,80.5\n            L 38.875,80.5\n            A 2,2,0,0,1,40.875,82.5\n            L 40.875,108.5\n            A 2,2,0,0,1,38.875,110.5\n            L 2,110.5\n            A 2,2,0,0,1,0,108.5 Z"} {...({ radius: "2", name: "unauthorized_access" } as any)} />
                    </g>
                    <g className="recharts-layer">
                      <path className="recharts-rectangle" x="0" y="118.83333333333333" width="81.75" height="30" fill="var(--chart-4)" d={"M 0,120.83333333333333\n            A 2,2,0,0,1,2,118.83333333333333\n            L 79.75,118.83333333333333\n            A 2,2,0,0,1,81.75,120.83333333333333\n            L 81.75,146.83333333333331\n            A 2,2,0,0,1,79.75,148.83333333333331\n            L 2,148.83333333333331\n            A 2,2,0,0,1,0,146.83333333333331 Z"} {...({ radius: "2", name: "unauthorized_collection" } as any)} />
                    </g>
                    <g className="recharts-layer">
                      <path className="recharts-rectangle" x="0" y="157.16666666666669" width="54.5" height="30" fill="var(--chart-5)" d={"M 0,159.16666666666669\n            A 2,2,0,0,1,2,157.16666666666669\n            L 52.5,157.16666666666669\n            A 2,2,0,0,1,54.5,159.16666666666669\n            L 54.5,185.16666666666669\n            A 2,2,0,0,1,52.5,187.16666666666669\n            L 2,187.16666666666669\n            A 2,2,0,0,1,0,185.16666666666669 Z"} {...({ radius: "2", name: "attempted_exfiltration" } as any)} />
                    </g>
                    <g className="recharts-layer">
                      <path className="recharts-rectangle" x="0" y="195.50000000000003" width="54.5" height="30" fill="var(--chart-6)" d={"M 0,197.50000000000003\n            A 2,2,0,0,1,2,195.50000000000003\n            L 52.5,195.50000000000003\n            A 2,2,0,0,1,54.5,197.50000000000003\n            L 54.5,223.50000000000003\n            A 2,2,0,0,1,52.5,225.50000000000003\n            L 2,225.50000000000003\n            A 2,2,0,0,1,0,223.50000000000003 Z"} {...({ radius: "2", name: "confirmed_simulated_transfer" } as any)} />
                    </g>
                  </g>
                  <g className="recharts-layer" />
                </g>
              </svg>
              <div style={{ visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px" }} tabIndex={-1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionRecentDetectionEvents() {
  return (
    <section className="panel flex min-w-0 flex-col">
      <header className={"flex flex-wrap items-start justify-between gap-3 \x62order-b \x62order-border px-4 py-3"}>
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-foreground">Recent detection events</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">Latest rule-based alerts. An alert flags a pattern for review; it is not confirmed data theft.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 text-xs text-primary"} href="/alerts">View all alerts</a>
        </div>
      </header>
      <div className="flex-1 p-0">
        <div className="min-w-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className={"\x62order-b \x62order-border"}>
                  <th className="eyebrow whitespace-nowrap px-3 py-2 font-medium first:pl-4 last:pr-4">Event ID</th>
                  <th className="eyebrow whitespace-nowrap px-3 py-2 font-medium first:pl-4 last:pr-4">Timestamp</th>
                  <th className="eyebrow whitespace-nowrap px-3 py-2 font-medium first:pl-4 last:pr-4">Env</th>
                  <th className="eyebrow whitespace-nowrap px-3 py-2 font-medium first:pl-4 last:pr-4">User</th>
                  <th className="eyebrow whitespace-nowrap px-3 py-2 font-medium first:pl-4 last:pr-4">Risk</th>
                  <th className="eyebrow whitespace-nowrap px-3 py-2 font-medium first:pl-4 last:pr-4">Primary reason</th>
                </tr>
              </thead>
              <tbody>
                <tr className={"\x62order-b \x62order-border/\x370"}>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">EVT-00650</td>
                  <td className="px-3 py-2.5 text-xs font-mono text-muted-foreground whitespace-nowrap">2026-11-12 07:55:10</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-environment-badge">SCADA</span>
                  </td>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">compromised_operator</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-risk-high">HIGH</span>
                  </td>
                  <td className="max-w-[22rem] px-3 py-2.5 text-xs">
                    <span className="block truncate text-muted-foreground" title="Transfer attempted to an unapproved destination; Large outbound data volume to an unapproved destination">Transfer attempted to an unapproved destination</span>
                  </td>
                </tr>
                <tr className={"\x62order-b \x62order-border/\x370"}>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">EVT-00649</td>
                  <td className="px-3 py-2.5 text-xs font-mono text-muted-foreground whitespace-nowrap">2026-11-12 07:55:00</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-environment-badge">SCADA</span>
                  </td>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">compromised_operator</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-risk-medium">MEDIUM</span>
                  </td>
                  <td className="max-w-[22rem] px-3 py-2.5 text-xs">
                    <span className="block truncate text-muted-foreground" title="Unusually high resource-read activity">Unusually high resource-read activity</span>
                  </td>
                </tr>
                <tr className={"\x62order-b \x62order-border/\x370"}>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">EVT-00648</td>
                  <td className="px-3 py-2.5 text-xs font-mono text-muted-foreground whitespace-nowrap">2026-11-12 07:52:10</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-environment-badge">SCADA</span>
                  </td>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">compromised_operator</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-risk-high">HIGH</span>
                  </td>
                  <td className="max-w-[22rem] px-3 py-2.5 text-xs">
                    <span className="block truncate text-muted-foreground" title="Transfer attempted to an unapproved destination; Large outbound data volume to an unapproved destination">Transfer attempted to an unapproved destination</span>
                  </td>
                </tr>
                <tr className={"\x62order-b \x62order-border/\x370"}>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">EVT-00647</td>
                  <td className="px-3 py-2.5 text-xs font-mono text-muted-foreground whitespace-nowrap">2026-11-12 07:52:00</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-environment-badge">SCADA</span>
                  </td>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">compromised_operator</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-risk-medium">MEDIUM</span>
                  </td>
                  <td className="max-w-[22rem] px-3 py-2.5 text-xs">
                    <span className="block truncate text-muted-foreground" title="Unusually high resource-read activity">Unusually high resource-read activity</span>
                  </td>
                </tr>
                <tr className={"\x62order-b \x62order-border/\x370"}>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">EVT-00646</td>
                  <td className="px-3 py-2.5 text-xs font-mono text-muted-foreground whitespace-nowrap">2026-11-12 07:49:10</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-environment-badge">SCADA</span>
                  </td>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">compromised_operator</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-risk-high">HIGH</span>
                  </td>
                  <td className="max-w-[22rem] px-3 py-2.5 text-xs">
                    <span className="block truncate text-muted-foreground" title="Transfer attempted to an unapproved destination; Large outbound data volume to an unapproved destination">Transfer attempted to an unapproved destination</span>
                  </td>
                </tr>
                <tr className={"\x62order-b \x62order-border/\x370"}>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">EVT-00645</td>
                  <td className="px-3 py-2.5 text-xs font-mono text-muted-foreground whitespace-nowrap">2026-11-12 07:49:00</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-environment-badge">SCADA</span>
                  </td>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">compromised_operator</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-risk-medium">MEDIUM</span>
                  </td>
                  <td className="max-w-[22rem] px-3 py-2.5 text-xs">
                    <span className="block truncate text-muted-foreground" title="Unusually high resource-read activity">Unusually high resource-read activity</span>
                  </td>
                </tr>
                <tr className={"\x62order-b \x62order-border/\x370"}>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">EVT-00644</td>
                  <td className="px-3 py-2.5 text-xs font-mono text-muted-foreground whitespace-nowrap">2026-11-12 07:46:10</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-environment-badge">SCADA</span>
                  </td>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">compromised_operator</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-risk-high">HIGH</span>
                  </td>
                  <td className="max-w-[22rem] px-3 py-2.5 text-xs">
                    <span className="block truncate text-muted-foreground" title="Transfer attempted to an unapproved destination; Large outbound data volume to an unapproved destination">Transfer attempted to an unapproved destination</span>
                  </td>
                </tr>
                <tr className={"\x62order-b \x62order-border/\x370"}>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">EVT-00643</td>
                  <td className="px-3 py-2.5 text-xs font-mono text-muted-foreground whitespace-nowrap">2026-11-12 07:46:00</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-environment-badge">SCADA</span>
                  </td>
                  <td className="px-3 py-2.5 text-xs font-mono whitespace-nowrap">compromised_operator</td>
                  <td className="px-3 py-2.5 text-xs">
                    <span className="import-risk-medium">MEDIUM</span>
                  </td>
                  <td className="max-w-[22rem] px-3 py-2.5 text-xs">
                    <span className="block truncate text-muted-foreground" title="Unusually high resource-read activity">Unusually high resource-read activity</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between px-4 py-3 text-xs text-muted-foreground">
            <span>1–8 of 8</span>
            <span>‹　1 / 1　›</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionBackendConnection() {
  return (
    <section className="panel flex min-w-0 flex-col">
      <header className={"flex flex-wrap items-start justify-between gap-3 \x62order-b \x62order-border px-4 py-3"}>
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-foreground">Captured source connection</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <svg className="size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
          </svg>
        </div>
      </header>
      <div className="flex-1 p-4">
        <div className={"\x73pace-y-4"}>
          <span className="flex items-center gap-2 text-xs">
            <span className={"relative inline-block size-2 rounded-full \x62g-current text-success"} />
            <span className="font-medium text-muted-foreground">Import-time snapshot · not live</span>
          </span>
          <dl className={"\x64ivide-y \x64ivide-border text-sm"}>
            <div className="grid grid-cols-[minmax(0,10rem)_1fr] gap-3 py-2">
              <dt className="truncate font-mono text-xs text-muted-foreground">Base URL</dt>
              <dd className={"min-w-0 \x62reak-words font-mono text-xs text-foreground"}>https://smart-grid-sentinel-backend.onrender.com</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,10rem)_1fr] gap-3 py-2">
              <dt className="truncate font-mono text-xs text-muted-foreground">Health latency</dt>
              <dd className={"min-w-0 \x62reak-words font-mono text-xs text-foreground"}>42630 ms</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,10rem)_1fr] gap-3 py-2">
              <dt className="truncate font-mono text-xs text-muted-foreground">health.status</dt>
              <dd className="font-mono text-xs text-foreground">healthy</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,10rem)_1fr] gap-3 py-2">
              <dt className="truncate font-mono text-xs text-muted-foreground">health.dataset_loaded</dt>
              <dd className="font-mono text-xs text-foreground">true</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,10rem)_1fr] gap-3 py-2">
              <dt className="truncate font-mono text-xs text-muted-foreground">health.total_records</dt>
              <dd className="font-mono text-xs text-foreground">650</dd>
            </div>
          </dl>
          <p className="text-[11px] leading-relaxed text-muted-foreground">Monitoring and analysis only. This dashboard sends no blocking or control commands to grid infrastructure.</p>
        </div>
      </div>
    </section>
  );
}


function TheftInvestigation() {
  const [environment, setEnvironment] = useState<Environment>('All');
  const [risk, setRisk] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('SIM-001');
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const visible = filterInvestigations(environment, risk, query);
  const selected = visible.find(item => item.id === selectedId) ?? visible[0];
  const select = (id: string) => { setSelectedId(id); setStep(0); setPlaying(false); };
  useEffect(() => { setStep(0); setPlaying(false); }, [environment, risk, query]);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setStep(current => { if (current >= 3) { setPlaying(false); return 3; } return current + 1; }), 1600);
    return () => window.clearInterval(timer);
  }, [playing]);
  const icons = [Building2, Gauge, Activity];
  return <section className="investigation" aria-label="Theft investigation">
    <div className="investigation-heading">
      <div><p className="eyebrow mb-1">Incident intelligence</p><h2 className="investigation-title">Where it happens. How it unfolds.</h2><p className="investigation-note">Suspected data theft across AMI & SCADA — not electricity theft.</p></div>
      <span className="investigation-badge"><ShieldAlert className="size-3" />Fictional locations & evidence · simulation</span>
    </div>
    <div className="investigation-filters">
      <div className="investigation-segments" aria-label="Environment filter">{(['All', 'AMI', 'SCADA'] as const).map(env => <Button key={env} size="sm" variant="investigation" data-active={environment === env} aria-pressed={environment === env} onClick={() => setEnvironment(env)}>{env === 'All' ? 'All environments' : env}</Button>)}</div>
      <select className="investigation-control" aria-label="Risk filter" value={risk} onChange={e => setRisk(e.target.value)}><option value="All">All risk levels</option><option value="HIGH">High risk</option><option value="MEDIUM">Medium risk</option></select>
      <input className="investigation-control investigation-search" aria-label="Search incidents" placeholder="Search site, asset or account…" value={query} onChange={e => setQuery(e.target.value)} />
      {(query || risk !== 'All' || environment !== 'All') && <Button variant="ghost" size="icon" title="Clear filters" aria-label="Clear filters" onClick={() => { setQuery(''); setRisk('All'); setEnvironment('All'); }}><X /></Button>}
    </div>
    {selected ? <div className="investigation-grid">
      <div>
        <div className="flex justify-between mb-3"><h3 className="text-sm font-medium">Affected network locations</h3><span className="text-xs text-muted-foreground">{visible.length} scenarios</span></div>
        <div className="investigation-map" aria-label="Schematic of affected sites">
          <svg viewBox="0 0 600 360" aria-hidden="true"><defs><pattern id="network-grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" className="network-grid" /></pattern></defs><rect width="600" height="360" fill="url(#network-grid)" /><path className="network-zone" d="M75 55H530L550 280L470 320H100L55 240Z" /><path className="network-link" d="M144 100H444V252H144V100" /><path className={step > 0 ? 'network-link network-link-active' : 'network-link'} d="M144 100L444 252M444 100L144 252" /></svg>
          {visible.map(item => { const index = item.id === 'SIM-001' ? 0 : item.id === 'SIM-002' ? 1 : 2; const Icon = icons[index] ?? Building2; return <div key={item.id} className={`site-node ${selected.id === item.id ? 'node-selected' : ''}`}><Button size="icon" variant="investigation" data-active={selected.id === item.id} aria-label={`Investigate ${item.site}`} aria-pressed={selected.id === item.id} onClick={() => select(item.id)}><Icon /></Button><span className="node-label">{item.site}</span></div>; })}
          <div className="site-node"><Button variant="investigation" size="icon" aria-label="Show destination evidence" onClick={() => { setStep(3); setPlaying(false); }}><Globe /></Button><span className="node-label">Destination</span></div>
          <span className="network-caption">Schematic · not geographic coordinates</span>
        </div>
        <dl className="investigation-facts"><div><dt>Affected asset</dt><dd>{selected.asset}</dd></div><div><dt>Account</dt><dd>{selected.actor}</dd></div><div><dt>Data at risk</dt><dd>{selected.resource}</dd></div><div><dt>Observed volume</dt><dd>{selected.volume} · simulated</dd></div></dl>
        <div className="investigation-selection"><strong>{selected.risk === 'HIGH' ? 'Suspected transfer attempt' : 'Collection anomaly'}</strong><br />{selected.reason}. An alert is evidence for review, not proof of successful theft.</div>
      </div>
      <div className="investigation-detail">
        <div className="flex items-start justify-between gap-3"><div><p className="eyebrow mb-1">{selected.id} · {selected.environment} · {selected.time}</p><h3>{selected.site}</h3></div><span className={selected.risk === 'HIGH' ? 'import-risk-high' : 'import-risk-medium'}>{selected.risk}</span></div>
        <div className="investigation-playback"><Button variant="investigation" size="sm" aria-label={playing ? 'Pause replay' : 'Play replay'} onClick={() => { if (step === 3) setStep(0); setPlaying(value => !value); }}>{playing ? <Pause /> : <Play />}{playing ? 'Pause' : 'Replay incident'}</Button><Button size="icon" variant="ghost" title="Reset replay" aria-label="Reset replay" onClick={() => { setStep(0); setPlaying(false); }}><RotateCcw /></Button><span className="ml-auto text-xs text-muted-foreground">Step {step + 1} of 4</span></div>
        <input className="investigation-range" type="range" min="0" max="3" step="1" value={step} aria-label="Incident timeline" onChange={e => { setStep(Number(e.target.value)); setPlaying(false); }} />
        <div>{selected.stages.map((stage, i) => <div className="investigation-step" data-active={i === step} key={stage.title}><Button variant="ghost" size="icon" aria-label={`Show step ${i + 1}`} onClick={() => { setStep(i); setPlaying(false); }}><span className="investigation-step-number">{i + 1}</span></Button><div><p className="investigation-step-title">{stage.title}</p>{i === step && <p className="investigation-step-detail" role="status">{stage.detail}</p>}</div></div>)}</div>
        <p className="investigation-note mt-4">Destination: {selected.destination}</p>
      </div>
    </div> : <div className="investigation-empty">No incidents match these filters.</div>}
    <div className="investigation-table"><table><thead><tr><th>SCENARIO</th><th>LOCATION</th><th>ENVIRONMENT</th><th>RISK</th><th>DATA VOLUME</th><th /></tr></thead><tbody>{visible.map(item => <tr key={item.id} data-selected={selected?.id === item.id}><td className="font-mono">{item.id}</td><td>{item.site}</td><td>{item.environment}</td><td><span className={item.risk === 'HIGH' ? 'import-risk-high' : 'import-risk-medium'}>{item.risk}</span></td><td className="font-mono">{item.volume}</td><td><Button size="sm" variant="investigation" aria-label={`Open ${item.id}`} onClick={() => select(item.id)}>Investigate</Button></td></tr>)}</tbody></table></div>
  </section>;
}
