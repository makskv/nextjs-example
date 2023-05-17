import React from 'react'
import styled from 'styled-components'
import { LabelBodyM, Subtitle } from '../LayoutComponents'
import Image from 'next/image'

import tooltipIcon from '../../../public/icons/action.svg'
import expandIcon from '../../../public/icons/expand.svg'
import { useFilters } from '../../context/FiltersProvider'

const InstantBookableFilter = () => {
	const {instantBookable, toggleInstantBookable} = useFilters()
	return (
		<InstantBookableFilterComponent>
			<InstantBookableFilterTitle>
				<Subtitle>Okamžitá rezervace</Subtitle>
				<Image src={tooltipIcon} alt='tooltip' />
			</InstantBookableFilterTitle>
			<InstantBookableFilterToggle onClick={toggleInstantBookable}>
				<LabelBodyM>
					{instantBookable ? 'Ano' : 'Ne'}
				</LabelBodyM>
				<Image src={expandIcon} alt='tooltip' />
			</InstantBookableFilterToggle>
		</InstantBookableFilterComponent>
	)
}

const InstantBookableFilterComponent = styled.div`
  padding: 23px 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`

const InstantBookableFilterToggle = styled.div`
  border: 1px solid var(--color-beige);
  border-radius: 8px;
  cursor: pointer;
	padding: 14px 8px 14px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const InstantBookableFilterTitle = styled.div`
  display: flex;
  gap: 8px;
`

export default InstantBookableFilter
