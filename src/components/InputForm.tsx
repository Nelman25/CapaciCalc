import { useInputStore } from "@/stores/useInputStore";
import circuit from "../assets/circuit.svg";
import { SelectComponent } from "./SelectComponent";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function InputForm() {
  const {
    mode,
    tau,
    capacitance,
    resistance,
    resistanceUnit,
    setResistance,
    voltage,
    setVoltage,
    time,
    timeUnit,
    setTime,
    capacitanceUnit,
    setCapacitance,
    calculate,
  } = useInputStore();

  console.log({ mode, capacitance, resistance, voltage, time, tau });
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
          <Input
            type="number"
            className="bg-white"
            value={capacitance}
            onChange={(e) => setCapacitance(e.target.valueAsNumber)}
          />
          <SelectComponent
            currentValue={capacitance}
            currentUnit={capacitanceUnit}
            options={["F", "μF", "nF", "pF"]}
            setFn={setCapacitance}
          />
        </div>
      </div>

      <div className="my-2">
        <div className="mb-2">
          <Label className="text-gray-700">Resistance (R) </Label>{" "}
          <span className="text-red-500">*</span>
        </div>
        <div className="flex space-x-2">
          <Input
            type="number"
            className="bg-white"
            value={resistance}
            onChange={(e) => setResistance(e.target.valueAsNumber)}
          />
          <SelectComponent
            currentValue={resistance}
            currentUnit={resistanceUnit}
            options={["Ω", "kΩ", "MΩ"]}
            setFn={setResistance}
          />
        </div>
      </div>

      <div className="my-2">
        <div className="mb-2">
          <Label className="text-gray-700">Time (t) </Label>{" "}
          <span className="text-red-500">*</span>
        </div>
        <div className="flex space-x-2">
          <Input
            type="number"
            className="bg-white"
            value={time}
            onChange={(e) => setTime(e.target.valueAsNumber)}
          />
          <SelectComponent
            currentUnit={timeUnit}
            currentValue={time}
            options={["s", "ms"]}
            setFn={setTime}
          />
        </div>
      </div>

      <div className="my-2">
        <div className="mb-2">
          <Label className="text-gray-700">Initial Voltage (V₀) </Label>{" "}
          <span className="text-red-500">*</span>
        </div>
        <div className="flex space-x-2">
          <Input
            type="number"
            className="bg-white"
            value={voltage}
            onChange={(e) => setVoltage(e.target.valueAsNumber)}
          />
          <div className="flex items-center justify-center px-6 bg-white border rounded-md">
            <span className="font-light text-gray-700">V</span>
          </div>
        </div>
      </div>

      <Button
        onClick={() => calculate()}
        className="w-full my-4 bg-blue-500 hover:bg-blue-600"
      >
        Calculate Result
      </Button>
    </div>
  );
}
