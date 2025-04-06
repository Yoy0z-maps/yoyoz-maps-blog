export default function BlogMainPanelSkeleton() {
  return (
    <div className="items-center justify-center flex flex-col">
      <div className="hidden sm:flex flex-wrap items-end justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="absolute h-[10px] bg-gray-400 w-full bottom-0 z-[0]"></div>

              <div className="rounded-md bg-gray-200"></div>
            </div>
            <div className="flex items-center justify-center gap-x-2 mt-20">
              <div className="rounded-md bg-gray-100 h-8 w-32"></div>
            </div>
            <div className="rounded-md bg-gray-100 h-16 w-72"></div>
            <div className="flex items-center justify-center gap-x-8 mt-8">
              <p className="font-pretendard text-theme-light text-lg line-clamp-2 dark:text-theme-dark font-light">
                {`test`}
              </p>
              <div className="p-2 bg-gray-200 rounded-sm cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8 max-w-xl">
          <div className="flex justify-center aspect-square relative">
            <div className="rounded-md overflow-hidden bg-gray-200 w-full h-full"></div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-between gap-x-10 px-36 w-full">
        <div className="flex-1 h-[1px] bg-neutral-300 dark:bg-neutral-600"></div>
        <div className="rounded-md bg-gray-200"></div>
        <div className="flex-1 h-[1px] bg-neutral-300 dark:bg-neutral-600"></div>
      </div>
      <div className="flex flex-col sm:hidden"></div>
    </div>
  );
}
