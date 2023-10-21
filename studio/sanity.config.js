import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./schemas/schema";

export default defineConfig({
  title: "yellow-panther",
  projectId: "a4ubjr1v",
  dataset: "production",
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: {
    types: schemas,
  },
  tools: (prev) => {
    // Uses environment variables set by Vite in development mode
    const devOnlyTools = ["vision"];
    if (import.meta.env.DEV) {
      return prev;
    } else {
      return prev.filter((tool) => !devOnlyTools.includes(tool.name));
    }
  },
});
