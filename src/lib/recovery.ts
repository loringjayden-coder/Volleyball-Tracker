import { StatEntry } from "@/types";

export function calculateRecovery(stats?: StatEntry | null) {
  if (!stats) return 0;

  const sleep = Number(stats.sleep) || 0;
  const knee = Number(stats.kneePain) || 0;
  const shoulder = Number(stats.shoulderPain) || 0;
  const soreness = Number(stats.soreness) || 0;
  const energy = Number(stats.energy) || 0;

  const score =
    (sleep / 9) * 28 +
    ((10 - knee) / 10) * 20 +
    ((10 - shoulder) / 10) * 20 +
    ((10 - soreness) / 10) * 12 +
    (energy / 10) * 20;

  return Math.round(Math.max(0, Math.min(100, score)));
}

export function recoveryStatus(score: number) {
  if (score >= 85) {
    return {
      label: "Elite",
      message: "Go train hard. Your body appears to be cooperating for once."
    };
  }

  if (score >= 70) {
    return {
      label: "Good",
      message: "You are good to train. Keep it smart."
    };
  }

  if (score >= 55) {
    return {
      label: "Caution",
      message: "Reduce volume 20-30% today."
    };
  }

  return {
    label: "Low",
    message: "Recovery day. Biology has filed a complaint."
  };
}

export function coachRecommendations(stats?: StatEntry | null) {
  if (!stats) return ["Add stats first so the coach can stop guessing like a caveman."];

  const list: string[] = [];
  const score = calculateRecovery(stats);

  if (score >= 70) list.push("✅ You are good to train today.");
  if (score < 70) list.push("⚠️ Reduce total volume today.");
  if (Number(stats.kneePain) >= 5) list.push("⚠️ Skip max jumps and do knee rehab.");
  if (Number(stats.shoulderPain) >= 5) list.push("⚠️ Replace overhead pressing with shoulder-friendly work.");
  if (Number(stats.sleep) < 7) list.push("⚠️ Aim for 8+ hours of sleep tonight.");
  if (Number(stats.energy) <= 5) list.push("⚠️ Keep intensity moderate.");
  if (Number(stats.soreness) >= 7) list.push("⚠️ Mobility and easy work only.");

  return list.length ? list : ["✅ Keep pushing. Stay consistent."];
}
