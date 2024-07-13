import type {ChangeEvent, FC} from 'react';
import type {PaginationProps} from "./Pagination.types.tsx";
import MUIPagination from '@mui/material/Pagination';

const Pagination: FC<PaginationProps> = ({
  disabled,
  count,
  page,
  onPageChange
}) => {
  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <MUIPagination disabled={disabled} count={count} page={page} onChange={handleChange}/>
  );
}

export default Pagination;