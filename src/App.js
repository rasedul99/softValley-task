import "./App.css";
import Sidenav from "./components/Sidenav";
import Routers from "./routes/Routers";

function App() {
  return (
    <div>
      <div className="flex ">
        <div className="w-[15%]">
          <Sidenav />
        </div>
        <div className="w-[85%]">
          <Routers />
        </div>
      </div>
    </div>
  );
}

export default App;
