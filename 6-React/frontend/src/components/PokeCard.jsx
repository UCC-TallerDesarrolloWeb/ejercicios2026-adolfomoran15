PokeCard
const PokeCard = ({pokeData}) => {
    return(
        <>
            <img src={pokeData.sprites.front_default} alt={pokeData.name}/>
            <p>
                Nombre: {pokeData.name}
            </p>
            <p>
                Numero de pokedex: {pokeData.id}
            </p>
        </>
    )
}

export default PokeCard;