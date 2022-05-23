import React from 'react'

export const Character = ({ character }) => {
    console.log("character", character)

    const firstVoiceActor = character.voice_actors[0] ?? {}

    return (
        <div className='bg-[#152232]/80 flex w-full h-[105px] rounded-md'>
            <div className="flex-1 grid grid-cols-[80px_auto] gap-3">
                <div className="bg-center bg-cover bg-no-repeat overflow-hidden h-full w-full"
                    style={{ backgroundImage: `url(${character.character.images.jpg.image_url})` }}>
                </div>
                <div className="flex justify-evenly flex-col">
                    <h3 className="text-[15px] md:text-[11px] text-white opacity-90 font-bold">
                        {character.character.name}
                    </h3>
                    <p className="text-[12px] md:text-[10px] text-slate-300">
                        {character.role}
                    </p>
                </div>
            </div>
            <div className="flex-1 grid grid-cols-[auto_80px] gap-3">
                <div className="flex justify-evenly flex-col items-end">
                    <h3 className="text-[15px] md:text-[11px] font-bold text-white opacity-90">
                        {firstVoiceActor?.person?.name}
                    </h3>
                    <p className="text-[12px] md:text-[10px] text-slate-300">{firstVoiceActor?.language}</p>
                </div>
                <div className="bg-center bg-cover bg-no-repeat overflow-hidden h-full w-full"
                    style={{ backgroundImage: `url(${firstVoiceActor?.person?.images.jpg.image_url})` }}>
                </div>
            </div>
        </div>
    )
}
