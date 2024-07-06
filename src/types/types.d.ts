interface ILocation {
    name: string
}

export interface ICharacter {
    image: string,
    name: string,
    status: string,
    location: ILocation,
}

export interface CharactersProp {
    character: ICharacter
}