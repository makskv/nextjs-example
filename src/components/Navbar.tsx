import React from 'react'
import Image from 'next/image'
import logo from '../../public/icons/logo.svg'
import styled from 'styled-components'
import { mediaQuery } from '../util/mediaQuery'

const Navbar = () => {
	return (
		<NavbarComponent>
			<Image priority src={logo} alt='logo' />
		</NavbarComponent>
	)
}

const NavbarComponent = styled.nav`
  padding: 22px 0;
	display: flex;
	justify-content: center;
	
  ${mediaQuery('tablet')(`
	    grid-template-columns: repeat(2, 1fr);
	    padding: 22px 100px;
	    justify-content: flex-start;
	  `
  )}
`

export default Navbar
