import React from 'react'
import styled from 'styled-components'
import { VehicleType } from '../../types'
import { LabelAccent } from '../LayoutComponents'

interface TrailerTypeProps {
	type: VehicleType
}

const TrailerCardType = ({ type }: TrailerTypeProps) => {
	return (
		<TrailerTypeComponent>
			<LabelAccent>
				{type}
			</LabelAccent>
		</TrailerTypeComponent>

	)
}

const TrailerTypeComponent = styled.div`
  margin-bottom: 4px;
`

export default TrailerCardType
