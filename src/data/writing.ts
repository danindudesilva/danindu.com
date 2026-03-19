import type { WritingItem } from "./types";

export const featuredWriting: WritingItem[] = [
  {
    title: "Optimizing Puppeteer for PDF Generation",
    description:
      "In one of my recent projects, I tackled a persistent challenge with generating PDFs using Puppeteer (https://pptr.dev/) in a JavaScript-based service. My goal was to address failures caused by large transaction sizes and improve the system’s scalability and reliability. Here’s a breakdown of the problem, our solution, and the lessons learned during this collaborative effort.",
    date: "2025-03-19",
    url: "https://danindu.medium.com/optimizing-puppeteer-for-pdf-generation-overcoming-challenges-with-large-file-sizes-8b7777edbeca",
    platform: "Medium",
  },
  {
    title: "Testing apps locally with Google’s Pub/Sub emulator",
    description:
      "As you may already know, you can use Google’s beta emulator for Pub/Sub to setup a local environment for testing purposes. In this article, I’m going to explain how to do local testing using it’s APIs so that you won’t need an external client running in order to do publish or subscribe for your testing.",
    date: "2024-03-19",
    url: "https://danindu.medium.com/testing-apps-locally-with-googles-pub-sub-emulator-8d6f2fdde3b0",
    platform: "Medium",
  },
];
