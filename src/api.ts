

const main_url: string = "https://rickandmortyapi.com/api/character";

export async function GetCharacters(page: number = 1) : Promise<any>
{
    const data = await (await fetch(`${main_url}?page=${page}`)).json();
    return data;
}

