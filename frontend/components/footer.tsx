import { Plus } from "lucide-react";

export default function HomeFooter() {
  return (
    <>
      <div className="max-w-[110rem] m-auto ">
        <div className="space-y-4 py-20">
          <span className="flex items-end gap-4">
            <h1 className="text-2xl font-black">A-Z </h1>
            <p className="text-sm text-gray-500">
              Searching anime order by alphabet name A to Z.
            </p>
          </span>

          <div className="flex items-center gap-4">
            <h1 className="bg-white/10 p-2 px-4 rounded-md text-sm hover:bg-primary cursor-pointer">
              All
            </h1>

            <ul className="flex items-center gap-4">
              <li className="bg-white/10 p-2 px-4 rounded-md text-sm hover:bg-primary cursor-pointer">
                0-9
              </li>

              <ul className="flex gap-2">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                  <li
                    className="text-sm bg-white/10 p-2 px-4 rounded-md hover:bg-primary cursor-pointer"
                    key={letter}
                  >
                    <button>{letter}</button>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 pb-20">
        <div className="max-w-[110rem] m-auto flex justify-between items-center">
          <span className="space-y-1">
            <h1>Copyright ©AnimeKai. All Rights Reserved</h1>
            <p className="text-gray-500">
              This site does not store any files on its server. All contents are
              provided by non-affiliated third parties
            </p>
          </span>

          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-black">African</h1>
            <Plus size={15} color="#f8bf4b" strokeWidth={7} />
          </div>
        </div>
      </div>
    </>
  );
}
