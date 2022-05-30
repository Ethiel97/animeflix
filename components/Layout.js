import NextNProgress from 'nextjs-progressbar'
import { NextSeo } from 'next-seo'
import Header from './Header'
export default function Layout({ children }) {
    return (
        //define useful head tags for SEO using Head component from next
        <>
            <NextSeo
                title="Animeinfo - Anime Search Engine"
                description="Browse, search thousands of anime for free. Get useful details about anime. Get anime recommendations. Get anime reviews. Get anime characters details."
                canonical="https://animeinfo.vercel.app"
                openGraph={{
                    url: 'https://animeinfo.vercel.app',
                    type: 'website',
                    title: 'Animeinfo - Anime Search Engine',
                    description: 'Browse, search thousands of anime for free. Get useful details about anime. Get anime recommendations. Get anime reviews. Get anime characters details.',
                    images: [
                        {
                            url: 'https://github.com/Ethiel97/animeflix/blob/master/assets/images/app_screenshot.jpg',
                            width: 1920,
                            height: 2420,
                            alt: 'Og Image Alt',
                            type: 'image/jpg',
                        },
                    ],
                    site_name: 'Animeinfo',
                }}
                twitter={{
                    handle: '@enthusiastDev',
                    site: '@enthusiastDev',
                    cardType: 'summary_large_image',
                }}
                additionalLinkTags={[
                    {
                        rel: 'preconnect',
                        href: 'https://fonts.googleapis.com',
                        crossOrigin: true,
                    },
                    {
                        rel: 'preconnect',
                        href: 'https://fonts.gstatic.com',
                        crossOrigin: true,
                    },
                    {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css2?family=Sora&display=swap',
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: '/apple-touch-icon.png',
                        sizes: '128X128',
                        type: "image/png"
                    },
                    {
                        rel: 'icon',
                        href: '/favicon.ico',
                        type: "image/x-icon"
                    },
                    {
                        rel: 'icon',
                        href: '/favicon-32X32.png',
                        sizes: '32X32',
                        type: "image/png"
                    },
                    {
                        rel: 'icon',
                        href: '/favicon-16x16.png',
                        sizes: '16X16',
                        type: "image/png"
                    },
                ]}
            />

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