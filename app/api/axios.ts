import axios from "axios";

const fetchUrl = axios.create({
  baseUrl: '/api',
  params: {
    api_key: "필요시 ",
    language: 'ko-KR',
  },
});

export default fetchUrl;