export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-15 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}