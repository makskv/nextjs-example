import styled from 'styled-components'
import { Trailer } from '../../types'
import TrailersCarousel from './TrailersCarousel'
import TrailerCardType from './TrailerCardType'
import TrailerCardTitle from './TrailerCardTitle'
import TrailerCardFeatures from './TrailerCardFeatures'
import TrailerCardPrice from './TrailerCardPrice'

export const TrailerCard = ({
	name,
	price,
	vehicleType,
	instantBookable,
	passengersCapacity,
	sleepCapacity,
	shower,
	toilet,
	pictures,
	location
}: Trailer) => {
	return (
		<TrailerCardComponent>
			<TrailersCarousel pictures={pictures} />
			<TrailerCardBodyComponent>
				<TrailerCardType type={vehicleType} />
				<TrailerCardTitle title={name} />
				<TrailerCardFeatures
					toilet={toilet}
					location={location}
					passengersCapacity={passengersCapacity}
					sleepCapacity={sleepCapacity}
					shower={shower}
				/>
				<TrailerCardPrice price={price}/>
			</TrailerCardBodyComponent>
		</TrailerCardComponent>
	)
}

const TrailerCardComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: fit-content;
  border-radius: 8px;
  overflow: hidden;
  border: solid 1px var(--color-beige);
  background-color: var(--color-white);
  width: 100%;
	max-width: 392px;
`

const TrailerCardBodyComponent = styled.div`
  padding: 12px 16px 18px;
`
