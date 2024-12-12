// React Imports
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

const HeroSection = ({ mode }) => {
  // States
  const [transform, setTransform] = useState('')

  // Vars
  const dashboardImageLight = '/images/front-pages/landing-page/hero-dashboard-light.png'
  const dashboardImageDark = '/images/front-pages/landing-page/hero-dashboard-dark.png'
  const elementsImageLight = '/images/front-pages/landing-page/hero-elements-light.png'
  const elementsImageDark = '/images/front-pages/landing-page/hero-elements-dark.png'
  const heroSectionBgLight = '/images/front-pages/landing-page/hero-bg-light.png'
  const heroSectionBgDark = '/images/front-pages/landing-page/hero-bg-dark.png'

  // Hooks
  const { mode: muiMode } = useColorScheme()
  const dashboardImage = useImageVariant(mode, dashboardImageLight, dashboardImageDark)
  const elementsImage = useImageVariant(mode, elementsImageLight, elementsImageDark)
  const heroSectionBg = useImageVariant(mode, heroSectionBgLight, heroSectionBgDark)
  const _mode = (muiMode === 'system' ? mode : muiMode) || mode
  const isAboveLgScreen = useMediaQuery(theme => theme.breakpoints.up('lg'))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = event => {
        const rotateX = (window.innerHeight - 2 * event.clientY) / 100
        const rotateY = (window.innerWidth - 2 * event.clientX) / 100

        setTransform(
          `perspective(1200px) rotateX(${rotateX < -40 ? -20 : rotateX}deg) rotateY(${rotateY}deg) scale3d(1,1,1)`
        )
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section id='home' className='relative overflow-hidden pbs-[80px] -mbs-[80px]'>
      <img
        src={heroSectionBg}
        alt='hero-bg'
        className={classnames(styles.heroSectionBg, {
          [styles.bgLight]: _mode === 'light',
          [styles.bgDark]: _mode === 'dark'
        })}
      />
      <div className={classnames('pbs-[88px] overflow-hidden', frontCommonStyles.layoutSpacing)}>
        <div className='relative md:max-is-[550px] mbe-5 mli-auto text-center'>
          <Typography className={styles.heroText}>All in one sass application for your business</Typography>
          <Typography variant='h6'>
            No coding required to make customizations. The live customizer has everything your marketing need.
          </Typography>
          <div className='relative flex justify-center mbs-6'>
            <div className='absolute flex gap-2 inline-start-0 block-start-[41%] max-md:hidden'>
              <Typography className='font-medium'>Join community</Typography>
              <img src='/images/front-pages/landing-page/join-community-arrow.png' alt='arrow' height='48' width='60' />
            </div>
            <Button
              component={Link}
              size='large'
              href='/front-pages/landing-page#pricing-plans'
              variant='contained'
              color='primary'
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
      <div
        className={classnames('relative text-center', frontCommonStyles.layoutSpacing, { 'plb-6': isAboveLgScreen })}
        style={{ transform: isAboveLgScreen ? transform : 'none', transformStyle: 'preserve-3d' }}
      >
        <Link href='/' target='_blank' className='block relative' style={{ transformStyle: 'preserve-3d' }}>
          <img src={dashboardImage} alt='dashboard-image' className={styles.heroSecDashboard} />
          <div className={styles.heroSectionElements}>
            <img src={elementsImage} alt='dashboard-elements' />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
