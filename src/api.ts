

const main_url: string = "https://rickandmortyapi.com/api/character";

export async function GetCharacters(page: number) {
    const response = await fetch(`${main_url}?page=${page}`);

    if (!response.ok) {
        throw new Error(`Fetch to ?page=${page} failed`);
    }

    return await response.json();
}

