import Layout from "../components/Layout";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    body {
        width: 100%;
        max=width: 520px;
        margin: 0 auto;
    }

    a {
        color: inherit;
        text-decoration: none;
      }

    * {
        box-sizing: border-box;
    }
`

export default function App({Component, pageProps}) {
    
    return (
        <>
        <GlobalStyle />
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    )
}