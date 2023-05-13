export default function Friend({name, location, pictureLink, likes, hates}) {
    return (
        <div className="card">
            <div className={"card-content"}>
                <div className={"is-justify-content-center is-flex"}>

                    <figure className="image is-128x128">
                        <img src={pictureLink}/>
                    </figure>
                </div>
                <br />
                <div className={"is-justify-content-center is-flex"}>
                    <div className={"title is-3"}>{name}</div>
                </div>
                <div className={"is-justify-content-center is-flex"}>
                    <div className={"subtitle is-5 has-text-grey"}>{location}</div>

                </div>
                <br/>
                <div className={"columns"}>
                    <div className={"column"}>
                        <div className={"title is-4 has-text-primary is-bold"}>Likes</div>
                        {
                            likes.map((like) => (
                                <div className={"has-text-grey"}>{like}</div>
                            ))
                        }
                    </div>
                    <div className={"column"}>
                        <div className={"title is-4 has-text-danger is-bold"}>Hates</div>
                        {
                            hates.map((hate) => (
                                <div className={"has-text-grey"}>{hate}</div>
                            ))
                        }
                    </div>
                </div>
                <div className={""}>

                </div>
                <br/>
                <div className={""}>

                </div>


            </div>
        </div>
    );
}