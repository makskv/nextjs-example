import styled from 'styled-components'
import { mediaQuery } from '../utils/mediaQuery'

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  padding: 32px 16px 0;
  margin: 0 auto;

  ${mediaQuery('tablet')(`
	    grid-template-columns: repeat(2, 1fr);
	    padding: 32px 100px 0;
	  `
  )}
  ${mediaQuery('laptop')(`
      grid-template-columns: repeat(3, 1fr)
    `
  )}
`
