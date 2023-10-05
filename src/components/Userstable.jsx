
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsTrash } from 'react-icons/bs';
import { Button } from '@mui/material';
import { orange, grey } from '@mui/material/colors';
import Link from '@mui/material/Link';

function createData(
  id,
  user,
  status,
  actions,

) {
  return { id, user, status, actions };
}

const rows = [
    createData(1, { name: 'John Doe', phone: '1234567890' }, { status: 'Active', color: 'green'},  {actions:  {edit: 'Edit', delete: 'Delete', block: 'block'}}),
    createData(2, { name: 'John Doe', phone: '1234567890' }, { status: 'Active', color: 'green' }, { actions: { edit: 'Edit', delete: 'Delete', block: 'block' } }),
    createData(3, { name: 'John Doe', phone: '1234567890' }, { status: 'Active', color: 'green' }, { actions: { edit: 'Edit', delete: 'Delete', block: 'block' } }),
    createData(4, { name: 'John Doe', phone: '1234567890' }, { status: 'Active', color: 'green' }, { actions: { edit: 'Edit', delete: 'Delete', block: 'block' } }),
    createData(5, { name: 'John Doe', phone: '1234567890' }, { status: 'Active', color: 'green' }, { actions: { edit: 'Edit', delete: 'Delete',block: 'block' } }),
    createData(6, { name: 'John Doe', phone: '1234567890' }, { status: 'Active', color: 'green'},  {actions:  {edit: 'edit', delete: 'Delete', block: 'block'}}),
];

export default function UsersTable() {
    const survey = grey[900];
  return (
    <Paper>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="left">User</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Actions</TableCell>
            <TableCell align="left"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
                  <TableCell className="align-left">{row.user.name} <br /> {row.user.phone }</TableCell>
                  <TableCell className="align-center">
                      <Button size="small" variant='outlined' color='success' className={row.status.color}>{row.status.status}</Button>
                  </TableCell>
                  <TableCell className="align-left">
                      <Button size="small" variant='outlined' color='warning' className={row.actions.actions.block}>Block</Button>
                  </TableCell>
                  <TableCell>
                      <div className="actions">
                      <Button size="small" color='error' className={row.actions.actions.block}><BsTrash className='delete' /></Button>

                          <small>
                          <Link to="#" underline="always" color='error'>
                          View/Edit Details
                          </Link></small>
                          <small>
                          <Link to="#" underline="always" color='primary'>
                          Progress
                              </Link></small>
                              <small>
                          <Link to="#" underline="always" color={survey}>
                          Survey
                          </Link></small>
                      </div>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}