import NextNProgress from 'nextjs-progressbar'
import { NextSeo } from 'next-seo'
import Header from './Header'
import Head from 'next/head'
export default function Layout({ children }) {

    return (
        //define useful head tags for SEO using Head component from next
        <>
            <NextSeo
                title="Animeinfo"
                description="Browse, search thousands of anime for free. Get useful details about anime. Get anime recommendations. Get anime reviews. Get anime characters details."
                canonical="https://animeinfo.vercel.app"
                openGraph={{
                    url: 'https://animeinfo.vercel.app',
                    title: 'Open Graph Title',
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: 'https://github.com/Ethiel97/animeinfo/blob/master/assets/images/app_screenshot.jpg',
                            width: 1153,
                            height: 1280,
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
                        rel: 'apple-touch-icon',
                        href: '../public/apple-touch-icon.png',
                        sizes: '128X128',
                        type: "image/png"
                    },
                    {
                        rel: 'icon',
                        href: '../public/favicon-32X32.png',
                        sizes: '32X32',
                        type: "image/png"
                    },
                    {
                        rel: 'icon',
                        href: '../public/favicon-64X64.png',
                        sizes: '64X64',
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