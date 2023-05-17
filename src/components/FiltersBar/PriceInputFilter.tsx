import React from 'react'
import { Subtitle } from '../LayoutComponents'
import styled from 'styled-components'

interface PriceInputFilterProps {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>, isMax: boolean) => void
	isFrom: boolean
}

const PriceInputFilter = ({ value, onChange, isFrom }: PriceInputFilterProps) => {
	return (
		<PriceFilterInputWrapper>
			<PriceFilterInput
				type='number'
				value={value}
				onChange={(e) => onChange(e, isFrom)}
			/>
			<PriceFilterInputCurrency>
				<Subtitle>
					Kč
				</Subtitle>
			</PriceFilterInputCurrency>
		</PriceFilterInputWrapper>
	)
}

const PriceFilterInputWrapper = styled.div`
  position: relative;
`

const PriceFilterInputCurrency = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`

const PriceFilterInput = styled.input`
  padding: 14px 30px 14px 12px;
  border: 1px solid var(--color-beige);
  border-radius: 8px;
  color: var(--color-dark-blue);
  font-size: 16px;
  width: 156px;

  :focus-visible {
    outline: none;
    border: 1px solid var(--color-green);
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type=number] {
    -moz-appearance: textfield;
  }
`

export default PriceInputFilter
