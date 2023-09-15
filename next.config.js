/** @type {import('next').NextConfig} */
const nextConfig = {
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return 'bf523f583ffc3c132f202791e865d1f72ccccd0b'
      },
}

module.exports = nextConfig
