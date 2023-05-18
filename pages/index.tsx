import styled from 'styled-components'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { TrailerCard } from '../src/components/TrailerCard'
import { Trailer } from '../src/types'
import { Grid } from '../src/components/TrailersList'
import Navbar from '../src/components/Navbar'
import FiltersBar from '../src/components/FiltersBar/FiltersBar'
import React, { useMemo, useState } from 'react'
import { useFilters } from '../src/context/FiltersProvider'
import { Button, LabelButton } from '../src/components/LayoutComponents'
import Head from 'next/head'

export const getStaticProps: GetStaticProps<{ initialData: Trailer[] }> = async () => {
	const trailers = await fetchTrailers()

	return {
		props: {
			initialData: trailers
		}
	}
}

const Home = ({ initialData }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [trailers, setTrailers] = useState(initialData)
	const { selectedVehicleTypes, instantBookable, priceRange } = useFilters()

	const filteredTrailers = useMemo(() => {
		let result = [...trailers.filter(trailer => trailer.price >= priceRange[0] && trailer.price <= priceRange[1])]

		if (selectedVehicleTypes.length > 0) {
			result = result.filter(trailer => selectedVehicleTypes.includes(trailer.vehicleType))
		}

		if (instantBookable) {
			result = result.filter(trailer => trailer.instantBookable === instantBookable)
		}

		return result
	}, [trailers, selectedVehicleTypes, instantBookable, priceRange])

	const handleLoadMore = async () => {
		const newData = await fetchTrailers()
		setTrailers(prevState => [...prevState, ...newData])
	}

	return (
		<>
			<Head>
				<title>Půjčovna přívěsů</title>

				<meta
					name='description'
					content='Půjčovna přívěsů - Vaše první volba pro pronájem přívěsů pro různé účely. Prohlížejte si široký výběr přívěsů a rezervujte si pohodlně svůj pronájem.'
				/>
			</Head>
			<PageWrapper>
				<Navbar />
				<FiltersBar />
				<Grid>
					{filteredTrailers.map((trailer) => (
						<TrailerCard key={trailer.id} {...trailer} />
					))}
				</Grid>
				<ButtonWrapper>
					<Button onClick={handleLoadMore}>
						<LabelButton>
							Načíst další
						</LabelButton>
					</Button>
				</ButtonWrapper>
			</PageWrapper>
		</>

	)
}

const fetchTrailers = async (): Promise<Trailer[]> => {
	const res = await fetch('http://localhost:3000/api/data')
	const data: Omit<Trailer, 'id'>[] = (await res.json()).items
	return data.map((trailer, id) => ({ ...trailer, id: id + Date.now() }))
}

const PageWrapper = styled.div`
  padding-bottom: 115px;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  width: 100%;
`

export default Home
