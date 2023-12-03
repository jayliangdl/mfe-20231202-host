
import ReactDOM from "react-dom/client";
// import MyButton from "remote-mf/MyButton";
import VanillaMyButton from "remote-mf/VanillaMyButton";

// const App = () => (
//   <div className="container">
//     <div>Name: host</div>
//     <MyButton/>
//     <VanillaMyButton/>
//   </div>
// );
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container!);
// root.render(<App/>)


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(VanillaMyButton(container!));