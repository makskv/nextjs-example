import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '../../utils/mediaQuery'
import TrailerTypeFilter from './TrailerTypeFilter'

const FiltersBar = () => {
	return (
		<FiltersBarComponent>
			<TrailerTypeFilter />
		</FiltersBarComponent>
	)
}

const FiltersBarComponent = styled.div`
  border: 1px solid var(--color-beige);
  padding: 0 24px;

  ${mediaQuery('mobile')(`
		padding: 0 100px;
	`)}
`

export default FiltersBar
