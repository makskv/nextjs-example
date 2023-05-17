import { VehicleType } from '../types'
import { exhaustiveCheck } from './exhaustiveCheck'

export const vehicleTypeToString = (type: VehicleType): string => {
	switch (type) {
	case 'Intergrated':
		return 'Integrál'
	case 'Campervan':
		return 'Campervan'
	case 'Alcove':
		return 'Přívěs'
	case 'BuiltIn':
		return 'Vestavba'
	default:
		exhaustiveCheck(type)
		return ''
	}
}
