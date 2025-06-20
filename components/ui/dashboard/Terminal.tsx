import type { ReactNode } from "react";

interface TerminalProps {
  codeBlock: ReactNode;
  filenameOne: string;
  filenameTwo: string;
}

export function Terminal({
  codeBlock,
  filenameOne,
  filenameTwo,
}: TerminalProps) {
  return (
    <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
      <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
              <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                {filenameOne}
              </div>
              <div className="border-r border-gray-600/10 px-4 py-2">
                {filenameTwo}
              </div>
            </div>
          </div>
          <div className="px-6 pt-6 pb-14 bg-gray-800">{codeBlock}</div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl"
        aria-hidden="true"
      />
    </div>
  );
}
