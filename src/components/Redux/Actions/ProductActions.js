import { RETRIEVE_PPRODUCTS } from "./Actiontypes";
import { db } from "../../../firebase";
export const retrieveProducts = (dispatch) => {
  db.collection("product").onSnapshot((snaphot) => {
    if (snaphot.docs !== null)
      snaphot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  });
};
