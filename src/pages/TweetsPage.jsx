import { useState, useEffect } from "react"
import CardsList from "../components/CardsList/CardsList"
import { getCards } from "../getCards"
import LoadMore from "../components/LoadMore/LoadMore"
import { ColorRing } from "react-loader-spinner"

const TweetsPage = () => {
    const [cardsArray, setCardArray] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const onGetCards = async () => {
            setLoading(true)
            await getCards(page).then(responce => setCardArray(prevState => [...prevState, ...responce.data]))
            setLoading(false)
        }
        onGetCards()
    }, [page])

    const handleClick = () => {
        setPage(prevState => prevState + 1)
    }

    return (
        <>
            {cardsArray.length > 0 && <>
                <CardsList cardsList={cardsArray} />

                {loading &&
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ColorRing
                            visible={true}
                            height="50"
                            width="50"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}

                        />
                    </div>
                }

                <LoadMore changeFollowers={handleClick} />
            </>
            }
        </>
    )
}
export default TweetsPage

