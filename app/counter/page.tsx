import type { Metadata } from "next";
import Link from "next/link";
import Counter from "./Counter";

export const metadata: Metadata = {
  title: "Counter · TESTING44",
};

export default function CounterPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16">
      <Counter />
      <Link
        href="/"
        className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
      >
        ← Back to home
      </Link>
    </main>
  );
}
