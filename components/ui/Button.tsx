export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="px-6 py-3 bg-[#000066] text-white rounded-lg hover:bg-[#00004d] transition shadow-sm hover:shadow-md font-medium">
      {children}
    </button>
  );
}