import { Exercise } from "@/types";

export const exercises: Exercise[] = [
  {
    name: "Trap Bar Deadlift or RDL",
    category: "Lower Body",
    icon: "🏋️",
    purpose: "Builds posterior-chain strength for jumping, landing, and hitting power.",
    cues: ["Brace before lifting.", "Push through the floor.", "Keep your back neutral."],
    mistakes: ["Rounding your back.", "Jerking the weight.", "Letting knees cave in."],
    substitutions: ["Romanian Deadlift", "Kettlebell Deadlift", "Hip Thrust"],
    video: "https://www.youtube.com/results?search_query=trap+bar+deadlift+proper+form"
  },
  {
    name: "Bulgarian Split Squat",
    category: "Lower Body",
    icon: "🦵",
    purpose: "Builds single-leg strength for jumping, cutting, and knee control.",
    cues: ["Control the descent.", "Drive through the front leg.", "Keep your torso stable."],
    mistakes: ["Pushing too much off the back leg.", "Knee collapsing inward."],
    substitutions: ["Reverse Lunge", "Step-Up", "Split Squat"],
    video: "https://www.youtube.com/results?search_query=bulgarian+split+squat+proper+form"
  },
  {
    name: "Spanish Squat",
    category: "Rehab",
    icon: "🦿",
    purpose: "Strengthens quads and builds patellar tendon tolerance.",
    cues: ["Stay upright.", "Sit back into the band.", "Keep tension on quads."],
    mistakes: ["Relaxing at the bottom.", "Letting knees cave."],
    substitutions: ["Wall Sit", "Reverse Sled Drag", "Patrick Step"],
    video: "https://www.youtube.com/results?search_query=spanish+squat+knee+pain"
  },
  {
    name: "Approach Jumps",
    category: "Plyometrics",
    icon: "🏐",
    purpose: "Transfers strength into volleyball-specific jumping.",
    cues: ["Fast last two steps.", "Swing arms hard.", "Land softly."],
    mistakes: ["Doing too many tired reps.", "Landing stiff."],
    substitutions: ["Standing Vertical Jumps", "Box Jumps", "Broad Jumps"],
    video: "https://www.youtube.com/results?search_query=volleyball+approach+jump+technique"
  },
  {
    name: "Pull-Ups",
    category: "Upper Body",
    icon: "💪",
    purpose: "Builds back strength for hitting power, shoulder health, and calisthenics.",
    cues: ["Start from a dead hang.", "Pull chest toward bar.", "Control down."],
    mistakes: ["Half reps.", "Kipping every rep.", "Shrugging shoulders."],
    substitutions: ["Lat Pulldown", "Assisted Pull-Up", "Inverted Row"],
    video: "https://www.youtube.com/results?search_query=pull+up+proper+form"
  },
  {
    name: "Med Ball Rotational Throws",
    category: "Core",
    icon: "🔁",
    purpose: "Builds rotational power for harder hitting.",
    cues: ["Rotate hips first.", "Throw explosively.", "Brace core."],
    mistakes: ["Only using arms.", "Rushing reps."],
    substitutions: ["Cable Woodchoppers", "Landmine Rotations", "Band Rotations"],
    video: "https://www.youtube.com/results?search_query=medicine+ball+rotational+throw"
  },
  {
    name: "Full-Body Mobility Flow",
    category: "Mobility",
    icon: "🧘",
    purpose: "Improves movement quality and recovery.",
    cues: ["Move slowly.", "Breathe.", "Do not force range."],
    mistakes: ["Rushing.", "Forcing painful positions."],
    substitutions: ["Yoga Flow", "Dynamic Stretching"],
    video: "https://www.youtube.com/results?search_query=full+body+mobility+flow"
  },
  {
    name: "L-Sit Practice",
    category: "Core",
    icon: "🧱",
    purpose: "Builds core compression, hip flexor strength, and calisthenics control.",
    cues: ["Push shoulders down.", "Lock elbows.", "Point toes."],
    mistakes: ["Bent arms.", "Collapsed shoulders.", "Holding breath."],
    substitutions: ["Tuck L-Sit", "Seated Leg Lifts", "Hanging Knee Raises"],
    video: "https://www.youtube.com/results?search_query=l+sit+progression"
  }
];
