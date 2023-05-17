import { VehicleType } from '../types'
import { createContext, FC, useCallback, useContext, useState } from 'react'
import React from 'react/index'

interface FiltersContextProps {
	selectedVehicleTypes: VehicleType[]
	onVehicleTypeSelected: (type: VehicleType) => void
}

export const FiltersContext = createContext<FiltersContextProps>({
	selectedVehicleTypes: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onVehicleTypeSelected: (type) => null
})

export const FiltersProvider: FC = ({ children }) => {
	const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<VehicleType[]>([])

	const onVehicleTypeSelected = useCallback((type: VehicleType) => {
		setSelectedVehicleTypes(prevState => {
			if (prevState.includes(type)) {
				return prevState.filter((vehicleType) => vehicleType !== type)
			} else {
				return [...prevState, type]
			}
		})
	}, [])

	return <FiltersContext.Provider
		value={{
			onVehicleTypeSelected,
			selectedVehicleTypes
		}}
	>
		{children}
	</FiltersContext.Provider>
}

export const useFilters = () => {
	return useContext(FiltersContext)
}
