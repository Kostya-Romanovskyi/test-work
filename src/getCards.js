import axios from "axios";

export async function getCards(page) {
  try {
    const response = await axios.get(
      `https://6443d0fe90738aa7c0783f3c.mockapi.io/user?page=${page}&limit=3`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function changeFollowersValue(id, followers) {
  axios
    .put(`https://6443d0fe90738aa7c0783f3c.mockapi.io/user/${id}`, {
      followers: followers,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
