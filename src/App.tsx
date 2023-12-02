
import ReactDOM from "react-dom/client";
import MyButton from "remote-mf/MyButton";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <MyButton/>
  </div>
);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(<App/>)
