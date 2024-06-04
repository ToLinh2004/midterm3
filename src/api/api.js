import axios from "axios";
const baseURL='https://api.github.com';
const api = axios.create({
    baseURL,
  });
const apiSearchUsers= (text) =>{
  return api.get(
    `/search/users?q=${text} `
  );
}
  const apiGetUser =(username) =>{
    return api.get(`/users/${username}`);
  };
  const apiGetUserRepos =(id) =>{
    return api.get(`/users/${id}/repos`);
  }

export {apiGetUser,apiGetUserRepos,apiSearchUsers};