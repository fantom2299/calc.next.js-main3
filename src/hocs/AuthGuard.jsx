import { redirect } from 'next/navigation'


// Third-party Imports
import { getServerSession } from 'next-auth'


export default async function AuthGuard({ children, locale }) {
  const session = await getServerSession()

  const dashboardUrl = `/${locale}/dashboard`

  if (session) {
    // Если пользователь авторизован, перенаправляем на дашборд
    redirect(dashboardUrl)
  }

  // Если пользователь не авторизован, показываем дочерний контент (например, страницу регистрации)
  return <>{children}</>
}




