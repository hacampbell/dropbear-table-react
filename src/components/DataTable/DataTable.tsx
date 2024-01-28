import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

/**
 * Utility function for creating dummy data for table view
 * 
 * @param name The name for the item
 * @param date The date for the item
 * @param price The price of the item
 * @returns 
 */
const createData = (name: string, date: string, price: number) => {
    return { name, date, price };
}

const rows = [
    createData("Some Cool Menu Item", "23-03-2023", 700),
    createData("Another Item", "17-09-2023", 450),
    createData("One More", "03-12-2023", 1230),
    createData("A Really Good Coffee", "12-01-2024", 6.00),
    createData("A Not So Good Coffee", "23-11-2023", 5.60),
    createData("Just Another Demo Item", "23-03-2023", 500),
];

const DataTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;