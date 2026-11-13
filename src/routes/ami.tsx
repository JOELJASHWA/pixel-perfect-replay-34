import type { CSSProperties } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/ami.css?raw";

export const Route = createFileRoute("/ami")({
  head: () => ({ meta: [
    { title: "AMI Monitoring · SmartGrid Sentinel" },
    { name: "description", content: "AMI Monitoring for synthetic AMI and SCADA security research in SmartGrid Sentinel." },
    { property: "og:title", content: "AMI Monitoring · SmartGrid Sentinel" },
    { property: "og:description", content: "AMI Monitoring for synthetic AMI and SCADA security research in SmartGrid Sentinel." },
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
                          <a className={"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left \x6futline-none \x72ing-sidebar-ring cursor-pointer transition-[width,height,padding] \x66ocus-visible:\x72ing-2 \x61ctive:\x62g-sidebar-accent active:text-sidebar-accent-foreground \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed \x67roup-has-[[\x64ata-sidebar=\x6denu-action]]/\x6denu-item:\x70r-8 \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 \x64ata-[\x61ctive=\x74rue]:\x66ont-medium \x64ata-[\x73tate=\x6fpen]:\x68over:\x62g-sidebar-accent \x64ata-[\x73tate=\x6fpen]:\x68over:\x74ext-sidebar-accent-foreground \x67roup-data-[\x63ollapsible=\x69con]:!\x73ize-8 \x67roup-data-[\x63ollapsible=\x69con]:!\x70-2 [&>\x73pan:\x6cast-child]:\x74runcate [&>\x73vg]:\x73ize-4 [&>\x73vg]:\x73hrink-0 \x68over:\x62g-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm \x64ata-[\x61ctive=\x74rue]:\x62g-sidebar-accent \x64ata-[\x61ctive=\x74rue]:\x74ext-primary"} aria-current="page" data-active="true" data-sidebar="menu-button" data-size="default" data-state="closed" href="#">
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
            <ImportedHeader />
            <div className={"mx-auto w-full max-w-[1600px] flex-1 \x73pace-y-5 px-4 py-5 md:px-6"}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="min-w-0 max-w-3xl">
                  <p className="eyebrow mb-1.5">Security operations · Research prototype</p>
                  <h1 className="text-xl font-semibold tracking-tight text-foreground">AMI Monitoring</h1>
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
              <div className="workspace-chart-grid">
                <section className="workspace-band">
                  <h2>Access activity</h2>
                  <div className="workspace-chart">
                    <div style={{ width: "100%", height: "100%", minWidth: "0px" }}>
                      <div className="max-h-[300px]" style={{ position: "relative", cursor: "default", width: "100%", height: "100%", maxWidth: "599px" }} data-site-import-responsive="166">
                        <svg className="recharts-surface" style={{ width: "100%", height: "100%" }} d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "300" : "300"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? "0 0 358 300" : "0 0 599 300"} width={isMobile ? "358" : "599"} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-site-import-responsive="167">
                          <title />
                          <desc />
                          <defs>
                            <clipPath id="recharts1-clip">
                              <rect d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} data-site-import-responsive="170" />
                            </clipPath>
                          </defs>
                          <g className="recharts-cartesian-grid">
                            <g>
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="255" x2="584" y2="255" data-site-import-responsive="173" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="195" x2="584" y2="195" data-site-import-responsive="174" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="135" x2="584" y2="135" data-site-import-responsive="175" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="75" x2="584" y2="75" data-site-import-responsive="176" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="15" x2="584" y2="15" data-site-import-responsive="177" />
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "30" : "30"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "255" : "255"} stroke="#666" fill="none" x1="60" y1="255" x2="584" y2="255" data-site-import-responsive="179" {...({ orientation: "bottom" } as any)} />
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
                      <div className="max-h-[300px]" style={{ position: "relative", cursor: "default", width: "100%", height: "100%", maxWidth: "599px" }} data-site-import-responsive="234">
                        <svg className="recharts-surface" style={{ width: "100%", height: "100%" }} d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "300" : "300"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? "0 0 358 300" : "0 0 599 300"} width={isMobile ? "358" : "599"} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-site-import-responsive="235">
                          <title />
                          <desc />
                          <defs>
                            <clipPath id="recharts4-clip">
                              <rect d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} data-site-import-responsive="238" />
                            </clipPath>
                          </defs>
                          <g className="recharts-cartesian-grid">
                            <g>
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="255" x2="584" y2="255" data-site-import-responsive="241" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="195" x2="584" y2="195" data-site-import-responsive="242" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="135" x2="584" y2="135" data-site-import-responsive="243" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="75" x2="584" y2="75" data-site-import-responsive="244" />
                              <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "240" : "240"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "15" : "15"} stroke="var(--grid-line)" fill="none" x1="60" y1="15" x2="584" y2="15" data-site-import-responsive="245" />
                            </g>
                          </g>
                          <g className="recharts-layer">
                            <line d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? "30" : "30"} textLength={isMobile ? undefined : undefined} transform={isMobile ? undefined : undefined} viewBox={isMobile ? undefined : undefined} width={isMobile ? "283" : "524"} x={isMobile ? "60" : "60"} y={isMobile ? "255" : "255"} stroke="#666" fill="none" x1="60" y1="255" x2="584" y2="255" data-site-import-responsive="247" {...({ orientation: "bottom" } as any)} />
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
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-NtHQu-panel" aria-activedescendant="bb-customSelect-NtHQu-selectedOption">
                    <span>AMI</span>
                  </span>
                  <select aria-label="Environment" disabled defaultValue="AMI">
                    <option value="">All environments</option>
                    <option>AMI</option>
                    <option>SCADA</option>
                  </select>
                  <div id="bb-customSelect-NtHQu-panel" role="listbox">
                    <div role="option">All environments</div>
                    <div role="option" id="bb-customSelect-NtHQu-selectedOption">AMI</div>
                    <div role="option">SCADA</div>
                  </div>
                </div>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-yeNIa-panel" aria-activedescendant="bb-customSelect-yeNIa-selectedOption" tabIndex={0}>
                    <span>All risk levels</span>
                  </span>
                  <select aria-label="Risk" tabIndex={-1} defaultValue="">
                    <option value="">All risk levels</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Not flagged</option>
                  </select>
                  <div id="bb-customSelect-yeNIa-panel" role="listbox">
                    <div role="option" id="bb-customSelect-yeNIa-selectedOption">All risk levels</div>
                    <div role="option">High</div>
                    <div role="option">Medium</div>
                    <div role="option">Not flagged</div>
                  </div>
                </div>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-VSMdc-panel" aria-activedescendant="bb-customSelect-VSMdc-selectedOption" tabIndex={0}>
                    <span>All transfers</span>
                  </span>
                  <select aria-label="Transfer" tabIndex={-1} defaultValue="">
                    <option value="">All transfers</option>
                    <option value="True">Attempted</option>
                    <option value="False">Not attempted</option>
                  </select>
                  <div id="bb-customSelect-VSMdc-panel" role="listbox">
                    <div role="option" id="bb-customSelect-VSMdc-selectedOption">All transfers</div>
                    <div role="option">Attempted</div>
                    <div role="option">Not attempted</div>
                  </div>
                </div>
                <div>
                  <span role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-ed4Id-panel" aria-activedescendant="bb-customSelect-ed4Id-selectedOption" tabIndex={0}>
                    <span>All destinations</span>
                  </span>
                  <select aria-label="Destination" tabIndex={-1} defaultValue="">
                    <option value="">All destinations</option>
                    <option value="True">Approved</option>
                    <option value="False">Unapproved</option>
                  </select>
                  <div id="bb-customSelect-ed4Id-panel" role="listbox">
                    <div role="option" id="bb-customSelect-ed4Id-selectedOption">All destinations</div>
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
                        <td className="font-mono">EVT-00210</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:39:20</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00210">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00209</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:39:10</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00209">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00208</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:36:40</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00208">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00207</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:36:30</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00207">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00206</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:36:20</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00206">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00205</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:36:10</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00205">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00204</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:33:40</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00204">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00203</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:33:30</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00203">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00202</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:33:20</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00202">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00201</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:33:10</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">maintenance_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">scheduled_maintenance</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00201">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00200</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:30:40</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00200">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00199</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:30:30</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00199">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00198</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:30:20</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00198">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00197</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:30:10</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00197">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-mono">EVT-00196</td>
                        <td className="font-mono text-muted-foreground">2026-11-11 12:27:40</td>
                        <td>
                          <span className="import-environment-badge">AMI</span>
                        </td>
                        <td className="font-mono">operator_01</td>
                        <td>
                          <span className="workspace-neutral-badge">Not flagged</span>
                        </td>
                        <td className="workspace-reason">read</td>
                        <td>
                          <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 \x64isabled:\x63ursor-not-allowed [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"} aria-label="Details EVT-00196">Details</button>
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
      <span style={{ position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre" } as CSSProperties} id="recharts_measurement_span" aria-hidden="true">220</span>
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
        <span className={"hidden font-mono text-muted-foreground \x73m:\x69nline"}>172 ms</span>
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
