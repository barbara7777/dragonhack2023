import './App.css';
import 'bulma/css/bulma.min.css';
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import Friend from "./Friend";


function Organize() {
    const [goHome, setGoHome] = useState(false);
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState(null);
    const [supplies, setSupplies] = useState(null);
    const [eventt, setEvent] = useState(null);

    useEffect(() => {
        getDetails()
    })

    const getDetails = async () => {
        // const response = await fetch('http://localhost:8080/users');
        // const data = await response.json();
        const mockData = '{ "users": [{"id": 0, "name": "Matic", "image": "person1.jpg", "email": "matic.hocevar@gmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "friday"], "location": "46.067100, 14.491936", "preferences": ["cinema", "hanging by the river"], "hates": ["balls"]}, {"id": 1, "name": "Vilma", "image": "person5.jpg", "email": "vilma1999@gmail.com", "phone": "031 654 321", "timetable": ["friday", "saturday", "sunday"], "location": "46.050547, 14.466705", "preferences": ["cookies", "disco", "zoo"], "hates": ["horses"]}, {"id": 2, "name": "Majda", "image": "person3.jpg", "email": "majdi-unicorn37@gmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "friday", "satuday", "sunday"], "location": "46.036786, 14.488854", "preferences": ["horse riding", "hanging by the river", "cinema", "trampolines"], "hates": ["disco", "heights"]}, {"id": 3, "name": "Bojan", "image": "person6.jpg", "email": "bojan.razkrosi@hotmail.com", "phone": "031 123 456", "timetable": ["monday", "tuesday", "wednesday", "satuday", "sunday"], "location": "46.138015, 14.558444", "preferences": ["horse riding", "cookies", "trampolines"], "hates": ["water"]}], "arrangements": {\n' +
            '  "tasks": {\n' +
            '    "1": ["Send out invitations", "Help with decorations"],\n' +
            '    "2": ["Choose the disco music playlist", "Set up the dance floor"],\n' +
            '    "3": ["Organize party games", "Arrange for a disco ball"],\n' +
            '    "4": ["Coordinate food and drink refreshments", "Help with clean up after the party"]\n' +
            '  },\n' +
            '  "supplies": {\n' +
            '    "1": ["Invitations", "Decorations"],\n' +
            '    "2": ["Music system", "Disco lights"],\n' +
            '    "3": ["Game supplies", "Disco ball"],\n' +
            '    "4": ["Food and drinks", "Disposable plates and cups"]\n' +
            '  }\n' +
            '}, "event": {"id": 3, "title": "Disco", "description": "Let\'s get crazy. YOLO", "date": "friday", "time": "22:00", "location": "46.05592740593597, 14.504080196029753", "score": 6, "co2": 17} }';
        const data = JSON.parse(mockData);
        console.log(data);
        setUsers(data.users);

        var newTasks = [];
        for (var key in data.arrangements.tasks) {
            for (var taskKey in data.arrangements.tasks[key]) {
                newTasks.push([key, data.arrangements.tasks[key][taskKey]]);
            }
        }
        setTasks(newTasks);

        var newSupplies = [];
        for (var key in data.arrangements.supplies) {
            // for each item in the array
            for (const supplyKey in data.arrangements.supplies[key]) {
                newSupplies.push([key, data.arrangements.supplies[key][supplyKey]]);
            }
        }
        setSupplies(newSupplies);
        setEvent(data.event);
    }

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
            {eventt !== null && <div className="container">

                <div className="columns">
                    <div className={"column"}>
                        <div className={"card"}>
                            <div className={"card-content"}>
                                <h1 className={"title is-2"}>🪅 Event Details 🪩</h1>
                                <div className={"fancycolors"} style={{minHeight: "4px"}}></div>
                                <div className={"has-text-left is-size-4"}>Location:&nbsp;&nbsp;<span className={"has-text-weight-bold"}>{eventt.title}</span></div>
                                <div className={"has-text-left is-size-4"}>Time and date:&nbsp;&nbsp;<span className={"has-text-weight-bold"}>{eventt.date} ({eventt.time})</span></div>
                                <div className={"has-text-left is-size-4"}>Carbon footprint:&nbsp;&nbsp;<span className={"has-text-weight-bold"}>{eventt.co2} kg CO²</span></div>
                            </div>
                        </div>

                        <div style={{minHeight: "20px"}}></div>

                        <div className={"card"}>
                            <div className={"card-content"}>
                                <h1 className={"title is-2"}>Your invited friends 😎</h1>
                                <div className={"fancycolors"} style={{minHeight: "4px"}}></div>
                                <div style={{minHeight: "10px"}}></div>
                                <table className="table" style={{width: "100%"}}>
                                    <thead>
                                    <tr>
                                        <th class="has-text-centered">Name</th>
                                        <th class="has-text-centered">E-mail</th>
                                        <th class="has-text-centered">Phone Number</th>
                                        <th class="has-text-centered">Location</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.map((user) => (
                                        <tr>
                                            <td>
                                                <div className={"has-text-weight-bold"}>{user.name}</div>
                                            </td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>Ljubljana</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="column">

                        <div className={"card"}>
                            <div className={"card-content"}>
                                <h1 className={"title is-2"}>Stuff to bring 🎒</h1>
                                <div className={"fancycolors"} style={{minHeight: "4px"}}></div>
                                <div style={{minHeight: "10px"}}></div>
                                <table className="table" style={{width: "100%"}}>
                                    <thead>
                                    <tr>
                                        <th class="has-text-centered">Assignee</th>
                                        <th class="has-text-centered">What they'll bring</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        supplies.map((supply) => (
                                            <tr>
                                                <td>{users[supply[0] - 1].name}</td>
                                                <td>{supply[1]}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div style={{minHeight: "20px"}}></div>

                        <div className={"card"}>
                            <div className={"card-content"}>
                                <h1 className={"title is-2"}>Tasks 📆</h1>
                                <div className={"fancycolors"} style={{minHeight: "4px"}}></div>
                                <div style={{minHeight: "10px"}}></div>
                                <table className="table" style={{width: "100%"}}>
                                    <thead>
                                    <tr>
                                        <th class="has-text-centered">Assignee</th>
                                        <th class="has-text-centered">What they'll take care of</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        tasks.map((task) => (
                                            <tr>
                                                <td>{users[task[0] - 1].name}</td>
                                                <td>{task[1]}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>


                </div>

            </div>}


            {/*<header className="App-header">*/}
            {/*    <p>*/}
            {/*        PartyMode*/}
            {/*    </p>*/}
            {/*</header>*/}
            <br /><br /><br />
        </div>
    );
}

export default Organize;
