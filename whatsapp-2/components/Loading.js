import React from 'react';
import {CircularProgress} from "@material-ui/core";
import Head from 'next/head'

const Loading = () => {
    return (
        <>
            <Head>
                <title>Loading...</title>
            </Head>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                height: '90vh'
            }}>
                <img height={200}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
                     alt="WhatsApp" style={{marginBottom: "40px"}}/>
                <CircularProgress style={{color: "#3CBC2b"}}/>
            </div>
        </>
    );
};

export default Loading;
