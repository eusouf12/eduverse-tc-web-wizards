import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-slate-100">
      <div className="mx-auto w-full max-w-sm">
        <div className="flex flex-col gap-3">
          <Image
            src={"/Nextjs-logo.svg"}
            alt="No Page Found"
            width={600}
            height={400}
            priority
          />
          <span className="text-center">
            <p>Welcome to NEXT.js 14 Boilerplate.</p>
            <p>
              Please Edit the{" "}
              <span className="underline text-blue-700">/src/app/public </span>
              to get started.
            </p>
          </span>
          <p className="text-xs text-gray-500 text-center font-bold">
            Dependencies: TailwindCSS, Next.js, Typescript, Ant-Design,
            Mui-x-datagrid, Moment.js, Tanstack Query, Axios{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
