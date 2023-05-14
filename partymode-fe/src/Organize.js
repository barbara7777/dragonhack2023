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
    const [invitation, setInvitation] = useState(null);

    const [sentInvitation, setSentInvitation] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const url = "http://127.0.0.1:5000/organize/1/4"

    useEffect(() => {
        getDetails()
    }, [])

    const sendInvitation = async () => {
        setSentInvitation(true);
        // send invitation
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: {"invitation": invitation}
        //     })
        // const data = await response.json();
    //     wait for 2 seconds
        await new Promise(r => setTimeout(r, 3200));
        setShowModal(false);
        setSentInvitation(false);

    }

    const getDetails = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
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
        console.log(newSupplies)
        setEvent(data.event);
        console.log("event", data.event);
        setInvitation(data.invitation);
    }

    return (
        <div className="App">
            <br/><br/>
            {
                goHome && <Navigate to={"/"}/>
            }
            <div><h1 class="title is-1 has-text-white maintitle" onClick={() => {
                setGoHome(true)
            }}>MEETHUB</h1></div>
            <br/><br/><br/>
            {eventt !== null && <div className="container">

                <div className="columns">
                    <div className={"column"}>

                        <button
                            className="button is-large is-fullwidth invitebutton fancycolors"
                            style={{borderRadius: "20px", fontWeight: "bold"}}
                            onClick={() => setShowModal(true)}
                        >SEND INVITATIONS</button>

                        <div style={{minHeight: "20px"}}></div>


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
                                <h1 className={"title is-2"}>Stuff to bring 🎒</h1>
                                <div className={"fancycolors"} style={{minHeight: "4px"}}></div>
                                <div style={{minHeight: "10px"}}></div>
                                <table className="table" style={{width: "100%"}}>
                                    <thead>
                                    <tr>
                                        <th className="has-text-centered">Assignee</th>
                                        <th className="has-text-centered">What they'll bring</th>
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

                    </div>

                    <div className="column">

                        <div className={"card"}>
                            <div className={"card-content"}>
                                <h1 className={"title is-2"}>Your invited friends 😎</h1>
                                <div className={"fancycolors"} style={{minHeight: "4px"}}></div>
                                <div style={{minHeight: "10px"}}></div>
                                <table className="table" style={{width: "100%"}}>
                                    <thead>
                                    <tr>
                                        <th className="has-text-centered">Name</th>
                                        <th className="has-text-centered">E-mail</th>
                                        <th className="has-text-centered">Phone Number</th>
                                        <th className="has-text-centered">Location</th>
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


            <div className={`modal ${showModal ? "is-active" : ""}`}>
                <div className="modal-background"></div>
                <div className="modal-card" style={{borderRadius: "20px"}}>
                    <section className="modal-card-body" style={{padding: "40px"}}>
                        <div className="content left-align" style={{textAlign: 'left'}}>
                            <h1 className={"title is-3"}>📨 Send an invitational email</h1>
                            <span className={"is-size-4"}>{invitation}</span>
                            <div style={{minHeight:"20px"}}></div>
                            <label className="checkbox">
                                <input type="checkbox" />
                                &nbsp;&nbsp;&nbsp;<span className={"is-size-5"}>Include the invitee's tasks in the email</span>
                            </label>
                            <div style={{minHeight:"10px"}}></div>
                            <label className="checkbox">
                                <input type="checkbox" />
                                &nbsp;&nbsp;&nbsp;<span className={"is-size-5"}>Send a reminder on the day before the event</span>
                            </label>
                            <div style={{minHeight:"30px"}}></div>

                            {!sentInvitation ? <div className={"columns"}>

                                <div className={"column"}>
                                    <button className="button is-medium is-fullwidth invitebutton fancycolors" onClick={sendInvitation}>Send invitation</button>
                                </div>

                                <div className={"column is-one-quarter"}>
                                    <button className="button is-medium is-fullwidth">Edit</button>
                                </div>

                            </div> : <h1 className={"title is-4 has-text-centered"}>🚀 Invitation sent 🚀</h1>}


                        </div>
                    </section>
                </div>
            </div>



        </div>
    );
}

export default Organize;
