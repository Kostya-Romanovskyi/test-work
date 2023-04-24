import { Outlet, useLocation } from "react-router-dom"
import { LinkToTweets, NavContainer, HeaderContainer } from "./Header.styled"

const Header = () => {
    const location = useLocation()
    return (
        <>
            <HeaderContainer>
                <NavContainer>
                    {location.pathname === '/tweets' ?
                        <LinkToTweets to='/'>Back to home</LinkToTweets> :
                        <LinkToTweets to='/tweets'>Tweets</LinkToTweets>}
                </NavContainer>
            </HeaderContainer>
            <Outlet />
        </>
    )
}
export default Header