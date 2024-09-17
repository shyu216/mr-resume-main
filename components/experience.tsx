import { cn } from "@/lib/utils";

type Props = {
  head1: string | JSX.Element;
  head2?: string | JSX.Element;
  head3?: string | JSX.Element;
  head4?: string | JSX.Element;
  bulletPoints: (string | JSX.Element)[];
  usage: "live" | "pdf";
};

export default function Experience({
  head1,
  head2,
  head3,
  head4,
  bulletPoints,
  usage
}: Props) {
  return (
    <section className={cn(usage === "live" ? "text-sm" : "text-11px")}>
      <div className="text-zinc-700 dark:text-zinc-300 mb-1">
        <div className="flex font-semibold gap-x-4 flex-wrap justify-between">
          <div className="font-bold text-red dark:text-white">{head1}</div>
          <div>{head2}</div>
        </div>
        <div className="flex gap-x-4 flex-wrap justify-between">
          <div>{head3}</div>
          <div>{head4}</div>
        </div>
      </div>

      <ul className="list-disc ml-4 text-zinc-600 dark:text-zinc-400">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
