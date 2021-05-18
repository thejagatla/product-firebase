import { conncet } from "react-redux";
import Display from "../../Display";
import useForm from "../../Customformhook";

const mapStateToProps = (state) => {
  return {
    procedurecode: state.procedurecode,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: () => dispatch(useForm.handleSubmit()),
  };
};
export default conncet(mapStateToProps, mapDispatchToProps)(Display);
