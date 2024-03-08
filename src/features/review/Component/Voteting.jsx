import { Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import React from 'react'

export default function Voteting({value}) {
  return (
    <Rating
    name='text-feedback'
    value={value}
    readOnly
    precision={0.5}
    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
    size='large'
  />
  )
}
