// src/data/volume.ts
import type { VolumeEntry } from '../types';

const VOLUME_DATA: VolumeEntry[] = [
  { muscle: "Chest",       sets: 27, target: [16, 22] },
  { muscle: "Triceps",     sets: 20, target: [12, 18] },
  { muscle: "Lats",        sets: 18, target: [14, 20] },
  { muscle: "Mid Back",    sets: 15, target: [12, 18] },
  { muscle: "Traps",       sets: 16, target: [12, 18] },
  { muscle: "Biceps",      sets: 12, target: [10, 16] },
  { muscle: "Medial Delt", sets: 16, target: [14, 20] },
  { muscle: "Rear Delts",  sets: 10, target: [8,  14] },
  { muscle: "Quads",       sets: 14, target: [12, 18] },
  { muscle: "Hamstrings",  sets: 12, target: [10, 14] },
  { muscle: "Glutes",      sets: 11, target: [8,  14] },
  { muscle: "Calves",      sets: 12, target: [8,  12] },
];

export default VOLUME_DATA;
