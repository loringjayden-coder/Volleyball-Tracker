import { Exercise } from "@/types";

export const exercises: Exercise[] = [
  {
    name: "Trap Bar Deadlift or RDL",
    category: "Lower Body",
    icon: "🏋️",
    purpose: "Builds posterior-chain strength for jumping, landing, and hitting power.",
    cues: ["Brace your core before each rep.", "Push the floor away.", "Keep your back neutral.", "Control the lowering phase."],
    mistakes: ["Rounding your back.", "Jerking the weight.", "Letting knees cave inward."],
    substitutions: ["Romanian Deadlift", "Kettlebell Deadlift", "Hip Thrust"],
    video: "https://www.youtube.com/results?search_query=trap+bar+deadlift+proper+form"
  },
  {
    name: "Bulgarian Split Squat",
    category: "Lower Body",
    icon: "🦵",
    purpose: "Builds single-leg strength for jumping, cutting, landing, and knee control.",
    cues: ["Control the descent.", "Drive through the front foot.", "Keep your knee tracking over your toes.", "Stay tall through your torso."],
    mistakes: ["Bouncing at the bottom.", "Pushing too much from the back leg.", "Letting the front knee collapse inward."],
    substitutions: ["Reverse Lunge", "Step-Up", "Split Squat"],
    video: "https://www.youtube.com/results?search_query=bulgarian+split+squat+proper+form"
  },
  {
    name: "Hip Thrust",
    category: "Lower Body",
    icon: "🍑",
    purpose: "Builds glute strength for jumping, sprinting, and hip extension power.",
    cues: ["Tuck your ribs down.", "Drive through your heels.", "Squeeze glutes hard at the top.", "Keep your chin tucked."],
    mistakes: ["Overarching your lower back.", "Feet too far away.", "Rushing the top position."],
    substitutions: ["Glute Bridge", "Single-Leg Hip Thrust", "Cable Pull-Through"],
    video: "https://www.youtube.com/results?search_query=hip+thrust+proper+form"
  },
  {
    name: "Spanish Squat",
    category: "Rehab",
    icon: "🦿",
    purpose: "Strengthens quads and builds patellar tendon tolerance for knee health.",
    cues: ["Stay upright.", "Sit back against the band.", "Keep constant quad tension.", "Hold pain-free pressure."],
    mistakes: ["Relaxing at the bottom.", "Letting knees cave.", "Going into sharp pain."],
    substitutions: ["Wall Sit", "Reverse Sled Drag", "Patrick Step"],
    video: "https://www.youtube.com/results?search_query=spanish+squat+knee+pain"
  },
  {
    name: "Tibialis Raises",
    category: "Rehab",
    icon: "🦶",
    purpose: "Strengthens the front of the shin to help knee health, ankle control, and landing mechanics.",
    cues: ["Keep heels planted.", "Pull toes up hard.", "Control the lowering.", "Use full range."],
    mistakes: ["Using momentum.", "Only doing tiny reps.", "Letting hips move forward and back."],
    substitutions: ["Tib Bar Raises", "Toe Raises Against Wall", "Band Dorsiflexion"],
    video: "https://www.youtube.com/results?search_query=tibialis+raises+proper+form"
  },
  {
    name: "Calf Raises",
    category: "Lower Body",
    icon: "🦵",
    purpose: "Builds ankle strength, stiffness, and lower-leg durability for jumping.",
    cues: ["Pause at the top.", "Control the descent.", "Use full range.", "Keep ankles straight."],
    mistakes: ["Bouncing reps.", "Rolling ankles outward.", "Cutting the bottom range short."],
    substitutions: ["Single-Leg Calf Raise", "Seated Calf Raise", "Pogo Hops"],
    video: "https://www.youtube.com/results?search_query=calf+raise+proper+form"
  },
  {
    name: "Pallof Press",
    category: "Core",
    icon: "🧱",
    purpose: "Builds anti-rotation core strength for hitting stability and body control.",
    cues: ["Brace like you are about to get bumped.", "Press straight out.", "Do not rotate.", "Move slow and controlled."],
    mistakes: ["Twisting with the band.", "Shrugging shoulders.", "Using too much weight."],
    substitutions: ["Dead Bug", "Side Plank", "Cable Anti-Rotation Hold"],
    video: "https://www.youtube.com/results?search_query=pallof+press+proper+form"
  },
  {
    name: "Approach Jumps",
    category: "Plyometrics",
    icon: "🏐",
    purpose: "Transfers strength into volleyball-specific jumping.",
    cues: ["Fast last two steps.", "Big arm swing.", "Jump tall.", "Land softly and balanced."],
    mistakes: ["Too many tired reps.", "Stiff landings.", "Slow penultimate step.", "Jumping forward too much."],
    substitutions: ["Standing Vertical Jumps", "Box Jumps", "Broad Jumps"],
    video: "https://www.youtube.com/results?search_query=volleyball+approach+jump+technique"
  },
  {
    name: "Box Jumps",
    category: "Plyometrics",
    icon: "📦",
    purpose: "Builds explosive jumping power with lower landing stress.",
    cues: ["Jump explosively.", "Land quietly.", "Step down instead of jumping down.", "Keep reps crisp."],
    mistakes: ["Choosing a box too high.", "Landing in a deep squat.", "Doing conditioning reps instead of power reps."],
    substitutions: ["Squat Jumps", "Approach Jumps", "Broad Jumps"],
    video: "https://www.youtube.com/results?search_query=box+jump+proper+form"
  },
  {
    name: "Broad Jumps",
    category: "Plyometrics",
    icon: "🚀",
    purpose: "Builds horizontal power for sprinting, approach speed, and elastic jumping.",
    cues: ["Load hips back.", "Swing arms hard.", "Jump forward aggressively.", "Stick the landing."],
    mistakes: ["Landing stiff.", "Letting knees collapse.", "Doing too many sloppy reps."],
    substitutions: ["Standing Long Jump", "Bounds", "Box Jumps"],
    video: "https://www.youtube.com/results?search_query=broad+jump+proper+form"
  },
  {
    name: "Lateral Bounds",
    category: "Plyometrics",
    icon: "↔️",
    purpose: "Builds side-to-side power and knee control for defense and court movement.",
    cues: ["Push hard off the outside leg.", "Stick the landing.", "Keep hips level.", "Control knee position."],
    mistakes: ["Rushing reps.", "Landing with knee caved in.", "Not controlling the stop."],
    substitutions: ["Skater Jumps", "Lateral Lunges", "Side-to-Side Hops"],
    video: "https://www.youtube.com/results?search_query=lateral+bound+proper+form"
  },
  {
    name: "Sprint Starts",
    category: "Plyometrics",
    icon: "💨",
    purpose: "Builds acceleration for faster approaches, defensive reactions, and court speed.",
    cues: ["Lean forward.", "Push the ground back.", "Explode for the first 3 steps.", "Stay low early."],
    mistakes: ["Standing straight up too soon.", "Taking weak first steps.", "Running tired reps."],
    substitutions: ["Falling Starts", "Hill Sprints", "Court Sprints"],
    video: "https://www.youtube.com/results?search_query=sprint+start+acceleration+drills"
  },
  {
    name: "Pull-Ups",
    category: "Upper Body",
    icon: "💪",
    purpose: "Builds back strength for hitting power, shoulder health, and calisthenics.",
    cues: ["Start from a dead hang.", "Pull chest toward the bar.", "Drive elbows down.", "Control the lowering."],
    mistakes: ["Half reps.", "Shrugging shoulders.", "Kipping every rep.", "Not controlling the eccentric."],
    substitutions: ["Lat Pulldown", "Assisted Pull-Up", "Inverted Row"],
    video: "https://www.youtube.com/results?search_query=pull+up+proper+form"
  },
  {
    name: "DB Bench Press",
    category: "Upper Body",
    icon: "🏋️",
    purpose: "Builds pressing strength for upper-body power while allowing shoulder-friendly movement.",
    cues: ["Keep shoulder blades pulled back.", "Lower under control.", "Press up strong.", "Keep wrists stacked."],
    mistakes: ["Flaring elbows too much.", "Bouncing at the bottom.", "Letting shoulders roll forward."],
    substitutions: ["Push-Ups", "Machine Chest Press", "Floor Press"],
    video: "https://www.youtube.com/results?search_query=dumbbell+bench+press+proper+form"
  },
  {
    name: "Single-Arm Row",
    category: "Upper Body",
    icon: "🛶",
    purpose: "Builds back strength, shoulder balance, and pulling power for hitting mechanics.",
    cues: ["Pull elbow toward your hip.", "Keep torso still.", "Squeeze your back.", "Control the weight down."],
    mistakes: ["Twisting your whole body.", "Shrugging.", "Yanking the weight."],
    substitutions: ["Chest-Supported Row", "Cable Row", "Bodyweight Row"],
    video: "https://www.youtube.com/results?search_query=single+arm+dumbbell+row+proper+form"
  },
  {
    name: "Landmine Press or DB Shoulder Press",
    category: "Upper Body",
    icon: "💥",
    purpose: "Builds shoulder pressing power while supporting overhead strength for hitting.",
    cues: ["Brace core.", "Press slightly forward and up.", "Keep ribs down.", "Control the lowering."],
    mistakes: ["Overarching lower back.", "Shrugging hard.", "Pressing through shoulder pain."],
    substitutions: ["Half-Kneeling Landmine Press", "Seated DB Press", "Push Press"],
    video: "https://www.youtube.com/results?search_query=landmine+press+proper+form"
  },
  {
    name: "Face Pulls",
    category: "Rehab",
    icon: "🧵",
    purpose: "Builds rear delts and rotator cuff support for shoulder health.",
    cues: ["Pull toward your forehead.", "Elbows high.", "Squeeze shoulder blades.", "Control the return."],
    mistakes: ["Using too much weight.", "Turning it into a row.", "Arching your back."],
    substitutions: ["Band Pull-Aparts", "Rear Delt Fly", "Cable External Rotation"],
    video: "https://www.youtube.com/results?search_query=face+pull+proper+form"
  },
  {
    name: "Y-T-W Raises",
    category: "Rehab",
    icon: "🪽",
    purpose: "Strengthens lower traps, rear delts, and shoulder stabilizers.",
    cues: ["Move slow.", "Keep thumbs up.", "Squeeze shoulder blades gently.", "Use light weight."],
    mistakes: ["Going too heavy.", "Shrugging.", "Rushing reps."],
    substitutions: ["Prone Y Raises", "Band Pull-Aparts", "Scapular Wall Slides"],
    video: "https://www.youtube.com/results?search_query=ytw+raises+shoulder+stability"
  },
  {
    name: "Med Ball Rotational Throws",
    category: "Core",
    icon: "🔁",
    purpose: "Builds rotational power for harder hitting.",
    cues: ["Rotate hips first.", "Throw explosively.", "Brace your core.", "Reset each rep."],
    mistakes: ["Only using arms.", "Rushing reps.", "Letting knees cave during rotation."],
    substitutions: ["Cable Woodchoppers", "Landmine Rotations", "Band Rotations"],
    video: "https://www.youtube.com/results?search_query=medicine+ball+rotational+throw"
  },
  {
    name: "Hanging Leg Raises",
    category: "Core",
    icon: "🧱",
    purpose: "Builds core strength, hip flexor strength, and body control.",
    cues: ["Control the swing.", "Tuck pelvis slightly.", "Raise legs with abs.", "Lower slowly."],
    mistakes: ["Swinging wildly.", "Using momentum.", "Arching lower back."],
    substitutions: ["Hanging Knee Raises", "Reverse Crunch", "Dead Bug"],
    video: "https://www.youtube.com/results?search_query=hanging+leg+raise+proper+form"
  },
  {
    name: "Full-Body Mobility Flow",
    category: "Mobility",
    icon: "🧘",
    purpose: "Improves movement quality, recovery, and joint range.",
    cues: ["Move slowly.", "Breathe through positions.", "Do not force range.", "Stay relaxed."],
    mistakes: ["Rushing.", "Forcing painful positions.", "Holding your breath."],
    substitutions: ["Yoga Flow", "Dynamic Stretching", "Joint CARs"],
    video: "https://www.youtube.com/results?search_query=full+body+mobility+flow+athlete"
  },
  {
    name: "Deep Squat Holds",
    category: "Mobility",
    icon: "🧎",
    purpose: "Improves ankle, hip, and squat mobility for better movement positions.",
    cues: ["Keep heels down if possible.", "Breathe.", "Push knees out gently.", "Stay relaxed."],
    mistakes: ["Forcing painful depth.", "Rounding aggressively.", "Holding tension everywhere."],
    substitutions: ["Goblet Squat Hold", "Supported Squat Hold", "Ankle Rocks"],
    video: "https://www.youtube.com/results?search_query=deep+squat+hold+mobility"
  },
  {
    name: "Couch Stretch",
    category: "Mobility",
    icon: "🛋️",
    purpose: "Opens hip flexors and quads to help jumping posture and lower-back position.",
    cues: ["Squeeze glute on the back leg.", "Keep ribs down.", "Breathe slowly.", "Do not crank your lower back."],
    mistakes: ["Overarching lower back.", "Forcing the knee into pain.", "Holding breath."],
    substitutions: ["Half-Kneeling Hip Flexor Stretch", "Quad Stretch", "Lunge Stretch"],
    video: "https://www.youtube.com/results?search_query=couch+stretch+proper+form"
  },
  {
    name: "Shoulder CARs",
    category: "Mobility",
    icon: "🔄",
    purpose: "Improves shoulder control and range of motion.",
    cues: ["Move slowly.", "Keep ribs down.", "Use pain-free range.", "Control every angle."],
    mistakes: ["Rushing.", "Arching your back.", "Forcing through pinching pain."],
    substitutions: ["Arm Circles", "Wall Slides", "Band Dislocates"],
    video: "https://www.youtube.com/results?search_query=shoulder+CARs+controlled+articular+rotations"
  },
  {
    name: "Hip CARs",
    category: "Mobility",
    icon: "🔄",
    purpose: "Improves hip control, range, and movement quality.",
    cues: ["Move slow.", "Keep torso still.", "Use full pain-free range.", "Control the circle."],
    mistakes: ["Twisting your torso.", "Rushing.", "Forcing pinchy range."],
    substitutions: ["90/90 Hip Switches", "Hip Circles", "Lunge Mobility"],
    video: "https://www.youtube.com/results?search_query=hip+CARs+proper+form"
  },
  {
    name: "Dead Bugs",
    category: "Core",
    icon: "🐞",
    purpose: "Builds core control and lower-back stability.",
    cues: ["Press low back gently into floor.", "Move opposite arm and leg.", "Exhale as you extend.", "Go slow."],
    mistakes: ["Arching the lower back.", "Moving too fast.", "Holding breath."],
    substitutions: ["Bird Dog", "Pallof Press", "Hollow Hold"],
    video: "https://www.youtube.com/results?search_query=dead+bug+exercise+proper+form"
  },
  {
    name: "Side Planks",
    category: "Core",
    icon: "📏",
    purpose: "Builds lateral core strength for hitting, landing, and trunk control.",
    cues: ["Stack shoulders and hips.", "Push the floor away.", "Squeeze glutes.", "Stay long."],
    mistakes: ["Sagging hips.", "Rotating forward.", "Holding breath."],
    substitutions: ["Side Plank From Knees", "Copenhagen Plank", "Suitcase Carry"],
    video: "https://www.youtube.com/results?search_query=side+plank+proper+form"
  },
  {
    name: "Power Cleans or Kettlebell Swings",
    category: "Plyometrics",
    icon: "⚡",
    purpose: "Builds explosive hip extension for jumping and hitting power.",
    cues: ["Explode through hips.", "Keep the weight close.", "Brace your trunk.", "Move fast but clean."],
    mistakes: ["Muscling with arms.", "Rounding back.", "Going heavy before technique is clean."],
    substitutions: ["Kettlebell Swing", "Trap Bar Jump", "Medicine Ball Throw"],
    video: "https://www.youtube.com/results?search_query=power+clean+kettlebell+swing+athlete+form"
  },
  {
    name: "Push Press",
    category: "Upper Body",
    icon: "🚀",
    purpose: "Builds explosive pressing power and full-body force transfer.",
    cues: ["Dip straight down.", "Drive with legs.", "Punch overhead.", "Brace hard."],
    mistakes: ["Turning it into a strict press.", "Arching lower back.", "Pressing through shoulder pain."],
    substitutions: ["DB Push Press", "Landmine Press", "Medicine Ball Chest Pass"],
    video: "https://www.youtube.com/results?search_query=push+press+proper+form"
  },
  {
    name: "Medicine Ball Slams",
    category: "Core",
    icon: "💣",
    purpose: "Builds explosive trunk power and total-body aggression.",
    cues: ["Reach tall.", "Use your core.", "Slam hard.", "Reset posture each rep."],
    mistakes: ["Only using arms.", "Rounding lower back.", "Doing endless tired reps."],
    substitutions: ["Med Ball Chest Pass", "Battle Ropes", "Cable Chops"],
    video: "https://www.youtube.com/results?search_query=medicine+ball+slams+proper+form"
  },
  {
    name: "Dips",
    category: "Upper Body",
    icon: "🔻",
    purpose: "Builds chest, triceps, and shoulder strength for calisthenics and pressing power.",
    cues: ["Keep shoulders down.", "Lower under control.", "Press strong.", "Use pain-free depth."],
    mistakes: ["Going too deep with shoulder pain.", "Shrugging.", "Bouncing reps."],
    substitutions: ["Push-Ups", "Bench Dips", "Assisted Dips"],
    video: "https://www.youtube.com/results?search_query=dips+proper+form"
  },
  {
    name: "Cable Woodchoppers",
    category: "Core",
    icon: "🪓",
    purpose: "Builds rotational strength and control for hitting power.",
    cues: ["Rotate through hips and ribs.", "Keep arms long.", "Control back to start.", "Brace core."],
    mistakes: ["Only pulling with arms.", "Twisting knees awkwardly.", "Using too much weight."],
    substitutions: ["Band Woodchoppers", "Med Ball Rotational Throws", "Landmine Rotations"],
    video: "https://www.youtube.com/results?search_query=cable+woodchopper+proper+form"
  },
  {
    name: "Bodyweight Rows",
    category: "Upper Body",
    icon: "🛶",
    purpose: "Builds back strength and pulling endurance for shoulder balance.",
    cues: ["Keep body straight.", "Pull chest to bar.", "Squeeze shoulder blades.", "Control down."],
    mistakes: ["Sagging hips.", "Half reps.", "Shrugging shoulders."],
    substitutions: ["Ring Rows", "TRX Rows", "Cable Row"],
    video: "https://www.youtube.com/results?search_query=bodyweight+row+proper+form"
  },
  {
    name: "Pike Push-Ups",
    category: "Upper Body",
    icon: "🔺",
    purpose: "Builds shoulder strength for calisthenics and overhead power.",
    cues: ["Hips high.", "Head moves forward and down.", "Elbows controlled.", "Press through shoulders."],
    mistakes: ["Turning it into a regular push-up.", "Flaring elbows hard.", "Rushing reps."],
    substitutions: ["DB Shoulder Press", "Handstand Push-Up Progression", "Incline Pike Push-Up"],
    video: "https://www.youtube.com/results?search_query=pike+push+up+proper+form"
  },
  {
    name: "L-Sit Practice",
    category: "Core",
    icon: "🧱",
    purpose: "Builds core compression, hip flexor strength, and calisthenics control.",
    cues: ["Push shoulders down.", "Lock elbows.", "Point toes.", "Keep chest tall."],
    mistakes: ["Bent arms.", "Collapsed shoulders.", "Holding breath."],
    substitutions: ["Tuck L-Sit", "Seated Leg Lifts", "Hanging Knee Raises"],
    video: "https://www.youtube.com/results?search_query=l+sit+progression"
  },
  {
    name: "Handstand Practice",
    category: "Upper Body",
    icon: "🤸",
    purpose: "Builds shoulder stability, body control, and calisthenics skill.",
    cues: ["Push tall through shoulders.", "Squeeze glutes.", "Keep ribs tucked.", "Use fingers for balance."],
    mistakes: ["Banana back.", "Soft shoulders.", "Kicking up with no control."],
    substitutions: ["Wall Handstand Hold", "Pike Hold", "Bear Crawl"],
    video: "https://www.youtube.com/results?search_query=handstand+progression+beginner"
  },
  {
    name: "Farmer Carries",
    category: "Core",
    icon: "🧳",
    purpose: "Builds grip, traps, core stiffness, and full-body durability.",
    cues: ["Stand tall.", "Walk controlled.", "Brace core.", "Do not lean side to side."],
    mistakes: ["Shrugging too hard.", "Letting weights swing.", "Walking sloppy."],
    substitutions: ["Suitcase Carry", "Trap Bar Carry", "KB Carries"],
    video: "https://www.youtube.com/results?search_query=farmer+carry+proper+form"
  },
  {
    name: "Court Sprints",
    category: "Plyometrics",
    icon: "🏃",
    purpose: "Builds volleyball-specific conditioning, acceleration, and change of direction.",
    cues: ["Stay low.", "Push hard into the floor.", "Stop under control.", "Keep reps sharp."],
    mistakes: ["Jogging instead of sprinting.", "Sloppy stops.", "Doing too much volume when tired."],
    substitutions: ["Shuttle Runs", "Sprint Starts", "Lateral Bounds"],
    video: "https://www.youtube.com/results?search_query=volleyball+court+sprint+drills"
  },
  {
    name: "Walk 20-30 minutes",
    category: "Mobility",
    icon: "🚶",
    purpose: "Improves recovery, blood flow, and conditioning without beating up your joints.",
    cues: ["Keep easy pace.", "Breathe through nose if possible.", "Stay relaxed.", "Do not turn it into a hard workout."],
    mistakes: ["Going too intense.", "Skipping it because it seems too easy.", "Walking with bad posture."],
    substitutions: ["Easy Bike", "Light Swim", "Incline Walk"],
    video: "https://www.youtube.com/results?search_query=active+recovery+walk+benefits+athletes"
  },
  {
    name: "Light stretching",
    category: "Mobility",
    icon: "🧘",
    purpose: "Helps recovery and keeps joints moving on rest days.",
    cues: ["Stay gentle.", "Breathe slowly.", "Hold comfortable positions.", "Avoid sharp pain."],
    mistakes: ["Forcing range.", "Stretching aggressively while sore.", "Holding breath."],
    substitutions: ["Mobility Flow", "Yoga", "Foam Rolling"],
    video: "https://www.youtube.com/results?search_query=light+stretching+routine+athletes"
  },
  {
    name: "Foam roll",
    category: "Mobility",
    icon: "🛞",
    purpose: "Helps reduce tightness and improve recovery before or after training.",
    cues: ["Roll slowly.", "Pause on tight spots.", "Breathe.", "Keep pressure tolerable."],
    mistakes: ["Rolling too fast.", "Crushing painful areas.", "Expecting it to replace strength work."],
    substitutions: ["Lacrosse Ball", "Massage Gun", "Light Mobility Flow"],
    video: "https://www.youtube.com/results?search_query=foam+rolling+routine+athletes"
  },
  {
    name: "Light shoulder band work",
    category: "Rehab",
    icon: "🟡",
    purpose: "Builds rotator cuff endurance and keeps shoulders ready for hitting.",
    cues: ["Use light tension.", "Move slow.", "Keep elbow controlled.", "Feel the shoulder, not the neck."],
    mistakes: ["Using too much resistance.", "Shrugging.", "Rushing reps."],
    substitutions: ["Band External Rotation", "Band Pull-Aparts", "Face Pulls"],
    video: "https://www.youtube.com/results?search_query=shoulder+band+work+rotator+cuff+athletes"
  },
  {
    name: "Band Pull-Aparts",
    category: "Rehab",
    icon: "🟡",
    purpose: "Builds rear delt and upper-back endurance for shoulder health.",
    cues: ["Keep arms straight.", "Pull band to chest.", "Squeeze shoulder blades.", "Control back in."],
    mistakes: ["Shrugging.", "Bending elbows too much.", "Snapping the band back."],
    substitutions: ["Face Pulls", "Rear Delt Fly", "Y-T-W Raises"],
    video: "https://www.youtube.com/results?search_query=band+pull+apart+proper+form"
  },
  {
    name: "External Rotations",
    category: "Rehab",
    icon: "🔧",
    purpose: "Strengthens the rotator cuff to protect your shoulder during hitting.",
    cues: ["Keep elbow tucked.", "Move slowly.", "Use light resistance.", "Stop before pain."],
    mistakes: ["Going too heavy.", "Letting elbow drift.", "Twisting your torso."],
    substitutions: ["Cable External Rotation", "Side-Lying External Rotation", "Face Pulls"],
    video: "https://www.youtube.com/results?search_query=band+external+rotation+rotator+cuff"
  },
  {
    name: "Scap Push-Ups",
    category: "Rehab",
    icon: "🪽",
    purpose: "Builds serratus and scapular control for healthier shoulders.",
    cues: ["Keep arms straight.", "Push the floor away.", "Let shoulder blades move.", "Control each rep."],
    mistakes: ["Bending elbows.", "Rushing.", "Sagging hips."],
    substitutions: ["Wall Scap Push-Ups", "Serratus Wall Slides", "Bear Crawl Hold"],
    video: "https://www.youtube.com/results?search_query=scapular+push+up+proper+form"
  },
  {
    name: "Cuban Rotations",
    category: "Rehab",
    icon: "🔄",
    purpose: "Strengthens rotator cuff and shoulder control.",
    cues: ["Use very light weight.", "Move slow.", "Keep shoulders controlled.", "No pain."],
    mistakes: ["Going heavy.", "Rushing.", "Forcing range."],
    substitutions: ["External Rotations", "Face Pulls", "Y-T-W Raises"],
    video: "https://www.youtube.com/results?search_query=cuban+rotation+exercise+proper+form"
  }
];