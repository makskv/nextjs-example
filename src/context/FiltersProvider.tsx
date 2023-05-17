import { PriceRange, VehicleType } from '../types'
import { createContext, FC, useCallback, useContext, useState } from 'react'
import React from 'react/index'
import { DEFAULT_PRICE_RANGE } from '../constants'

interface FiltersContextProps {
	selectedVehicleTypes: VehicleType[]
	instantBookable: boolean
	toggleInstantBookable: () => void
	onVehicleTypeSelected: (type: VehicleType) => void
	priceRange: PriceRange
	handlePriceRangeChanged: (range: PriceRange) => void
}

export const FiltersContext = createContext<FiltersContextProps>({
	selectedVehicleTypes: [],
	onVehicleTypeSelected: () => null,
	instantBookable: false,
	toggleInstantBookable: () => null,
	priceRange: [100, 10000],
	handlePriceRangeChanged: () => null
})

export const FiltersProvider: FC = ({ children }) => {
	const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<VehicleType[]>([])
	const [instantBookable, setInstantBookable] = useState(false)
	const [priceRange, setPriceRange] = useState<PriceRange>(DEFAULT_PRICE_RANGE)

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

	const handlePriceRangeChanged = useCallback((range: PriceRange) => {
		setPriceRange(range)
	}, [])

	return <FiltersContext.Provider
		value={{
			onVehicleTypeSelected,
			selectedVehicleTypes,
			instantBookable,
			toggleInstantBookable,
			priceRange,
			handlePriceRangeChanged
		}}
	>
		{children}
	</FiltersContext.Provider>
}

export const useFilters = () => {
	return useContext(FiltersContext)
}
