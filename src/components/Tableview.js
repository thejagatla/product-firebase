import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, Container } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Tableview({ products }) {
  const [currentId, setcurrentId] = useState("");

  const classes = useStyles();
  return (
    <Container fixed>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell></TableCell>
              <TableCell>Line</TableCell>
              <TableCell>Date of service</TableCell>
              <TableCell>Procedure Code</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Diag.pointers</TableCell>
              <TableCell>Modifiers</TableCell>
              <TableCell>Billed Amt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(products).map((id) => {
              return (
                <TableRow key={id}>
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>
                    <CreateIcon onClick={() => setcurrentId({ id })} />
                  </TableCell>
                  <TableCell>{id}</TableCell>
                  <TableCell>date</TableCell>
                  <TableCell>{products[id].procedurecode}</TableCell>
                  <TableCell>{products[id].quantity}</TableCell>
                  <TableCell>
                    {
                      (products[id].dp1,
                      products[id].dp2,
                      products[id].dp3,
                      products[id].dp4)
                    }
                  </TableCell>
                  <TableCell>
                    {products[id].md1},{products[id].md2},{products[id].md3},
                    {products[id].md4}
                  </TableCell>
                  <TableCell>$ {products[id].billedamount}</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              );
            })}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
