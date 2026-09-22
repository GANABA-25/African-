export default function MovieInformation() {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto scrollbar-yellow p-8">
      <div className="space-y-4">
        <h1 className="text-lg font-semibold text-white">
          Re:ZERO -Starting Life in Another World-
        </h1>

        <p className="text-sm text-gray-500">
          Re:Zero kara Hajimeru Isekai Seikatsu; Re:ゼロから始める異世界生活
        </p>

        <ul className="flex items-center justify-center gap-4 text-sm text-gray-400">
          <li>Movie</li>
          <li>10 EP</li>
        </ul>

        <p className="text-sm leading-6">
          When Subaru Natsuki leaves the convenience store, the last thing he
          expects is to be wrenched from his ordinary life and transported to
          another world.
        </p>

        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-gray-500">Country:</span>
            <span className="text-gray-300">Japan</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Genres:</span>
            <span className="text-gray-300">Fantasy, Drama, Suspense</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Premiered:</span>
            <span className="text-gray-300">Spring 2016</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Date aired:</span>
            <span className="text-gray-300">Apr 4, 2016</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Episodes:</span>
            <span className="text-gray-300">25</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Duration:</span>
            <span className="text-gray-300">24 min</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Status:</span>
            <span className="text-gray-300">Finished Airing</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Studios:</span>
            <span className="text-gray-300">White Fox</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Producers:</span>
            <span className="text-gray-300">Kadokawa</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-gray-500">Links:</span>
            <span className="text-gray-300">Official Website</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
