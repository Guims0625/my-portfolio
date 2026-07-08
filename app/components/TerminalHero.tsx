"use client";

import { useEffect, useRef } from "react";

type Line = {
  t: "prompt" | "path" | "plain" | "out";
  text: string;
};

const lines: Line[] = [
  { t: "prompt", text: "matthew@laguna" },
  { t: "plain", text: ":" },
  { t: "path", text: "~" },
  { t: "plain", text: "$ whoami\n" },
  { t: "out", text: "Matthew Lawrence DC. Guimong\n" },
  { t: "out", text: "QA Tester @ Kingdomly · Cloud Eng. Intern\n\n" },
  { t: "prompt", text: "matthew@laguna" },
  { t: "plain", text: ":" },
  { t: "path", text: "~" },
  { t: "plain", text: "$ cat focus.txt\n" },
  { t: "out", text: "Testing Web3 apps + NFT marketplaces\n" },
  { t: "out", text: "Automating with Cypress, Playwright, k6\n" },
  { t: "out", text: "Provisioning AWS infra with Terraform\n\n" },
  { t: "prompt", text: "matthew@laguna" },
  { t: "plain", text: ":" },
  { t: "path", text: "~" },
  { t: "plain", text: "$ sudo make coffee\n" },
  { t: "out", text: "[sudo] brewing... ☕ done, make that matcha 🍵\n\n" },
  { t: "prompt", text: "matthew@laguna" },
  { t: "plain", text: ":" },
  { t: "path", text: "~" },
  { t: "plain", text: "$ echo $STATUS\n" },
  { t: "out", text: "Open to QA / Cloud opportunities ✓" },
];

function renderStatic(upTo: number): string {
  let html = "";
  for (let i = 0; i < upTo; i++) {
    const l = lines[i];
    if (l.t === "prompt") html += `<span class="prompt">${l.text}</span>`;
    else if (l.t === "path") html += `<span class="path">${l.text}</span>`;
    else html += l.text;
  }
  return html;
}

export default function TerminalHero() {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      target.innerHTML = renderStatic(lines.length);
      return;
    }

    let li = 0;
    let ci = 0;
    const speed = 16;
    let timeoutId: ReturnType<typeof setTimeout>;

    function typeStep() {
      if (!target) return;

      if (li >= lines.length) {
        target.innerHTML = renderStatic(lines.length) + '<span class="cursor"></span>';
        return;
      }
      const line = lines[li];
      const partial = line.text.slice(0, ci);
      let html = renderStatic(li);
      const wrap = line.t === "prompt" ? "prompt" : line.t === "path" ? "path" : "";
      html += wrap ? `<span class="${wrap}">${partial}</span>` : partial;
      html += '<span class="cursor"></span>';
      target.innerHTML = html;

      ci++;
      if (ci > line.text.length) {
        ci = 0;
        li++;
        timeoutId = setTimeout(typeStep, line.t === "out" ? 120 : 40);
      } else {
        timeoutId = setTimeout(typeStep, speed);
      }
    }

    typeStep();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="term">
      <div className="term-bar">
        <div className="term-dot r"></div>
        <div className="term-dot y"></div>
        <div className="term-dot g"></div>
        <div className="term-title">matthew@laguna: ~</div>
      </div>
      <div className="term-body">
        <div id="typed-out" ref={targetRef}></div>
      </div>
    </div>
  );
}