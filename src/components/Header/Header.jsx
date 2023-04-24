import { Outlet } from "react-router-dom"
import { LinkToTweets, NavContainer, HeaderContainer } from "./Header.styled"

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <NavContainer>
                    <LinkToTweets to='/tweets'>Tweets</LinkToTweets>
                </NavContainer>
            </HeaderContainer>
            <Outlet />
        </>
    )
}
export default Header