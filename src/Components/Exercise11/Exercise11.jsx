import React, { useState, useEffect } from 'react'
import PokeCard from './PokeCard'
import { FormControl, InputLabel, Select} from '@material-ui/core'
import './styles.css'

const Exercise11 = () => {
    const [pokes, setPokes] = useState([]);
    const [types, setTypes] = useState([]);
    const [load, setLoad] = useState('true');
    const [nameFilter, setNameFilter] = useState("");
    const [filteredPokes, setFilteredPokes] = useState([])
    const [typeFilter, setTypeFilter] = useState("");
    

    useEffect(() => {
        const fetchData = async () => {
            const arrPokes = [];
            try{
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50');
                const data = await response.json();
                await data.results.forEach(async (item) => {
                    try{
                        const response = await fetch(item.url);
                        const data = await response.json();
                        arrPokes.push(data);
                    } catch(error) {
                        console.log(error)
                    }
                })  
                setPokes(arrPokes);
            } catch(error) {
                console.log(error)
            }
        }

        fetchData();

        const arrTypes = [];
        fetch("https://pokeapi.co/api/v2/type/")
        .then(response => response.json())
        .then(data => data.results.forEach(type => arrTypes.push(type.name)))
        .catch(error => console.log(error));
        setTypes(arrTypes)
    }, []);

    setTimeout(() => {
        setLoad(false);
    }, 2000);

    const filterByName = () => {
        let filteredPokeArray = [];
        filteredPokeArray = pokes.filter(poke => poke.name.toUpperCase().includes(nameFilter.toUpperCase()));
        setFilteredPokes(filteredPokeArray);
    } 

    const filterByType = (event) => {
        setTypeFilter(event.target.value);
        let filteredPokeArray = [];
        filteredPokeArray = pokes.filter(poke => poke.types.map(item => item.type.name).includes(event.target.value));
        setFilteredPokes(filteredPokeArray);
    }

    return (
        <div className="pokedex">
            <div className="filters-container">
                <input 
                    className="name-filter" 
                    type="search"
                    placeholder="Search by name..."
                    value={nameFilter}
                    onChange={(event) => setNameFilter(event.target.value)}
                    onKeyUp={filterByName}
                />
            
                <FormControl 
                    variant="filled"
                    className="type-filter"
                >
                    <InputLabel htmlFor="type-select">Type</InputLabel>
                    <Select
                        native
                        value={typeFilter}
                        onChange={filterByType}
                        inputProps={{
                            name: 'type',
                            id: 'type-select',
                          }}
                    >
                        <option aria-label="None" value="" />
                        {types.map((type, i) => <option value={type} key={i}>{type}</option>)}
                    </Select>
                </FormControl>
            </div>
            <div className="poke-list">
                { load ? (<p>Loading...</p>) : 
                !nameFilter && !typeFilter ?
                (
                    pokes.map(pokemon => <PokeCard pokemon={pokemon} key={pokemon.id}/>)
                ) :
                (
                    filteredPokes.map(pokemon => <PokeCard pokemon={pokemon} key={pokemon.id}/>)
                )
                }
            </div>
        </div>
    )
}

export default Exercise11


