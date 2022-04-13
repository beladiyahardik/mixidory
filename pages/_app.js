import "../styles/globals.css";
import "../styles/app.css";
import "../styles/loader.css";
import "../styles/responsive.css"
import 'react-toastify/dist/ReactToastify.css';
import store from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
