import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <section className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          TESTING44
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          A tiny app to test the platform
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Built with Next.js, TypeScript and Tailwind CSS. Open the counter and
          count from -1000 to 1000.
        </p>
        <div className="mt-10">
          <Link
            href="/counter"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go to the counter
          </Link>
        </div>
      </section>
    </main>
  );
}
