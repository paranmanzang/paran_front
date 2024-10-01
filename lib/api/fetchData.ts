import axios from 'axios';

//url 변경 있을 것.
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async (tabName: string) => {
  let endpoint = '';
  switch (tabName) {
    case 'Groups':
      endpoint = '/groups';
      break;
    case 'Rooms':
      endpoint = '/rooms';
      break;
    case 'Books':
      endpoint = '/books';
      break;
    case 'Chats':
      endpoint = '/chats';
      break;
    case 'Users':
      endpoint = '/users';
      break;
    default:
      throw new Error('Invalid tab name');
  }

  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};