export const generateNoise = (aggressive: boolean) => {
  if (aggressive) {
    console.log("🔊 Generating high-frequency AI masking noise...");
  } else {
    console.log("🔉 Generating low-level background noise...");
  }

  // Simulasi noise masking
  setInterval(() => {
    const noise = Math.random().toString(36).substring(2, 8);
    console.log("Noise Signal:", noise);
  }, aggressive ? 500 : 1500);
};
