import { ChartSpline } from "lucide-react";
import GraphPlaceholder from "./GraphPlaceholder";

export default function Visualization() {
  return (
    <div className="flex flex-col p-4 rounded shadow bg-softBlue-100">
      <div className="flex items-center gap-2 mb-4">
        <ChartSpline className="w-5 h-5 text-[#0D99FF]" />
        <h3 className="text-lg font-semibold text-gray-800">Visualization</h3>
      </div>
      <GraphPlaceholder />
      <div className="grid w-full grid-cols-2 gap-2 mt-4">
        <div className="p-4 bg-white rounded shadow">
          <span className="block text-sm text-gray-700">Time Constant (τ)</span>
          <span className="block text-lg font-medium text-black">1.0</span>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <span className="block text-sm text-gray-700">Final Voltage</span>
          <span className="block text-lg font-medium text-black">3.16V</span>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <span className="block text-sm text-gray-700">Current</span>
          <span className="block text-lg font-medium text-black">1.84 mA</span>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <span className="block text-sm text-gray-700">Energy</span>
          <span className="block text-lg font-medium text-black">4.99 μJ</span>
        </div>
      </div>
    </div>
  );
}
