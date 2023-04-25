import Card from '../Card/Card'
import { List } from './CardsList.styled'

const CardsList = ({ cardsList, isFollowing, setIsFollowing }) => {
    return (
        <>
            <List>
                <Card cardsList={cardsList} isFollowing={isFollowing} setIsFollowing={setIsFollowing} />
            </List>
        </>
    )
}

export default CardsList