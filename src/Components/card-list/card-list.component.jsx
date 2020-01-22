import React from "react";
import { Card } from "../card/card.component";

import "./card-styles.css";

export const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map(monster => (
            <Card
                key={monster.id}
                id={monster.id}
                name={monster.name}
                email={monster.email}
            />
        ))}
    </div>
);
