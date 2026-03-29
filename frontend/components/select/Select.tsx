"use client";

import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import type { SelectOption } from "@/types";

interface SelectProps {
  data: SelectOption[];
}

const Select = ({ data }: SelectProps) => {
  const [selected, setSelected] = useState<SelectOption>(data[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="selector">
        <Listbox.Button>
          {/* <Image src={selected?.icon} alt="icon" /> */}
          <span className="">{selected?.name}</span>
        </Listbox.Button>
        <Transition as={Fragment}>
          <Listbox.Options>
            {data.map((itm: SelectOption, i: number) => (
              <Listbox.Option key={itm.id} value={itm}>
                {({ selected: isSelected }: { selected: boolean }) => (
                  <span className={isSelected ? "selected fw-bold" : ""}>
                    {itm.name}
                    {isSelected}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;
