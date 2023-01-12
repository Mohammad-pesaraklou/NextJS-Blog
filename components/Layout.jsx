import { Container } from "@mui/material";
// components
import Head from "next/head";
import Navbar from "./Navabr";


const Layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Head>
                <title>Football Blog</title>
                <meta name="description" content="Football blog and anything about football" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href='/favicon.ico' />
            </Head>
            {children}
        </Container>
    );
};

export default Layout;