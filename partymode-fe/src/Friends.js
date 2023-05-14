import './App.css';
import 'bulma/css/bulma.min.css';
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import Friend from "./Friend";


function Friends() {
    const [goHome, setGoHome] = useState(false);
    const [users, setUsers] = useState([]);

    const url = "http://127.0.0.1:5000/room/1/1"

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // const mockData = '{ "id" : 470, "users": [{"id": 3, "name": "Bojan", "email": "bojan.razkrosi@hotmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "wednesday", "satuday", "sunday"], "location": "46.138015, 14.558444", "preferences": ["horse riding", "cookies", "trampolines"], "hates": ["water"]}, {"id": 0, "name": "Matic", "email": "matic.hocevar@gmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "friday"], "location": "46.067100, 14.491936", "preferences": ["cinema", "hanging by the river"], "hates": ["balls"]}, {"id": 1, "name": "Vilma", "email": "vilma1999@gmail.com", "phone": "031 654 321", "timetable": ["friday", "saturday", "sunday"], "location": "46.050547, 14.466705", "preferences": ["cookies", "disco", "zoo"], "hates": ["horses"]}, {"id": 2, "name": "Majda", "email": "majdi-unicorn37@gmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "friday", "satuday", "sunday"], "location": "46.036786, 14.488854", "preferences": ["horse riding", "hanging by the river", "cinema", "trampolines"], "hates": ["disco", "heights"]}] }';
        // const data = JSON.parse(mockData);
        console.log(data);
        setUsers(data.users);
    }

    return (
        <div className="App">
            <br/><br/>
            {
                goHome && <Navigate to={"/2"}/>
            }
            <div><h1 class="title is-1 has-text-white maintitle" onClick={() => {
                setGoHome(true)
            }}>MEETHUB</h1></div>
            <br/><br/><br/>

            <div className={"containers"}>

                <div className={"columns"}>
                    <div className={"column is-one-fifth"}></div>

                    <div className={"column is-two-fifths"}>
                            {users.map((user) => (
                                <>
                                    <div className="card">
                                        <div className="card-content">
                                            <div className={"columns"}>
                                                <div className={"column"}>
                                                    <div className={"is-justify-content-center is-flex"}>
                                                        <figure className="image is-96x96 ">
                                                            <img className={"is-rounded"} src={"http://127.0.0.1:5000/static/" + user.image}/>
                                                        </figure>
                                                    </div>
                                                    {/*<br />*/}
                                                    <div style={{minHeight: "10px"}}></div>
                                                    <div className={"is-justify-content-center is-flex"}>
                                                        <div className={"title is-4"}>{user.name}</div>
                                                    </div>
                                                    <div className={"is-justify-content-center is-flex"}>
                                                        <div className={"subtitle is-5 has-text-grey"}>Ljubljana</div>
                                                    </div>
                                                </div>
                                                <div className={"column is-size-4"}>
                                                    <div className={"title is-4 has-text-primary is-bold"}>Likes</div>
                                                    {
                                                        user.preferences.map((like) => (
                                                            <div className={"is-size-5 has-text-grey"}>{like}</div>
                                                        ))
                                                    }
                                                </div>
                                                <div className={"column is-size-4"}>
                                                    <div className={"title is-4 has-text-danger is-bold"}>Hates</div>
                                                    {
                                                        user.hates.map((hate) => (
                                                            <div className={"is-size-5 has-text-grey"}>{hate}</div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{minHeight: "20px"}}></div>
                                </>
                            ))}

                    </div>


                    <div className={"column is-one-quarter"}>
                        {/*    insert image */}
                        <figure className="image">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                alt="Placeholder image"/>
                        </figure>
                        <p className="title is-1" style={{"font-size": "500% !important"}}>Share the QR code with your
                            friends</p>

                    </div>
                </div>

            </div>










        </div>
    );
}

export default Friends;
