import { create } from "zustand";
import type {
  CircuitMode,
  CapacitanceUnit,
  ResistanceUnit,
  TimeUnit,
} from "@/types";

interface CalculatorState {
  mode: CircuitMode;
  capacitance: number;
  capacitanceUnit: CapacitanceUnit;
  resistance: number;
  resistanceUnit: ResistanceUnit;
  voltage: number;
  time: number;
  timeUnit: TimeUnit;

  tau: number;
  maxTime: number;
  currentVoltage: number;
  graphData: { time: number; voltage: number }[];

  setMode: (mode: CircuitMode) => void;
  setCapacitance: (value: number, unit?: CapacitanceUnit) => void;
  setResistance: (value: number, unit?: ResistanceUnit) => void;
  setVoltage: (voltage: number) => void;
  setTime: (time: number, unit?: TimeUnit) => void;
  calculate: () => void;
}

export const useInputStore = create<CalculatorState>((set, get) => ({
  mode: "charge",
  capacitance: 0,
  capacitanceUnit: "μF",
  resistance: 0,
  resistanceUnit: "kΩ",
  voltage: 0,
  time: 0,
  timeUnit: "s",

  tau: 0.000,
  maxTime: 0.000,
  currentVoltage: 0,
  graphData: [],

  setMode: (mode) => {
    set({ mode });
  },

  setCapacitance: (value, unit = get().capacitanceUnit) => {
    set({
      capacitance: value,
      capacitanceUnit: unit,
    });
  },

  setResistance: (value, unit = get().resistanceUnit) => {
    set({
      resistance: value,
      resistanceUnit: unit,
    });
  },

  setVoltage: (voltage) => {
    set({ voltage });
  },

  setTime: (time, unit = get().timeUnit) => {
    const baseTime = unit === "ms" ? time / 1000 : time;
    set({
      time: baseTime,
      timeUnit: unit,
    });
  },

  calculate: () => {
    const {
      mode,
      capacitance,
      capacitanceUnit,
      resistance,
      resistanceUnit,
      voltage,
      time,
    } = get();

    const C = convertToBase(capacitance, capacitanceUnit, {
      F: 1,
      μF: 1e-6,
      nF: 1e-9,
      pF: 1e-12,
    });
    const R = convertToBase(resistance, resistanceUnit, {
      Ω: 1,
      kΩ: 1e3,
      MΩ: 1e6,
    });

    const tau = R * C;
    const maxTime = 5 * tau;

    const currentVoltage =
      mode === "charge"
        ? voltage * (1 - Math.exp(-time / tau))
        : voltage * Math.exp(-time / tau);

    const timePoints = Array.from(
      { length: 100 },
      (_, i) => (i * maxTime) / 99
    );
    const graphData = timePoints.map((t) => ({
      time: t,
      voltage:
        mode === "charge"
          ? voltage * (1 - Math.exp(-t / tau))
          : voltage * Math.exp(-t / tau),
    }));

    set({
      tau,
      maxTime,
      currentVoltage,
      graphData,
    });
  },
}));

const convertToBase = (
  value: number,
  unit: string,
  multipliers: Record<string, number>
): number => value * (multipliers[unit] || 1);
