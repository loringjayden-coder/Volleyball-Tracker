"use client";

import {
  Activity,
  BarChart3,
  CalendarDays,
  Dumbbell,
  HeartPulse,
  Library,
  Search,
  Target,
  Trophy
} from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useEffect, useMemo, useState } from "react";

import { exercises } from "@/data/exercises";
import { getPhase, getPrescription, workoutDays } from "@/data/workoutPlan";
import { calculateRecovery, coachRecommendations, recoveryStatus } from "@/lib/recovery";
import { getStored, setStored, todayISO, todayName } from "@/lib/storage";
import { CalendarEvent, StatEntry } from "@/types";

const emptyStats: StatEntry = {
  date: "",
  vertical: "",
  approach: "",
  weight: "",
  pullups: "",
  sleep: "",
  kneePain: "",
  shoulderPain: "",
  soreness: "",
  energy: ""
};

function makeDefaultEvents(): CalendarEvent[] {
  const start = new Date();
  const events: CalendarEvent[] = [];

  for (let i = 0; i < 28; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const iso = date.toISOString().slice(0, 10);
    const day = date.getDay();

    if ([1, 3, 5, 6].includes(day)) {
      events.push({
        id: crypto.randomUUID(),
        date: iso,
        type: "workout",
        title: "Workout"
      });
    }

    if ([2, 4].includes(day)) {
      events.push({
        id: crypto.randomUUID(),
        date: iso,
        type: "practice",
        title: "Volleyball Practice"
      });
    }

    if (day === 0) {
      events.push({
        id: crypto.randomUUID(),
        date: iso,
        type: "recovery",
        title: "Recovery"
      });
    }
  }

  return events;
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

export default function Home() {
  const [week, setWeek] = useState(1);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [stats, setStats] = useState<StatEntry>(emptyStats);
  const [history, setHistory] = useState<StatEntry[]>([]);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [exerciseSearch, setExerciseSearch] = useState("");
  const [expandedExercises, setExpandedExercises] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setChecked(getStored("v15-checked", {}));
    setStats(getStored("v15-latest-stats", emptyStats));
    setHistory(getStored("v15-stats-history", []));
    const savedEvents = getStored<CalendarEvent[]>("v15-calendar", []);
    setCalendarEvents(savedEvents.length ? savedEvents : makeDefaultEvents());
  }, []);

  useEffect(() => {
    setStored("v15-checked", checked);
  }, [checked]);

  useEffect(() => {
    setStored("v15-calendar", calendarEvents);
  }, [calendarEvents]);

  const today = todayName();
  const phase = getPhase(week);
  const recovery = calculateRecovery(stats);
  const status = recoveryStatus(recovery);

  const totalExercises = workoutDays.reduce((sum, day) => sum + day.exercises.length, 0);

  const completedExercises = workoutDays.reduce((sum, day) => {
    return (
      sum +
      day.exercises.filter((exercise) => {
        const key = `${week}-${day.day}-${exercise}`;
        return checked[key];
      }).length
    );
  }, 0);

  const progress = Math.round((completedExercises / totalExercises) * 100);

  const todayWorkout = workoutDays.find((day) => day.day === today);

  const filteredExercises = exercises.filter((exercise) => {
    const matchesCategory = selectedFilter === "All" || exercise.category === selectedFilter;

    const search = exerciseSearch.toLowerCase().trim();

    const searchableText = [
      exercise.name,
      exercise.category,
      exercise.purpose,
      ...exercise.cues,
      ...exercise.mistakes,
      ...exercise.substitutions
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = !search || searchableText.includes(search);

    return matchesCategory && matchesSearch;
  });

  const calendarPreview = useMemo(() => {
    const days = [];
    const start = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      const iso = date.toISOString().slice(0, 10);

      days.push({
        iso,
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        number: date.getDate(),
        events: calendarEvents.filter((event) => event.date === iso)
      });
    }

    return days;
  }, [calendarEvents]);

  const trainingLoad = calendarEvents.reduce((sum, event) => {
    const weights = {
      workout: 3,
      practice: 4,
      game: 5,
      recovery: 1,
      rest: 0
    };

    return sum + weights[event.type];
  }, 0);

  function toggleExercise(day: string, exercise: string) {
    const key = `${week}-${day}-${exercise}`;
    setChecked((current) => ({ ...current, [key]: !current[key] }));
  }

  function toggleExerciseCard(exerciseName: string) {
    setExpandedExercises((current) => ({
      ...current,
      [exerciseName]: !current[exerciseName]
    }));
  }

  function expandAllVisibleExercises() {
    const expanded = { ...expandedExercises };

    filteredExercises.forEach((exercise) => {
      expanded[exercise.name] = true;
    });

    setExpandedExercises(expanded);
  }

  function collapseAllExercises() {
    setExpandedExercises({});
  }

  function openExerciseFromWorkout(workoutExercise: string) {
    const workoutName = normalizeText(workoutExercise);

    const match = exercises.find((exercise) => {
      const libraryName = normalizeText(exercise.name);

      return (
        libraryName === workoutName ||
        libraryName.includes(workoutName) ||
        workoutName.includes(libraryName)
      );
    });

    if (!match) {
      setExerciseSearch(workoutExercise);
      setSelectedFilter("All");

      setTimeout(() => {
        document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
      }, 50);

      return;
    }

    setSelectedFilter("All");
    setExerciseSearch(match.name);
    setExpandedExercises((current) => ({
      ...current,
      [match.name]: true
    }));

    setTimeout(() => {
      document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  function saveStats() {
    const entry = { ...stats, date: new Date().toLocaleDateString("en-US") };
    const newHistory = [...history, entry];

    setStats(entry);
    setHistory(newHistory);
    setStored("v15-latest-stats", entry);
    setStored("v15-stats-history", newHistory);
  }

  function clearStats() {
    setHistory([]);
    setStored("v15-stats-history", []);
  }

  function addGame() {
    const title = prompt("Game title?");
    if (!title) return;

    setCalendarEvents((events) => [
      ...events,
      {
        id: crypto.randomUUID(),
        date: todayISO(),
        type: "game",
        title
      }
    ]);
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">🏐</div>
          <div>
            <h2>V16.5 TRACKER</h2>
            <p>ATHLETE OPERATING SYSTEM</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#dashboard">🏠 Dashboard</a>
          <a href="#workouts">🏋️ Workouts</a>
          <a href="#stats">📊 Stats</a>
          <a href="#calendar">🗓️ Calendar</a>
          <a href="#library">📚 Exercise Library</a>
        </nav>

        <div className="streak-box">
          <h3>🔥 Current Streak</h3>
          <h2>{completedExercises > 0 ? 1 : 0} day</h2>
          <p className="muted">A humble beginning. Civilization limps forward.</p>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1>Welcome back, Jayden 👋</h1>
            <p>Next.js + TypeScript Volleyball Athlete Tracker</p>
          </div>

          <div className="avatar">J</div>
        </header>

        <section id="dashboard" className="grid-4">
          <div className="card">
            <h3>
              <CalendarDays size={18} /> Today
            </h3>
            <h2>{today}</h2>
            <p className="muted">{todayWorkout?.title}</p>
          </div>

          <div className="card">
            <h3>
              <HeartPulse size={18} /> Recovery
            </h3>
            <h2>{recovery}%</h2>
            <span className="pill">{status.label}</span>
            <p className="muted">{status.message}</p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${recovery}%` }} />
            </div>
          </div>

          <div className="card">
            <h3>
              <BarChart3 size={18} /> Weekly Progress
            </h3>
            <h2>{progress}%</h2>
            <p className="muted">
              {completedExercises} / {totalExercises} exercises completed
            </p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="card">
            <h3>
              <Target size={18} /> Goals
            </h3>
            <p>□ 40+ inch vertical</p>
            <p>□ 11&apos;6 approach touch</p>
            <p>□ 20 pull-ups</p>
            <p>□ No knee pain</p>
          </div>
        </section>

        <section className="tabs">
          {[1, 5, 9, 13, 17].map((value) => (
            <button
              key={value}
              className={week === value ? "" : "ghost"}
              onClick={() => setWeek(value)}
            >
              Week {value}-{Math.min(value + 3, 20)}
            </button>
          ))}

          <select value={week} onChange={(e) => setWeek(Number(e.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((value) => (
              <option key={value} value={value}>
                Week {value}
              </option>
            ))}
          </select>
        </section>

        <section className="panel">
          <h2>{phase.name}</h2>
          <p>
            <strong>Focus:</strong> {phase.focus}
          </p>
          <p>
            <strong>Intensity:</strong> {phase.intensity}
          </p>
          <p>
            <strong>Progression:</strong> {phase.sets}
          </p>
        </section>

        <section id="workouts" style={{ marginTop: 24 }}>
          <h2>
            <Dumbbell size={22} /> Weekly Workouts
          </h2>

          <p className="muted">
            Click an exercise name to jump to its cues in the Exercise Library.
          </p>

          <div className="workout-grid">
            {workoutDays.map((day) => (
              <div
                key={day.day}
                className={`panel day-card ${day.day === today ? "today" : ""}`}
              >
                <h3>{day.day}</h3>
                <h4>{day.title}</h4>
                <p className="muted">⏱ {day.minutes}</p>

                {day.exercises.map((exercise) => {
                  const key = `${week}-${day.day}-${exercise}`;

                  return (
                    <label key={exercise} className="exercise-row">
                      <input
                        type="checkbox"
                        checked={Boolean(checked[key])}
                        onChange={() => toggleExercise(day.day, exercise)}
                      />

                      <span>
                        <button
                          type="button"
                          className="exercise-name-button"
                          onClick={(event) => {
                            event.preventDefault();
                            openExerciseFromWorkout(exercise);
                          }}
                        >
                          {exercise}
                        </button>
                        : {getPrescription(week, exercise)}
                      </span>
                    </label>
                  );
                })}

                <p className="muted">{day.notes}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="stats" className="lower-grid">
          <div className="panel">
            <h2>
              <Activity size={22} /> Performance Stats
            </h2>

            <div className="stats-grid">
              {[
                ["vertical", "Vertical Jump"],
                ["approach", "Approach Touch"],
                ["weight", "Body Weight"],
                ["pullups", "Max Pull-Ups"],
                ["sleep", "Sleep Hours"],
                ["kneePain", "Knee Pain"],
                ["shoulderPain", "Shoulder Pain"],
                ["soreness", "Soreness"],
                ["energy", "Energy"]
              ].map(([key, label]) => (
                <label key={key}>
                  {label}
                  <input
                    type="number"
                    value={stats[key as keyof StatEntry]}
                    onChange={(e) =>
                      setStats((current) => ({
                        ...current,
                        [key]: e.target.value === "" ? "" : Number(e.target.value)
                      }))
                    }
                  />
                </label>
              ))}
            </div>

            <div className="button-row">
              <button onClick={saveStats}>Save Stats Entry</button>
              <button className="ghost" onClick={clearStats}>
                Clear History
              </button>
            </div>
          </div>

          <div className="panel">
            <h2>Progress Graphs</h2>

            <div className="chart-grid">
              {[
                ["vertical", "Vertical"],
                ["approach", "Approach"],
                ["weight", "Weight"],
                ["pullups", "Pull-Ups"]
              ].map(([key, label]) => (
                <div className="chart-card" key={key}>
                  <h3>{label}</h3>

                  <ResponsiveContainer width="100%" height={180}>
                    <LineChart data={history}>
                      <CartesianGrid stroke="rgba(255,255,255,.08)" />
                      <XAxis dataKey="date" stroke="#a8b0bd" />
                      <YAxis stroke="#a8b0bd" />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey={key}
                        stroke="#ffc400"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lower-grid" style={{ marginTop: 24 }}>
          <div className="panel">
            <h2>
              <HeartPulse size={22} /> AI Coach
            </h2>

            <ul>
              {coachRecommendations(stats).map((item) => (
                <li key={item} className="muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="calendar" className="panel">
            <h2>
              <CalendarDays size={22} /> Calendar + Training Load
            </h2>

            <p className="muted">Training Load: {trainingLoad}</p>
            <button onClick={addGame}>Add Game Today</button>

            <div className="calendar-preview" style={{ marginTop: 16 }}>
              {calendarPreview.map((day) => (
                <div className="calendar-day" key={day.iso}>
                  <strong>
                    {day.day} {day.number}
                  </strong>

                  {day.events.slice(0, 2).map((event) => (
                    <span key={event.id} className={`event-chip ${event.type}`}>
                      {event.title}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="library" className="panel exercise-library">
          <div className="library-header">
            <div>
              <h2>
                <Library size={22} /> Exercise Library
              </h2>
              <p className="muted">
                {filteredExercises.length} of {exercises.length} exercises shown
              </p>
            </div>

            <div className="library-actions">
              <button className="ghost" onClick={expandAllVisibleExercises}>
                Expand Visible
              </button>
              <button className="ghost" onClick={collapseAllExercises}>
                Collapse All
              </button>
            </div>
          </div>

          <div className="library-search">
            <Search size={18} />
            <input
              type="text"
              value={exerciseSearch}
              onChange={(e) => setExerciseSearch(e.target.value)}
              placeholder="Search exercises, cues, mistakes, knee, shoulder, jump..."
            />

            {exerciseSearch && (
              <button className="ghost" onClick={() => setExerciseSearch("")}>
                Clear
              </button>
            )}
          </div>

          <div className="filter-row">
            {["All", "Lower Body", "Upper Body", "Plyometrics", "Core", "Mobility", "Rehab"].map(
              (filter) => (
                <button
                  key={filter}
                  className={selectedFilter === filter ? "" : "ghost"}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          {filteredExercises.length === 0 && (
            <div className="empty-state">
              <h3>No exercises found.</h3>
              <p className="muted">
                Try searching something like jump, knee, shoulder, core, mobility, pull, or squat.
              </p>
            </div>
          )}

          <div className="exercise-grid">
            {filteredExercises.map((exercise) => {
              const isExpanded = Boolean(expandedExercises[exercise.name]);

              return (
                <div
                  key={exercise.name}
                  className={`exercise-card exercise-card-detailed ${
                    isExpanded ? "expanded" : ""
                  }`}
                >
                  <div className="exercise-card-top">
                    <div className="exercise-icon">{exercise.icon}</div>

                    <div className="exercise-content">
                      <div className="exercise-heading">
                        <h3>{exercise.name}</h3>
                        <span className="exercise-category">{exercise.category}</span>
                      </div>

                      <p className="muted">{exercise.purpose}</p>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="exercise-details">
                      <div>
                        <h4>Coaching Cues</h4>
                        <ul>
                          {exercise.cues.map((cue) => (
                            <li key={cue}>{cue}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4>Common Mistakes</h4>
                        <ul>
                          {exercise.mistakes.map((mistake) => (
                            <li key={mistake}>{mistake}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4>Substitutions</h4>
                        <ul>
                          {exercise.substitutions.map((substitution) => (
                            <li key={substitution}>{substitution}</li>
                          ))}
                        </ul>
                      </div>

                      <a
                        className="video-link"
                        href={exercise.video}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch form video →
                      </a>
                    </div>
                  )}

                  <button
                    className="view-details-button"
                    onClick={() => toggleExerciseCard(exercise.name)}
                  >
                    {isExpanded ? "Hide Details" : "View Details"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <section className="panel" style={{ marginTop: 24 }}>
          <h2>
            <Trophy size={22} /> Version 16.5 Status
          </h2>

          <p className="muted">
            Exercise Library search, filters, expandable cards, and clickable workout exercise
            names are now added. The app is becoming dangerously useful. We should all be
            concerned.
          </p>
        </section>
      </main>
    </div>
  );
}