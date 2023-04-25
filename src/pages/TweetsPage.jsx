import { useState, useEffect } from "react"
import CardsList from "../components/CardsList/CardsList"
import { getCards } from "../getCards"
import LoadMore from "../components/LoadMore/LoadMore"
import { ColorRing } from "react-loader-spinner"
import Select from 'react-select'

const options = [
    { value: 'show all', label: 'All' },
    { value: 'show follow', label: 'Follow' },
    { value: 'show following', label: 'Following' }
]


const TweetsPage = () => {
    const [cardsArray, setCardArray] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [isFollowing, setIsFollowing] = useState()
    const [filterFollow, setFilterFollow] = useState([])
    const [selectValue, setSelectValue] = useState()




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

    useEffect(() => {
        setFilterFollow(cardsArray)
    }, [cardsArray])

    const filterCards = (selectedOption) => {
        if (selectedOption.value === 'show all') {
            setFilterFollow(cardsArray);
            setSelectValue(selectedOption.value);
        }

        if (selectedOption.value === 'show follow') {
            const filterFollow = cardsArray.filter(({ isFollowing }) => isFollowing === false);
            setFilterFollow(filterFollow);
            setSelectValue(selectedOption.value);
        }

        if (selectedOption.value === 'show following') {
            const filterFollowing = cardsArray.filter(({ isFollowing }) => isFollowing === true);
            setFilterFollow(filterFollowing);
            setSelectValue(selectedOption.value);
        }
    }

    return (
        <>
            <Select options={options}
                onChange={filterCards}
                defaultValue={options.find(option => option.value === 'show all')} />

            {cardsArray.length > 0 && <>
                <CardsList cardsList={filterFollow} isFollowing={isFollowing} setIsFollowing={setIsFollowing} />

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

                {selectValue === 'show follow' || selectValue === 'show following' || <LoadMore changeFollowers={handleClick} />}
            </>
            }
        </>
    )
}
export default TweetsPage

