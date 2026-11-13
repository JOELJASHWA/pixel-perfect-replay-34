import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/settings.css?raw";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [
    { title: "System Settings · SmartGrid Sentinel" },
    { name: "description", content: "System Settings for synthetic AMI and SCADA security research in SmartGrid Sentinel." },
    { property: "og:title", content: "System Settings · SmartGrid Sentinel" },
    { property: "og:description", content: "System Settings for synthetic AMI and SCADA security research in SmartGrid Sentinel." },
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
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} aria-current="page" data-active="true" data-sidebar="menu-button" data-size="default" data-state="closed" href="#">
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
                  <h1 className="text-xl font-semibold tracking-tight text-foreground">System Settings</h1>
                  <p className="mt-1 text-sm text-muted-foreground">Explainable AMI &amp; SCADA data theft detection. All records are synthetic research data served by the FastAPI backend.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className={"inline-flex items-center rounded-md \x62order px-2 py-0.5 text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors \x66ocus:\x6futline-none \x66ocus:\x72ing-2 \x66ocus:\x72ing-ring \x66ocus:\x72ing-offset-2 \x62order-dashed \x62order-synthetic/\x345 bg-transparent text-synthetic gap-1"}><svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg>Synthetic data</div>
                </div>
              </div>
              <ImportedSectionAPIConnection />
              <section className="workspace-band">
                <h2>Research safeguards</h2>
                <p className="text-muted-foreground">Synthetic data only. Detection is explainable and rule-based, not a trained machine-learning prediction. Ground-truth labels are reference context only. An alert is a pattern requiring review, not confirmation of electricity or data theft.</p>
                <p className="text-muted-foreground mt-3">This dashboard reads research endpoints and sends no blocking or control commands to grid infrastructure.</p>
              </section>
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
        <span className={"hidden font-mono text-muted-foreground \x73m:\x69nline"}>260 ms</span>
      </span>
      <a className={"hidden truncate font-mono text-[11px] text-muted-foreground hover:text-foreground \x6dd:\x62lock"} href="#" title="Change in System Settings">https://smart-grid-sentinel-backend.onrender.com</a>
      <div className="ml-auto flex items-center gap-3">
        <span className={"hidden text-[11px] text-muted-foreground \x6dd:\x69nline"}>Last check 8:17:35 PM</span>
        <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x73hadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-8 \x62order-border-strong bg-transparent"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>Refresh</button>
      </div>
    </header>
  );
}

function ImportedSectionAPIConnection() {
  return (
    <section className="workspace-band">
      <h2>API connection</h2>
      <dl className="workspace-facts grid-cols-[minmax(100px,1fr)_minmax(0px,2fr)]">
        <dt>Base URL</dt>
        <dd className="break-all font-mono">https://smart-grid-sentinel-backend.onrender.com</dd>
        <dt>Status</dt>
        <dd>healthy</dd>
        <dt>Dataset loaded</dt>
        <dd>true</dd>
        <dt>Total records</dt>
        <dd>650</dd>
        <dt>Request latency</dt>
        <dd>260 ms</dd>
      </dl>
      <div className="flex flex-wrap gap-2 mt-5">
        <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x62order-input bg-background \x73hadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>Test connection</button>
        <a className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"} href="https://smart-grid-sentinel-backend.onrender.com/docs" rel="noreferrer" target="_blank">API documentation<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg></a>
      </div>
    </section>
  );
}
