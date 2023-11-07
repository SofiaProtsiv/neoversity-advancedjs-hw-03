import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "live_LecpBk7SVprhXxB2yI8Z1svYT6H901SLdzwzjjw4NXEc2SRd8du2kJN22UTCoL4o";

export async function fetchBreeds() {
  const response = await axios
    .get("https://api.thecatapi.com/v1/breeds")

  return response.data;
}

export async function fetchCatByBreed(breedId) {
  const response = await axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)

  return response.data;
}
