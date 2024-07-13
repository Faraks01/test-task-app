import type {FC} from "react";
import type {DenseTableProps} from "./DenseTable.types.tsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DenseTable: FC<DenseTableProps> = ({
  ariaLabel,
  headers,
  rows
}) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label={ariaLabel}>
        {headers && (
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  key={`${header}__${index}`}
                  align={!index ? undefined : 'left'}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}

        <TableBody>
          {rows.map((rowValues, index) => (
            <TableRow
              key={`row__${index}`}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              {rowValues.map((value, valueIndex) => (
                <TableCell
                  key={`value__${index}__${valueIndex}`}
                  component={!index ? 'th' : undefined}
                  scope={!index ? 'row' : undefined}
                  align={!index ? undefined : 'left'}
                >
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;