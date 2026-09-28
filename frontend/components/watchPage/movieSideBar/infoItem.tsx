interface InfoItemProps {
  label: string;
  value?: string;
}

export default function InfoItem({ label, value }: InfoItemProps) {
  if (!value) return null;

  return (
    <div className="flex items-start gap-4">
      <span className="shrink-0 text-gray-500">{label}</span>
      <span className="text-right text-gray-300">{value}</span>
    </div>
  );
}
