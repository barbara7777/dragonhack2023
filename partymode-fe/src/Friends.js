import './App.css';
import 'bulma/css/bulma.min.css';
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import Friend from "./Friend";


function Friends() {
    const [goHome, setGoHome] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    })

    const getUsers = async () => {
        // const response = await fetch('http://localhost:8080/users');
        // const data = await response.json();
        const mockData = '{ "id" : 470, "users": [{"id": 3, "name": "Bojan", "email": "bojan.razkrosi@hotmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "wednesday", "satuday", "sunday"], "location": "46.138015, 14.558444", "preferences": ["horse riding", "cookies", "trampolines"], "hates": ["water"]}, {"id": 0, "name": "Matic", "email": "matic.hocevar@gmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "friday"], "location": "46.067100, 14.491936", "preferences": ["cinema", "hanging by the river"], "hates": ["balls"]}, {"id": 1, "name": "Vilma", "email": "vilma1999@gmail.com", "phone": "031 654 321", "timetable": ["friday", "saturday", "sunday"], "location": "46.050547, 14.466705", "preferences": ["cookies", "disco", "zoo"], "hates": ["horses"]}, {"id": 2, "name": "Majda", "email": "majdi-unicorn37@gmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "friday", "satuday", "sunday"], "location": "46.036786, 14.488854", "preferences": ["horse riding", "hanging by the river", "cinema", "trampolines"], "hates": ["disco", "heights"]}] }';
        const data = JSON.parse(mockData);
        console.log(data);
        setUsers(data.users);
    }

    return (
        <div className="App">
<br /><br /><br />
            {
                goHome && <Navigate to={"/"} />
            }
            <div><h1  class="title is-1 has-text-white maintitle" onClick={() => {setGoHome(true)}}>PartyMode</h1></div>
            <br /><br /><br />
            <div className="container">

                <div className="columns">

                    {/* Show a Friend component for each user */}
                    {users.map((user) => (
                        <div className="column">
                            <Friend
                                name={user.name}
                                location={user.location}
                                pictureLink={"https://bulma.io/images/placeholders/128x128.png"}
                                likes={user.preferences}
                                hates={user.hates}
                            />
                        </div>
                    ))}



                    {/*<div className="column">*/}
                    {/*    <Friend name={"Gregor"} location={"Ljubljana"} pictureLink={"https://bulma.io/images/placeholders/128x128.png"}/>*/}
                    {/*</div>*/}
                    {/*<div className="column">*/}
                    {/*    <Friend name={"Barbara"} location={"Ljubljana"} pictureLink={"https://bulma.io/images/placeholders/128x128.png"}/>*/}
                    {/*</div>*/}
                    {/*<div className="column">*/}
                    {/*    <Friend name={"Benč"} location={"Ljubljana"} pictureLink={"https://bulma.io/images/placeholders/128x128.png"}/>*/}
                    {/*</div>*/}
                    {/*<div className="column">*/}
                    {/*    <Friend name={"Evgenija"} location={"Ljubljana"} pictureLink={"https://bulma.io/images/placeholders/128x128.png"}/>*/}
                    {/*</div>*/}














                </div>
                <div className="columns">
                    <div className="column">

                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-1" style={{"font-size": "500% !important"}}>Share the QR code with your friends</p>
                                    </div>
                                </div>

                                <div className="content">
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="column">


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

export default Friends;
