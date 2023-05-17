export type VehicleType = 'Intergrated' | 'Campervan' | 'Alcove' | 'BuiltIn'

export interface Trailer {
	id: number
	instantBookable: boolean
	location: string
	name: string
	passengersCapacity: number
	pictures: string[]
	price: number
	shower: boolean
	sleepCapacity: number
	toilet: boolean
	vehicleType: VehicleType
}
