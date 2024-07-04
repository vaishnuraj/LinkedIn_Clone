import React from 'react';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        // Logic for Google Sign In can be added here
        navigate('/home');
    };

    return (
        <Container>
            {props.user && <Navigate to='/home' />}
            <nav>
                <a href="/">
                    <img src="/images/LinkedIn_logo.svg" alt="LinkedIn Logo" />
                </a>
                <div className='jsin'>
                    <h1 id='join'>Join now</h1>
                    <h1 id='signin'>Sign In</h1>
                </div>
            </nav>
            <section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/login-hero1.avif' alt='Hero' />
                </Hero>
                <Form>
                    <Google onClick={handleGoogleSignIn}>
                        <img src="/images/google.png" alt="Google" />
                        Sign in with Google
                    </Google>
                </Form>
            </section>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    padding: 0px;
    nav {
        max-width: 1128px;
        margin: auto;
        padding: 12px 0 16px;
        display: flex;
        align-items: center;
        position: relative;
        
        justify-content: space-between;
        flex-wrap: nowrap;
    }

    a img {
        width: 135px;
        height: 34px;
        @media (max-width:768px) {
            padding: 0 5px;
        }
    }

    #join {
        font-size: 18px;
        padding: 10px 12px;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        margin-right: 12px;
        cursor: pointer;
    }

    #join:hover {
        background-color: rgba(0, 0, 0, 0.06);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
        border-radius: 4px;
    }

    #signin {
        font-size: 16px;
        padding: 10px 24px;
        cursor: pointer;
        box-shadow: inset 0 0 0 1px #0a66c2;
        color: #1161b0;
        border-radius: 24px;
        margin-right: 12px;
        font-weight: 600;
        text-align: center;
        background-color: rgba(0, 0, 0, 0);
        transition-duration: 167ms;
    }
    #signin:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }

    .jsin {
        display: flex;
    }

    section {
        display: flex;
        align-content: start;
        min-height: 700px;
        padding-bottom: 138px;
        padding-top: 40px;
        padding: 60px 0;
        position: relative;
        flex-wrap: wrap;
        width: 100%;
        margin: auto;
        @media (max-width:768px) {
            margin: auto;
            min-height: 0px;
        }
    }
`;

const Hero = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 500;
        line-height: 70px;

        @media (max-width: 768px) {
            width: 100%;
            font-size: 22px;
            padding: 20px;
        }
        @media (min-width: 768px) {
            padding-bottom: 0;
            width: 55%;
            font-size: 56px;
            color: #2977c9;
            font-weight: 500;
            line-height: 70px;
        }
    }

    img {
        height: 500px;
        position: relative;
        left: 400px;
        border-radius: 30px;

        @media (max-width: 768px) {
            width: 100%;
            max-width: 400px;
            position: initial;
            transform: translateX(0);
        }
    }
`;

const Form = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const Google = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border: 1px solid #777373;
    border-radius: 30px;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-bottom: 2px #010101;

    img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }

    &:hover {
        background-color: #f0f0f0;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
        margin: 0 80px;
        border-bottom: 2px solid #010101;
    }
    @media (min-width: 768px) {
        display: flex;
        position: relative;
        bottom: 400px;
        border-radius: 30px;
        left: 200px;
        border-bottom: 2px solid #010101;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 30px;
        padding: 12px 90px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 5px;
        color: #333333;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
`;
