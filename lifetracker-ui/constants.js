const PRODUCTION_API_BASE_URL = "https://lt365.herokuapp.com";
const DEVELOPMENT_API_BASE_URL = "https://lt365.herokuapp.com";
const API_BASE_URL = process.env.NODE_ENV === "production" ? PRODUCTION_API_BASE_URL : DEVELOPMENT_API_BASE_URL;
//Heroku backend deployed but not working. Link : https://francophone-zed-87469.herokuapp.com/

export default API_BASE_URL 