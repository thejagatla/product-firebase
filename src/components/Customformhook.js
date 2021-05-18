import { useState, useEffect } from "react";

const Customformhook = (initialValues, validate, props) => {
  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (props.currentId === "")
      setInputs({
        ...initialValues,
      });
    else {
      let editableObj = props.products.find((obj) => {
        return obj.id === props.currentId;
      });
      setInputs(editableObj);
    }
  }, [props.currentId, props.products]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
      props.addOrEdit(inputs);
    } else {
      console.log("errors try again", validationErrors);
    }
  };
  const handlestartDateChange = (event) => {
    setInputs((values) => ({
      ...values,
      startofservice: event,
    }));
  };
  const handleendDateChange = (event) => {
    setInputs((values) => ({
      ...values,
      endofservice: event,
    }));
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handlestartDateChange,
    handleendDateChange,
    handleInputChange,
    inputs,
    errors,
  };
};

export default Customformhook;
