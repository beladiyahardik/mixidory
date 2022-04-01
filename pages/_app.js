import "../styles/globals.css";
import "../styles/app.css";
import store from "../redux/store";
// import Provider from "react";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
