import ReactApexChart from 'react-apexcharts'
import { Box, Typography, Stack } from '@pankod/refine-mui'
import { ArrowCircleUpRounded } from '@mui/icons-material'
import { TotalRevenueOptions } from './charts.config'
import { TotalRevenueSeries } from './charts.config'


const TotalRevenue = () => {
  return (
    <Box p={4} flex={1} bgcolor='#fcfcfc' id='chart' display='flex' flexDirection='column' borderRadius='15px'>
      <Typography fontSize={18} fontWeight={600} color='#11142d'>
        Total Revenue
      </Typography>

      <Stack my={20} direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color='#11142d'> $236,535</Typography>

        <Stack>
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: '#475be8' }} />

          <Stack>

            <Typography fontsize={15} > 0.8% </Typography>


          </Stack>


        </Stack>

      </Stack>

    </Box>
  )
}

export default TotalRevenue