import Link from "next/link";

import { HashTag } from ".";

type Props = {
  hideViewLink?: boolean;
  showLine?: boolean;
  title: string;
};

const SectionHeader = ({
  hideViewLink = false,
  showLine = true,
  title,
}: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-2 flex-grow items-center">
        <h2 className="">
          <HashTag />
          {title}
        </h2>
        {showLine && (
          <div className="border-t border-primary w-3/5 hidden md:flex" />
        )}
      </div>

      <p className="">
        {!hideViewLink && <Link href="/works">View all &rarr;</Link>}
      </p>
    </div>
  );
};

export default SectionHeader;
