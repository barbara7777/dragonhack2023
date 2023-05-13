import './App.css';
import 'bulma/css/bulma.min.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";


function App() {
    const [gotoFriends, setGotoFriends] = useState(false);
    const [gotoMap, setGotoMap] = useState(false);

    const chooseFriends = () => {
        setGotoFriends(true);
    }

    return (
        <div className="App">
            {gotoFriends && <Navigate to={"/friends"} />}
            {gotoMap && <Navigate to={"/find"} />}
<br /><br /><br />
            <div><h1  class="title is-1 has-text-white maintitle">PartyMode</h1></div>
            <br /><br /><br />
            <div className="container">

                <div className="columns">
                    <div className="column">

                        <div className="card" onClick={chooseFriends}>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-1" style={{"font-size": "500% !important"}}>Find friends</p>
                                    </div>
                                </div>

                                <div className="content">
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="column">

                        <div className="card" onClick={() => {setGotoMap(true)}}>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-1" style={{"font-size": "500% !important"}}>Find Event</p>
                                    </div>
                                </div>

                                <div className="content">
                                </div>
                            </div>
                        </div>

                    </div>








                    <div className="column">

                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-1" style={{"font-size": "500% !important"}}>Organization details</p>
                                    </div>
                                </div>

                                <div className="content">
                                </div>
                            </div>
                        </div>

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

export default App;
