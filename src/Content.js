import React from "react"
import icon from "./pin.png"

export function Content(props) {

    return (
        <section>
            <img src={props.imageUrl} className="visited-place-photo" alt=""/>
            <div className="infos">
                <div className="local">
                    <div className="icon-country">
                        <img src={icon} className="pin-icon" alt="" />
                        <p>{props.location}</p>
                    </div>
                    <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <h2>{props.title}</h2>
                <p className="start-end">{props.startDate} - {props.endDate}</p>
                <p className="desc">{props.description}</p>
            </div>
        </section>
    )
}
