import type { CSSProperties } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/scada.css?raw";

export const Route = createFileRoute("/scada")({
  head: () => ({ meta: [
    { title: "SCADA Monitoring · SmartGrid Sentinel" },
    { name: "description", content: "SCADA Monitoring for synthetic AMI and SCADA security research in SmartGrid Sentinel." },
    { property: "og:title", content: "SCADA Monitoring · SmartGrid Sentinel" },
    { property: "og:description", content: "SCADA Monitoring for synthetic AMI and SCADA security research in SmartGrid Sentinel." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "className": "dark", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"flex min-h-svh w-full \x68as-[[\x64ata-variant=\x69nset]]:\x62g-sidebar"} style={{ "--sidebar-width": "16rem", "--sidebar-width-icon": "3rem" } as CSSProperties}>
        <div className="flex min-h-screen w-full">
          <div className={"group peer hidden text-sidebar-foreground \x6dd:\x62lock"} data-variant="sidebar" data-side="left">
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
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} data-sidebar="menu-button" data-size="default" data-state="closed" href="/">
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
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} aria-current="page" data-active="true" data-sidebar="menu-button" data-size="default" data-state="closed" href="#">
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
            <ImportedHeader />
            <div className={"mx-auto w-full max-w-[1600px] flex-1 \x73pace-y-5 px-4 py-5 md:px-6"}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="min-w-0 max-w-3xl">
                  <p className="eyebrow mb-1.5">Security operations · Research prototype</p>
                  <h1 className="text-xl font-semibold tracking-tight text-foreground">SCADA Monitoring</h1>
                  <p className="mt-1 text-sm text-muted-foreground">Explainable AMI &amp; SCADA data theft detection. All records are synthetic research data served by the FastAPI backend.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className={"inline-flex items-center rounded-md \x62order px-2 py-0.5 text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x62order-dashed \x62order-synthetic/\x345 bg-transparent text-synthetic gap-1"}><svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg>Synthetic data</div>
                </div>
              </div>
              <div className="workspace-metrics">
                <div className="panel p-4">
                  <p className="eyebrow">Returned events</p>
                  <p className="font-mono text-2xl mt-3">210</p>
                </div>
                <div className="panel p-4">
                  <p className="eyebrow">Source devices</p>
                  <p className="font-mono text-2xl mt-3">1</p>
                </div>
                <div className="panel p-4">
                  <p className="eyebrow">Distinct users</p>
                  <p className="font-mono text-2xl mt-3">2</p>
                </div>
                <div className="panel p-4">
                  <p className="eyebrow">Simulated transfer attempts</p>
                  <p className="font-mono text-2xl mt-3">0</p>
                </div>
              </div>
              <section className="workspace-band">
                <h2>Voltage &amp; current telemetry</h2>
                <p className="text-xs text-muted-foreground">Average voltage: 230.1 V · across returned records only</p>
                <div className="workspace-chart">
                  <div style={{ width: "100%", height: "100%", minWidth: "0px" }}>
                    <div className="max-h-[300px]" style={{ position: "relative", cursor: "default", width: "100%", height: "100%", maxWidth: "1222px" }} data-site-import-responsive="166">
                      <svg className="recharts-surface" style={{ width: "100%", height: "100%" }} d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "300" : "300"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? "0 0 358 300" : "0 0 1222 300"} width={isMobile ? "358" : "1222"} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-site-import-responsive="167">
                        <title />
                        <desc />
                        <defs>
                          <clipPath id="recharts1-clip">
                            <rect d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? "65" : "65"} y={isMobile ? "5" : "5"} data-site-import-responsive="170" />
                          </clipPath>
                        </defs>
                        <g className="recharts-cartesian-grid">
                          <g>
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? "65" : "65"} y={isMobile ? "5" : "5"} stroke="var(--grid-line)" fill="none" x1="65" y1="222.5" x2="1157" y2="222.5" data-site-import-responsive="173" />
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? "65" : "65"} y={isMobile ? "5" : "5"} stroke="var(--grid-line)" fill="none" x1="65" y1="150" x2="1157" y2="150" data-site-import-responsive="174" />
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? "65" : "65"} y={isMobile ? "5" : "5"} stroke="var(--grid-line)" fill="none" x1="65" y1="77.5" x2="1157" y2="77.5" data-site-import-responsive="175" />
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? "65" : "65"} y={isMobile ? "5" : "5"} stroke="var(--grid-line)" fill="none" x1="65" y1="5" x2="1157" y2="5" data-site-import-responsive="176" />
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? "65" : "65"} y={isMobile ? "5" : "5"} stroke="var(--grid-line)" fill="none" x1="65" y1="295" x2="1157" y2="295" data-site-import-responsive="177" />
                          </g>
                          <g>
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? "65" : "65"} y={isMobile ? "5" : "5"} stroke="var(--grid-line)" fill="none" x1="101.57416267942584" y1="5" x2="101.57416267942584" y2="295" data-site-import-responsive="179" />
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? "65" : "65"} y={isMobile ? "5" : "5"} stroke="var(--grid-line)" fill="none" x1="273.9952153110048" y1="5" x2="273.9952153110048" y2="295" data-site-import-responsive="180" />
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? "65" : "65"} y={isMobile ? "5" : "5"} stroke="var(--grid-line)" fill="none" x1="446.4162679425838" y1="5" x2="446.4162679425838" y2="295" data-site-import-responsive="181" />
                            <line stroke="var(--grid-line)" fill="none" x="65" y="5" width="1092" height="290" x1="618.8373205741627" y1="5" x2="618.8373205741627" y2="295" />
                            <line stroke="var(--grid-line)" fill="none" x="65" y="5" width="1092" height="290" x1="791.2583732057417" y1="5" x2="791.2583732057417" y2="295" />
                            <line stroke="var(--grid-line)" fill="none" x="65" y="5" width="1092" height="290" x1="963.6794258373207" y1="5" x2="963.6794258373207" y2="295" />
                            <line stroke="var(--grid-line)" fill="none" x="65" y="5" width="1092" height="290" x1="1157" y1="5" x2="1157" y2="295" />
                            <line stroke="var(--grid-line)" fill="none" x="65" y="5" width="1092" height="290" x1="65" y1="5" x2="65" y2="295" />
                          </g>
                        </g>
                        <g className="recharts-layer">
                          <line width="60" height="290" x="5" y="5" stroke="#666" fill="none" x1="65" y1="5" x2="65" y2="295" {...({ orientation: "left" } as any)} />
                          <g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line width="60" height="290" x="5" y="5" stroke="#666" fill="none" x1="59" y1="222.5" x2="65" y2="222.5" {...({ orientation: "left" } as any)} />
                              <text width="60" height="290" stroke="none" fontSize="11" x="57" y="222.5" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                <tspan x="57" dy="0.355em">60</tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line width="60" height="290" x="5" y="5" stroke="#666" fill="none" x1="59" y1="150" x2="65" y2="150" {...({ orientation: "left" } as any)} />
                              <text width="60" height="290" stroke="none" fontSize="11" x="57" y="150" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                <tspan x="57" dy="0.355em">120</tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line width="60" height="290" x="5" y="5" stroke="#666" fill="none" x1="59" y1="77.5" x2="65" y2="77.5" {...({ orientation: "left" } as any)} />
                              <text width="60" height="290" stroke="none" fontSize="11" x="57" y="77.5" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                <tspan x="57" dy="0.355em">180</tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line width="60" height="290" x="5" y="5" stroke="#666" fill="none" x1="59" y1="5" x2="65" y2="5" {...({ orientation: "left" } as any)} />
                              <text width="60" height="290" stroke="none" fontSize="11" x="57" y="12" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                <tspan x="57" dy="0.355em">240</tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer">
                          <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "60" : "60"} x={isMobile ? "293" : "1157"} y={isMobile ? "5" : "5"} stroke="#666" fill="none" x1="1157" y1="5" x2="1157" y2="295" data-site-import-responsive="207" {...({ orientation: "right" } as any)} />
                          <g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "60" : "60"} x={isMobile ? "293" : "1157"} y={isMobile ? "5" : "5"} stroke="#666" fill="none" x1="1163" y1="222.5" x2="1157" y2="222.5" data-site-import-responsive="210" {...({ orientation: "right" } as any)} />
                              <text d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "60" : "60"} x={isMobile ? "301" : "1165"} y={isMobile ? "222.5" : "222.5"} stroke="none" fontSize="11" textAnchor="start" fill="var(--muted-foreground)" data-site-import-responsive="211" {...({ orientation: "right" } as any)}>
                                <tspan d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? "0.355em" : "0.355em"} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? "301" : "1165"} y={isMobile ? undefined : undefined} data-site-import-responsive="212">5</tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "60" : "60"} x={isMobile ? "293" : "1157"} y={isMobile ? "5" : "5"} stroke="#666" fill="none" x1="1163" y1="150" x2="1157" y2="150" data-site-import-responsive="214" {...({ orientation: "right" } as any)} />
                              <text d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "60" : "60"} x={isMobile ? "301" : "1165"} y={isMobile ? "150" : "150"} stroke="none" fontSize="11" textAnchor="start" fill="var(--muted-foreground)" data-site-import-responsive="215" {...({ orientation: "right" } as any)}>
                                <tspan d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? "0.355em" : "0.355em"} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? "301" : "1165"} y={isMobile ? undefined : undefined} data-site-import-responsive="216">10</tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "60" : "60"} x={isMobile ? "293" : "1157"} y={isMobile ? "5" : "5"} stroke="#666" fill="none" x1="1163" y1="77.5" x2="1157" y2="77.5" data-site-import-responsive="218" {...({ orientation: "right" } as any)} />
                              <text d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "60" : "60"} x={isMobile ? "301" : "1165"} y={isMobile ? "77.5" : "77.5"} stroke="none" fontSize="11" textAnchor="start" fill="var(--muted-foreground)" data-site-import-responsive="219" {...({ orientation: "right" } as any)}>
                                <tspan d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? "0.355em" : "0.355em"} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? "301" : "1165"} y={isMobile ? undefined : undefined} data-site-import-responsive="220">15</tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "60" : "60"} x={isMobile ? "293" : "1157"} y={isMobile ? "5" : "5"} stroke="#666" fill="none" x1="1163" y1="5" x2="1157" y2="5" data-site-import-responsive="222" {...({ orientation: "right" } as any)} />
                              <text d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "60" : "60"} x={isMobile ? "301" : "1165"} y={isMobile ? "12" : "12"} stroke="none" fontSize="11" textAnchor="start" fill="var(--muted-foreground)" data-site-import-responsive="223" {...({ orientation: "right" } as any)}>
                                <tspan d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? "0.355em" : "0.355em"} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? "301" : "1165"} y={isMobile ? undefined : undefined} data-site-import-responsive="224">20</tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer">
                          <path className="recharts-curve" d={isMobile ? "M65,20.588L66.091,14.667L67.182,22.037L68.273,20.225L69.364,22.037L70.455,16.117L71.545,11.042L72.636,19.863L73.727,19.258L74.818,14.183L75.909,15.875L77,18.775L78.091,22.521L79.182,15.392L80.273,19.742L81.364,20.104L82.455,17.204L83.545,13.338L84.636,16.358L85.727,13.7L86.818,11.162L87.909,11.525L89,19.983L90.091,22.158L91.182,17.446L92.273,14.667L93.364,15.996L94.455,16.6L95.545,22.4L96.636,12.008L97.727,14.667L98.818,17.808L99.909,15.875L101,15.996L102.091,13.942L103.182,12.008L104.273,13.338L105.364,19.137L106.455,14.787L107.545,22.642L108.636,11.404L109.727,12.612L110.818,18.775L111.909,20.708L113,17.325L114.091,21.192L115.182,20.467L116.273,15.271L117.364,19.863L118.455,16.479L119.545,12.492L120.636,19.017L121.727,14.304L122.818,12.612L123.909,16.479L125,11.283L126.091,18.171L127.182,18.413L128.273,21.554L129.364,21.917L130.455,18.171L131.545,13.7L132.636,15.271L133.727,15.513L134.818,15.633L135.909,22.037L137,14.787L138.091,19.621L139.182,18.171L140.273,22.158L141.364,17.083L142.455,20.104L143.545,14.908L144.636,19.5L145.727,20.708L146.818,18.533L147.909,22.883L149,16.238L150.091,17.083L151.182,15.754L152.273,14.908L153.364,12.25L154.455,16.117L155.545,14.063L156.636,16.721L157.727,11.404L158.818,11.525L159.909,15.029L161,13.579L162.091,18.654L163.182,13.217L164.273,17.446L165.364,20.467L166.455,15.271L167.545,11.042L168.636,18.413L169.727,14.183L170.818,13.096L171.909,18.654L173,11.283L174.091,19.742L175.182,20.588L176.273,20.225L177.364,13.096L178.455,19.137L179.545,12.733L180.636,13.458L181.727,18.775L182.818,21.071L183.909,14.063L185,21.796L186.091,13.7L187.182,15.392L188.273,14.787L189.364,19.258L190.455,15.513L191.545,16.721L192.636,13.579L193.727,17.929L194.818,18.292L195.909,15.029L197,22.279L198.091,14.183L199.182,15.996L200.273,18.171L201.364,11.404L202.455,16.963L203.545,18.896L204.636,16.238L205.727,15.754L206.818,13.096L207.909,13.942L209,12.612L210.091,14.183L211.182,20.467L212.273,19.379L213.364,12.492L214.455,22.158L215.545,17.808L216.636,17.929L217.727,15.029L218.818,23.004L219.909,13.942L221,14.063L222.091,20.346L223.182,12.733L224.273,12.733L225.364,15.392L226.455,21.071L227.545,22.037L228.636,18.292L229.727,20.467L230.818,21.796L231.909,11.525L233,21.313L234.091,13.942L235.182,16.358L236.273,11.162L237.364,22.279L238.455,22.4L239.545,22.642L240.636,12.733L241.727,18.533L242.818,15.271L243.909,11.525L245,17.083L246.091,11.162L247.182,18.654L248.273,14.908L249.364,22.037L250.455,12.854L251.545,22.158L252.636,14.667L253.727,19.379L254.818,14.667L255.909,15.029L257,20.95L258.091,11.042L259.182,13.821L260.273,19.017L261.364,21.313L262.455,17.808L263.545,19.742L264.636,20.225L265.727,14.908L266.818,19.742L267.909,13.217L269,15.392L270.091,12.854L271.182,21.192L272.273,22.037L273.364,18.171L274.455,11.162L275.545,12.975L276.636,19.621L277.727,17.446L278.818,20.467L279.909,21.796L281,20.225L282.091,21.796L283.182,15.513L284.273,17.929L285.364,20.829L286.455,11.646L287.545,22.883L288.636,11.283L289.727,19.017L290.818,16.117L291.909,16.479L293,17.567" : "M65,20.588L70.225,14.667L75.45,22.037L80.675,20.225L85.9,22.037L91.124,16.117L96.349,11.042L101.574,19.863L106.799,19.258L112.024,14.183L117.249,15.875L122.474,18.775L127.699,22.521L132.923,15.392L138.148,19.742L143.373,20.104L148.598,17.204L153.823,13.338L159.048,16.358L164.273,13.7L169.498,11.162L174.722,11.525L179.947,19.983L185.172,22.158L190.397,17.446L195.622,14.667L200.847,15.996L206.072,16.6L211.297,22.4L216.522,12.008L221.746,14.667L226.971,17.808L232.196,15.875L237.421,15.996L242.646,13.942L247.871,12.008L253.096,13.338L258.321,19.137L263.545,14.787L268.77,22.642L273.995,11.404L279.22,12.612L284.445,18.775L289.67,20.708L294.895,17.325L300.12,21.192L305.344,20.467L310.569,15.271L315.794,19.863L321.019,16.479L326.244,12.492L331.469,19.017L336.694,14.304L341.919,12.612L347.144,16.479L352.368,11.283L357.593,18.171L362.818,18.413L368.043,21.554L373.268,21.917L378.493,18.171L383.718,13.7L388.943,15.271L394.167,15.513L399.392,15.633L404.617,22.037L409.842,14.787L415.067,19.621L420.292,18.171L425.517,22.158L430.742,17.083L435.967,20.104L441.191,14.908L446.416,19.5L451.641,20.708L456.866,18.533L462.091,22.883L467.316,16.238L472.541,17.083L477.766,15.754L482.99,14.908L488.215,12.25L493.44,16.117L498.665,14.063L503.89,16.721L509.115,11.404L514.34,11.525L519.565,15.029L524.789,13.579L530.014,18.654L535.239,13.217L540.464,17.446L545.689,20.467L550.914,15.271L556.139,11.042L561.364,18.413L566.589,14.183L571.813,13.096L577.038,18.654L582.263,11.283L587.488,19.742L592.713,20.588L597.938,20.225L603.163,13.096L608.388,19.137L613.612,12.733L618.837,13.458L624.062,18.775L629.287,21.071L634.512,14.063L639.737,21.796L644.962,13.7L650.187,15.392L655.411,14.787L660.636,19.258L665.861,15.513L671.086,16.721L676.311,13.579L681.536,17.929L686.761,18.292L691.986,15.029L697.211,22.279L702.435,14.183L707.66,15.996L712.885,18.171L718.11,11.404L723.335,16.963L728.56,18.896L733.785,16.238L739.01,15.754L744.234,13.096L749.459,13.942L754.684,12.612L759.909,14.183L765.134,20.467L770.359,19.379L775.584,12.492L780.809,22.158L786.033,17.808L791.258,17.929L796.483,15.029L801.708,23.004L806.933,13.942L812.158,14.063L817.383,20.346L822.608,12.733L827.833,12.733L833.057,15.392L838.282,21.071L843.507,22.037L848.732,18.292L853.957,20.467L859.182,21.796L864.407,11.525L869.632,21.313L874.856,13.942L880.081,16.358L885.306,11.162L890.531,22.279L895.756,22.4L900.981,22.642L906.206,12.733L911.431,18.533L916.656,15.271L921.88,11.525L927.105,17.083L932.33,11.162L937.555,18.654L942.78,14.908L948.005,22.037L953.23,12.854L958.455,22.158L963.679,14.667L968.904,19.379L974.129,14.667L979.354,15.029L984.579,20.95L989.804,11.042L995.029,13.821L1000.254,19.017L1005.478,21.313L1010.703,17.808L1015.928,19.742L1021.153,20.225L1026.378,14.908L1031.603,19.742L1036.828,13.217L1042.053,15.392L1047.278,12.854L1052.502,21.192L1057.727,22.037L1062.952,18.171L1068.177,11.162L1073.402,12.975L1078.627,19.621L1083.852,17.446L1089.077,20.467L1094.301,21.796L1099.526,20.225L1104.751,21.796L1109.976,15.513L1115.201,17.929L1120.426,20.829L1125.651,11.646L1130.876,22.883L1136.1,11.283L1141.325,19.017L1146.55,16.117L1151.775,16.479L1157,17.567"} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} stroke="var(--primary)" strokeWidth="1" fill="none" data-site-import-responsive="226" />
                          <g className="recharts-layer" />
                        </g>
                        <g className="recharts-layer">
                          <path className="recharts-curve" d={isMobile ? "M65,34L66.091,109.4L67.182,45.6L68.273,80.4L69.364,118.1L70.455,81.85L71.545,70.25L72.636,113.75L73.727,42.7L74.818,109.4L75.909,7.9L77,106.5L78.091,142.75L79.182,41.25L80.273,80.4L81.364,25.3L82.455,65.9L83.545,12.25L84.636,89.1L85.727,94.9L86.818,105.05L87.909,135.5L89,138.4L90.091,150L91.182,145.65L92.273,84.75L93.364,34L94.455,55.75L95.545,35.45L96.636,86.2L97.727,13.7L98.818,63L99.909,145.65L101,147.1L102.091,123.9L103.182,123.9L104.273,9.35L105.364,52.85L106.455,107.95L107.545,136.95L108.636,92L109.727,83.3L110.818,39.8L111.909,70.25L113,145.65L114.091,70.25L115.182,28.2L116.273,128.25L117.364,29.65L118.455,94.9L119.545,25.3L120.636,35.45L121.727,28.2L122.818,84.75L123.909,71.7L125,115.2L126.091,103.6L127.182,54.3L128.273,9.35L129.364,18.05L130.455,55.75L131.545,110.85L132.636,26.75L133.727,20.95L134.818,116.65L135.909,7.9L137,19.5L138.091,96.35L139.182,51.4L140.273,23.85L141.364,65.9L142.455,112.3L143.545,126.8L144.636,10.8L145.727,94.9L146.818,97.8L147.909,29.65L149,49.95L150.091,19.5L151.182,99.25L152.273,45.6L153.364,55.75L154.455,44.15L155.545,123.9L156.636,18.05L157.727,106.5L158.818,129.7L159.909,92L161,148.55L162.091,41.25L163.182,13.7L164.273,60.1L165.364,141.3L166.455,132.6L167.545,132.6L168.636,96.35L169.727,128.25L170.818,60.1L171.909,86.2L173,96.35L174.091,9.35L175.182,57.2L176.273,131.15L177.364,70.25L178.455,128.25L179.545,129.7L180.636,134.05L181.727,35.45L182.818,142.75L183.909,80.4L185,77.5L186.091,23.85L187.182,145.65L188.273,78.95L189.364,128.25L190.455,70.25L191.545,84.75L192.636,134.05L193.727,20.95L194.818,44.15L195.909,96.35L197,29.65L198.091,96.35L199.182,68.8L200.273,23.85L201.364,63L202.455,128.25L203.545,68.8L204.636,32.55L205.727,57.2L206.818,110.85L207.909,16.6L209,67.35L210.091,9.35L211.182,89.1L212.273,103.6L213.364,126.8L214.455,86.2L215.545,110.85L216.636,109.4L217.727,142.75L218.818,106.5L219.909,107.95L221,123.9L222.091,68.8L223.182,144.2L224.273,65.9L225.364,107.95L226.455,12.25L227.545,28.2L228.636,138.4L229.727,36.9L230.818,76.05L231.909,55.75L233,121L234.091,138.4L235.182,65.9L236.273,103.6L237.364,86.2L238.455,76.05L239.545,96.35L240.636,25.3L241.727,65.9L242.818,103.6L243.909,84.75L245,125.35L246.091,74.6L247.182,109.4L248.273,142.75L249.364,51.4L250.455,10.8L251.545,54.3L252.636,93.45L253.727,94.9L254.818,12.25L255.909,76.05L257,119.55L258.091,128.25L259.182,28.2L260.273,38.35L261.364,123.9L262.455,90.55L263.545,41.25L264.636,9.35L265.727,67.35L266.818,94.9L267.909,34L269,23.85L270.091,26.75L271.182,84.75L272.273,18.05L273.364,92L274.455,96.35L275.545,55.75L276.636,29.65L277.727,60.1L278.818,128.25L279.909,107.95L281,57.2L282.091,18.05L283.182,65.9L284.273,61.55L285.364,52.85L286.455,71.7L287.545,23.85L288.636,113.75L289.727,44.15L290.818,39.8L291.909,32.55L293,48.5" : "M65,34L70.225,109.4L75.45,45.6L80.675,80.4L85.9,118.1L91.124,81.85L96.349,70.25L101.574,113.75L106.799,42.7L112.024,109.4L117.249,7.9L122.474,106.5L127.699,142.75L132.923,41.25L138.148,80.4L143.373,25.3L148.598,65.9L153.823,12.25L159.048,89.1L164.273,94.9L169.498,105.05L174.722,135.5L179.947,138.4L185.172,150L190.397,145.65L195.622,84.75L200.847,34L206.072,55.75L211.297,35.45L216.522,86.2L221.746,13.7L226.971,63L232.196,145.65L237.421,147.1L242.646,123.9L247.871,123.9L253.096,9.35L258.321,52.85L263.545,107.95L268.77,136.95L273.995,92L279.22,83.3L284.445,39.8L289.67,70.25L294.895,145.65L300.12,70.25L305.344,28.2L310.569,128.25L315.794,29.65L321.019,94.9L326.244,25.3L331.469,35.45L336.694,28.2L341.919,84.75L347.144,71.7L352.368,115.2L357.593,103.6L362.818,54.3L368.043,9.35L373.268,18.05L378.493,55.75L383.718,110.85L388.943,26.75L394.167,20.95L399.392,116.65L404.617,7.9L409.842,19.5L415.067,96.35L420.292,51.4L425.517,23.85L430.742,65.9L435.967,112.3L441.191,126.8L446.416,10.8L451.641,94.9L456.866,97.8L462.091,29.65L467.316,49.95L472.541,19.5L477.766,99.25L482.99,45.6L488.215,55.75L493.44,44.15L498.665,123.9L503.89,18.05L509.115,106.5L514.34,129.7L519.565,92L524.789,148.55L530.014,41.25L535.239,13.7L540.464,60.1L545.689,141.3L550.914,132.6L556.139,132.6L561.364,96.35L566.589,128.25L571.813,60.1L577.038,86.2L582.263,96.35L587.488,9.35L592.713,57.2L597.938,131.15L603.163,70.25L608.388,128.25L613.612,129.7L618.837,134.05L624.062,35.45L629.287,142.75L634.512,80.4L639.737,77.5L644.962,23.85L650.187,145.65L655.411,78.95L660.636,128.25L665.861,70.25L671.086,84.75L676.311,134.05L681.536,20.95L686.761,44.15L691.986,96.35L697.211,29.65L702.435,96.35L707.66,68.8L712.885,23.85L718.11,63L723.335,128.25L728.56,68.8L733.785,32.55L739.01,57.2L744.234,110.85L749.459,16.6L754.684,67.35L759.909,9.35L765.134,89.1L770.359,103.6L775.584,126.8L780.809,86.2L786.033,110.85L791.258,109.4L796.483,142.75L801.708,106.5L806.933,107.95L812.158,123.9L817.383,68.8L822.608,144.2L827.833,65.9L833.057,107.95L838.282,12.25L843.507,28.2L848.732,138.4L853.957,36.9L859.182,76.05L864.407,55.75L869.632,121L874.856,138.4L880.081,65.9L885.306,103.6L890.531,86.2L895.756,76.05L900.981,96.35L906.206,25.3L911.431,65.9L916.656,103.6L921.88,84.75L927.105,125.35L932.33,74.6L937.555,109.4L942.78,142.75L948.005,51.4L953.23,10.8L958.455,54.3L963.679,93.45L968.904,94.9L974.129,12.25L979.354,76.05L984.579,119.55L989.804,128.25L995.029,28.2L1000.254,38.35L1005.478,123.9L1010.703,90.55L1015.928,41.25L1021.153,9.35L1026.378,67.35L1031.603,94.9L1036.828,34L1042.053,23.85L1047.278,26.75L1052.502,84.75L1057.727,18.05L1062.952,92L1068.177,96.35L1073.402,55.75L1078.627,29.65L1083.852,60.1L1089.077,128.25L1094.301,107.95L1099.526,57.2L1104.751,18.05L1109.976,65.9L1115.201,61.55L1120.426,52.85L1125.651,71.7L1130.876,23.85L1136.1,113.75L1141.325,44.15L1146.55,39.8L1151.775,32.55L1157,48.5"} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "290" : "290"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "228" : "1092"} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} stroke="var(--info)" strokeWidth="1" fill="none" data-site-import-responsive="229" />
                          <g className="recharts-layer" />
                        </g>
                      </svg>
                      <div style={{ visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px" }} tabIndex={-1} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Voltage (V), left axis · Current (A), right axis · ordered by dataset timestamp</p>
              </section>
              <div className="workspace-chart-grid">
                <section className="workspace-band">
                  <h2>Access activity</h2>
                  <div className="workspace-chart">
                    <div style={{ width: "100%", height: "100%", minWidth: "0px" }}>
                      <div className="max-h-[300px]" style={{ position: "relative", cursor: "default", width: "100%", height: "100%", maxWidth: "599px" }} data-site-import-responsive="237">
                        <svg className="recharts-surface" style={{ width: "100%", height: "100%" }} d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "300" : "300"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? "0 0 358 300" : "0 0 599 300"} width={isMobile ? "358" : "599"} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-site-import-responsive="238">
                          <title />
                          <desc />
                          <defs>
                            <clipPath id="recharts6-clip">
                              <rect d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} data-site-import-responsive="241" />
                            </clipPath>
                          </defs>
                          <g className="recharts-cartesian-grid">
                            <g>
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="255" x2="584" y2="255" data-site-import-responsive="244" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="195" x2="584" y2="195" data-site-import-responsive="245" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="135" x2="584" y2="135" data-site-import-responsive="246" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="75" x2="584" y2="75" data-site-import-responsive="247" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="15" x2="584" y2="15" data-site-import-responsive="248" />
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "30" : "30"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "255" : "255"} stroke="#666" fill="none" x1="60" y1="255" x2="584" y2="255" data-site-import-responsive="250" {...({ orientation: "bottom" } as any)} />
                            <g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="524" height="30" x="60" y="255" stroke="#666" fill="none" x1="191" y1="261" x2="191" y2="255" {...({ orientation: "bottom" } as any)} />
                                <text width="524" height="30" stroke="none" fontSize="10" x="191" y="263" textAnchor="middle" fill="var(--muted-foreground)" {...({ orientation: "bottom" } as any)}>
                                  <tspan x="191" dy="0.71em">read</tspan>
                                </text>
                              </g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="524" height="30" x="60" y="255" stroke="#666" fill="none" x1="453" y1="261" x2="453" y2="255" {...({ orientation: "bottom" } as any)} />
                                <text width="524" height="30" stroke="none" fontSize="10" x="453" y="263" textAnchor="middle" fill="var(--muted-foreground)" {...({ orientation: "bottom" } as any)}>
                                  <tspan x="453" dy="0.71em">scheduled maintenance</tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="60" y1="15" x2="60" y2="255" {...({ orientation: "left" } as any)} />
                            <g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="255" x2="60" y2="255" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="255" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">0</tspan>
                                </text>
                              </g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="195" x2="60" y2="195" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="195" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">50</tspan>
                                </text>
                              </g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="135" x2="60" y2="135" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="135" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">100</tspan>
                                </text>
                              </g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="75" x2="60" y2="75" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="75" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">150</tspan>
                                </text>
                              </g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="15" x2="60" y2="15" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="15" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">200</tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-rectangle" x="86.2" y="15" width="209" height="240" fill="var(--chart-1)" opacity="1" d={"M86.2,18A 3,3,0,0,1,89.2,15L 292.2,15A 3,3,0,0,1,\n        295.2,18L 295.2,255L 86.2,255Z"} {...({ radius: "3,3,0,0", name: "read", cursor: "pointer" } as any)} />
                              </g>
                              <g className="recharts-layer">
                                <path className="recharts-rectangle" x="348.2" y="243" width="209" height="12" fill="var(--chart-2)" opacity="1" d={"M348.2,246A 3,3,0,0,1,351.2,243L 554.2,243A 3,3,0,0,1,\n        557.2,246L 557.2,255L 348.2,255Z"} {...({ radius: "3,3,0,0", name: "scheduled maintenance", cursor: "pointer" } as any)} />
                              </g>
                            </g>
                            <g className="recharts-layer" />
                          </g>
                        </svg>
                        <div style={{ visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px" }} tabIndex={-1} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-pressed="false" aria-label="Access activity: read">
                      <svg width="8" height="8" aria-hidden="true">
                        <rect width="8" height="8" fill="var(--chart-1)" />
                      </svg>
                      <span>read</span>
                      <span className="font-mono text-muted-foreground">200</span>
                    </button>
                    <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-pressed="false" aria-label="Access activity: scheduled maintenance">
                      <svg width="8" height="8" aria-hidden="true">
                        <rect width="8" height="8" fill="var(--chart-2)" />
                      </svg>
                      <span>scheduled maintenance</span>
                      <span className="font-mono text-muted-foreground">10</span>
                    </button>
                  </div>
                </section>
                <section className="workspace-band">
                  <h2>Destination approval · returned events</h2>
                  <div className="workspace-chart">
                    <div style={{ width: "100%", height: "100%", minWidth: "0px" }}>
                      <div className="max-h-[300px]" style={{ position: "relative", cursor: "default", width: "100%", height: "100%", maxWidth: "599px" }} data-site-import-responsive="305">
                        <svg className="recharts-surface" style={{ width: "100%", height: "100%" }} d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "300" : "300"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? "0 0 358 300" : "0 0 599 300"} width={isMobile ? "358" : "599"} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-site-import-responsive="306">
                          <title />
                          <desc />
                          <defs>
                            <clipPath id="recharts9-clip">
                              <rect d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} data-site-import-responsive="309" />
                            </clipPath>
                          </defs>
                          <g className="recharts-cartesian-grid">
                            <g>
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="255" x2="584" y2="255" data-site-import-responsive="312" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="195" x2="584" y2="195" data-site-import-responsive="313" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="135" x2="584" y2="135" data-site-import-responsive="314" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="75" x2="584" y2="75" data-site-import-responsive="315" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="15" x2="584" y2="15" data-site-import-responsive="316" />
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "30" : "30"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "255" : "255"} stroke="#666" fill="none" x1="60" y1="255" x2="584" y2="255" data-site-import-responsive="318" {...({ orientation: "bottom" } as any)} />
                            <g data-site-import-desktop-variant="">
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="524" height="30" x="60" y="255" stroke="#666" fill="none" x1="322" y1="261" x2="322" y2="255" {...({ orientation: "bottom" } as any)} />
                                <text width="524" height="30" stroke="none" fontSize="10" x="322" y="263" textAnchor="middle" fill="var(--muted-foreground)" {...({ orientation: "bottom" } as any)}>
                                  <tspan x="322" dy="0.71em">True</tspan>
                                </text>
                              </g>
                            </g>
                            <g style={{ "--site-import-responsive-display": "inline" } as CSSProperties} data-site-import-mobile-variant="">
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="283" height="30" x="60" y="255" stroke="#666" fill="none" x1="201.5" y1="261" x2="201.5" y2="255" {...({ orientation: "bottom" } as any)} />
                                <text width="283" height="30" stroke="none" fontSize="10" x="201.5" y="263" textAnchor="middle" fill="var(--muted-foreground)" {...({ orientation: "bottom" } as any)}>
                                  <tspan x="201.5" dy="0.71em">True</tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="60" y1="15" x2="60" y2="255" {...({ orientation: "left" } as any)} />
                            <g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="255" x2="60" y2="255" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="255" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">0</tspan>
                                </text>
                              </g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="195" x2="60" y2="195" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="195" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">55</tspan>
                                </text>
                              </g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="135" x2="60" y2="135" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="135" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">110</tspan>
                                </text>
                              </g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="75" x2="60" y2="75" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="75" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">165</tspan>
                                </text>
                              </g>
                              <g className="recharts-layer recharts-cartesian-axis-tick">
                                <line width="60" height="240" x="0" y="15" stroke="#666" fill="none" x1="54" y1="15" x2="60" y2="15" {...({ orientation: "left" } as any)} />
                                <text width="60" height="240" stroke="none" fontSize="11" x="52" y="15" textAnchor="end" fill="var(--muted-foreground)" {...({ orientation: "left" } as any)}>
                                  <tspan x="52" dy="0.355em">220</tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <g className="recharts-layer" data-site-import-desktop-variant="">
                              <g className="recharts-layer">
                                <path className="recharts-rectangle" x="112.4" y="25.9090909090909" width="419" height="229.0909090909091" fill="var(--chart-1)" opacity="1" d={"M112.4,28.9090909090909A 3,3,0,0,1,115.4,25.9090909090909L 528.4,25.9090909090909A 3,3,0,0,1,\n        531.4,28.9090909090909L 531.4,255L 112.4,255Z"} {...({ radius: "3,3,0,0", name: "True", cursor: "pointer" } as any)} />
                              </g>
                            </g>
                            <g className="recharts-layer" style={{ "--site-import-responsive-display": "inline" } as CSSProperties} data-site-import-mobile-variant="">
                              <g className="recharts-layer">
                                <path className="recharts-rectangle" x="88.3" y="25.9090909090909" width="226" height="229.0909090909091" fill="var(--chart-1)" opacity="1" d={"M88.3,28.9090909090909A 3,3,0,0,1,91.3,25.9090909090909L 311.3,25.9090909090909A 3,3,0,0,1,\n        314.3,28.9090909090909L 314.3,255L 88.3,255Z"} {...({ radius: "3,3,0,0", name: "True", cursor: "pointer" } as any)} />
                              </g>
                            </g>
                            <g className="recharts-layer" />
                          </g>
                        </svg>
                        <div style={{ visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px" }} tabIndex={-1} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-pressed="false" aria-label="Destination approval · returned events: True">
                      <svg width="8" height="8" aria-hidden="true">
                        <rect width="8" height="8" fill="var(--chart-1)" />
                      </svg>
                      <span>True</span>
                      <span className="font-mono text-muted-foreground">210</span>
                    </button>
                  </div>
                </section>
              </div>
              <div className="workspace-toolbar">
                <label className={"workspace-search [&]:items-center"}>
                  <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m21 21-4.34-4.34" />
                    <circle cx="11" cy="11" r="8" />
                  </svg>
                  <input aria-label="Search records" placeholder="Search event ID, user, reason…" defaultValue="" />
                </label>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-oOCmr-panel" aria-activedescendant="bb-customSelect-oOCmr-selectedOption">
                    <span>SCADA</span>
                  </span>
                  <select aria-label="Environment" disabled defaultValue="SCADA">
                    <option value="">All environments</option>
                    <option>AMI</option>
                    <option>SCADA</option>
                  </select>
                  <div id="bb-customSelect-oOCmr-panel" role="listbox">
                    <div role="option">All environments</div>
                    <div role="option">AMI</div>
                    <div role="option" id="bb-customSelect-oOCmr-selectedOption">SCADA</div>
                  </div>
                </div>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-ILwYS-panel" aria-activedescendant="bb-customSelect-ILwYS-selectedOption" tabIndex={0}>
                    <span>All risk levels</span>
                  </span>
                  <select aria-label="Risk" tabIndex={-1} defaultValue="">
                    <option value="">All risk levels</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Not flagged</option>
                  </select>
                  <div id="bb-customSelect-ILwYS-panel" role="listbox">
                    <div role="option" id="bb-customSelect-ILwYS-selectedOption">All risk levels</div>
                    <div role="option">High</div>
                    <div role="option">Medium</div>
                    <div role="option">Not flagged</div>
                  </div>
                </div>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-bx6PX-panel" aria-activedescendant="bb-customSelect-bx6PX-selectedOption" tabIndex={0}>
                    <span>All transfers</span>
                  </span>
                  <select aria-label="Transfer" tabIndex={-1} defaultValue="">
                    <option value="">All transfers</option>
                    <option value="True">Attempted</option>
                    <option value="False">Not attempted</option>
                  </select>
                  <div id="bb-customSelect-bx6PX-panel" role="listbox">
                    <div role="option" id="bb-customSelect-bx6PX-selectedOption">All transfers</div>
                    <div role="option">Attempted</div>
                    <div role="option">Not attempted</div>
                  </div>
                </div>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-UpGT7-panel" aria-activedescendant="bb-customSelect-UpGT7-selectedOption" tabIndex={0}>
                    <span>All destinations</span>
                  </span>
                  <select aria-label="Destination" tabIndex={-1} defaultValue="">
                    <option value="">All destinations</option>
                    <option value="True">Approved</option>
                    <option value="False">Unapproved</option>
                  </select>
                  <div id="bb-customSelect-UpGT7-panel" role="listbox">
                    <div role="option" id="bb-customSelect-UpGT7-selectedOption">All destinations</div>
                    <div role="option">Approved</div>
                    <div role="option">Unapproved</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">420 event records available here out of 650 total. The API returns at most 210 records per environment and has no offset parameter. Risk is matched only against /detect alerts; “Not flagged” is not a safety verdict.</p>
              <div className="panel overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="workspace-table">
                    <thead>
                      <tr>
                        <th>Event ID</th>
                        <th>Timestamp</th>
                        <th>Environment</th>
                        <th>User</th>
                        <th>Risk</th>
                        <th>Operation</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-mono">EVT-00535</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:19:20</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00535">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00534</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:19:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00534">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00533</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:16:40</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00533">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00532</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:16:30</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00532">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00531</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:16:20</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00531">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00530</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:16:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00530">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00529</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:13:40</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00529">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00528</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:13:30</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00528">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00527</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:13:20</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00527">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00526</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:13:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00526">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00525</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:10:40</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00525">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00524</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:10:30</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00524">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00523</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:10:20</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00523">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00522</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:10:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00522">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00521</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 05:07:40</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00521">Details</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={"workspace-pagination [&]:items-center [&]:justify-between"}>
                  <span>1–15 of 210</span>
                  <div className="flex items-center gap-3">
                    <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"} aria-label="Previous page" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                    <span>1 / 14</span>
                    <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"} aria-label="Next page">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <span style={{ position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre" } as CSSProperties} id="recharts_measurement_span" aria-hidden="true">2026-11-12T02:43:10</span>
    </>
  );
}

function ImportedHeader() {
  return (
    <header className={"sticky top-0 z-20 flex h-12 items-center gap-3 \x62order-b \x62order-border \x62g-background/\x390 px-3 \x62ackdrop-blur"}>
      <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent h-7 w-7 text-muted-foreground hover:text-foreground"} data-sidebar="trigger" aria-expanded="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
        </svg>
        <span className={"\x73r-only"}>Toggle Sidebar</span>
      </button>
      <div className="h-5 w-px bg-border" />
      <span className="flex items-center gap-2 text-xs">
        <span className={"relative inline-block size-2 rounded-full \x62g-current text-success"} />
        <span className="font-medium text-success">Connected</span>
        <span className={"hidden font-mono text-muted-foreground \x73m:\x69nline"}>462 ms</span>
      </span>
      <a className={"hidden truncate font-mono text-[11px] text-muted-foreground hover:text-foreground \x6dd:\x62lock"} href="/settings" title="Change in System Settings">https://smart-grid-sentinel-backend.onrender.com</a>
      <div className="ml-auto flex items-center gap-3">
        <span className={"hidden text-[11px] text-muted-foreground \x6dd:\x69nline"}>Last check 8:14:50 PM</span>
        <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x73hadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-8 \x62order-border-strong bg-transparent"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>Refresh</button>
      </div>
    </header>
  );
}

function subscribeMobile(onChange: () => void) {
  const query = matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
