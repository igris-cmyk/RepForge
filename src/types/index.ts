// src/types/index.ts
export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  tempo: string;
  rpe: number;
  muscles: string[];
  cue: string;
}

export interface Day {
  id: number;
  label: string;
  dayNum: number;
  tag: string;
  color: string;
  focus: string;
  trainerNote: string;
  warmup: string;
  nutrition: string;
  exercises: Exercise[];
}

export interface VolumeEntry {
  muscle: string;
  sets: number;
  target: [number, number];
}

export interface RPEEntry {
  rpe: number;
  label: string;
  desc: string;
}

export interface ScheduleEntry {
  day: string;
  label: string;
  color: string;
}

export interface ProgressionRule {
  title: string;
  desc: string;
}

export type TabKey = 'program' | 'volume' | 'rpe';

export interface NavTab {
  key: TabKey;
  label: string;
}
