import minibus from "./minibus-icon-tripList.png"

const Trip = ({id, firstCity, secondCity, depTime, arrTime, price,numSeats}) => {
    return(
        <div className="trip">
            <img src={minibus} className="minibus-trip-icon" alt="trip-icon"/>
            <span>{firstCity}-{secondCity}   {depTime}       {arrTime}    {price}       {numSeats}</span>
            <button>
                Заказать
            </button>
        </div>
    );
}

export default Trip;