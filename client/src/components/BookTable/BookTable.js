import "./BookTable.css";

export default function BookTable() {
    return (
        <>
        <div className="bookTable">
            <div className="arrivalDate"><input className="bookingInput" type={Date} placeholder="Arrival date"></input></div>
            <div className="departureDate"><input className="bookingInput" type={Date} placeholder="Departure date"></input></div>
            <div className="numberOfAdults"><input className="bookingInput" placeholder="Number of adults"></input></div>
            <div className="numberOfChildren"><input className="bookingInput" placeholder="Number of children"></input></div>
            <button className="btnCheckAvailability">Check availability</button>

        </div>
        </>
    )
}