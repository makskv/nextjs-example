import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface TrailerFeaturesIconProps {
	icon: string
	value?: number
}

const TrailerFeaturesIcon = ({icon, value}: TrailerFeaturesIconProps) => {
	return (
		<TrailerFeaturesIconComponent>
			<Image src={icon} alt='trailer feature'/>
			{value}
		</TrailerFeaturesIconComponent>
	)
}

const TrailerFeaturesIconComponent = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`

export default TrailerFeaturesIcon
