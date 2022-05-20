import NextNProgress from 'nextjs-progressbar'
import Header from './Header'
import Head from 'next/head'
export default function Layout({ children }) {

    return (
        //define useful head tags for SEO using Head component from next
        <>
            <Head>
                <title>Anime Info</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Anime Info" />
                <meta name="keywords" content="Anime, List, Anime List" />
                <meta name="author" content="Anime List" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
            </Head>

            <NextNProgress
                color="#ef4444"
                options={{ showSpinner: false }}
                height={2}
            />

            <Header />
            <main>{children}</main>

        </>
    )
}