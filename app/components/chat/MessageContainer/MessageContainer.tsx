import "./MessageContainer.css";

const MessageContainer = () => {
        return (
          <div className="message-container">
              <div className="system-message-container">
                <p className="system-message">내용1</p>
              </div>
              <div className="my-message-container">
                <div className="my-message">내용2</div>
              </div>
              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="profile-image"
                 />
                <div className="your-message">내용3</div>
              </div>
          </div>
        )
};

export default MessageContainer;
