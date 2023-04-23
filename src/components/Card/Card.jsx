import { useEffect, useState } from 'react'
import picture from '../../images/picture.png'
import logo from '../../images/Vector.png'
import { changeFollowersValue } from '../../getCards'
import { Item, Logo, ItemsImg, DecorateLine, DecorateAvatar, Text, ItemsButton, Avatar } from './Card.styled'

const Card = ({ cardsList }) => {
    const [isFollowing, setIsFollowing] = useState(() => {
        const savedLocalFollow = localStorage.getItem('isFollowing');
        return savedLocalFollow ? JSON.parse(savedLocalFollow) : {};
    })

    const handleClick = (userID) => {
        setIsFollowing(prevState => ({
            ...prevState,
            [userID]: !prevState[userID]
        }));

        const userToUpdate = cardsList.find(user => user.id === userID);

        if (!isFollowing[userID]) {
            userToUpdate.followers += 1
        }
        if (isFollowing[userID]) {
            userToUpdate.followers -= 1
        }

        changeFollowersValue(userID, userToUpdate.followers)
    }

    useEffect(() => {
        localStorage.setItem('isFollowing', JSON.stringify(isFollowing))
    }, [isFollowing])

    return (
        cardsList.map(({ id, tweets, followers, avatar }) =>

            <Item key={id}>
                <Logo src={logo} alt="Logo" />
                <ItemsImg>
                    <img src={picture} alt="Decorate icons" />
                </ItemsImg>
                <DecorateLine></DecorateLine>
                <DecorateAvatar>
                    <Avatar src={avatar} alt="Avatar" />
                </DecorateAvatar>

                <Text>{tweets.toLocaleString('en-US')} tweets</Text>
                <Text>{followers.toLocaleString('en-US')} followers</Text>
                <ItemsButton
                    style={!isFollowing[id] ? { backgroundColor: '#ebd8ff' } : { backgroundColor: '#5CD3A8' }}
                    onClick={() => handleClick(id)}> {!isFollowing[id] ? 'Follow' : 'Following'} </ItemsButton>
            </Item>
        )
    )
}

export default Card