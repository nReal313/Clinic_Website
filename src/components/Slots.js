import React, { useState, useContext, useEffect } from 'react'
import { appContext } from '../appContext';

export default function Slots(props) {
    // let date = new Date();


    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("/slots")
            .then(response => response.json())
            .then(data => setData(data), console.log(data))
            .catch(error => console.error('errorrrr:', error));

        console.log(data);
    }, [])


    const rounf = (num, decimalPlaces) => {
        const multiplier = 10 ** decimalPlaces;
        let a = Math.round(num * multiplier);
        let flag = 0;
        if (a % 10 === 0) flag = 1;
        let final = "" + (a / multiplier);
        // console.log(final, a, flag);
        return flag === 1 ? final + "0" : final;
    };
    // const findAvailableSlots = (date) => {

    //     return {};
    // }
    return (
        <div>
            {
                data.map((e) => {
                    return (<div className="container-md my-4">
                        <h4 className='lead'><strong>{e.date}</strong></h4>
                        {
                            e.slots.map((element) => {
                                return (
                                    <button className="btn btn-md btn-success my-1 mx-2 p-3">
                                        {element[0] < 12 ? element[0] + "AM" : element[0] - '12' + "PM"}
                                        -{element[1] < 12 ? element[1] + "AM" : rounf(parseFloat(element[1] - '12'), 2) + "PM"}</button>
                                )
                            })
                        }
                    </div>
                    )
                })
            }
        </div>
    )
}
