/** @type {import('next').NextConfig} */
const nextConfig = {

      env: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL, // URL для NextAuth
      API_URL: process.env.API_URL, // URL для API
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
      },
      images: {
      domains: ['yourdomain.com', 'localhost'], // Настройка разрешенных доменов для загрузки изображений
      },





  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/register',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(en|fr|ar)',
        destination: '/:lang/dashboards/crm',
        permanent: true,
        locale: false
      },
      {
        source: '/((?!(?:en|fr|ar|front-pages|favicon.ico)\\b)):path',
        destination: '/en/:path',
        permanent: true,
        locale: false
      }
    ]
  }
}

export default nextConfig
