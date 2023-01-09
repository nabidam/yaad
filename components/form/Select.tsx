import React, { useState } from "react";
import CaretDown from "../icons/CaretDown";
import CaretUp from "../icons/CaretUp";
import Option from "./Option";

const Select = ({
  changeValue,
  defaultValue,
  placeholder,
  options = [],
}: any) => {
  console.log({ options });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(defaultValue ?? null);
  const triggerOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleChangeValue = (val: string) => {
    setValue(val);
    changeValue(val);
    setOpen(false);
  };
  return (
    <div className="self-center">
      <div
        className="rounded-[3px] px-[10px] py-[2px] min-w-[100px] w-fit cursor-pointer flex gap-[10px] justify-between items-center"
        onClick={triggerOpen}
      >
        <div>{value ?? placeholder ?? "Select ..."} </div>
        <div>{open ? <CaretUp /> : <CaretDown />}</div>
      </div>
      <div
        className={`z-10 ${
          open ? "block" : "hidden"
        } absolute pt-[4px] min-w-[100px] w-fit`}
      >
        {options.map((option: any) => {
          return (
            <Option value={option.value} changeHandler={handleChangeValue}>
              {option.text}
            </Option>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
