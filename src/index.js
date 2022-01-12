import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//ApolloClient / GraphQL stuff
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Keyboards from "./routes/keyboards";
import Keysets from "./routes/keysets";
//React-Redux
import store from "./store/store";
import { Provider } from "react-redux";

//connect to the GraphQL server
const httpLink = createHttpLink({
  uri: "http://localhost:5000/",
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/keyboards" element={<Keyboards />} />
            <Route path="/keysets" element={<Keysets />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
