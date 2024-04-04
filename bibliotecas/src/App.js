import { useLocalStorage } from "react-use";
import "./App.css";

function App() {
  const [value, setValue, remove] = useLocalStorage("user", {
    name: "Jeferson",
    age: 42,
  });
  // localStorage.setItem("user2", JSON.stringify({ name: "Jeferson", age: 42 }));

  return (
    <div className="App">
      <div className="valores">
        <h1>useLocalStorage</h1>
        <div>Value: {value.name}</div>
        <button onClick={() => setValue("bar")}>bar</button>
        <button onClick={() => setValue("baz")}>baz</button>
        <button onClick={() => remove()}>Remove</button>
      </div>
      {/* <div className="valores">
        <h1>localStorage</h1>
        <div>Value: {JSON.parse(localStorage.getItem("user2")).name}</div>
        <button onClick={() => localStorage.setItem("user2", "novoValor")}>
          bar
        </button>
        <button onClick={() => setValue("baz")}>baz</button>
        <button onClick={() => localStorage.removeItem("user2")}>Remove</button>
      </div> */}
    </div>
  );
}

export default App;
