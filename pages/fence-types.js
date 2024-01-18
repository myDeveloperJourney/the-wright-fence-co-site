import Layout from "@/components/Layout";
import Head from "next/head";

import FenceCarousel from "@/components/fence-carousel";
import SectionFenceTypes from "@/components/fence-types-page/content-fence-types";
import Carousel from "@/components/hero-carousel";

export default function FenceTypes() {
    const slides = [
        { image: "/images/board-on-board-with-top-cap-and-trim.png" },
        { image: "/images/board-on-board.png" },
        { image: "/images/chain-link.png" },
        { image: "/images/decks.png" },
        { image: "/images/pipe-fence.png" },
        { image: "/images/pre-stained-cedar.png" },
        { image: "/images/side-by-side.png" },
        { image: "/images/wrought-iron.png" }
    ];
    return (
        <>
            <Head>
                <title>Fence Types | The Wright Fence Co.</title>
                {/* TODO: Add meta tags and update website description */}
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <main>
                    <Carousel 
                        slides={slides} 
                        simpleMode={0}  
                        heading="Elevate Your Space with Elegant Boundaries"
                        subheading="Discover the Perfect Blend of Privacy, Style, and Durability"
                        ctaText="See Available Fence Types"
                        ctaLink="gallery"
                    />
                    <SectionFenceTypes />
                </main>
            </Layout>
        </>
    );
}
