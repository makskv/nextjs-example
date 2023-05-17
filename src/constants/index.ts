import { PriceRange, VehicleTypeFilter } from '../types'

export const VEHICLE_TYPES_DESCRIPTION: VehicleTypeFilter[] = [
	{
		type: 'Campervan',
		description: 'Obytka s rozměry osobáku, se kterou dojedete všude.'
	},
	{
		type: 'Intergrated',
		description: 'Král mezi karavany. Luxus na kolech.'
	},
	{
		type: 'BuiltIn',
		description: 'Celý byt geniálně poskládaný do dodávky.'
	},
	{
		type: 'Alcove',
		description: 'Tažný karavan za vaše auto. Od kapkovitých až po rodinné.'
	}
]

export const PRICE_RANGE_MIN = 100
export const PRICE_RANGE_MAX = 10000
export const DEFAULT_PRICE_RANGE: PriceRange = [PRICE_RANGE_MIN, PRICE_RANGE_MAX]
