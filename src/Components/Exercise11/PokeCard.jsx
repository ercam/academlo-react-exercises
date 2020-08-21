import React from 'react'

const PokeCard = ({pokemon}) => {
    return (
        <div className="poke-card">
            <h2 className="name">{pokemon.name}</h2>
            <img className="sprite" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
            <ul className="info">
                <li className="types">Type(s): {pokemon.types.map(type => <span key={type.slot}>{type.type.name}</span>)}</li>
                {pokemon.stats.map((stat, i) => {
                    return <li className="stat" key={i}>{stat.stat.name}: {stat.base_stat}</li>
                })}
            </ul>
        </div>
    )
}

export default PokeCard
