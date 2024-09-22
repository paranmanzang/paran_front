import "./MessageContainer.css";

const MessageContainer = () => {
        return (
          <div className="message-container py-10 px-20 mb-6">
            {/* 상대방 메세지  -  your message*/}
            {/* 내 메세지 - my-message */}
            {/* 참여, 나감 알림 메세지 -system message */}
              <div className="system-message-container">
                <p className="system-message"> '{'user'}' 님이 참여하셨습니다</p>
              </div>
              <div className="my-message-container">
                <span className="your-checked">읽음</span>
                <div className="my-message">메세지요</div>
              </div>
              <div className="my-message-container">
                <span className="your-checked">읽음</span>
                <div className="my-message">메세지요요요요요</div>
              </div>
              <div className="my-message-container">
                <span className="your-checked">읽음</span>
                <div className="my-message">메세지지지지지지지지지지지지지지지지지ㅣ지지지지지지</div>
              </div>
              <div className="my-message-container">
                <span className="your-checked">읽음</span>
                <div className="my-message">메세지입니다다다다</div>
              </div>

              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="profile-image bg-green-700"
                  // user profile 넣어두기 
                 />
                <div className="your-message">메세지지지지지지지지지지지지지지지지지ㅣ지지지지지지</div>
                <span className="my-checked">읽음</span>
              </div>

              <div className="my-message-container">
                <span className="your-checked">읽음</span>
                <div className="my-message">메세지입니다다다다</div>
              </div>
              <div className="my-message-container">
                <span className="your-checked">읽음</span>
                <div className="my-message">메세지입니다다다다</div>
              </div>

              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="profile-image bg-green-700"
                  // user profile 넣어두기 
                 />
                <div className="your-message">메세지요</div>
                <span className="my-checked">안읽음</span>
              </div>

              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="profile-image bg-green-700"
                  // user profile 넣어두기 
                 />
                <div className="your-message">메세지요</div>
                <span className="my-checked">안읽음</span>
              </div>
              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="profile-image bg-green-700"
                  // user profile 넣어두기 
                 />
                <div className="your-message">메세지요</div>
                <span className="my-checked">안읽음</span>
              </div>
              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="profile-image bg-green-700"
                  // user profile 넣어두기 
                 />
                <div className="your-message">메세지요</div>
                <span className="my-checked">안읽음</span>
              </div>
              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="profile-image bg-green-700"
                  // user profile 넣어두기 
                 />
                <div className="your-message">메세지요</div>
                <span className="my-checked">안읽음</span>                
              </div>
              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="profile-image bg-green-700"
                  // user profile 넣어두기 
                 />
                <div className="your-message">메세지요</div>
                <span className="my-checked">안읽음</span>
              </div>
          </div>
        )
};

export default MessageContainer;
