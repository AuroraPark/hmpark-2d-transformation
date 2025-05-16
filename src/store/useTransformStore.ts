import { create } from "zustand";

interface TransformState {
  position: { x: number; y: number };
  relativeOrigin: { x: number; y: number };
  angle: number;
  setPosition: (x: number, y: number) => void;
  setRelativeOrigin: (x: number, y: number) => void;
  setAngle: (angle: number) => void;
}

export const useTransformStore = create<TransformState>((set) => ({
  position: { x: 50, y: 50 },
  relativeOrigin: { x: 0, y: 0 },
  angle: 0,
  setPosition: (x, y) => set({ position: { x, y } }),
  setRelativeOrigin: (x, y) => set({ relativeOrigin: { x, y } }),
  setAngle: (angle) => set({ angle }),
}));
