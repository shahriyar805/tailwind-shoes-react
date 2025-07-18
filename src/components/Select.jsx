import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

function Select({ title, options, className, defaultValue }) {
  return (
    <div className="relative dark:text-black">
      <select
        defaultValue={defaultValue || ""}
        className={twMerge(`w-24 appearance-none border border-gray-300 bg-white p-4 ${className}`)}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="">
            {o}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default Select;
