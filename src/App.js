import "./App.css";
import Sidenav from "./components/Sidenav";
import Routers from "./routes/Routers";

function App() {
  return (
    <div>
      <div className="flex ">
        <div className="h-full w-[20%]">
          <Sidenav />
        </div>
        <div className="w-[80%]">
          <Routers />
        </div>
      </div>
    </div>
  );
}

export default App;
