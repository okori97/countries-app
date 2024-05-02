import Link from "next/link";

export default function BorderChip({
  border,
  key,
}: {
  key: number;
  border: string | undefined;
}) {
  return (
    <Link href={`/country/${border}`}>
      <div
        key={key}
        className=" dark:bg-Primary-100 dark:border-Primary-100 border px-5 py-1 text-sm shadow-sm dark:text-white"
      >
        {border}
      </div>
    </Link>
  );
}
