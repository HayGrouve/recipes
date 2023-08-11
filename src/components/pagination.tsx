import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

export default function Pagination() {
  return (
    <nav className="mb-5 mt-5 flex items-center justify-between rounded border-t border-gray-200 bg-gray-800 px-4 pb-1">
      <div className="-mt-px flex w-0 flex-1">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-300"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300" */}
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-blue-500 px-4 pt-4 text-sm font-medium text-blue-600"
        >
          1
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-300"
          aria-current="page"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-300"
        >
          3
        </a>
        <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-400">
          ...
        </span>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-300"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-300"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-300"
        >
          10
        </a>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-300"
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
}
