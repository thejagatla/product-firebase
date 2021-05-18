import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Button,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
} from "@material-ui/core/";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Customformhook from "./Customformhook";
import formvalidations from "./Validation";

const useStyles = makeStyles({
  inputdp: {
    display: "flex",
    "& div": {
      paddingRight: "20px",
      width: "80px",
    },
  },
});
const Productview = (props) => {
  const classes = useStyles();
  const {
    inputs,
    handlestartDateChange,
    handleendDateChange,
    handleInputChange,
    handleSubmit,
    errors,
  } = Customformhook(
    {
      startofservice: new Date(),
      endofservice: new Date(),
      procedurecode: "",
      quantity: "",
      placeofservice: "",
      dp1: "",
      dp2: "",
      dp3: "",
      dp4: "",
      md1: "",
      md2: "",
      md3: "",
      md4: "",
      ndccode: "",
      ndcquantity: "",
      billedamount: "",
      email: "",
      phone: "",
    },
    formvalidations,
    props
  );

  return (
    <div>
      <Container fixed>
        <h3> Data Line Information</h3> <hr />
        <form>
          <Grid container spacing={3}>
            {/** first Line grid */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={6} sm={4}>
                <KeyboardDatePicker
                  fullWidth
                  margin="normal"
                  id="date-picker-dialog"
                  label="Start of service *"
                  format="MM/dd/yyyy"
                  value={inputs.startofservice}
                  onChange={handlestartDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  required
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <KeyboardDatePicker
                  fullWidth
                  margin="normal"
                  id="date-picker-dialog"
                  label="End of service"
                  format="MM/dd/yyyy"
                  name="endofservice"
                  value={inputs.endofservice}
                  onChange={handleendDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  required
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid item xs={6} sm={2}>
              <TextField
                id="filled-basic"
                label="Procedure code *"
                variant="filled"
                name="procedurecode"
                value={inputs.procedurecode}
                onChange={handleInputChange}
                error={errors.procedurecode}
                helperText={errors.procedurecode}
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              <TextField
                id="filled-basic"
                label="Qty *"
                variant="filled"
                name="quantity"
                value={inputs.quantity}
                onChange={handleInputChange}
                error={errors.quantity}
                helperText={errors.quantity}
              />
            </Grid>

            {/** Second Line grid */}
            <Grid item xs={4}>
              <TextField
                id="filled-basic"
                label="Place of Service *"
                variant="filled"
                name="placeofservice"
                value={inputs.placeofservice}
                onChange={handleInputChange}
                style={{ width: "100%" }}
                error={errors.placeofservice}
                helperText={errors.placeofservice}
              />
            </Grid>

            <Grid item xs={4} className={classes.inputdp}>
              <TextField
                id="filled-basic"
                label="DP 1*"
                variant="filled"
                name="dp1"
                value={inputs.dp1}
                onChange={handleInputChange}
                error={errors.dp1}
                helperText={errors.dp1}
              />

              <TextField
                id="filled-basic"
                label="DP 2"
                variant="filled"
                name="dp2"
                value={inputs.dp2}
                onChange={handleInputChange}
              />
              <TextField
                id="filled-basic"
                label="DP 3"
                variant="filled"
                name="dp3"
                values={inputs.dp3}
                onChange={handleInputChange}
              />
              <TextField
                id="filled-basic"
                label="DP 4"
                variant="filled"
                name="dp4"
                value={inputs.dp4}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4} className={classes.inputdp}>
              <TextField
                id="filled-basic"
                label="MD 1"
                name="md1"
                value={inputs.md1}
                onChange={handleInputChange}
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="MD 2"
                variant="filled"
                name="md2"
                value={inputs.md2}
                onChange={handleInputChange}
              />
              <TextField
                id="filled-basic"
                label="MD 3"
                variant="filled"
                name="md3"
                value={inputs.md3}
                onChange={handleInputChange}
              />
              <TextField
                id="filled-basic"
                label="MD 4"
                variant="filled"
                name="md4"
                values={inputs.md4}
                onChange={handleInputChange}
                // style={{ width: 60, marginLeft: 5 }}
              />
            </Grid>

            {/** Third Line grid */}
            <Grid item xs={6} sm={4}>
              <TextField
                fullWidth
                id="filled-basic"
                label="NDC Code"
                variant="filled"
                name="ndccode"
                value={inputs.ndccode}
                onChange={handleInputChange}
                // style={{ width: "250px" }}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                fullWidth
                id="filled-basic"
                label="NDC Quantity"
                name="ndcquantity"
                value={inputs.ndcquantity}
                onChange={handleInputChange}
                variant="filled"
                // style={{ width: "250px" }}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl
                fullWidth
                variant="filled"
                error={errors.billedamount}
              >
                <InputLabel htmlFor="filled-adornment-amount">
                  Amount
                </InputLabel>
                <FilledInput
                  id="filled-adornment-amount"
                  name="billedamount"
                  value={inputs.billedamount}
                  onChange={handleInputChange}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            {/** Fourth Line grid */}
            <Grid item xs={6} sm={4}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Provider Email"
                variant="filled"
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Provider Phone"
                variant="filled"
                name="phone"
                value={inputs.phone}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            style={{
              float: "right",
              marginRight: "10pc",
            }}
            onClick={handleSubmit}
          >
            {props.currentId === "" ? "Submit" : "Update"}
          </Button>
        </form>
      </Container>
    </div>
  );
};
export default Productview;
