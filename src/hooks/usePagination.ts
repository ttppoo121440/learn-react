import usePaginationStore from '@/store/paginationStore';

const usePagination = (totalItems: number) => {
  const { currentPage, pageSize, setCurrentPage, setPageSize } = usePaginationStore();
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage: number, newPageSize?: number) => {
    if (newPageSize && newPageSize !== pageSize) {
      setPageSize(newPageSize);
      setCurrentPage(0);
    } else {
      setCurrentPage(newPage);
    }
  };

  return {
    currentPage,
    pageSize,
    totalPages,
    handlePageChange,
  };
};

export default usePagination;
