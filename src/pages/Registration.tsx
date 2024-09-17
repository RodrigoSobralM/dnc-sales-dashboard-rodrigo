import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  Logo,
  // StyledUl,
} from '@/components'
import { pxToRem } from '@/utils'

const Registration = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Faça o seu cadastro</StyledH1>
                <StyledP>Primeiro, diga-nos quem você é.</StyledP>
              </Box>
              <FormComponent
                inputs={[
                  { type: 'text', placeholder: 'Nome completo' },
                  { type: 'email', placeholder: 'Email' },
                  { type: 'number', placeholder: 'Telefone' },
                ]}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    children: 'cadastro',
                  },
                ]}
                message={{
                  msg: 'ERRO!!',
                  type: 'error',
                }}
              />
            </Container>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
