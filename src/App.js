import {useState} from "react";
import {nanoid} from "nanoid";
import TripsList from "./components/view_orders/TripsList";
import CitySelectField from "./components/CitySelectField";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
    const [trips, setTrips] = useState([
        {
            id: nanoid(),
            firstCity: "Минск",
            secondCity: "Быхов",
            depTime: "15:10",
            arrTime: "18:10",
            price:"10р.",
            numSeats: "4"
        },
        {
            id: nanoid(),
            firstCity: "Минск",
            secondCity: "Лепель",
            depTime: "18:10",
            arrTime: "21:10",
            price: "10р.",
            numSeats: "5"
        },
        {
            id: nanoid(),
            firstCity: "Лепель",
            secondCity: "Минск",
            depTime: "10:10",
            arrTime: "13:10",
            price: "10р.",
            numSeats: "7"
        },
        {
            id: nanoid(),
            firstCity: "Быхов",
            secondCity: "Минск",
            depTime: "11:10",
            arrTime: "14:10",
            price: "10р.",
            numSeats: "8"
        }
    ]);

  return (
      <div className="container">
          <Header />
          <CitySelectField trips={trips} setTrips={setTrips}/>
          <TripsList trips={trips}/>
          <Footer />
      </div>
  );
}

export default App;
