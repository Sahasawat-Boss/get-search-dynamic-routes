"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';

function PokeData() {

    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(false);

    // console.log
    console.log("Data from state:", poke)

    useEffect(() => {
        setLoading(true);
        const fetchPokeData = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon");
                const pokeData = await response.json();

                // setPoke(pokeData);
                setPoke(pokeData.results);
                // console.log(pokeData)
                // console.log(pokeData.results)
            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchPokeData()
    }, [])


    return (
        <div className='container text-center mx-auto'>
            {loading ? (
                <p>Loading Data ...</p>
            ) : (
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 overflow-hidden'>
                    {poke.map((val, index) => (
                        <Link key={index + 1} href={`/pokeinfo/[id]`} as={`/pokeinfo/${index + 1}`}>
                            <div key={index} className='poke-card-css'>
                                <div>
                                    <h3 className='text-lg font-semibold'>{val.name}</h3>
                                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                                        width={150} height={150} alt={val.name} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default PokeData