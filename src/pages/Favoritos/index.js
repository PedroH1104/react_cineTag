import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import React from 'react'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import { useFavoritoContext } from 'contextos/Favoritos'

export default function Favoritos() {

  const { favorito } = useFavoritoContext();

  return (
    <>  
        <Banner imagem="favoritos"></Banner>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav) => {
              return <Card {...fav} key={fav.id}></Card>
            })}
        </section>
    </>
  )
}
