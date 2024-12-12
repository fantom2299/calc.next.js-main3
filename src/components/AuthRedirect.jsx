'use client'

// Next Imports
import { redirect, usePathname } from 'next/navigation'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const AuthRedirect = ({ lang }) => {
  const pathname = usePathname()

  // ℹ️ Bring me `lang`
  const redirectUrl = `/${lang}/login?redirectTo=${pathname}`
  const register = `/${lang}/register`
  const homePage = getLocalizedUrl(themeConfig.homePageUrl, lang)

  return redirect(pathname === register ? register : pathname === homePage ? register : redirectUrl)
}

export default AuthRedirect
