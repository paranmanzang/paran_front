const getEnvVariable = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

const requests = {
  fetRegister: '/register',
  fetchLogin: "/login",
  fetchLogout: "/logout",
  fetchUsers: getEnvVariable('NEXT_PUBLIC_USER_URL'),
  fetchRooms: getEnvVariable('NEXT_PUBLIC_ROOM_URL'),
  fetchFiles: getEnvVariable('NEXT_PUBLIC_FILE_URL'),
  fetchChats: getEnvVariable('NEXT_PUBLIC_CHAT_URL'),
  fetchGroups: getEnvVariable('NEXT_PUBLIC_GROUP_URL'),
  fetchComments: getEnvVariable('NEXT_PUBLIC_COMMENT_URL'),
  fetchOAuth: getEnvVariable('NEXT_PUBLIC_OAUTH_URL'),
}

export default requests;
