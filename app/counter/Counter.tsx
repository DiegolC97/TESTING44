"use client";

import { useState } from "react";

const MIN = -1000;
const MAX = 1000;

const buttonBase =
  "min-w-20 rounded-lg px-5 py-3 text-base font-semibold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40";

export default function Counter() {
  // Not persisted: every page load starts at 0.
  const [value, setValue] = useState(0);

  const atMax = value >= MAX;
  const atMin = value <= MIN;

  return (
    <section className="w-full max-w-md rounded-2xl bg-white p-6 text-center sm:p-8 shadow-md">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Counter</h1>
      <p className="mt-2 text-sm text-slate-500">
        Range: {MIN} to {MAX}
      </p>

      <output
        aria-live="polite"
        className="my-8 block text-6xl font-bold tabular-nums sm:text-7xl"
      >
        {value}
      </output>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setValue((v) => Math.max(MIN, v - 1))}
          disabled={atMin}
          className={`${buttonBase} bg-indigo-600 text-white enabled:hover:bg-indigo-500`}
        >
          -1
        </button>
        <button
          type="button"
          onClick={() => setValue(0)}
          className={`${buttonBase} bg-slate-200 text-slate-900 hover:bg-slate-300`}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => setValue((v) => Math.min(MAX, v + 1))}
          disabled={atMax}
          className={`${buttonBase} bg-indigo-600 text-white enabled:hover:bg-indigo-500`}
        >
          +1
        </button>
      </div>
    </section>
  );
}
