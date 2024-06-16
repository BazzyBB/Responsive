import React from "react";

export default function MobileBlog(props){
    return(
        <div className="mobile-blog">
            <img src={`${props.source}`}/>
            <h5 > {props.date} </h5>
            <h2> {props.blog} </h2>
            <p> {props.desc} </p>
        </div>
     )
 }