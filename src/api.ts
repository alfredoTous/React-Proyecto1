
const main_url: string = "https://rickandmortyapi.com/api/character";

export async function GetCharacters(page: number) {
    try {
        let response = await fetch(`${main_url}?page=${page}`);
        let data     = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

