import React from "react";

export default function Cards(props){

    return(
        <>
        <div className="card-container">
        <div className="image-container">
            <img src={props.imageUrl} className="image" />
        </div>
        <div className="trip-info">
            <div className="trip-desc">
            <i className="locator" 
               style={{color: "#F55A5A"}}
               class="fa fa-map-marker"
               aria-hidden="true"
            ></i>
            <small><p style={{letterSpacing: ".17em" }}>{props.location}</p></small>
            <a style={{color: "#918E9B"}} href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
        
        <div className="trip-details">
            <h1>{props.title}</h1>
            <h6>{props.startDate} - {props.endDate}</h6>
            <p className="details">{props.description}</p>
        </div>
        </div>
       
        </div>
            </>
    )

}


// title: "Sydney Opera House",
// location: "Australia",
// googleMapsUrl: "https://goo.gl/maps/LfUZx4NJk5zX3czo7",
// startDate: "27 May, 2021",
// endDate: "08 June, 2021",
// description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"