import recipes from "./recipes.json"
import { useState } from 'react'
import Image from 'next/image'

export default function Recipes() {
    return (
        <div className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400">
            <h1 className="text-2xl sm:text-4xl tracking-wide text-center pt-6 pb-10 sm:pb-12 justify-center font-light">Bem vindo a página de Receitas</h1>
            <div className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 space-x-2">
                <ul>
                    <li className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 flex flex-col items-center">
                    <p className="mb-12 font-bold text-xl">{recipes[0].name}</p>
                    <Image
                    src={recipes[0].image}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    />
                    </li>
                    <li className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 flex flex-col items-center -mt-80">
                    <p className="mb-12 font-bold text-xl">{recipes[1].name}</p>
                    <Image
                    src={recipes[1].image}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    />
                    </li>
                    <li className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 flex flex-col items-center -mt-80">
                    <p className="mb-12 font-bold text-xl">{recipes[2].name}</p>
                    <Image
                    src={recipes[2].image}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    />
                    </li>
                    <li className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 flex flex-col items-center -mt-80">
                    <p className="mb-12 font-bold text-xl">{recipes[3].name}</p>
                    <Image
                    src={recipes[3].image}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    />
                    </li>
                    <li className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 flex flex-col items-center -mt-80">
                        <p className="mb-12 font-bold text-xl">{recipes[4].name}</p>
                        <Image
                        src={recipes[4].image}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        />
                    </li> 
                    <li className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 flex flex-col items-center -mt-80">
                        <p className="mb-12 font-bold text-xl">{recipes[5].name}</p>
                        <Image
                        src={recipes[5].image}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        />
                    </li>
                    <li className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 flex flex-col items-center -mt-80">
                        <p className="mb-12 font-bold text-xl">{recipes[6].name}</p>
                        <Image
                        src={recipes[6].image}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    </li>
                    <li className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 flex flex-col items-center -mt-80">
                        <p className="mb-12 font-bold text-xl">{recipes[7].name}</p>
                        <Image
                        src={recipes[7].image}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        />
                    </li>
                </ul>
            </div>
      </div>
    );
  }
  