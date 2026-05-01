"use client";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000066]"
      />
    </div>
  );
}