import { ChartSpline } from "lucide-react";
import GraphPlaceholder from "./GraphPlaceholder";
import { CapacitorGraph } from "./CapacitorGraph";
import { useInputStore } from "@/stores/useInputStore";

export default function Visualization() {
  const {
    currentVoltage,
    capacitance,
    resistance,
    voltage,
    time,
    tau,
    maxTime,
  } = useInputStore();

  return (
    <div className="flex flex-col p-4 rounded shadow bg-softBlue-100">
      <div className="flex items-center gap-2 mb-4">
        <ChartSpline className="w-5 h-5 text-[#0D99FF]" />
        <h3 className="text-lg font-semibold text-gray-800">
          R/C Discharge curve
        </h3>
      </div>
      {time === 0 || capacitance === 0 || voltage === 0 || resistance === 0 ? (
        <GraphPlaceholder />
      ) : (
        <CapacitorGraph />
      )}
      <div className="grid w-full grid-cols-3 gap-2 mt-4">
        <div className="p-4 bg-white rounded shadow">
          <span className="block text-sm text-gray-700">Time constant (τ)</span>
          <span className="block text-lg font-medium text-black">
            {tau.toFixed(4)}s
          </span>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <span className="block text-sm text-gray-700">
            Voltage at current time
          </span>
          <span className="block text-lg font-medium text-black">
            {currentVoltage.toFixed(2)}V
          </span>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <span className="block text-sm text-gray-700">System settles at</span>
          <span className="block text-lg font-medium text-black">
            {maxTime.toFixed(3)}s (5τ)
          </span>
        </div>
      </div>
    </div>
  );
}
