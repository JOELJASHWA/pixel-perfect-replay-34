import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/alerts.css?raw";

export const Route = createFileRoute("/alerts")({
  head: () => ({ meta: [
    { title: "Detection Alerts · SmartGrid Sentinel" },
    { name: "description", content: "Detection Alerts for synthetic AMI and SCADA security research in SmartGrid Sentinel." },
    { property: "og:title", content: "Detection Alerts · SmartGrid Sentinel" },
    { property: "og:description", content: "Detection Alerts for synthetic AMI and SCADA security research in SmartGrid Sentinel." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  staticData: { importedDocument: { html: { "className": "dark", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
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
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} aria-current="page" data-active="true" data-sidebar="menu-button" data-size="default" data-state="closed" href="#">
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
                  <h1 className="text-xl font-semibold tracking-tight text-foreground">Detection Alerts</h1>
                  <p className="mt-1 text-sm text-muted-foreground">Explainable AMI &amp; SCADA data theft detection. All records are synthetic research data served by the FastAPI backend.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className={"inline-flex items-center rounded-md \x62order px-2 py-0.5 text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x62order-dashed \x62order-synthetic/\x345 bg-transparent text-synthetic gap-1"}><svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg>Synthetic data</div>
                </div>
              </div>
              <div className="workspace-metrics">
                <div className="panel p-4">
                  <p className="eyebrow">Detection alerts</p>
                  <p className="font-mono text-2xl mt-3">170</p>
                </div>
                <div className="panel p-4">
                  <p className="eyebrow">High risk</p>
                  <p className="font-mono text-2xl mt-3">70</p>
                </div>
                <div className="panel p-4">
                  <p className="eyebrow">Medium risk</p>
                  <p className="font-mono text-2xl mt-3">100</p>
                </div>
                <div className="panel p-4">
                  <p className="eyebrow">Matching alerts</p>
                  <p className="font-mono text-2xl mt-3">170</p>
                </div>
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
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-RUcvE-panel" aria-activedescendant="bb-customSelect-RUcvE-selectedOption" tabIndex={0}>
                    <span>All environments</span>
                  </span>
                  <select aria-label="Environment" tabIndex={-1} defaultValue="">
                    <option value="">All environments</option>
                    <option>AMI</option>
                    <option>SCADA</option>
                  </select>
                  <div id="bb-customSelect-RUcvE-panel" role="listbox">
                    <div role="option" id="bb-customSelect-RUcvE-selectedOption">All environments</div>
                    <div role="option">AMI</div>
                    <div role="option">SCADA</div>
                  </div>
                </div>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-ClN3T-panel" aria-activedescendant="bb-customSelect-ClN3T-selectedOption" tabIndex={0}>
                    <span>All risk levels</span>
                  </span>
                  <select aria-label="Risk" tabIndex={-1} defaultValue="">
                    <option value="">All risk levels</option>
                    <option>High</option>
                    <option>Medium</option>
                  </select>
                  <div id="bb-customSelect-ClN3T-panel" role="listbox">
                    <div role="option" id="bb-customSelect-ClN3T-selectedOption">All risk levels</div>
                    <div role="option">High</div>
                    <div role="option">Medium</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62g-secondary text-secondary-foreground \x73hadow-sm \x68over:\x62g-secondary/\x380 h-9 w-9"} aria-label="Table view">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                    </svg>
                  </button>
                  <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"} aria-label="Card view">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="7" height="7" x="3" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="14" rx="1" />
                      <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                  </button>
                </div>
              </div>
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
                        <th>Detection reason</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-mono">EVT-00650</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:55:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-high">High</span>
                        </td>
                        <td className="workspace-reason">Transfer attempted to an unapproved destination</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00650">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00649</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:55:00</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-medium">Medium</span>
                        </td>
                        <td className="workspace-reason">Unusually high resource-read activity</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00649">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00648</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:52:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-high">High</span>
                        </td>
                        <td className="workspace-reason">Transfer attempted to an unapproved destination</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00648">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00647</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:52:00</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-medium">Medium</span>
                        </td>
                        <td className="workspace-reason">Unusually high resource-read activity</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00647">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00646</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:49:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-high">High</span>
                        </td>
                        <td className="workspace-reason">Transfer attempted to an unapproved destination</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00646">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00645</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:49:00</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-medium">Medium</span>
                        </td>
                        <td className="workspace-reason">Unusually high resource-read activity</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00645">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00644</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:46:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-high">High</span>
                        </td>
                        <td className="workspace-reason">Transfer attempted to an unapproved destination</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00644">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00643</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:46:00</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-medium">Medium</span>
                        </td>
                        <td className="workspace-reason">Unusually high resource-read activity</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00643">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00642</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:43:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-high">High</span>
                        </td>
                        <td className="workspace-reason">Transfer attempted to an unapproved destination</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00642">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00641</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:43:00</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-medium">Medium</span>
                        </td>
                        <td className="workspace-reason">Unusually high resource-read activity</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00641">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00640</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:40:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-high">High</span>
                        </td>
                        <td className="workspace-reason">Transfer attempted to an unapproved destination</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00640">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00639</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:40:00</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-medium">Medium</span>
                        </td>
                        <td className="workspace-reason">Unusually high resource-read activity</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00639">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00638</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:37:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-high">High</span>
                        </td>
                        <td className="workspace-reason">Transfer attempted to an unapproved destination</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00638">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00637</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:37:00</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-medium">Medium</span>
                        </td>
                        <td className="workspace-reason">Unusually high resource-read activity</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00637">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00636</td>
                        <td className="font-mono text-muted-foreground">2026-11-12 07:34:10</td>
                        <td>
                          <span className="import-environment-badge">SCADA</span>
                        </td>
                        <td className="font-mono">compromised_operator</td>
                        <td>
                          <span className="import-risk-high">High</span>
                        </td>
                        <td className="workspace-reason">Transfer attempted to an unapproved destination</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00636">Details</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={"workspace-pagination [&]:items-center [&]:justify-between"}>
                  <span>1–15 of 170</span>
                  <div className="flex items-center gap-3">
                    <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"} aria-label="Previous page" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                    <span>1 / 12</span>
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
        <span className={"hidden font-mono text-muted-foreground \x73m:\x69nline"}>407 ms</span>
      </span>
      <a className={"hidden truncate font-mono text-[11px] text-muted-foreground hover:text-foreground \x6dd:\x62lock"} href="/settings" title="Change in System Settings">https://smart-grid-sentinel-backend.onrender.com</a>
      <div className="ml-auto flex items-center gap-3">
        <span className={"hidden text-[11px] text-muted-foreground \x6dd:\x69nline"}>Last check 8:15:47 PM</span>
        <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x73hadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-8 \x62order-border-strong bg-transparent"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>Refresh</button>
      </div>
    </header>
  );
}
