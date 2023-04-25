import { useEffect, useState } from 'react'
import picture from '../../images/picture.png'
import logo from '../../images/Vector.png'
import { changeFollowersValue } from '../../getCards'
import { Item, Logo, ItemsImg, DecorateLine, DecorateAvatar, Text, ItemsButton, Avatar } from './Card.styled'

const Card = ({ cardsList, isFollowing, setIsFollowing }) => {

    useEffect(() => {
        const updatedCardsArray = cardsList.map(card => ({ ...card, isFollowing: card.isFollowing }));
        const isFollowingObj = updatedCardsArray.reduce((obj, card) => {
            obj[card.id] = card.isFollowing;
            return obj;
        }, {});

        setIsFollowing(prevState => ({
            ...prevState, ...isFollowingObj
        }));
    }, [cardsList, setIsFollowing])

    const handleClick = (userID) => {
        setIsFollowing(prevState => ({
            ...prevState, [userID]: !prevState[userID]
        }));

        const userToUpdate = cardsList.find(user => user.id === userID);

        console.log(isFollowing[userID])

        if (!isFollowing[userID]) {
            userToUpdate.followers += 1
            userToUpdate.isFollowing = true

        } else {
            userToUpdate.followers -= 1
            userToUpdate.isFollowing = false
        }

        changeFollowersValue(userID, userToUpdate.followers, userToUpdate.isFollowing)
    }

    useEffect(() => {
        localStorage.setItem('isFollowing', JSON.stringify(isFollowing))
    }, [isFollowing])

    return (
        cardsList.map(({ id, tweets, followers, avatar, isFollowing }) =>

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
                    style={!isFollowing ? { backgroundColor: '#ebd8ff' } : { backgroundColor: '#5CD3A8' }}
                    onClick={() => handleClick(id)}> {!isFollowing ? 'Follow' : 'Following'} </ItemsButton>
            </Item>
        )
    )
}

export default Card