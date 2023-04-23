import { useState, useEffect } from 'react'

import { getCards } from '../../getCards'
import Card from '../Card/Card'
import { List, LoadMore } from './CardsList.styled'

const CardsList = () => {
    const [cardsArray, setCardArray] = useState([])
    const [page, setPage] = useState(1)

    console.log(cardsArray)

    useEffect(() => {
        getCards(page).then(responce => setCardArray(prevState => [...prevState, ...responce.data]))
    }, [page])

    const handleClick = () => {
        setPage(prevState => prevState + 1)
    }

    return (
        <>
            <List>
                <Card cardsList={cardsArray} />
            </List>
            <LoadMore onClick={handleClick} type='button'>Load More Cards</LoadMore>
        </>
    )
}

export default CardsList