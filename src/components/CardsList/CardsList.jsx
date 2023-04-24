import Card from '../Card/Card'
import { List } from './CardsList.styled'

const CardsList = ({ cardsList }) => {
    return (
        <>
            <List>
                <Card cardsList={cardsList} />
            </List>
        </>
    )
}

export default CardsList