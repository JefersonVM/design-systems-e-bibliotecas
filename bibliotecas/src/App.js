import "./App.css";
import { useLocalStorage } from "react-use";

function App() {
  const [value, setValue, remove] = useLocalStorage("my-key", "foo");
  const [value2, setValue2, remove2] = useLocalStorage(
    "my-key-2",
    "valor-jeferson-vieira"
  );

  const [value3, setValue3, remove3] = useLocalStorage("my-key-3", "valor-3", {
    raw: true,
  });
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className="valores">
        <div>Value: {value}</div>
        <button onClick={() => setValue("bar")}>bar</button>
        <button onClick={() => setValue("baz")}>baz</button>
        <button onClick={() => remove()}>Remove</button>
      </div>
    </div>
  );
}

export default App;
