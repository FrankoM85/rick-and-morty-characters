import React, {useState} from 'react';
import { useLocations } from "../api/useData";
import './locations.css';

function Locations () {

    const [page, setPage] = useState(1);
    function pagingUp() {
        if (page === 6) {
            setPage(1)
        } else {
            setPage(page +1);
        }
    }
    function pagingDown() {
        if (page === 1) {
            setPage(6)
        } else {
            setPage(page -1);
        }
    }
    
    const locations = useLocations(page).results;


    if(locations) {

        return (
            <div className="locations-container">
                <div className="locations">
                    {locations.map((locationDetails)=>{
                        return (
                            <div key={locationDetails.id} className="location-card">
                                <section>
                                <h1 className="location-name">{locationDetails.name}</h1>
                                <p className="location-type">Type: {locationDetails.type}</p>
                                </section>
                                <button className='btnmore' onClick={(e) => {e.target.parentNode.lastElementChild.classList.toggle("hide")}}>More</button>
                                <div className="moreInfo hide">
                                    <p className="location-dimension">Dimension: {locationDetails.dimension}</p>
                                    <p className="location-created">Created: {locationDetails.created}</p>
                                </div>
                                
                            </div>
               ) 
            })}
                </div>
                 <div className="page-btn-container">
                <button className="page-btn" onClick={pagingDown}><i class="fas fa-angle-left"></i></button>
                <p className="paginPage">- {page} -</p>
                <button className="page-btn" onClick={pagingUp}><i class="fas fa-angle-right"></i></button>
                </div>
            </div>
    )
} else {
    return (<h1>Loading</h1>)
}
}

export default Locations;