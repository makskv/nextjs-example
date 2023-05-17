import React from 'react'
import styled from 'styled-components'
import { HeadlineM } from '../LayoutComponents'

interface TrailerCardTitle {
	title: string
}

const TrailerCardTitle = ({title}:TrailerCardTitle) => {
	return (
		<TrailerCardTitleComponent>
			<HeadlineM>
				{title}
			</HeadlineM>

		</TrailerCardTitleComponent>
	)
}

const TrailerCardTitleComponent = styled.div`
  font-weight: 600;
  color: var(--color-dark-blue);
  max-width: 100%;
  overflow: hidden;
  
	margin-top: 4px;
	margin-bottom: 5px;
`

export default TrailerCardTitle
