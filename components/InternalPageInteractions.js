"use client";

import { useEffect } from "react";

export default function InternalPageInteractions() {
  useEffect(() => {
    const buttons = [...document.querySelectorAll(".original-internal-page button[aria-controls]")];
    const cleanups = [];

    for (const button of buttons) {
      const onClick = () => {
        const panelId = button.getAttribute("aria-controls");
        const panel = panelId ? document.getElementById(panelId) : null;
        if (!panel) return;

        const shouldOpen = button.getAttribute("aria-expanded") !== "true";

        if (button.dataset.givingToggle === "true") {
          for (const sibling of document.querySelectorAll(".original-internal-page button[data-giving-toggle='true']")) {
            sibling.setAttribute("aria-expanded", "false");
            const siblingPanel = document.getElementById(sibling.getAttribute("aria-controls"));
            siblingPanel?.classList.add("hidden");
          }
          panel.classList.toggle("hidden", !shouldOpen);
        } else {
          panel.classList.toggle("grid-rows-[0fr]", !shouldOpen);
          panel.classList.toggle("grid-rows-[1fr]", shouldOpen);
        }

        button.setAttribute("aria-expanded", String(shouldOpen));
        button.querySelector("svg:last-of-type")?.classList.toggle("rotate-180", shouldOpen);
      };

      button.addEventListener("click", onClick);
      cleanups.push(() => button.removeEventListener("click", onClick));
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
