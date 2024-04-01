import "./App.css";
import { Provider } from "react-redux";
import { MiRouter } from "./MiRouter";
import store from "./store/store";

function App() {
  return (
    <div className="bodyApp">
      <Provider store={store}>
        <MiRouter />
      </Provider>
    </div>
  );
}

export default App;
