import "./Rooms.css";
import RoomCard from "../RoomCard/RoomCard";

export default function Rooms() {
    return (
        <div className="rooms_background">
        <div className="rooms_top">
            <p className="rooms_header_text"><span className="rooms_highlighted_text">Explore</span> our rooms</p>
            <button className="btnViewRooms">View all rooms</button>
        </div>
        <div className="rooms-cards">
            {/*for testing purposes, will be pulled from API later*/}
            <RoomCard img="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/349483985.jpg?k=c4eea137b1cb3899986dc2f8e884af32fa0d16cd49ad6cf37693f515f778f4dd&o=&hp=1" roomName="Studio Apartment" roomDescription="10x15 Mountain View Balcony" roomPrice="50" />
            <RoomCard img="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/347304077.jpg?k=66ab17ce742fb839d36fdaa2bcfe8779f66081902423a4470520844ad55b0c3c&o=&hp=1" roomName="Studio Apartment" roomDescription="10x15 Mountain View Balcony" roomPrice="50" />
            <RoomCard img="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/349485944.jpg?k=d61fe9be88054f1d459949151299bcc6d5a1bd2405e15d676a107e528d8e5c18&o=&hp=1" roomName="Studio Apartment" roomDescription="10x15 Mountain View Balcony" roomPrice="50" />
            <RoomCard img="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/348278837.jpg?k=2ac50ecf72b691fd381129907286cba5e50c23bd75d3ddb9113cbfedc36e5355&o=&hp=1" roomName="Studio Apartment" roomDescription="10x15 Mountain View Balcony" roomPrice="50" />
            <RoomCard img="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/352880429.jpg?k=7e19e07d6e28f5be5b1c5732bba41a678e892b55bf1de51e29ec0a0f61cc43cb&o=&hp=1" roomName="Family Room" roomDescription="10x15 Mountain View Balcony" roomPrice="50" />

        </div>
        </div>
    )
}