import { Zap } from "lucide-react";

type OperationModeProps = {
  operation: string;
  setOperation: React.Dispatch<React.SetStateAction<string>>;
};

export default function OperationMode({
  operation,
  setOperation,
}: OperationModeProps) {
  return (
    <div className="p-4 rounded shadow bg-softBlue-100">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-[#0D99FF]" />
        <h3 className="text-lg font-semibold text-gray-800">Operation Mode</h3>
      </div>

      <div className="flex gap-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="operation"
            value="charge"
            checked={operation === "charge"}
            onChange={(e) => setOperation(e.target.value)}
            className="sr-only"
          />
          <div
            className={`flex items-center gap-2 px-3 py-1 rounded-xl border-2 transition-all ${
              operation === "charge"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                operation === "charge"
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-300"
              }`}
            >
              {operation === "charge" && (
                <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
              )}
            </div>
            <span className="text-sm font-medium">Charge</span>
          </div>
        </label>

        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="operation"
            value="discharge"
            checked={operation === "discharge"}
            onChange={(e) => setOperation(e.target.value)}
            className="sr-only"
          />
          <div
            className={`flex items-center gap-3 px-3 py-1 rounded-xl border-2 transition-all ${
              operation === "discharge"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                operation === "discharge"
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-300"
              }`}
            >
              {operation === "discharge" && (
                <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
              )}
            </div>
            <span className="text-sm font-medium">Discharge</span>
          </div>
        </label>
      </div>
    </div>
  );
}
