import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{favorito, setFavorito}}
        >
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito){
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);        // retonra true se achar um item com o mesmo id que o novoFavorito
        let novaLista = [...favorito];                                                      // cria uma lista com os mesmos elementos presentes em favorito

        if (!favoritoRepetido){                                                             // se o elemento não for repetido
            novaLista.push(novoFavorito);                                                   // adiciona o elemento na novaLista
            return setFavorito(novaLista);                                                  // seta o favorito como a novaLista e não lê os códigos a seguir
        }

        // novaLista.splice(novaLista.indexOf(novoFavorito), 1);                            // splice of tira algum elemento dentro da lista que tenha o valor do novoFavorito, e vai remover 1
        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);                   // filter vai criar uma nova lista com os elementos que tenha o id diferente do novoFavorito.id, para remover se já existir
        return setFavorito(novaLista);                                                      // vai ter perdido o item lá dentro
        
    }

    return {
        favorito,
        adicionarFavorito
    }        
}
    
