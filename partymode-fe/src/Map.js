import './App.css';
import 'bulma/css/bulma.min.css';
import {useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import ActivityDisplay from "./ActivityDisplay";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

// import Modal from './Modal';

function Map() {
    const [goHome, setGoHome] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [events, setEvents] = useState(null);
    const [markers, setMarkers] = useState(null);
    const navigate = useNavigate();

    const url = "http://127.0.0.1:5000/rank-events/1";

    const handleSaveChanges = () => {
        setShowModal(false);
        navigate('/organize'); // Redirect to /organize URL
    };

    useEffect(() => {
        getMapDetails()
    }, [])

    const getMapDetails = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        var newMarkers = [];
        for (let i = 0; i < 3; i++) {
            const splitLocation = data[i].location.split(",");
            newMarkers.push([splitLocation[0], splitLocation[1], data[i].name, data[i].description]);
        }
        setMarkers(newMarkers);
        setEvents([data[0], data[1], data[2]]);

    }
    // console.log(events[0])


    return (
        <div className="App">
            <br/><br/>
            {
                goHome && <Navigate to={"/3"}/>
            }

            <div><h1 class="title is-1 has-text-white maintitle" onClick={() => {
                setGoHome(true)
            }}>PARTY MODE</h1></div>
            <br/><br/><br/>


            {events !== null && <div className="container">
                {/*<button className="button is-primary is-large" onClick={() => setShowModal(true)}>Show Modal</button>*/}
                <div class={`modal ${showModal ? "is-active" : ""}`}>
                    <div class="modal-background"></div>
                    <div className="modal-card" style={{borderRadius: "20px"}}>
                        <section className="modal-card-body" style={{padding: "40px"}}>
                            <h1 className={"title is-3"}>Optimal choice</h1>
                            {/*<span className={"is-size-4"}>{invitation}</span>*/}
                            <div class="content left-align" style={{textAlign: 'left'}}>
                                {/* <h1>Optimal event choice</h1> */}
                                <p>

                                    The best choice for the venue of your
                                    event is <strong>{events[0].title}</strong> and it is located <strong>{events[0].address}</strong>. The event should take place at <strong>{events[0].time}</strong>!
                                    <h1 className={"title is-4"}>Event description:</h1>
                                    <blockquote>{events[0].description}</blockquote>

                                </p>


                                <div className={"columns"}>
                                    <div className={"column"}>
                                        <button className="button is-fullwidth is-success" onClick={handleSaveChanges}>Save and proceed
                                        </button>
                                    </div>
                                    <div className={"column"}>
                                        <button className="button is-fullwidth" aria-label="close" onClick={() => setShowModal(false)}>Cancel
                                        </button>
                                    </div>
                                </div>




                            </div>
                        </section>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">


                        {!showModal && markers !== null &&
                            <MapContainer center={[46.057, 14.5058]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                                {markers.map((marker, index) => (
                                    <Marker key={index} position={[marker[0], marker[1], marker[2]]}>
                                        <Popup>
                                            <p>{marker[2]} <br/> {marker[3]} </p>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>}
                    </div>


                    <div className="column">
                        <div onClick={() => {
                            setShowModal(true)
                        }}>
                            <ActivityDisplay
                                activityName={events[0].title}
                                activityLocation={events[0].address}
                                isBest={true}
                                carbonFootprint={events[0].co2 + " kg CO2"}
                                openingHours={events[0].time}
                                score={events[0].score.toFixed(1)}
                            /></div>
                        <div onClick={() => {
                            setShowModal(true)
                        }}>
                            <ActivityDisplay
                                activityName={events[1].title}
                                activityLocation={events[1].address}
                                isBest={false}
                                carbonFootprint={events[1].co2 + " kg CO2"}
                                openingHours={events[1].time}
                                score={events[1].score.toFixed(1)}
                            /></div>
                        <div onClick={() => {
                            setShowModal(true)
                        }}>
                            <ActivityDisplay
                                activityName={events[2].title}
                                activityLocation={events[2].address}
                                isBest={false}
                                carbonFootprint={events[2].co2 + " kg CO2"}
                                openingHours={events[2].time}
                                score={events[2].score.toFixed(1)}
                            /></div>

                    </div>


                </div>

            </div>}
        </div>
    );
}

export default Map;
