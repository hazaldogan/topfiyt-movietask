import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjI0YTJiMThmNGI1NTkzNjI3ZDQzMmQxZjc4YjU1NSIsInN1YiI6IjY2MmY3NGEzYTE5OWE2MDEyMjcyZTVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ptcb4Q8xjXD739ugVBm_egwO6xUQD17EcC9To377fKI",
    },
  });
};
