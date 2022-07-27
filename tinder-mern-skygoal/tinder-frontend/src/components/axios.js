import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-mern-skygoal.herokuapp.com"
})

export default instance