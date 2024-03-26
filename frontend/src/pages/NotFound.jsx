import React from "react";
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>support@smarttech.ca</strong>
      </p>
    </Container>
  )
};

export default NotFound;

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;