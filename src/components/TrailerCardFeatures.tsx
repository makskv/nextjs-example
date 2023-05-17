import React from 'react'
import styled from 'styled-components'
import { Trailer } from '../types'
import TrailerFeaturesIcon from './TrailerFeaturesIcon'

import passengersCapacityLogo from '../../public/icons/passengers-capacity.svg'
import sleepCapacityLogo from '../../public/icons/sleep-capacity.svg'
import toilerLogo from '../../public/icons/toilet.svg'
import showerLogo from '../../public/icons/shower.svg'

type TrailerCardFeaturesProps = Pick<Trailer, 'toilet' | 'location' | 'sleepCapacity' | 'passengersCapacity' | 'shower'>

const TrailerCardFeatures = ({ toilet, shower, passengersCapacity, sleepCapacity, location }: TrailerCardFeaturesProps) => {
	return (
		<TrailerFeaturesComponent>
			<TrailerLocationComponent>{location}</TrailerLocationComponent>
			<TrailerFeaturesIconListComponent>
				{passengersCapacity && <TrailerFeaturesIcon icon={passengersCapacityLogo} value={passengersCapacity} /> }
				{sleepCapacity && <TrailerFeaturesIcon icon={sleepCapacityLogo} value={sleepCapacity} /> }
				{toilet && <TrailerFeaturesIcon icon={toilerLogo} /> }
				{shower && <TrailerFeaturesIcon icon={showerLogo} /> }
			</TrailerFeaturesIconListComponent>
		</TrailerFeaturesComponent>
	)
}

const TrailerFeaturesComponent = styled.div`
  border-top: 1px solid var(--color-beige);
  border-bottom: 1px solid var(--color-beige);
	
	padding: 14px 0 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const TrailerLocationComponent = styled.div`
  color: var(--color-dark-blue);
  text-align: left;
	font-size: 16px;
	line-height: 20px;
  letter-spacing: 0;
`

const TrailerFeaturesIconListComponent = styled.div`
	display: flex;
	gap: 14px;
`

export default TrailerCardFeatures
