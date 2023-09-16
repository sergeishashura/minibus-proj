import React, {useState} from "react";

const CitySelectField = () => {
    const cityList = ['Минск', 'Быхов', 'Лепель'];
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');

    const option = cityList.map((text, index) =>{
        return <option key={index}>{text}</option>;
    });

  return(
      <div className="data-input-field">
          <div className="city-select-fields">
              <select value={firstValue} onChange={(event) => setFirstValue(event.target.value)}>
                  {option}
              </select>

              <select value={secondValue} onChange={(event) => setSecondValue(event.target.value)}>
                  {option}
              </select>
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