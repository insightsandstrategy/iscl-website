export default function FeatureCard({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
}) {
  return (
    <div className={`${bgColor} p-6 rounded-2xl text-white shadow-md hover:shadow-xl transition duration-300`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-white/90">{description}</p>
    </div>
  );
}