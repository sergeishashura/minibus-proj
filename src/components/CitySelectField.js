import React, {useState} from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import arrow from "./free-icon-arrow-right-5412594.png"
import TripsList from "./view_orders/TripsList";

const CitySelectField = ({trips, setTrips}) => {
    const cityList = ['Минск', 'Быхов', 'Лепель'];
    const [originalTrips, setOriginalTrips] = useState(trips);// new array for filtered trips
    const [firstValue, setFirstValue] = useState('');//first city in select
    const [secondValue, setSecondValue] = useState('');//second
    const [selectedDate, setSelectedDate] = useState(new Date());//array for set date

    const option = cityList.map((text, index) => {
        return <option key={index}>{text}</option>;
    });

    const handleFirstValueChange = (event) => {
        setFirstValue(event.target.value);
    }

    const handleSecondValueChange = (event) => {
        setSecondValue(event.target.value);
    }

    const handleSearch = () => {
        let filteredTrips = originalTrips;
        if(firstValue){
            filteredTrips = filteredTrips.filter(trip => trip.firstCity === firstValue);
        }
        if(secondValue){
            filteredTrips = filteredTrips.filter(trip => trip.secondCity === secondValue);
        }
        setTrips(filteredTrips);
    };


    return(
      <div className="data-input-field">
          <div className="city-select-fields">
              <select
                  value={firstValue}
                  onChange={handleFirstValueChange}
              >
                  {option}
              </select>
              <img src={arrow} className="arrow-right" alt="arrow-right-minibus"/>
              <select
                  value={secondValue}
                  onChange={handleSecondValueChange}
              >
                  {option}
              </select>
          </div>
          <div className="date-input-field">
              <DatePicker
                  showIcon
                  dateFormat="dd/MM/yyyy"
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
              />
          </div>
          <div className="city-find-button">
              <button onClick={handleSearch} >
                  Поиск
              </button>
          </div>
      </div>
);
}

export default CitySelectField;