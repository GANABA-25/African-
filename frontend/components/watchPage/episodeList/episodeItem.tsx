interface EpisodeType {
  episodes?: number;
}

export default function EpisodeItem({ episodes = 0 }: EpisodeType) {
  return (
    <>
      {Array.from({ length: episodes }, (_, index) => (
        <div
          key={index}
          className="flex shrink-0 cursor-pointer items-center gap-2 rounded-md border border-[#1a1e22] px-2 py-1 text-sm transition-colors hover:bg-primary"
        >
          <span className="w-5 text-gray-500">{index + 1}</span>
          <p>Episode {index + 1}</p>
        </div>
      ))}
    </>
  );
}
