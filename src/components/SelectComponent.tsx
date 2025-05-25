import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectComponentProps<T extends string> = {
  options: T[];
  currentValue: number;
  currentUnit: T;
  setFn: (value: number, unit?: T) => void;
};

export function SelectComponent<T extends string>({
  options,
  currentValue,
  currentUnit,
  setFn,
}: SelectComponentProps<T>) {
  return (
    <Select
      onValueChange={(unit) => setFn(currentValue, unit as T)}
      value={currentUnit}
    >
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder={options[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Unit</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
