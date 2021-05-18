import React, { useEffect, useState } from 'react'
import './covid.css';


const Covid = () => {
    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setdata(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <h2 className="center">LIVE COVID CASES</h2>
            <h2 className="center">LIVE</h2>
            
                <div className="flex-box" >
                    <ul>
                        <div>
                            <li className='card'>
                                <div className="card-header">
                                    <p className='card-content'>Active Cases: {data.active}</p>
                                </div>
                            </li>
                        </div>
                        <div>
                            <li className='card'>
                                <div className="card-header">
                                    <p className='card-content'>Confirmed Cases: {data.confirmed}</p>
                                </div>
                            </li>
                        </div>
                        <div>
                            <li className='card'>
                                <div className="card-header">
                                    <p className='card-content'>Death Cases: {data.deaths}</p>
                                </div>
                            </li>
                        </div>
                        <div>
                            <li className='card'>
                                <div className="card-header">
                                    <p className='card-content'>Recovered Cases: {data.recovered}</p>
                                </div>
                            </li>
                        </div>
                        <div>
                            <p>Data Updated at: {data.lastupdatedtime}</p>
                        </div>

                    </ul>
                </div>
            

        </>
    )
}
export default Covid
