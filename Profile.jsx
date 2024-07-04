// src/Components/Profile/Profile.jsx
import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <Container>
      <Header>
        <BackgroundImage src="https://marketplace.canva.com/EAE3FHHSxIM/1/0/1600w/canva-white-minimalist-profile-linkedin-banner-om3WfNn3sfY.jpg" alt="Profile Background" />
        <ProfileInfo>
          <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVcyeesLdZ_PEtu-AcIBkYUQX52byRpzQeqZammslkJNSu04pt912epny9rAhcxz3oCo&usqp=CAU" alt="Profile Picture" />
          <UserInfo>
            <UserName>John Doe</UserName>
            <UserHeadline>Software Engineer at LinkedIn</UserHeadline>
            <EditButton>Edit Profile</EditButton>
          </UserInfo>
        </ProfileInfo>
      </Header>
      <MainContent>
        <Section>
          <SectionTitle>About</SectionTitle>
          <SectionContent>
            <p>
              Passionate software engineer with 5+ years of experience in building scalable web applications.
            </p>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Experience</SectionTitle>
          <SectionContent>
            <ExperienceItem>
              <CompanyName>LinkedIn</CompanyName>
              <JobTitle>Software Engineer</JobTitle>
              <JobDuration>Jan 2020 - Present</JobDuration>
            </ExperienceItem>
            <ExperienceItem>
              <CompanyName>Google</CompanyName>
              <JobTitle>Software Engineer</JobTitle>
              <JobDuration>Jan 2017 - Dec 2019</JobDuration>
            </ExperienceItem>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Posts</SectionTitle>
          <SectionContent>
            <Post>
              <PostContent>
                Excited to share that I've started a new project on LinkedIn Learning!
              </PostContent>
              <PostDate>June 15, 2024</PostDate>
            </Post>
            <Post>
              <PostContent>
                Just finished a course on advanced JavaScript concepts. It was amazing!
              </PostContent>
              <PostDate>May 10, 2024</PostDate>
            </Post>
          </SectionContent>
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
  margin-bottom: 20px;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 5px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  margin-right: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserName = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const UserHeadline = styled.h2`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const EditButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background-color: #0a66c2;
  color: white;
  font-size: 14px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #004182;
  }
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

const SectionContent = styled.div`
  font-size: 14px;
  color: #333;
`;

const ExperienceItem = styled.div`
  margin-bottom: 10px;
`;

const CompanyName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const JobTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const JobDuration = styled.p`
  font-size: 12px;
  color: #888;
  margin: 5px 0 0 0;
`;

const Post = styled.div`
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
`;

const PostDate = styled.p`
  font-size: 12px;
  color: #888;
  margin: 5px 0 0 0;
`;

export default Profile;
