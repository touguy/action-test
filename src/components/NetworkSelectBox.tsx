import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

const CHAINS = [
  {
    value: "POL",
    icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#8247E5"/><path d="M22.5 13.5l-4-2.3a2.1 2.1 0 0 0-2 0l-4 2.3a2.1 2.1 0 0 0-1 1.8v4.6a2.1 2.1 0 0 0 1 1.8l4 2.3a2.1 2.1 0 0 0 2 0l4-2.3a2.1 2.1 0 0 0 1-1.8v-4.6a2.1 2.1 0 0 0-1-1.8z" fill="#fff"/></svg>
    ),
  },
  {
    value: "ETH",
    icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#627EEA"/><path d="M16 7v10l7 3.5-7-13.5z" fill="#fff"/><path d="M16 7L9 20.5l7-3.5V7z" fill="#fff"/></svg>
    ),
  },
  {
    value: "SOL",
    icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#00FFA3"/><rect x="10" y="10" width="12" height="2" rx="1" fill="#fff"/><rect x="10" y="15" width="12" height="2" rx="1" fill="#fff"/><rect x="10" y="20" width="12" height="2" rx="1" fill="#fff"/></svg>
    ),
  },
  {
    value: "XRPL",
    icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#23292F"/><path d="M10 22l6-12 6 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];

type NetworkSelectBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function NetworkSelectBox({ value, onChange }: NetworkSelectBoxProps) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative w-full">
        <Listbox.Button className="w-5 h-5 border rounded flex items-center justify-center bg-white">
          {CHAINS.find(chain => chain.value === value)?.icon}
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-1 w-12 bg-white shadow-lg rounded z-10">
            {CHAINS.map(chain => (
              <Listbox.Option key={chain.value} value={chain.value} className="cursor-pointer flex items-center justify-center h-12">
                {chain.icon}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}