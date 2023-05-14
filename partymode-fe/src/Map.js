import './App.css';
import 'bulma/css/bulma.min.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import ActivityDisplay from "./ActivityDisplay";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

// import Modal from './Modal';

function Map() {
    const [goHome, setGoHome] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const markers = [
        [46.06889, 14.48897, "Kino Šiška", "Morebitni komentar"],
        [46.06467, 14.54863, "Woop", "Morebitni komentar"],
        [46.071, 14.5322, "Pokopališče Žale", "Morebitni komentar"]
    ];


    return (
        <div className="App">
            <br/><br/>
            {
                goHome && <Navigate to={"/"}/>
            }

            <div><h1 class="title is-1 has-text-white maintitle" onClick={() => {
                setGoHome(true)
            }}>PARTY MODE</h1></div>
            <br/><br/><br/>


            <div className="container">
                {/*<button className="button is-primary is-large" onClick={() => setShowModal(true)}>Show Modal</button>*/}
                <div class={`modal ${showModal ? "is-active" : ""}`}>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Optimal choice</p>
                            <button class="delete" aria-label="close" onClick={() => setShowModal(false)}></button>
                        </header>
                        <section class="modal-card-body">
                            Best place for Avatar 2 to have your meet is at Kino Šiška at 20h.
                            {/* <!-- Content ... --> */}
                        </section>
                        <footer class="modal-card-foot">
                            <button class="button is-success">Save changes</button>
                            <button class="button">Cancel</button>
                        </footer>
                    </div>
                </div>
                <p></p>
                <div className="columns">
                    <div className="column">


                        {!showModal && <MapContainer center={[46.057, 14.5058]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            
                            {markers.map((marker, index) => (
                                <Marker key={index} position={[marker[0], marker[1], marker[2]]}>
                                <Popup>
                                  <p>{marker[2]} <br /> {marker[3]} </p>
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
                                activityName={"Kino Šiška"}
                                activityLocation={"Trg prekomorskih brigad 3, Ljubljana"}
                                isBest={true}
                                carbonFootprint={"0.5 kg CO2"}
                                openingHours={"8:00 - 20:00"}
                                score={"4.5"}
                            /></div>
                        <div onClick={() => {
                            setShowModal(true)
                        }}>
                            <ActivityDisplay
                                activityName={"Woop! Trampolin park"}
                                activityLocation={"Leskovškova 1a, Ljubljana"}
                                isBest={false}
                                carbonFootprint={"5 kg CO2"}
                                openingHours={"8:00 - 19:00"}
                                score={"4.2"}
                            /></div>
                        <div onClick={() => {
                            setShowModal(true)
                        }}>
                            <ActivityDisplay
                                activityName={"Pokopališče Žale"}
                                activityLocation={"Jarška cesta 2, Ljubljana"}
                                isBest={false}
                                carbonFootprint={"0.5 kg CO2"}
                                openingHours={"5:00 - 21:00"}
                                score={"2.2"}
                            /></div>

                    </div>


                </div>

            </div>
        </div>
    );
}

export default Map;
