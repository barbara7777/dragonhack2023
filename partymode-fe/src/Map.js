import './App.css';
import 'bulma/css/bulma.min.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import ActivityDisplay from "./ActivityDisplay";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


function Map() {
    const [goHome, setGoHome] = useState(false);


    return (
        <div className="App">
            <br/><br/><br/>
            {
                goHome && <Navigate to={"/"}/>
            }
            <div><h1 class="title is-1 has-text-white maintitle" onClick={() => {
                setGoHome(true)
            }}>PartyMode</h1></div>
            <br/><br/><br/>
            <div className="container">

                <div className="columns">
                    <div className="column">


                        <MapContainer center={[46.057, 14.5058]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    A pretty CSS3 popup. <br/> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>


                    </div>


                    <div className="column">

                        <ActivityDisplay
                            activityName={"Kino Šiška"}
                            activityLocation={"Trg prekomorskih brigad 3, Ljubljana"}
                            isBest={true}
                            carbonFootprint={"0.5 kg CO2"}
                            openingHours={"8:00 - 20:00"}
                            score={"4.5"}
                        />

                        <ActivityDisplay
                            activityName={"Woop! Trampolin park"}
                            activityLocation={"Leskovškova 1a, Ljubljana"}
                            isBest={false}
                            carbonFootprint={"0.5 kg CO2"}
                            openingHours={"8:00 - 19:00"}
                            score={"4.2"}
                        />

                        <ActivityDisplay
                            activityName={"Woop! Trampolin park"}
                            activityLocation={"Leskovškova 1a, Ljubljana"}
                            isBest={false}
                            carbonFootprint={"0.5 kg CO2"}
                            openingHours={"8:00 - 19:00"}
                            score={"4.2"}
                        />

                    </div>


                </div>

            </div>


            {/*<header className="App-header">*/}
            {/*    <p>*/}
            {/*        PartyMode*/}
            {/*    </p>*/}
            {/*</header>*/}
        </div>
    );
}

export default Map;
