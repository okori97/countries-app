import Link from "next/link";

export default function BorderChip({
  border,
  key,
  link,
}: {
  key?: number;
  border: string | undefined;
  link?: string;
}) {
  if (!border) return;
  return (
    <Link href={link ? link : `/country/${border}`}>
      <div
        key={key}
        className={
          (link ? " rounded-[4px] px-7 " : "") +
          `dark:bg-Primary-100 dark:border-Primary-100  w-fit  border px-5 py-1 text-sm shadow-sm   dark:text-white dark:shadow-xl`
        }
      >
        {border}
      </div>
    </Link>
  );
}
