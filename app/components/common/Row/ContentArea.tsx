import React from 'react';
import GroupRow from "./GroupRow";
import RoomRow from "./RoomRow";
import BookRow from "./BookRow";
import ChatRow from "./ChatRow";

interface ContentAreaProps {
  activeTab: string;
}

const ContentArea = ({ activeTab }:ContentAreaProps) => {
  const renderActiveContent = () => {
    switch (activeTab) {
      case "Groups":
        return <GroupRow active={true} onSelect={() => {}} />;
      case "Rooms":
        return <RoomRow active={true} onSelect={() => {}} />;
      case "Books":
        return <BookRow active={true} onSelect={() => {}}/>;
      case "Chats":
        return <ChatRow active={true} onSelect={() => {}} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-4 grid grid-cols-4 gap-4 md:grid-cols-3">
        {renderActiveContent()}
      </div>
    </div>
  );
};

export default ContentArea;