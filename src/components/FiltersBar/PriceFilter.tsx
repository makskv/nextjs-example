import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Range } from 'react-range'
import { PriceRange, Tuple } from '../../types'
import { Subtitle } from '../LayoutComponents'
import { PRICE_RANGE_MAX, PRICE_RANGE_MIN } from '../../constants'
import { useFilters } from '../../context/FiltersProvider'
import debounce from 'lodash.debounce'
import PriceInputFilter from './PriceInputFilter'

type GradientValues = Tuple<number>

const getTrackGradientValues = (values: PriceRange, min: number, max: number): GradientValues => {
	return values.map(value => ((value - min) / (max - min)) * 100) as GradientValues
}

const PriceFilter = () => {
	const { priceRange, handlePriceRangeChanged } = useFilters()
	const [inputPriceFrom, setInputPriceFrom] = useState(priceRange[0].toString())
	const [inputPriceTo, setInputPriceTo] = useState(priceRange[1].toString())

	const onSliderChange = useCallback((values: number[]) => {
		const range = values as PriceRange
		setInputPriceFrom(range[0].toString())
		setInputPriceTo(range[1].toString())
	}, [])

	const interValues = useMemo<PriceRange>(() => [
			Number(inputPriceFrom),
			Number(inputPriceTo)
		].sort((a, b) => a - b) as PriceRange,
		[inputPriceFrom, inputPriceTo]
	)

	const handleFinalChange = useCallback((values: number[]) => {
		handlePriceRangeChanged(values as PriceRange)
	}, [handlePriceRangeChanged])

	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, isFrom: boolean) => {
		const callback = isFrom ? setInputPriceFrom : setInputPriceTo
		callback(e.target.value)
	}, [])

	const debouncedFilterInput = useCallback(debounce(handlePriceRangeChanged, 300), [])

	useEffect(() => {
		debouncedFilterInput(interValues)
	}, [interValues])

	return (
		<PriceFilterComponent>
			<Subtitle>Cena za den</Subtitle>
			<Range
				draggableTrack
				values={interValues}
				step={1}
				min={PRICE_RANGE_MIN}
				max={PRICE_RANGE_MAX}
				onChange={onSliderChange}
				onFinalChange={handleFinalChange}
				renderTrack={({ props, children }) => (
					<PriceFilterSliderTrack
						onMouseDown={props.onMouseDown}
						onTouchStart={props.onTouchStart}
					>
						<PriceFilterSliderTrack
							ref={props.ref}
							gradientValues={getTrackGradientValues(interValues, PRICE_RANGE_MIN, PRICE_RANGE_MAX)}
						>
							{children}
						</PriceFilterSliderTrack>
					</PriceFilterSliderTrack>
				)}
				renderThumb={({ props }) => (
					<PriceFilterThumb
						{...props}
						style={props.style}
					/>
				)}
			/>
			<PriceFilterFooter>
				<PriceInputFilter
					value={inputPriceFrom}
					onChange={handleInputChange}
					isFrom={true}
				/>
				<PriceInputFilter
					value={inputPriceTo}
					onChange={handleInputChange}
					isFrom={false}
				/>
			</PriceFilterFooter>
		</PriceFilterComponent>
	)
}

const PriceFilterComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 23px 16px 23px 0;
`

interface PriceFilterSliderTrackProps {
	gradientValues?: GradientValues
}

const PriceFilterSliderTrack = styled.div<PriceFilterSliderTrackProps>`
  height: 4px;
  margin: 10px 0;
  border-radius: 2px;
  background: ${({ gradientValues }) => gradientValues ? `linear-gradient(to right, var(--color-beige) 0%, var(--color-beige) ${gradientValues[0]}%, var(--color-green) ${gradientValues[0]}%, var(--color-green) ${gradientValues[1]}%, var(--color-beige) ${gradientValues[1]}%, var(--color-beige) 100%);` : 'none'};
`

const PriceFilterThumb = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: var(--color-green);
`

const PriceFilterFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
`

export default PriceFilter
