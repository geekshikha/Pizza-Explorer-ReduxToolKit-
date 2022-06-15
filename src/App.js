import "./App.css";
import AddPizzaForm from "./components/ AddPizzaForm";
import PizzaList from "./components/PizzaList";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <AddPizzaForm />
      <RestaurantList />
      <PizzaList />
    </div>
  );
}

export default App;
