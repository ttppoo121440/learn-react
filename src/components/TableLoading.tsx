const TableLoading = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">請選擇一個商品查看</h2>
      <div className="overflow-hidden rounded bg-white shadow-md">
        <div className="h-64 w-full animate-pulse bg-gray-200"></div>
        <div className="p-4">
          <div className="flex items-center">
            <div className="h-6 w-32 animate-pulse bg-gray-200"></div>
            <div className="ml-2 h-6 w-20 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div className="mt-4 h-4 w-full animate-pulse bg-gray-200"></div>
          <div className="mt-2 h-4 w-3/4 animate-pulse bg-gray-200"></div>
          <div className="mt-4 flex items-center">
            <div className="mr-2 h-4 w-20 animate-pulse bg-gray-200"></div>
            <div className="h-4 w-16 animate-pulse bg-gray-200"></div>
          </div>
          <h5 className="mt-4 h-6 w-32 animate-pulse bg-gray-200"></h5>
          <div className="mt-2 flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="size-20 animate-pulse rounded bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLoading;
