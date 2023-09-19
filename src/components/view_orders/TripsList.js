import Trip from "./Trip";


const TripsList = ({trips}) => {
    if(trips && Array.isArray(trips)) {
        return (
            <div className="trips-list">
                {trips.map((trip) =>(
                    <Trip
                        id={trip.id}
                        firstCity={trip.firstCity}
                        secondCity={trip.secondCity}
                        depTime={trip.depTime}
                        arrTime={trip.arrTime}
                        price={trip.price}
                        numSeats={trip.numSeats}
                    />
                ))}
            </div>
        );
    } else {
        return null;
    }
}

export default TripsList;