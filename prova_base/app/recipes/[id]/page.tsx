import Link from "next/link";
import Image from "next/image";
import recipes from "../../recipes/recipes.json"

export default function Page({ params }: { params: { id: string } }) {
    return ( 
    <div className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400">
      <div className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 space-x-2">
        <ul>
            <li className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400 flex flex-col items-center">
              <p className="mb-12 mt-24 font-bold text-xl">{recipes[parseInt(params.id)].name}</p>
              <Image
                src={recipes[parseInt(params.id)].image}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </li>
        </ul>
      </div>
    </div>
    )

}
