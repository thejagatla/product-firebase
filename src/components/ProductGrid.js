import React, { useState, useEffect } from "react";
import Productview from "./Productview";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import { Table, Container, Grid } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineTwoToneIcon from "@material-ui/icons/DeleteOutlineTwoTone";
import SearchBar from "material-ui-search-bar";
//import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  clickableEditIcon: {
    cursor: "pointer",
    color: "blue",
  },
  clickableDeleteIcon: {
    cursor: "pointer",
    color: "red",
  },
  subtotal: {
    float: "right",
    fontSize: "20px",
    color: "white",
  },
  gridMargin: {
    marginTop: "5pc",
  },
});

const ProductGrid = () => {
  const [products, setproducts] = useState({});
  const [currentId, setcurrentId] = useState("");
  const [searched, setsearched] = useState("");

  //const productsList = useSelector((state) => state.state);
  useEffect(() => {
    db.collection("product").onSnapshot((snaphot) => {
      if (snaphot.docs !== null)
        setproducts(
          snaphot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
    });
  }, []);

  // Add & Update products to firebase
  const addOrEdit = (obj) => {
    if (currentId == "") {
      db.collection("product")
        .add(obj)
        .then(console.log("sucess"))
        .catch((err) => err.message);
    } else {
      db.collection("product")
        .doc(currentId)
        .set(obj, (err) => {
          if (err) console.log(err);
          else setcurrentId("");
        });
    }
  };
  // Delete records from Firebase
  const deleteProduct = (id) => {
    if (window.confirm("Are sure you want to delete ?")) {
      db.collection("product")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }
  };

  // Search bar for procedure code
  const requestSearch = (searchedVal) => {
    if (searchedVal !== "") {
      const filteredRows = products.filter((row) => {
        return row.procedurecode
          .toLowerCase()
          .includes(searchedVal.toLowerCase());
      });
      setproducts(filteredRows);
    }
  };
  const cancelSearch = () => {
    setsearched("");
    requestSearch(searched);
    window.location.reload();
  };

  const countAmount = () => {
    let total = 0;
    for (var i = 0; i < products.length; i++) {
      total = parseInt(products[i].billedamount) + total;
    }
    return total;
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Productview {...{ addOrEdit, currentId, products }} />
      <Grid item xs={12}>
        <Container fixed className={classes.gridMargin}>
          <Paper>
            <SearchBar
              placeholder="search procedure code"
              value={searched}
              onChange={(newValue) => requestSearch(newValue)}
              onCancelSearch={() => cancelSearch()}
            />
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <strong>Line</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Date of service</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Procedure Code</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Qty</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Diag.pointers</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Modifiers</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Billed Amt</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(products).map((id) => {
                    return (
                      <TableRow key={id}>
                        <TableCell>
                          <CreateIcon
                            className={classes.clickableEditIcon}
                            onClick={() => setcurrentId(products[id].id)}
                          />
                        </TableCell>
                        <TableCell>{parseInt(id) + 1}</TableCell>
                        <TableCell>
                          {moment(
                            products[id].startofservice.seconds * 1000 +
                              products[id].startofservice.nanoseconds / 10000
                          ).format("DD MMM YYYY hh:mm a")}
                          <br />
                          {moment(
                            products[id].endofservice.seconds * 1000 +
                              products[id].endofservice.nanoseconds / 10000
                          ).format("DD MMM YYYY hh:mm a")}
                        </TableCell>
                        <TableCell>{products[id].procedurecode}</TableCell>
                        <TableCell>{products[id].quantity}</TableCell>
                        <TableCell>
                          {products[id].dp1},{products[id].dp2},
                          {products[id].dp3},{products[id].dp4}
                        </TableCell>
                        <TableCell>
                          {products[id].md1},{products[id].md2},
                          {products[id].md3},{products[id].md4}
                        </TableCell>
                        <TableCell>$ {products[id].billedamount}</TableCell>
                        <TableCell>
                          <DeleteOutlineTwoToneIcon
                            className={classes.clickableDeleteIcon}
                            onClick={() => deleteProduct(products[id].id)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}

                  <TableRow style={{ background: "#3f51b5" }}>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={8}>
                      <p className={classes.subtotal}>
                        subtotal
                        <strong> $ {countAmount()}</strong>
                      </p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </Grid>
    </React.Fragment>
  );
};
export default ProductGrid;
