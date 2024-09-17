"use client";

import { cn } from "@/lib/utils";

type Props = {
  title: string;
  children: React.ReactNode;
  usage: "live" | "pdf";
};

export default function Section({ title, children, usage }: Props) {
  return (
    usage === "live" ?
      <section className="mt-2">
        <h3 className="text-md font-bold text-rose-600 dark:text-rose-600">
          {title}
        </h3>
        <div className="w-full border-t border-zinc-200 dark:border-zinc-600 mb-1"></div>
        {children}
      </section> :
      <section className="mt-2">
        <h3 className="text-14px font-bold text-rose-600 dark:text-rose-600">
          {title}
        </h3>
        <div className="w-full border-t border-zinc-200 dark:border-zinc-600 mb-1"></div>
        {children}
      </section>
  );
}
