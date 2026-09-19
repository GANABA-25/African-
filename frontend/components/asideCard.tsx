import Image from "next/image";

interface AsideCardProps {
  rank: number;
  title: string;
  image: string;
  subtitle?: string;
  cc?: string;
  rating?: string;
  type?: string;
}

export default function AsideCard({
  rank,
  title,
  image,
  subtitle,
  cc = "CC 11",
  rating = "10",
  type = "TV",
}: AsideCardProps) {
  return (
    <div className="group relative flex h-25 w-full overflow-hidden rounded-xl border border-white/10 cursor-pointer">
      <div className="absolute left-7  -top-4 z-20 h-28 w-1 rotate-40 bg-primary/10 group-hover:bg-primary/50" />
      <div className="absolute left-11 -top-4 z-20 h-25 w-1 rotate-40 bg-primary/10 group-hover:bg-primary/50" />
      <div className="absolute left-15 -top-4 z-20 h-22 w-1 rotate-40 bg-primary/10 group-hover:bg-primary/50" />

      <div className="absolute inset-0 z-10 bg-linear-to-r from-[#15171b] via-[#15171b]/90 to-transparent" />

      <div className="relative z-20 flex w-full items-center gap-4">
        <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-500/70 text-sm font-semibold text-white group-hover:border-0 group-hover:bg-primary">
          {rank}
        </div>

        <div className="min-w-0 flex-1 z-30">
          <h1 className="truncate text-base font-bold text-white">{title}</h1>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold">
            <span className="rounded-md border border-primary-light bg-primary/10 px-2 py-1 text-primary">
              {cc}
            </span>

            <span className="rounded-md bg-green-500/15 px-2 py-1 text-green-400">
              {rating}
            </span>

            <span className="text-gray-300">{type}</span>

            {subtitle && <span className="text-gray-400">{subtitle}</span>}
          </div>
        </div>

        <div className="relative h-full w-32 shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#15171b] via-[#15171b]/80 to-transparent" />
        </div>
      </div>
    </div>
  );
}
