import { SelectOptions } from "@/interfaces/commons";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

interface SelectCustomProps {
  options: SelectOptions[];
  onSelect?: (value: string | number) => void;
  onFullOptionSelect?: (value: SelectOptions) => void;
  className?: string;
  fullOptionSelected?: boolean;
}

const SelectCustom = ({
  options,
  onSelect,
  className,
  fullOptionSelected,
  onFullOptionSelect,
}: SelectCustomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOptions | null>(
    null
  );
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: SelectOptions) => {
    setSelectedOption(option);
    if (fullOptionSelected) {
      onFullOptionSelect && onFullOptionSelect(option);
    } else {
      onSelect && onSelect(option.value);
    }
  };

  const handleConfirm = () => {
    if (selectedOption) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [options]);

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={handleToggle}
        className="w-full bg-white text-black border-2 border-black/30 rounded-md pl-3 pr-10 py-1 text-left cursor-pointer focus:outline-none truncate"
      >
        {selectedOption
          ? selectedOption.label
          : /* options[0].label */ "Seleccionar"}
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="flex absolute mt-1 w-full rounded-md bg-white border shadow-lg z-10">
          <div className="flex flex-col w-full px-1">
            <div className="flex flex-col w-full max-h-60 overflow-auto pb-5">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`w-full justify-start cursor-pointer select-none relative text-sm py-1 ${
                    selectedOption && selectedOption.value === option.value
                      ? "bg-greenSecondaryButton text-white rounded-sm"
                      : "text-black/60"
                  }`}
                  onClick={() => {
                    handleSelect(option);
                    handleConfirm();
                  }}
                >
                  <span className="flex px-2 truncate">{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectCustom;
