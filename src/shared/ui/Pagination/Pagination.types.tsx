export interface PaginationProps {
  disabled: boolean;
  count: number;
  page: number;
  onPageChange: (page: number) => void;
}
