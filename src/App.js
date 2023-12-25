import "./App.css";
import Topo from "./componentes/topo/Topo.js";
import ListaPratos from "./componentes/listaPratos/ListaPratos.js";
function App() {
  return (
    <div className="App">
      <Topo />
      <ListaPratos />
    </div>
  );
}

export default App;
