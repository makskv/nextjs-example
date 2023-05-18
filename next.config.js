/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		deviceSizes: [400, 640, 828, 1080, 1440],
		formats: ['image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'd35xwkx70uaomf.cloudfront.net',
				port: '',
				pathname: ''
			}
		]
	}
}
