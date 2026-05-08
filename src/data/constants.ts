// src/data/constants.ts
import type { RPEEntry, ScheduleEntry, ProgressionRule, NavTab } from '../types';

export const RPE_SCALE: RPEEntry[] = [
  { rpe: 6,  label: "Easy",      desc: "Could do 4+ more reps" },
  { rpe: 7,  label: "Moderate",  desc: "Could do 3 more reps" },
  { rpe: 8,  label: "Hard",      desc: "Could do 1–2 more reps" },
  { rpe: 9,  label: "Very Hard", desc: "Could do 1 more rep max" },
  { rpe: 10, label: "Max",       desc: "True 1RM, absolute limit" },
];

export const WEEK_SCHEDULE: ScheduleEntry[] = [
  { day: "MON", label: "Push A", color: "#FF6B35" },
  { day: "TUE", label: "Pull A", color: "#22C55E" },
  { day: "WED", label: "Legs A", color: "#EAB308" },
  { day: "THU", label: "Push B", color: "#F472B6" },
  { day: "FRI", label: "Pull B", color: "#06B6D4" },
  { day: "SAT", label: "Legs B", color: "#FB923C" },
  { day: "SUN", label: "REST",   color: "#334155" },
];

export const PROGRESSION_RULES: ProgressionRule[] = [
  { title: "Hit top of rep range @ target RPE", desc: "Add 2.5kg next session. No exceptions." },
  { title: "Stuck at bottom of rep range",      desc: "Keep the weight. Dial in form. Volume is still working." },
  { title: "Bad day",                           desc: "Drop all compounds to RPE 7. Still train. Consistency beats intensity every time." },
  { title: "Deload week",                       desc: "RPE 5–6 across the board. Half the sets. You will come back stronger." },
];

export const NAV_TABS: NavTab[] = [
  { key: 'program', label: 'TRAINING PROGRAM' },
  { key: 'volume',  label: 'WEEKLY VOLUME'    },
  { key: 'rpe',     label: 'RPE GUIDE'        },
];
