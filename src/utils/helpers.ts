// src/utils/helpers.ts
import type { Exercise } from '../types';

export const getRPEColor = (rpe: number): string => {
  if (rpe >= 9) return '#EF4444';
  if (rpe >= 8) return '#F97316';
  if (rpe >= 7) return '#EAB308';
  return '#22C55E';
};

export const getRPELabel = (rpe: number): string => {
  if (rpe >= 9) return 'MAX EFFORT';
  if (rpe >= 8) return 'HARD';
  if (rpe >= 7) return 'MODERATE';
  return 'EASY';
};

export const getVolumeBarColor = (sets: number, target: [number, number]): string => {
  if (sets > target[1]) return '#22C55E';
  if (sets >= target[0]) return '#22C55E';
  return '#EAB308';
};

export const getVolumeStatus = (sets: number, target: [number, number]): string => {
  if (sets > target[1]) return '↑ OPTIMAL';
  if (sets >= target[0]) return '✓ ON POINT';
  return '↓ LOW';
};

export const getVolumeBarWidth = (sets: number): number =>
  Math.min((sets / 28) * 100, 100);

export const getTotalSets = (exercises: Exercise[]): number =>
  exercises.reduce((acc, ex) => acc + ex.sets, 0);

export const padIndex = (n: number): string =>
  String(n + 1).padStart(2, '0');
