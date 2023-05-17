import React from 'react'
import { Subtitle } from '../LayoutComponents'
import styled from 'styled-components'
import { VEHICLE_TYPES_DESCRIPTION } from '../../constants'
import TrailerTypeFilterItem from './TrailerTypeFilterItem'
import { useFilters } from '../../context/FiltersProvider'

const TrailerTypeFilter = () => {
	const { selectedVehicleTypes, onVehicleTypeSelected } = useFilters()

	return (
		<TrailerTypeFilterComponent>
			<Subtitle>Typ karavanu</Subtitle>
			<TrailerTypeFilterItemsList>
				{VEHICLE_TYPES_DESCRIPTION.map(item =>
					<TrailerTypeFilterItem
						key={item.type}
						type={item.type}
						description={item.description}
						selected={selectedVehicleTypes.includes(item.type)}
						onClick={onVehicleTypeSelected}
					/>)}
			</TrailerTypeFilterItemsList>
		</TrailerTypeFilterComponent>
	)
}

const TrailerTypeFilterComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 23px 16px;
	border-right: 1px solid var(--color-beige);
	border-left: 1px solid var(--color-beige);
`

const TrailerTypeFilterItemsList = styled.div`
  display: flex;
  gap: 28px;
`

export default TrailerTypeFilter
