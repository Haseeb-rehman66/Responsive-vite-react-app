import React from 'react'
import { styled } from 'styled-components';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';




const Error = () => {
    const navigate = useNavigate();

  return (
    <Wrapper>

        <img src="./images/error.svg" alt="error image" className="" />
        <Button className="btn" onClick={() => navigate("/")}>Go Back</Button>

    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.btn{
    margin-top: 3rem;
    font-size: 1.8rem;
}
`;

export default Error;