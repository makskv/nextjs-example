import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import Image from 'next/image'

interface TrailersCarouselProps {
	pictures: string[]
}

const TrailersCarousel = ({ pictures }: TrailersCarouselProps) => {
	return (
		<Carousel showStatus={false} showThumbs={false} showIndicators={false}>
			{pictures.map((picture, index) => (
				<TrailerImageWrapper key={picture}>
						<Image
							layout="fill"
							loader={({ src , width}) => `${src}?w=${width}`}
							src={picture}
							objectFit="cover"
							alt="trailer image"
							priority={index === 0}
						/>
				</TrailerImageWrapper>
			))}
		</Carousel>
	)
}

const TrailerImageWrapper = styled.div`
  position: relative;
	height: 190px;
	
	& > div {
    object-fit: cover;
	}
`

export default TrailersCarousel
