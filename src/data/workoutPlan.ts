import { WorkoutDay } from "@/types";

export const workoutDays: WorkoutDay[] = [
  {
    day: "Monday",
    title: "Lower Body Strength + Knee Health",
    minutes: "45-60",
    notes: "If knee pain is above 5/10, lower intensity.",
    exercises: [
      "Trap Bar Deadlift or RDL",
      "Bulgarian Split Squat",
      "Hip Thrust",
      "Spanish Squat",
      "Tibialis Raises",
      "Calf Raises",
      "Pallof Press"
    ]
  },
  {
    day: "Tuesday",
    title: "Jump Power + Speed",
    minutes: "30-45",
    notes: "Jump quality matters more than volume.",
    exercises: [
      "Approach Jumps",
      "Box Jumps",
      "Broad Jumps",
      "Lateral Bounds",
      "Sprint Starts",
      "Spanish Squat"
    ]
  },
  {
    day: "Wednesday",
    title: "Upper Body Power + Core",
    minutes: "45-60",
    notes: "Back, shoulder, and hitting power day.",
    exercises: [
      "Pull-Ups",
      "DB Bench Press",
      "Single-Arm Row",
      "Landmine Press or DB Shoulder Press",
      "Face Pulls",
      "Y-T-W Raises",
      "Med Ball Rotational Throws",
      "Hanging Leg Raises"
    ]
  },
  {
    day: "Thursday",
    title: "Mobility + Recovery",
    minutes: "20-30",
    notes: "Mobility day. Boring but useful. Tragic.",
    exercises: [
      "Full-Body Mobility Flow",
      "Deep Squat Holds",
      "Couch Stretch",
      "Shoulder CARs",
      "Hip CARs",
      "Dead Bugs",
      "Side Planks"
    ]
  },
  {
    day: "Friday",
    title: "Explosive Full Body + Power",
    minutes: "45-60",
    notes: "Move fast. Do not turn power work into slow reps.",
    exercises: [
      "Power Cleans or Kettlebell Swings",
      "Push Press",
      "Medicine Ball Slams",
      "Med Ball Rotational Throws",
      "Pull-Ups",
      "Dips",
      "Cable Woodchoppers"
    ]
  },
  {
    day: "Saturday",
    title: "Calisthenics + Back Conditioning",
    minutes: "45-60",
    notes: "Main back and calisthenics strength day.",
    exercises: [
      "Pull-Ups",
      "Dips",
      "Bodyweight Rows",
      "Pike Push-Ups",
      "L-Sit Practice",
      "Handstand Practice",
      "Farmer Carries",
      "Court Sprints"
    ]
  },
  {
    day: "Sunday",
    title: "Rest + Reset",
    minutes: "20-30",
    rest: true,
    notes: "Recover. Adaptation happens when you rest.",
    exercises: [
      "Walk 20-30 minutes",
      "Light stretching",
      "Foam roll",
      "Light shoulder band work",
      "Plan meals",
      "Sleep 8-9 hours"
    ]
  }
];

export function getPhase(week: number) {
  if (week <= 4) {
    return {
      name: "Foundation Phase",
      focus: "Movement quality, knee health, shoulder stability",
      sets: "2-3 sets",
      intensity: "Moderate"
    };
  }

  if (week <= 8) {
    return {
      name: "Strength Phase",
      focus: "Build strength, muscle endurance, tendon capacity",
      sets: "3-4 sets",
      intensity: "Moderate-Heavy"
    };
  }

  if (week <= 12) {
    return {
      name: "Power Phase",
      focus: "Jump higher, hit harder, move weight faster",
      sets: "3-5 sets",
      intensity: "High"
    };
  }

  if (week <= 16) {
    return {
      name: "Peak Athletic Phase",
      focus: "Explosiveness, speed, volleyball transfer",
      sets: "4-5 sets",
      intensity: "High but controlled"
    };
  }

  return {
    name: "Performance Phase",
    focus: "Stay explosive, healthy, sharp, consistent",
    sets: "2-4 sets",
    intensity: "Smart/Controlled"
  };
}

export function getPrescription(week: number, exercise: string) {
  if (
    exercise.includes("Jump") ||
    exercise.includes("Bounds") ||
    exercise.includes("Sprints")
  ) {
    if (week <= 4) return "3x3";
    if (week <= 8) return "4x3";
    if (week <= 16) return "5x3";
    return "3x3";
  }

  if (
    exercise.includes("Mobility") ||
    exercise.includes("Stretch") ||
    exercise.includes("CARs")
  ) {
    return "10-20 min";
  }

  if (exercise.includes("Spanish")) return "3x30-45 sec";

  if (week <= 4) return "2-3x10";
  if (week <= 8) return "3-4x8";
  if (week <= 12) return "4x6";
  if (week <= 16) return "4-5x5";
  return "2-3x8";
}
