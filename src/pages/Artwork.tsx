import ImageGallery from "react-image-gallery";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";
import { COLORS } from "../colors";
import { Container } from "react-grid-system";

import React, { useState } from "react";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import artData from "../data/artwork.json";
import { HiddenOnMobile, OnlyOnMobile } from "../components/responsiveUtils";

const WrappingBox = styled.div`
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    box-sizing: border-box;
    border: solid 1px ${COLORS.OFF_WHITE};
    color: ${COLORS.OFF_WHITE};
    background-color: ${COLORS.BLACK};
    margin: 10px;
`;

const GalleryBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Title = styled.div`
    font-family: "Raleway", sans-serif;
    margin: 1em 1em 0 1em;
    font-size: 36px;
    font-weight: lighter;
`;

const RoyalFont = styled.div`
    font-family: "Raleway", sans-serif;
    font-weight: lighter;
`;

const PlacardDisplay = styled.div`
    display: block;
    align-items: left;
    font-size: 16px;
    margin-top: 1em;
`;

const PlacardDisplayRow = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const PlacardArtist = styled.div`
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 0.1rem;
`;

const PlacardBody = styled.div`
    margin-bottom: 0.5em;
`;

const PlacardSeparator = styled.div`
    margin: 0 0.3em;
`;

const OpenseaLogo = styled.img`
    width: 1.5em;
`;

const imageRange = Array.from({ length: 24 }, (_, i) => i);
const images = imageRange.map((x) => {
    const key = `${x}.jpg`;
    const meta = (artData as any)[key];

    return {
        original: `artwork/${x}.jpg`,
        originalHeight: 475,
        thumbnailHeight: 60,
        thumbnail: `artwork/${x}_t.jpg`,
        metadata: { ...meta }
    };
});

const sortedImages = images.sort((a: any, b: any) => {
    return a.metadata.year.localeCompare(b.metadata.year);
});

const mobileImages = imageRange.map((x) => {
    const key = `${x}.jpg`;
    const meta = (artData as any)[key];

    return {
        original: `artwork/${x}.jpg`,
        originalHeight: 400,
        thumbnailHeight: 60,
        thumbnail: `artwork/${x}_t.jpg`,
        metadata: { ...meta }
    };
});

const sortedMobileImages = mobileImages.sort((a: any, b: any) => {
    return a.metadata.year.localeCompare(b.metadata.year);
});

export const ArtworkPage: React.FunctionComponent = (props) => (
    <RoyalFont>
        <Div100vh style={{ width: "100vw", overflow: "hidden" }}>
            <WrappingBox {...props} />
        </Div100vh>
    </RoyalFont>
);

function customLeftNav(
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean
) {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <FiChevronLeft size={36} />
        </button>
    );
}

function customRightNav(
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean
) {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
        >
            <FiChevronRight size={36} />
        </button>
    );
}

interface ImageMetadata {
    title: string;
    story: string;
    artist: string;
    medium: string;
    size: string;
    year: string;
    openseaUrl: string;
}

function Placard({ metadata }: { metadata: ImageMetadata }) {
    return (
        <PlacardDisplay>
            <PlacardDisplayRow>
                <PlacardArtist>{metadata.artist}</PlacardArtist>
                <PlacardSeparator>•</PlacardSeparator>
                <PlacardBody>
                    <b>{metadata.title}</b>
                </PlacardBody>
            </PlacardDisplayRow>
            <PlacardDisplayRow>
                <PlacardBody>{metadata.medium}</PlacardBody>
                <PlacardSeparator>•</PlacardSeparator>
                <PlacardBody>{metadata.year}</PlacardBody>
            </PlacardDisplayRow>
            <PlacardDisplayRow>
                <a href={metadata.openseaUrl}>
                    <OpenseaLogo alt="o" src="opensea.svg" />
                </a>
            </PlacardDisplayRow>
        </PlacardDisplay>
    );
}

export function Artwork() {
    const [imageIndex, setImageIndex] = useState(0);
    useBackgroundColor("black");
    return (
        <ArtworkPage>
            <Title>Art Collection</Title>
            <GalleryBox>
                <Container>
                    <br />
                    <HiddenOnMobile>
                        <ImageGallery
                            items={sortedImages}
                            onSlide={setImageIndex}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            renderLeftNav={customLeftNav}
                            renderRightNav={customRightNav}
                            thumbnailPosition={"top"}
                            showIndex={true}
                            indexSeparator={" of "}
                        />
                        <Placard
                            metadata={
                                sortedImages[imageIndex][
                                    "metadata"
                                ] as ImageMetadata
                            }
                        />
                    </HiddenOnMobile>
                    <OnlyOnMobile>
                        <ImageGallery
                            items={sortedMobileImages}
                            onSlide={setImageIndex}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            renderLeftNav={customLeftNav}
                            renderRightNav={customRightNav}
                            showThumbnails={false}
                            showIndex={true}
                            indexSeparator={" of "}
                        />
                        <Placard
                            metadata={
                                sortedMobileImages[imageIndex][
                                    "metadata"
                                ] as ImageMetadata
                            }
                        />
                    </OnlyOnMobile>
                </Container>
            </GalleryBox>
        </ArtworkPage>
    );
}
