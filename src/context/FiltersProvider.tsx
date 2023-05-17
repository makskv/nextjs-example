import { VehicleType } from '../types'
import { createContext, FC, useCallback, useContext, useState } from 'react'
import React from 'react/index'

interface FiltersContextProps {
	selectedVehicleTypes: VehicleType[]
	instantBookable: boolean
	toggleInstantBookable: () => void
	onVehicleTypeSelected: (type: VehicleType) => void
}

export const FiltersContext = createContext<FiltersContextProps>({
	selectedVehicleTypes: [],
	onVehicleTypeSelected: (type) => null,
	instantBookable: false,
	toggleInstantBookable: () => null
})

export const FiltersProvider: FC = ({ children }) => {
	const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<VehicleType[]>([])
	const [instantBookable, setInstantBookable] = useState(false)

	const onVehicleTypeSelected = useCallback((type: VehicleType) => {
		setSelectedVehicleTypes(prevState => {
			if (prevState.includes(type)) {
				return prevState.filter((vehicleType) => vehicleType !== type)
			} else {
				return [...prevState, type]
			}
		})
	}, [])

	const toggleInstantBookable = useCallback(() => {
		setInstantBookable(prevState => !prevState)
	}, [])

	return <FiltersContext.Provider
		value={{
			onVehicleTypeSelected,
			selectedVehicleTypes,
			instantBookable,
			toggleInstantBookable
		}}
	>
		{children}
	</FiltersContext.Provider>
}

export const useFilters = () => {
	return useContext(FiltersContext)
}
