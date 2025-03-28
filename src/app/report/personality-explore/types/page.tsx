import { personalityTypes } from "@/lib/data";
import Image from "next/image";


export default function PersonalityTypesPage() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col w-full">
        <div className="p-6">
          <h2 className="mb-6 text-xl font-bold text-blue-700">Personality Types</h2>

          <div className="flex flex-wrap p-4 items-center justify-evenly">
            {personalityTypes.map((type) => (
              <div key={type.id} className=" overflow-hidden lg:w-[22%]">
                <div className="bg-blue-50 p-4 flex justify-center rounded-lg">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.name}
                    width={80}
                    height={80}
                    className=""
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-medium">{type.name}</h3>
                    <span className="rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      {type.code}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
