import React, {useState} from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import arrow from "./free-icon-arrow-right-5412594.png"

const CitySelectField = () => {
    const cityList = ['Минск', 'Быхов', 'Лепель'];
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const option = cityList.map((text, index) => {
        return <option key={index}>{text}</option>;
    });

  return(
      <div className="data-input-field">
          <div className="city-select-fields">
              <select
                  value={firstValue}
                  onChange={(event) => setFirstValue(event.target.value)}
              >
                  {option}
              </select>
              <img src={arrow} className="arrow-right" alt="arrow-right-minibus"/>
              <select
                  value={secondValue}
                  onChange={(event) => setSecondValue(event.target.value)}
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
              <button>
                  Поиск
              </button>
          </div>
      </div>
);
}

export default CitySelectField;