import { log } from "../common/utilities";

function pokemon() {
    const state = {
        pokemon: []
    }

    const handleFetch = async (url) => {
        try {
            const result = await fetch(url)
                .then((response) => {
                    const { status } = response;

                    if (status !== 200) {
                        log('something went wrong', status);
                    } else {
                        return response.json();
                    }
                })
                .catch(error => log(error));

            return result;
        } catch (error) {
            log(error);
        }
    }

    const render = async () => {
        log("\n[fetch]")

        const response = await handleFetch("https://pokeapi.co/api/v2/pokemon/");

        const { count, results, next } = response;

        if (results) {
            if (results.length > 0) {
                state.pokemon = results;

                log(state.pokemon);
            }
        }
    }

    const main = () => {
        render();
    }

    main();
}

export { pokemon };