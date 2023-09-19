import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const cards = ['card1', 'card2', 'card3']

interface TrendingHotRowProps {
  row: string // Define the type of the row prop
}

export default function TrendingHotRow({ row }: TrendingHotRowProps) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          margin: '16px',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: `space-evenly`,
        }}
      >
        {cards.map((card, index) => (
          <Box key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlRnalLvKNKpdmJxQqOYDCml5SoKkcq4g-g&usqp=CAU"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  )
}
