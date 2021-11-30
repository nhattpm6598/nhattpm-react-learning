import logo from "./logo.svg";
import "./App.css";
import Ninja_function from "./Ninja_function";
import Ninja_class from "./Ninja_class";

function App() {
  const html = (
  <div className="App">
    <Ninja_function></Ninja_function>
    <Ninja_class></Ninja_class>
  </div>
  );
  return html;
}

export default App;
