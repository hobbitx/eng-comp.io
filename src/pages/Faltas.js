import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  horas,
  creditos,
  max_h,
  max_d,
) {
  return { horas, creditos,max_h,max_d};
}

const rows = [
  createData(30,2,7.5,3),
  createData(60,4,15,7),
  createData(90,6,22.5,11)
];

export default function Faltas() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>			
            <TableCell align="center">Horas</TableCell>
            <TableCell align="center">Creditos</TableCell>
            <TableCell align="center">Maximo de Faltas (h)</TableCell>
            <TableCell align="center">Maximo de Faltas (dias)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.horas}</TableCell>
              <TableCell align="center">{row.creditos}</TableCell>
              <TableCell align="center">{row.max_h}</TableCell>
              <TableCell align="center">{row.max_d}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
