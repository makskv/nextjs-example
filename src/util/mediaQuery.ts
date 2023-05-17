export const breakpoints = {
	mobile: 400,
	tablet: 640,
	laptop: 1024,
};

export const mediaQuery = (key: keyof typeof breakpoints) => {
	return (style: TemplateStringsArray | string) =>
		`@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
