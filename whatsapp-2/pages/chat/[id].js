import React from 'react';
import styled from 'styled-components'
import Head from "next/head"
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen"
import {auth, db} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail"

const ChatRoom = ({chat,messages}) => {
    const [user] = useAuthState(auth);
    const name = getRecipientEmail(chat.users,user)


    const findName = (name) =>{
        const index = name.indexOf('@',0)
        return name.substring(0, index)
    }

    return (
        <Container>
            <Head>
                <title>Chat with {findName(name)}</title>
            </Head>
            <Sidebar/>
            <ChatContainer>
                <ChatScreen chat={chat} messages={messages}/>
            </ChatContainer>

        </Container>
    );
};

export default ChatRoom;

export async function getServerSideProps(context) {
    const ref = db.collection("chats").doc(context.query.id)
    const messageRes = await ref.collection('messages').orderBy("timestamp", "asc").get();

    const messages = messageRes.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })).map(messages => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime(),
    }))

    //  PRER the chats
    const chatRes = await ref.get()
    const chat = {
        id: chatRes.id,
        ...chatRes.data()
    }

    return {
        props: {
            messages: JSON.stringify(messages),
            chat:chat,
        }
    }
}

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 99vh;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;