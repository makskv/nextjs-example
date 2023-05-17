import React from 'react'
import { LabelBodyM, LabelBodyS } from '../LayoutComponents'
import styled from 'styled-components'
import { vehicleTypeToString } from '../../utils/vehicleTypeToString'
import { VehicleType } from '../../types'

interface TrailerTypeFilterItem {
	type: VehicleType
	description: string
	selected: boolean
	onClick: (type: VehicleType) => void
}

const TrailerTypeFilterItem = ({ type, description, selected, onClick }: TrailerTypeFilterItem) => {
	return (
		<TrailerTypeFilterItemComponent onClick={() => onClick(type)} selected={selected}>
			<div>
				<LabelBodyM>
					{vehicleTypeToString(type)}
				</LabelBodyM>
			</div>
			<div>
				<LabelBodyS>
					{description}
				</LabelBodyS>
			</div>
		</TrailerTypeFilterItemComponent>
	)
}

interface TrailerTypeFilterItemComponentProps {
	selected: boolean
}

const TrailerTypeFilterItemComponent = styled.div<TrailerTypeFilterItemComponentProps>`
  display: flex;
  gap: 4px;
  flex-direction: column;
  padding: ${({ selected }) => selected ? '11px 11px 7px 11px' : '12px 12px 8px 12px'};
  width: 156px;
  border-radius: 8px;
  cursor: pointer;
  border: ${({ selected }) => selected ? '2px solid var(--color-green)' : '1px solid var(--color-beige)'}
`

export default TrailerTypeFilterItem
