import { FC } from "react";
import { Skeleton } from "./ui/skeleton";

interface IProps {}

const CardSkeleton: FC<IProps> = ({}) => {
  return (
    <div className="flex max-w-xs gap-4 md:max-w-none">
      <Skeleton className="h-72 w-44" />

      <div className="flex flex-col">
        <Skeleton className="mt-4 h-5 w-16" />
        <Skeleton className="mt-6 h-5 w-48" />
        <Skeleton className="mt-2 h-5 w-32" />
        <Skeleton className="mt-2 h-5 w-44" />
        <div className="mt-[6rem] flex gap-2">
          <Skeleton className=" h-12 w-12 rounded-full" />
          <Skeleton className="mt-4 h-5 w-24" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
