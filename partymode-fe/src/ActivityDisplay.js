export default function ActivityDisplay({
                                            activityName,
                                            activityLocation,
                                            isBest,
                                            carbonFootprint,
                                            openingHours,
                                            score
                                        }) {



    const notBestStyle = {margin: "100px !important", borderRadius: "0px !important"};

    if (!isBest) {
        return (
            <div className={"container"} style={{padding: "0 40px 0px 40px"}}>

                <div className={`card ${isBest ? "isBest" : ""}`} style={!isBest ? notBestStyle : {}}>
                    <div className={"card-content"}>
                        <div className={"is-justify-content-center is-flex"}>
                            <div className={`title is-3 ${isBest ? "has-text-white" : ""}`}>{activityName}</div>
                        </div>
                        <div className={"is-justify-content-center is-flex"}>
                            <div className={`subtitle is-5 ${isBest ? "has-text-white" : ""}`}>{activityLocation}</div>
                        </div>
                        <br/>
                        <div className={"columns"}>
                            <div className={"column"}>
                                <div className={`title is-5 ${isBest ? "has-text-white" : ""}`}>Score</div>
                                <div className={`subtitle is-4 ${isBest ? "has-text-white" : ""}`}>{score}</div>
                            </div>
                            <div className={"column"}>
                                <div className={`title is-5 ${isBest ? "has-text-white" : ""}`}>Carbon footprint</div>
                                <div className={`subtitle is-5 ${isBest ? "has-text-white" : ""}`}>🎉 {carbonFootprint}</div>
                            </div>
                            <div className={"column"}>
                                <div className={`title is-5 ${isBest ? "has-text-white" : ""}`}>Opening hours</div>
                                <div className={`subtitle is-5 ${isBest ? "has-text-white" : ""}`}>{openingHours}</div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        )
    }



    return (
        <div className={`card ${isBest ? "isBest" : ""}`} style={!isBest ? notBestStyle : {}}>
            <div className={"card-content"}>
                <div style={{minHeight: "20px"}}></div>
                <div className={"is-justify-content-center is-flex"}>
                    <div className={`title is-1 ${isBest ? "has-text-white" : ""}`}>{activityName}</div>
                </div>
                <div className={"is-justify-content-center is-flex"}>
                    <div className={`subtitle is-5 ${isBest ? "has-text-white" : ""}`}>{activityLocation}</div>
                </div>
<br/>
                <div className={"columns"}>
                    <div className={"column"}>
                        <div className={`title is-4 ${isBest ? "has-text-white" : ""}`}>Score</div>
                        <div className={`subtitle is-3 is-bold ${isBest ? "has-text-white" : ""}`}>{score}</div>
                    </div>
                    <div className={"column"}>
                        <div className={`title is-4 ${isBest ? "has-text-white" : ""}`}>Carbon footprint</div>
                        <div className={`subtitle is-5 ${isBest ? "has-text-white" : ""}`}>🎉 {carbonFootprint}</div>
                    </div>
                    <div className={"column"}>
                        <div className={`title is-4 ${isBest ? "has-text-white" : ""}`}>Suggested time</div>
                        <div className={`subtitle is-5 ${isBest ? "has-text-white" : ""}`}>{openingHours}</div>
                    </div>
                </div>

                <div style={{minHeight: "10px"}}></div>
            </div>


        </div>
    );
}