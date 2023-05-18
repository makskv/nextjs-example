import React from 'react'
import styled from 'styled-components'
import { HeadlineS, Subtitle } from '../LayoutComponents'

import tooltipIcon from '../../../public/icons/action.svg'
import Image from 'next/image'

interface TrailerCardPriceProps {
	price: number
}

const TrailerCardPrice = ({ price }: TrailerCardPriceProps) => {
	return (
		<TrailerCardPriceComponent>
			<Subtitle>Cena od</Subtitle>
			<TrailerCardPriceTrailing>
				<HeadlineS>{price.toLocaleString()} Kč/den</HeadlineS>
				<Image src={tooltipIcon} alt='tooltip' />
			</TrailerCardPriceTrailing>

		</TrailerCardPriceComponent>
	)
}

const TrailerCardPriceComponent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 0;
`

const TrailerCardPriceTrailing = styled.div`
  display: flex;
  gap: 8px;
`

export default TrailerCardPrice
