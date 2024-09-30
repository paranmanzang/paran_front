import api from "../axios"

const chatsAPI = () => {
  getChat: (id: string) => api.get(`process.env.NEXT_PUBLIC_CHAT_URL`),
  createChat: (chatData: any) => api.post('process.env.NEXT_PUBLIC_CHAT_URL', chatData),
  updateChat: (id: string, chatData: any) => api.put(`NEXT_PUBLIC_CHAT_URL + ${id}`, chatData),
  deleteChat: (id: string) => api.delete(`NEXT_PUBLIC_CHAT_URL + ${id}`),
}

export default chatsAPI;
