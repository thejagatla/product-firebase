const formvalidations = (inputs) => {
  //Email errors
  const errors = {};
  if (!inputs.procedurecode) errors.procedurecode = "Invalid procedure code";
  else if (!inputs.quantity) errors.quantity = "Invalid quantity";
  else if (!inputs.placeofservice) errors.placeofservice = "Invalid service";
  else if (!inputs.dp1) errors.dp1 = "Invalid Dp";
  else if (!inputs.billedamount)
    errors.billedamount = "Please check billed amount";
  return errors;
};

export default formvalidations;
