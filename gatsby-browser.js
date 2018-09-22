import React from "react";
import { Provider } from "react-redux";
// import PropTypes from "prop-types";

// import createStore from "./src/state/store";

// remove the JSS style tag generated on the server to avoid conflicts with the one added on the client
// exports.onInitialClientRender = function() {
//   // eslint-disable-next-line no-undef
//   var ssStyles = window.document.getElementById("server-side-jss");
//   ssStyles && ssStyles.parentNode.removeChild(ssStyles);
// };

export const wrapRootElement = ({ element }) => {
  // const store = createStore();

  const ConnectedRootElement = (
    <Provider store={store}>
      {element}
    </Provider>
  );

  // ConnectedRootElement.propTypes = {
  //   children: PropTypes.object.isRequired
  // };

  return ConnectedRootElement;
};
