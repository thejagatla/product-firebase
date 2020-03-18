import { connect } from "react-redux";
import Login from "../../Login";
import UserActions from "../Actions/UserActions";

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { UserActions })(Login);
