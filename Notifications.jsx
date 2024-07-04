// src/Components/Notifications/Notifications.jsx
import React from 'react';
import styled from 'styled-components';

const Notifications = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <HeaderTitle>Notifications</HeaderTitle>
          <HeaderSubtitle>Check out your latest notifications and updates.</HeaderSubtitle>
        </HeaderContent>
      </Header>
      <MainContent>
        <Section>
          <SectionTitle>Recent Notifications</SectionTitle>
          <NotificationList>
            <NotificationCard>
              <NotificationImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxUnJeTCiglWmVd4E7tNgduYEdVDf9aiW6nZuCxsVEhunbc-yx_HR6WA8I29Vt04d40g&usqp=CAU" alt="Notification 1" />
              <NotificationDetails>
                <NotificationText>
                  <strong>John Doe</strong> liked your post
                </NotificationText>
                <NotificationTime>2 minutes ago</NotificationTime>
              </NotificationDetails>
            </NotificationCard>
            <NotificationCard>
              <NotificationImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcxU00aT_8732RpJ6wVOf9zsgT4kA2UBlxg&s" alt="Notification 2" />
              <NotificationDetails>
                <NotificationText>
                  <strong>Jane Smith</strong> commented on your photo
                </NotificationText>
                <NotificationTime>10 minutes ago</NotificationTime>
              </NotificationDetails>
            </NotificationCard>
            <NotificationCard>
              <NotificationImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqfCGP5XjqA61fi9Jp3N_wKhrQj8O89zTAPW4GbeMHlX19V3JSL9yNYZm_Dy55rSqsZI&usqp=CAU" alt="Notification 3" />
              <NotificationDetails>
                <NotificationText>
                  <strong>Emily Johnson</strong> sent you a connection request
                </NotificationText>
                <NotificationTime>30 minutes ago</NotificationTime>
              </NotificationDetails>
            </NotificationCard>
          </NotificationList>
        </Section>
        <Section>
          <SectionTitle>Recent Activities</SectionTitle>
          <Activities>
            <ActivityCard>
              <ActivityImage src="data:image/jpeg;base64,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
              " alt="Activity 1" />
              <ActivityDetails>
                <ActivityTitle>Joined a new group: Web Developers</ActivityTitle>
                <ActivityDate>July 5, 2024</ActivityDate>
              </ActivityDetails>
            </ActivityCard>
            <ActivityCard>
              <ActivityImage src="https://rukminim2.flixcart.com/image/850/1000/l05lx8w0/poster/u/d/i/medium-night-view-on-good-quality-hd-quality-wallpaper-poster-original-imagcyczyqz5hc4t.jpeg?q=90&crop=false
              " alt="Activity 2" />
              <ActivityDetails>
                <ActivityTitle>Updated your profile picture</ActivityTitle>
                <ActivityDate>July 3, 2024</ActivityDate>
              </ActivityDetails>
            </ActivityCard>
            <ActivityCard>
              <ActivityImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNAO4Nln89QbeHv9BbtruKoELAxQgRacbbGK9B2pDUAl3nDzDELwxvQ0hWANdbIJXDy8&usqp=CAU" alt="Activity 3" />
              <ActivityDetails>
                <ActivityTitle>Posted a new article: How to Build a React App</ActivityTitle>
                <ActivityDate>June 28, 2024</ActivityDate>
              </ActivityDetails>
            </ActivityCard>
          </Activities>
        </Section>
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
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const HeaderContent = styled.div`
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`;

const HeaderSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 10px 0 0;
`;

const MainContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  border-bottom: 2px solid #0a66c2;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NotificationCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 10px;
`;

const NotificationImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
`;

const NotificationDetails = styled.div`
  flex: 1;
`;

const NotificationText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const NotificationTime = styled.p`
  font-size: 12px;
  color: #888;
  margin: 5px 0 0;
`;

const Activities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActivityCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 10px;
`;

const ActivityImage = styled.img`
  width: 200px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

const ActivityDetails = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

const ActivityDate = styled.p`
  font-size: 12px;
  color: #888;
  margin: 5px 0 0;
`;

export default Notifications;
