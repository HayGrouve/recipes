import { Skeleton } from "./ui/skeleton";

const CardSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-80 w-72" />
      <Skeleton className="mx-auto mt-6 h-5 w-24" />
      <Skeleton className="mx-auto mt-6 h-5 w-32" />
      <Skeleton className="mx-auto mt-6 h-5 w-10" />
      <Skeleton className="mx-auto my-4 h-1 w-72" />
      <div className="flex gap-2">
        <Skeleton className=" h-12 w-12 rounded-full" />
        <Skeleton className="mt-4 h-5 w-24" />
      </div>
    </div>
  );
};

export default CardSkeleton;
