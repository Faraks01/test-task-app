import { useState } from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState('');

  const clearSearchString = () => setSearch('');

  return {
    searchString: search,
    setSearchString: setSearch,
    clearSearchString,
  };
};
