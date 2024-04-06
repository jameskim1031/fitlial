import React from 'react';
import styled from 'styled-components';

const MobilePageContainer = styled.div`
  max-width: 375px; // Common width for mobile screens
  min-height: 667px; // Common height for mobile screens
  margin: auto; // Center the container
  position: relative; // Allows absolute positioning inside the container
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Optional: adds a subtle shadow for depth
  overflow: hidden; // Keeps child elements within the container
  display: flex;
  flex-direction: column;
`;

const Page = ({children}) => {
    return <MobilePageContainer>{children}</MobilePageContainer>;
  };

export default Page;