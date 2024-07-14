import { useEffect, useState } from 'react';
import { useSearch } from '@/shared/lib/useSearch.ts';

const INIT_PAGE = 1;

export const useListQueryFilters = () => {
  const [page, setPage] = useState(INIT_PAGE);
  const { searchString, setSearchString, clearSearchString } = useSearch();

  useEffect(() => {
    if (searchString && page !== INIT_PAGE) {
      setPage(INIT_PAGE);
    }
  }, [searchString, setPage]);

  return {
    page,
    setPage,
    searchString,
    setSearchString,
    clearSearchString,
  };
};
