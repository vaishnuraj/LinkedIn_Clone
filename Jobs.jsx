// src/Components/Jobs/Jobs.jsx
import React from 'react';
import styled from 'styled-components';

const Jobs = () => {
  return (
    <Container>
      <Header>
        <Title>Jobs</Title>
        <Subtitle>Find your next job and advance your career.</Subtitle>
      </Header>
      <MainContent>
        <Sidebar>
          <FilterSection>
            <FilterTitle>Filters</FilterTitle>
            <Filter>
              <FilterTitle>Location</FilterTitle>
              <FilterInput placeholder="Enter location" />
            </Filter>
            <Filter>
              <FilterTitle>Job Type</FilterTitle>
              <FilterOption>Full-time</FilterOption>
              <FilterOption>Part-time</FilterOption>
              <FilterOption>Contract</FilterOption>
              <FilterOption>Internship</FilterOption>
            </Filter>
            <Filter>
              <FilterTitle>Experience Level</FilterTitle>
              <FilterOption>Entry Level</FilterOption>
              <FilterOption>Mid Level</FilterOption>
              <FilterOption>Senior Level</FilterOption>
            </Filter>
          </FilterSection>
        </Sidebar>
        <JobListings>
          <JobCard>
            <JobTitle>Software Engineer</JobTitle>
            <Company>Tech Company</Company>
            <JobLocation>San Francisco, CA</JobLocation>
            <JobDescription>
              We are looking for a skilled Software Engineer to join our team.
            </JobDescription>
            <ApplyButton>Apply Now</ApplyButton>
          </JobCard>
          <JobCard>
            <JobTitle>Product Manager</JobTitle>
            <Company>Another Company</Company>
            <JobLocation>New York, NY</JobLocation>
            <JobDescription>
              We are seeking an experienced Product Manager to lead product development.
            </JobDescription>
            <ApplyButton>Apply Now</ApplyButton>
          </JobCard>
          {/* Add more JobCards as needed */}
        </JobListings>
      </MainContent>
      <RecommendedSection>
        <SectionTitle>Recommended Jobs</SectionTitle>
        <RecommendedJob>
          <RecommendedJobTitle>UI/UX Designer</RecommendedJobTitle>
          <RecommendedCompany>Design Studio</RecommendedCompany>
        </RecommendedJob>
        <RecommendedJob>
          <RecommendedJobTitle>Data Analyst</RecommendedJobTitle>
          <RecommendedCompany>Analytics Inc.</RecommendedCompany>
        </RecommendedJob>
        {/* Add more RecommendedJobs as needed */}
      </RecommendedSection>
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

const FilterSection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 20px;
`;

const FilterTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Filter = styled.div`
  margin-bottom: 15px;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-top: 5px;
`;

const FilterOption = styled.div`
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    color: #0a66c2;
  }
`;

const JobListings = styled.div`
  flex: 3;
`;

const JobCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 15px;
  margin-bottom: 15px;
`;

const JobTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

const Company = styled.p`
  font-size: 16px;
  color: #0a66c2;
  margin: 5px 0;
`;

const JobLocation = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

const JobDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin: 10px 0;
`;

const ApplyButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #0a66c2;
  color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #004182;
  }
`;

const RecommendedSection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 20px;
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const RecommendedJob = styled.div`
  margin-bottom: 10px;
`;

const RecommendedJobTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const RecommendedCompany = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

export default Jobs;
