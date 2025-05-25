import circuit from "../assets/circuit.svg";
import { SelectComponent } from "./SelectComponent";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

export default function InputForm() {
  return (
    <div className="p-4 rounded shadow bg-softBlue-100">
      <div className="flex items-center gap-2 mb-4">
        <img src={circuit} alt="circuit" className="text-red-100 size-5" />
        <h3 className="text-lg font-semibold text-gray-800">
          Circuit Parameters
        </h3>
      </div>

      <div className="my-2">
        <div className="mb-2">
          <Label className="text-gray-700">Capacitance (C) </Label>{" "}
          <span className="text-red-500">*</span>
        </div>
        <div className="flex space-x-2">
          <Input type="number" className="bg-white" defaultValue={0} />
          <SelectComponent />
        </div>
      </div>

      <div className="my-2">
        <div className="mb-2">
          <Label className="text-gray-700">Resistance (R) </Label>{" "}
          <span className="text-red-500">*</span>
        </div>
        <div className="flex space-x-2">
          <Input type="number" className="bg-white" defaultValue={0} />
          <SelectComponent />
        </div>
      </div>

      <div className="my-2">
        <div className="mb-2">
          <Label className="text-gray-700">Time (t) </Label>{" "}
          <span className="text-red-500">*</span>
        </div>
        <div className="flex space-x-2">
          <Input type="number" className="bg-white" defaultValue={0} />
          <SelectComponent />
        </div>
      </div>

      <div className="my-2">
        <div className="mb-2">
          <Label className="text-gray-700">Initial Voltage (V₀) </Label>{" "}
          <span className="text-red-500">*</span>
        </div>
        <div className="flex space-x-2">
          <Input type="number" className="bg-white" defaultValue={0} />
          <div className="flex items-center justify-center px-6 bg-white border rounded-md">
            <span className="font-light text-gray-700">V</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Slider className="bg-red-100" defaultValue={[33]} max={100} step={1} />
        <div className="flex justify-between mt-2">
          <span className="text-gray-700">0</span>
          <span className="text-gray-700">5τ (Time Constant)</span>
        </div>
      </div>

      <Button className="w-full my-4 bg-blue-500 hover:bg-blue-600">
        Calculate Result
      </Button>
    </div>
  );
}
