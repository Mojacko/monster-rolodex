import React from "react";
import "../card/card.styles.css";
/* 
export default props => {
    return (
        <div className="card-container">
            <h1>{props.monster.name}</h1>
        </div>
    );
};
 */

export const Card = ({ name, id, email }) => (
    <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set2`} alt="" />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);
