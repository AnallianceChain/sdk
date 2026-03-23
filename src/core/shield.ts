import { generateNoise } from "../ai/noiseEngine";
import { log } from "../utils/logger";

export type ShieldMode = "light" | "full-shield";

export const enableProtection = (options: { mode: ShieldMode }) => {
  log("🛡️ Protection enabled");

  if (options.mode === "full-shield") {
    log("⚡ Running full shield mode...");
    generateNoise(true);
  } else {
    log("🔇 Running light protection...");
    generateNoise(false);
  }
};
