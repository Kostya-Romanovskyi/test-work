import axios from "axios";

export async function getCards(page) {
  try {
    const response = await axios.get(
      `https://644800bd7bb84f5a3e4fa83c.mockapi.io/user?page=${page}&limit=3`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function changeFollowersValue(id, followers, isFollowing) {
  axios
    .put(`https://644800bd7bb84f5a3e4fa83c.mockapi.io/user/${id}`, {
      followers: followers,
      isFollowing: isFollowing,
    })
    .catch((error) => {
      console.error(error);
    });
}
