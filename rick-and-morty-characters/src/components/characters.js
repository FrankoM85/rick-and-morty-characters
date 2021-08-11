import React, {useState} from 'react';
import { useCharacters } from "../api/useData";
import './characters.css';

function Characters () {

    const [page, setPage] = useState(1);
    function pagingUp() {
        if (page === 34) {
            setPage(1)
        } else {
            setPage(page +1);
        }
    }
    function pagingDown() {
        if (page === 1) {
            setPage(34)
        } else {
            setPage(page -1);
        }
    }

    function func2() {
        document.querySelectorAll(".btnmore").value="Less";
    }

    const characters = useCharacters(page).results;


    if(characters) {

        return (
            <div className="characters-container">
                <div className="characters">
                    {characters.map((characterDetails)=>{
                        return (
                            <div key={characterDetails.id} className="character-card">
                                <img alt={characterDetails.name} className="character-img" src={characterDetails.image}></img>
                                <section>
                                <h1 className="character-name">{characterDetails.name}</h1>
                                <p className="character-species">Species: {characterDetails.species}</p>
                                </section>
                                <button type="button" value="More" className="btnmore" onClick={(e) => {e.target.parentNode.lastElementChild.classList.toggle("hide"); func2();}}>More</button>
                                <div className="moreInfo hide">
                                    <p className="character-status">Status: {characterDetails.status}</p>
                                    <p className="character-gender">Gender: {characterDetails.gender}</p>
                                    <p>Origin: {characterDetails.origin.name}</p>
                                    <p>Current location: {characterDetails.location.name}</p>
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

export default Characters;