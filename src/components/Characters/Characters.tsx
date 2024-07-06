import { CharactersProp } from "../../types/types"

const Characters: React.FC<CharactersProp> = ({ character }) => {
  let status = ''
  switch (character.status) {
    case 'Alive':
      status = "Vivo 🟢"
      break;
    case 'Dead':
      status = "Muerto 🔴"
      break;
    default:
      status = "Desconocido"
      break;
  }

  return (
    <div className="w-full h-full flex flex-col items-center rounded-[20px] bg-white text-sm py-[6px]">
      <img className="w-[215px] h-[164px] rounded-2xl" src={character.image} alt={character.name} />
      <div className="flex flex-col w-[90%] pt-[10px]">
      <div className="truncate">
        <span className="manrope-300 text-[#ABABAB]">Nombre:</span> <span className="manrope-600 truncate">{character.name}</span>
      </div>
      <div className="truncate my-[10px]">
        <span className="manrope-300 text-[#ABABAB]">Estado:</span> <span className="manrope-600 truncate">{status}</span>
      </div>
      <div className="truncate">
        <span className="manrope-300 text-[#ABABAB]">Localización:</span> <span className="manrope-600 truncate">{character.location.name}</span>
      </div>
      </div>
    </div>
  )
}

export default Characters;
