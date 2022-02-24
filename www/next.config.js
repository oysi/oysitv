/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/minesweeper",
				destination: "/apps/minesweeper",
				permanent: true,
			},
			{
				source: "/queue",
				destination: "/apps/queue",
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
