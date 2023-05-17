import { VehicleType } from '../types'

interface VehicleTypeFilter {
	type: VehicleType
	description: string
}

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
