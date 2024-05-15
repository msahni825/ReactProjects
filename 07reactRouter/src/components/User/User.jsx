import React from "react";
import { useParams } from 'react-router-dom';

export default function User () {
    const {id} = useParams();
    return (
        <div className=' text-center bg-gray-600 text-white text-3xl p-4'>User: {id}</div>
    )
}