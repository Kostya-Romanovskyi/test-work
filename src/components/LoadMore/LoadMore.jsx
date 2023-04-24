import { LoadMoreButton } from "./LoadMore.styled"

const LoadMore = ({ changeFollowers }) => {
    return <LoadMoreButton onClick={changeFollowers} type='button'>Load More Cards</LoadMoreButton>
}
export default LoadMore