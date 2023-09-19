import React from 'react'
import TrendingHotRow from './trendingHotRow'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'

const rows = ['Movie Reviews', 'Trailers', 'News', 'Articles']

export default function TrendingHot() {
  return (
    <Box sx={{ border: '1px solid lightgray', mt: 4 }}>
      <Typography
        variant="h6"
        color={'white'}
        align="center"
        margin={'10px'}
        bgcolor={'black'}
        fontSize={16}
      >
        <LocalFireDepartmentIcon sx={{ color: 'orange' }} />
        TRENDING HOT
      </Typography>
      {rows.map((row, index) => (
        <Box key={index}>
          <TrendingHotRow row={row} />
        </Box>
      ))}
    </Box>
  )
}
