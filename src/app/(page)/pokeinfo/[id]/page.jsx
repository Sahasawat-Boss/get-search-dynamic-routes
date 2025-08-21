"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function PokeInfo() {
    const params = useParams();          // { id: "pikachu" } or { id: "25" }
    const [pokeinfo, setPokeInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");

    useEffect(() => {
        if (!params?.id) return;
        setLoading(true);
        setErr("");
        (async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setPokeInfo(data);
            } catch (e) {
                setErr(String(e));
            } finally {
                setLoading(false);
            }
        })();
    }, [params?.id]);

    console.log("Poke Info:", pokeinfo);

    // Use numeric id from API for the GitHub sprite URL
    const numericId = pokeinfo?.id;
    const imgSrc = numericId
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numericId}.png`
        : null;

    return (
        <div className="p-4">
            <Link href="/" className="bg-blue-500 py-2 px-4 rounded-lg text-white">Back</Link>

            <div className="flex-center mt-10 text-start">
                <div className="shadow-md rounded-lg p-10  flex-col flex-center">
                    {loading && <p>loading ...</p>}
                    {err && <p className="text-red-600">Error: {err}</p>}
                    {!loading && !err && pokeinfo && (
                        <>
                            <h3 className="text-3xl capitalize">{pokeinfo.name}</h3>
                            <p className="text-xs my-2">Poke ID: {pokeinfo.id}</p>

                            {imgSrc ? (
                                <Image
                                    src={imgSrc}
                                    width={150}
                                    height={150}
                                    alt={pokeinfo.name}
                                />
                            ) : (
                                <p className="opacity-60">No image available</p>
                            )}
                            <div className="mt-10 flex flex-col gap-2">

                                <p>Weight: {pokeinfo.weight}</p>
                                <p>Height: {pokeinfo.height}</p>
                                <p>Species: {pokeinfo.species.name}</p>
                                <p>Base EXP: {pokeinfo.base_experience}</p>

                                <p className="mt-4 flex flex-wrap items-center gap-3">
                                    <span>Abilities:</span>
                                    {pokeinfo?.abilities?.map(({ ability }) => (
                                        <span
                                            key={ability.name}
                                            className="inline-block rounded bg-blue-100 px-2 py-0.5 text-sm capitalize"
                                        >
                                            {ability.name}
                                        </span>
                                    ))}
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <span>Types:</span>
                                    {pokeinfo?.types?.map(({ type }) => (
                                        <span
                                            key={type.name}
                                            className="inline-block rounded bg-blue-100 px-2 py-0.5 text-sm capitalize"
                                        >
                                            {type.name}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PokeInfo;
