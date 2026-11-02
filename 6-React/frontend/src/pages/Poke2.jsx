import { useEffect, useState } from "react";
import PokeCard from "@components/PokeCard";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const Poke2 = () => {
    const [pokeData, setPokeData] = useState(null);

    useEffect(() => {
        const fetchPokemon = async (id) => {
            try {
                const response = await fetch(`${BASE_URL}${id}`);
                const data = await response.json();
                setPokeData(data);
            } catch (error) {
                console.error(`Error al cargar el pokemon: ${error}`);
            }
        };

        fetchPokemon(1);
    }, []);

    if (!pokeData) {
        return <h2>Cargando Pokemon</h2>;
    }

    return (
        <>
            <PokeCard pokeData={pokeData} />
        </>
    );
};

export default Poke2;