import styled from 'styled-components'

export const Subtitle = styled.span`
  color: var(--color-dark-grey);
	font-size: 16px;
	font-weight: 400;
	line-height: 1;
`

export const HeadlineS = styled.h4`
	color: var(--color-dark-blue);
	font-size: 16px;
	line-height: 1;
	letter-spacing: 0;
  text-overflow: ellipsis;
	margin: 0;
  font-weight: 700;
`

export const HeadlineM = styled.h4`
	color: var(--color-dark-blue);
	font-size: 24px;
	line-height: 1;
	letter-spacing: 0;
  text-overflow: ellipsis;
	margin: 0;
  font-weight: 700;
`

export const LabelAccent = styled.span`
	font-size: 12px;
	text-transform: uppercase;
	line-height: 16px;
  font-weight: 700;
	color: var(--color-orange);
`

export const LabelBodyM = styled.span`
	font-size: 16px;
	line-height: 1;
	color: var(--color-dark-blue);
`

export const LabelBodyS = styled.span`
	font-size: 12px;
	line-height: 14px;
	color: var(--color-dark-grey);
`

export const LabelButton = styled.span`
	font-size: 16px;
	line-height: 1;
	color: var(--color-white);
	font-weight: 900;
	letter-spacing: 0;
`

export const Button = styled.button`
	background-color: var(--color-green);
	border-radius: 8px;
	padding: 14px 36px;
	border: none;
	outline: none;
	cursor: pointer;
`
