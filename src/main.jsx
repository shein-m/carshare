import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.jsx";
import { store, persistor } from "./redux/store.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/carshare/">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
