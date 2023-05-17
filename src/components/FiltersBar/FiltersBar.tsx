import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '../../utils/mediaQuery'
import TrailerTypeFilter from './TrailerTypeFilter'
import InstantBookableFilter from './InstantBookableFilter'

const FiltersBar = () => {
	return (
		<FiltersBarComponent>
			<TrailerTypeFilter />
			<InstantBookableFilter />
		</FiltersBarComponent>
	)
}

const FiltersBarComponent = styled.div`
  border: 1px solid var(--color-beige);
  padding: 0 24px;
	display: flex;

  ${mediaQuery('mobile')(`
		padding: 0 100px;
	`)}
`

export default FiltersBar
