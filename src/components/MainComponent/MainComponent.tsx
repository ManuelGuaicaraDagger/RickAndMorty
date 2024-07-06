import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { ICharacter } from "../../types/types";
import Characters from "../Characters/Characters";
import glass from "../../assets/glass.png"

const MainComponent = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchCharacters = useCallback(async (query = "") => {
    try {
      const url = query
        ? `https://rickandmortyapi.com/api/character/?name=${query}`
        : `https://rickandmortyapi.com/api/character`;
      const response = await axios.get(url);
      setCharacters(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const debouncedFetchCharacters = useCallback(
    _.debounce((query: string) => {
      fetchCharacters(query);
    }, 500),
    [fetchCharacters]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedFetchCharacters(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCharacters(searchTerm);
  };

  return (
    <main className="flex flex-col justify-center items-center w-2/3">
      <form onSubmit={handleSubmit} className="my-[50px] flex">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 mr-2 manrope-400 w-[827px] h-[40px] rounded-2xl bg-[#F5F5F5] outline-none"
          placeholder="Nombre del personaje"
        />
        <button type="submit" className="bg-[#27087F] flex justify-around items-center text-white p-2 rounded-2xl w-[126px] h-[40px] manrope-700">
          Buscar <img src={glass} alt="Buscar" />
        </button>
      </form>
      <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
        {characters.map((character: ICharacter) => (
          <div key={character.name} className="w-[229px] h-[267px] m-[24px]">
            <Characters character={character} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
