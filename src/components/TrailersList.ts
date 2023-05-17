import styled from 'styled-components'
import { mediaQuery } from '../util/mediaQuery'

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  padding: 0 16px;
  margin: 0 auto;

  ${mediaQuery('tablet')(`
	    grid-template-columns: repeat(2, 1fr);
	    padding: 0 100px;
	  `
  )}
  ${mediaQuery('laptop')(`
      grid-template-columns: repeat(3, 1fr)
    `
  )}
`
