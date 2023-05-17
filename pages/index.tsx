import styled from 'styled-components'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { TrailerCard } from '../src/components/TrailerCard'
import { Trailer } from '../src/types'
import { Grid } from '../src/components/TrailersList'
import Navbar from '../src/components/Navbar'
import FiltersBar from '../src/components/FiltersBar/FiltersBar'
import { useMemo } from 'react'
import { useFilters } from '../src/context/FiltersProvider'

const Home = ({ trailers }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { selectedVehicleTypes, instantBookable } = useFilters()
	const filteredTrailers = useMemo(() => {
		let result = [...trailers]

		if (selectedVehicleTypes.length > 0) {
			result = result.filter(trailer => selectedVehicleTypes.includes(trailer.vehicleType))
		}

		if (instantBookable) {
			result = result.filter(trailer => trailer.instantBookable === instantBookable)
		}
		return result
	}, [trailers, selectedVehicleTypes, instantBookable])

	return (
		<PageWrapper>
			<Navbar />
			<FiltersBar />
			<Grid>
				{filteredTrailers.map((trailer) => (
					<TrailerCard key={trailer.id} {...trailer} />
				))}
			</Grid>
		</PageWrapper>
	)
}

const fetchTrailers = async (): Promise<Trailer[]> => {
	const res = await fetch('http://localhost:3000/api/data')
	const data: Omit<Trailer, 'id'>[] = (await res.json()).items
	return data.map((trailer, id) => ({ ...trailer, id }))
}

export const getStaticProps: GetStaticProps<{ trailers: Trailer[] }> = async () => {
	const trailers = await fetchTrailers()

	return {
		props: {
			trailers
		}
	}
}

const PageWrapper = styled.div`
`

export default Home
