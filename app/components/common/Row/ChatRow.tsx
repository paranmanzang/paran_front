<<<<<<< HEAD
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "@/lib/store";
import ChatCard from './ChatCard';
import fetchChats from "@/app/api/requests";
=======
// "use client";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from "@/lib/store";
// import ChatCard from './ChatCard';
// import requests from "@/app/api/requests";
>>>>>>> 7bb3ef08e1d0d7a7cb4a9411338324dcd248443a

// interface ChatRowProps {
//   active: boolean;
//   onSelect: () => void;
// }

// const ChatRow = ({ active, onSelect }:ChatRowProps) => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { chats, loading, error } = useSelector((state: RootState) => state.chat);

<<<<<<< HEAD
  useEffect(() => {
    dispatch(fetchChats);
  }, [dispatch]);
=======
//   useEffect(() => {
//     dispatch(requests.fetchChats);
//   }, [dispatch]);
>>>>>>> 7bb3ef08e1d0d7a7cb4a9411338324dcd248443a

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="grid grid-cols-1 gap-4">
//       {chats.map((chat) => (
//         <ChatCard key={chat.id} chat={chat} active={active} onSelect={onSelect} />
//       ))}
//     </div>
//   );
// };

// export default ChatRow;