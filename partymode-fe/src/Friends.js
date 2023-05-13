import './App.css';
import 'bulma/css/bulma.min.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";


function Friends() {
    const [goHome, setGoHome] = useState(false);

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
                    <div className="column">

                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-1" style={{"font-size": "500% !important"}}>Friend 1</p>
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
                                        <p className="title is-1" style={{"font-size": "500% !important"}}>Friend 2</p>
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
                                        <p className="title is-1" style={{"font-size": "500% !important"}}>Friend 3</p>
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
                                        <p className="title is-1" style={{"font-size": "500% !important"}}>Friend 4</p>
                                    </div>
                                </div>

                                <div className="content">
                                </div>
                            </div>
                        </div>

                    </div>














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
