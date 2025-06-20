import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import dedent from "dedent";
import { CodeBlock } from "./CodeBlock";
import { Terminal } from "./Terminal";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-emerald-100/20">
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
          <div className="px-6 lg:px-0 lg:pt-0">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-12 sm:mt-16 lg:mt-8">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-sm/6 font-semibold text-emerald-600 ring-1 ring-emerald-600/10 ring-inset">
                      What's new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                      <span>Just shipped v0.1.0</span>
                      <ChevronRightIcon
                        className="size-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <h1 className="mt-10 text-5xl font-bold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                  Build smarter nutrition features faster.
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Macrofy helps fitness platforms integrate intelligent meal
                  planning, macro tracking, and schedule-aware nutrition into
                  their apps.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href={process.env.NEXT_PUBLIC_DOCS_URL || "#"}
                    rel="noopener noreferrer"
                    className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/sign-up"
                    className="text-sm/6 font-semibold text-gray-900"
                  >
                    Start Coding Free <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-emerald-600/10 ring-emerald-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-emerald-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-emerald-100 opacity-20 ring-1 ring-white ring-inset md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <Terminal
                  filenameOne="NutritionView.swift"
                  filenameTwo="App.swift"
                  codeBlock={
                    <CodeBlock lang="swift">
                      {dedent(`
                        import SwiftUI

                        import MacrofySwift
                        import MacrofySwiftUI

                        struct NutritionView: View {
                            var body: some View {
                                VStack {
                                    Dashboard()
                                }
                            }
                        }
                    `)}
                    </CodeBlock>
                  }
                />
                );
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
