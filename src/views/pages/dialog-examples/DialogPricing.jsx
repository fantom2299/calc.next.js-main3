// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Component Imports
import PricingDialog from '@components/dialogs/pricing'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogPricing = ({ data }) => {
  // Vars
  const buttonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='bx-dollar-circle text-[34px] text-textPrimary' />
          <Typography variant='h5'>Pricing</Typography>
          <Typography color='text.primary'>
            Elegant pricing options dialog popup example, easy to use in any page.
          </Typography>
          <OpenDialogOnElementClick
            element={Button}
            elementProps={buttonProps}
            dialog={PricingDialog}
            dialogProps={{ data }}
          />
        </CardContent>
      </Card>
    </>
  )
}

export default DialogPricing
