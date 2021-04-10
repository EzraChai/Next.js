import React from 'react';
import styled from 'styled-components'
import Head from "next/head";
import {Button} from "@material-ui/core";
import {provider,auth} from "../firebase";

const Login = () => {

    const signIn = () =>{
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"}/>
                <Button onClick={()=>signIn()} variant={"outlined"}>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #dfdfdf;
`;
const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  background: #e6e6e6;
  box-shadow: 20px 20px 60px #c9c9c9,
    -20px -20px 60px #ffffff;
`;
const Logo = styled.img`
  height: 220px;
  width: 220px;
  margin-bottom: 50px;
`;
