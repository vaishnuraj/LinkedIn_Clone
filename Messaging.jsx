// src/Components/Messaging/Messaging.jsx
import React from 'react';
import styled from 'styled-components';

const Messaging = () => {
  return (
    <Container>
      <Header>
        <Title>Messaging</Title>
        <Subtitle>Connect with your network through direct messages.</Subtitle>
      </Header>
      <MainContent>
        <Sidebar>
          <SearchBar placeholder="Search messages" />
          <ConversationList>
            <Conversation>
              <ProfileImage src="https://www.nicepng.com/png/full/349-3491999_brock-robertson-linkedin-profile-round-official.png
              " alt="User 1" />
              <ConversationInfo>
                <ConversationTitle>User 1</ConversationTitle>
                <ConversationSnippet>Hey, I wanted to ask you about...</ConversationSnippet>
              </ConversationInfo>
            </Conversation>
            <Conversation>
              <ProfileImage src="https://e7.pngegg.com/pngimages/415/765/png-clipart-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert-thumbnail.png" alt="User 2" />
              <ConversationInfo>
                <ConversationTitle>User 2</ConversationTitle>
                <ConversationSnippet>Can we schedule a meeting for...</ConversationSnippet>

              </ConversationInfo>
            </Conversation>
            {/* Add more Conversation components as needed */}
          </ConversationList>
        </Sidebar>
        <ChatSection>
          <ChatHeader>
            <ChatProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZwbP_N5ldKv7EM6q4T-mjuy0PtOYCjWcYgeGlW6BgdW1lA2LuVaIBYPoVgfgdt_OHGQ&usqp=CAU" alt="Chat User" />
            <ChatHeaderText>
              <ChatTitle>Chat User</ChatTitle>
              <ChatSubtitle>Online</ChatSubtitle>
            </ChatHeaderText>
          </ChatHeader>
          <ChatMessages>
            <Message>
              <MessageContent>Hello! How are you?</MessageContent>
              <MessageTime>10:30 AM</MessageTime>
            </Message>
            <Message isSent>
              <MessageContent>I'm good, thanks! How about you?</MessageContent>
              <MessageTime>10:31 AM</MessageTime>
            </Message>
            {/* Add more Message components as needed */}
          </ChatMessages>
          <MessageInputContainer>
            <MessageInput placeholder="Type your message here" />
            <SendButton>Send</SendButton>
          </MessageInputContainer>
        </ChatSection>
      </MainContent>
    </Container>
  );
};

// Define your styled components
const Container = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f3f2ef;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;
`;

const Sidebar = styled.div`
  flex: 1;
  max-width: 250px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
`;

const ConversationList = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 10px;
  max-height: 500px;
  overflow-y: auto;
`;

const Conversation = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const ConversationInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConversationTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const ConversationSnippet = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
`;

const ChatSection = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  height: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const ChatProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const ChatHeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

const ChatSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Message = styled.div`
  display: flex;
  flex-direction: ${props => (props.isSent ? 'row-reverse' : 'row')};
  margin-bottom: 10px;
`;

const MessageContent = styled.p`
  background-color: ${props => (props.isSent ? '#0a66c2' : '#e1e1e1')};
  color: ${props => (props.isSent ? 'white' : '#333')};
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 70%;
`;

const MessageTime = styled.span`
  font-size: 12px;
  color: #888;
  margin-left: 10px;
  align-self: flex-end;
`;

const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background-color: #0a66c2;
  color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #004182;
  }
`;

export default Messaging;
