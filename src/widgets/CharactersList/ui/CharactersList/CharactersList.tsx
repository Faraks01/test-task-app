import type { ChangeEvent, FC } from 'react';
import type { CharactersListProps } from './CharactersList.types';
import Grid from '@mui/material/Unstable_Grid2';
import { Skeleton, TextField } from '@mui/material';
import { useGetCharactersList } from '@/entities/character/api';
import { Pagination } from '@/shared/ui';
import { CharacterCard } from '@/entities/character/ui';
import { NavigateToCharacterDetailsButton } from '@/features/character/NavigateToDetails/ui';
import { useDebounce, useListQueryFilters } from '@/shared/lib';

const CharactersList: FC<CharactersListProps> = () => {
  const { page, setPage, searchString, setSearchString } = useListQueryFilters();

  const debouncedSearchString = useDebounce<string>(searchString, 500);

  const { isLoading, data } = useGetCharactersList(page, debouncedSearchString);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <Grid container spacing={4}>
      <Grid xs={12}>
        <TextField
          id="characters-list-search-input"
          label="Search"
          value={searchString}
          onChange={handleSearchInputChange}
        />
      </Grid>

      {!isLoading &&
        data?.results?.map((character) => (
          <Grid key={character.id} xs={12} md={6} lg={4}>
            <CharacterCard
              character={character}
              actions={<NavigateToCharacterDetailsButton character={character} />}
            />
          </Grid>
        ))}

      {isLoading &&
        Array.from(Array(3).keys()).map((_, index) => (
          <Grid key={`skeleton__${index}`} xs={12} md={6} lg={4}>
            <Skeleton variant="rectangular" width="100%" height={300} />
          </Grid>
        ))}

      <Grid xs={12}>
        <Pagination
          disabled={isLoading}
          page={page}
          count={data?.pagesCount ?? 0}
          onPageChange={setPage}
        />
      </Grid>
    </Grid>
  );
};

export default CharactersList;
