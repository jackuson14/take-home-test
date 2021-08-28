import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Weather" component={WeatherInfo} />
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
