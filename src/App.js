import TripsList from "./components/view_orders/TripsList";
import CitySelectField from "./components/CitySelectField";
import './App.css';
import Header from "./components/Header";

function App() {
  return (
      <div className="container">
          <Header />
          <CitySelectField />
          <TripsList />
          <TripsList />
          <TripsList />
          <TripsList />
      </div>
  );
}

export default App;
