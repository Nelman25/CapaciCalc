import { ChartSpline } from "lucide-react";

export default function Visualization() {
  // TODO: Optional rendering kapag may data na or wala
  

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] flex-1 w-full gap-2 bg-white rounded shadow">
      <ChartSpline className="w-5 h-5 text-[#0D99FF]" />
      <span className="font-medium text-gray-700">
        Visualization will appear here
      </span>
      <span className="text-sm text-gray-700">
        Enter parameters and click calculate to see the graph
      </span>
    </div>
  );
}
