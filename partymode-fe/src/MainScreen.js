import './App.css';
import 'bulma/css/bulma.min.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";


function MainScreen({actual}) {
    const [gotoFriends, setGotoFriends] = useState(false);
    const [gotoMap, setGotoMap] = useState(false);
    const [gotoOrganize, setGotoOrganize] = useState(false);

    const chooseFriends = () => {
        setGotoFriends(true);
    }

    const notHLStyle = {
        padding: "100px !important"
    }

    const menus = [
        {
            step: 1,
            name: "Friends 🤗",
            onClick: () => {
                setGotoFriends(true)
            }
        },
        {
            step: 2,
            name: "Find event 🔎",
            onClick: () => {
                setGotoMap(true)
            }
        },
        {
            step: 3,
            name: "Organize 🛠️",
            onClick: () => {
                setGotoOrganize(true)
            }
        }
    ];

    return (
        <div className={"App"}>
            {gotoFriends && <Navigate to={"/friends"}/>}
            {gotoMap && <Navigate to={"/find"}/>}
            {gotoOrganize && <Navigate to={"/organize"}/>}
            <br/><br/>
            <div><h1 class="title is-1 has-text-white maintitle">PARTY MODE</h1></div>
            <br/><br/><br/>
            <div className="container">

                <div className="columns">
                    {
                        menus.map((menu) => {
                            if (menu.step !== actual) {
                                return <div className="column">
                                    <div className={"container"} style={notHLStyle}>
                                        <div className={`card ${menu.step === actual ? "fancycolors invitebutton" : ""}`}
                                             onClick={menu.onClick}>
                                            <div className="card-content">
                                                <div style={{minHeight: "20px"}}></div>
                                                <div className={"is-size-4"}>Step {menu.step}</div>
                                                <div className={"is-size-2"}>{menu.name}</div>
                                                <div style={{minHeight: "20px"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            return <div className="column">
                                <div className={`card ${menu.step === actual ? "fancycolors invitebutton" : ""}`}
                                     onClick={menu.onClick}>
                                    <div className="card-content">
                                        <div style={{minHeight: "20px"}}></div>
                                        <div className={"is-size-4"}>Step {menu.step}</div>
                                        <div className={"is-size-2 has-text-weight-bold"}>{menu.name}</div>
                                        <div style={{minHeight: "20px"}}></div>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>


            {/*<header className="MainScreen-header">*/}
            {/*    <p>*/}
            {/*        PartyMode*/}
            {/*    </p>*/}
            {/*</header>*/}
        </div>
    );
}

export default MainScreen;
