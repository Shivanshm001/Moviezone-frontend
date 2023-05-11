import React from "react";
import { AiFillStar } from 'react-icons/ai';


export default function Rating({ votes }) {
    const rating = []
    for (let i = 0; i < votes; i++)
        rating.push(<AiFillStar style={{ color: "yellow" }} key={i}/>)
    return rating;
}