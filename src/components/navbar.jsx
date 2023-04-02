import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {Stack,IconButton} from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const cartCount=useSelector(state=>state.store.cartCount)
  return (
<div className='navbar'>
<Stack spacing={2} direction="row" className='stack'>
  <IconButton>
    <Link to="/"><StorefrontIcon/></Link>
  </IconButton>
  <IconButton color='secondary'>
    <Link to='/cart'><ShoppingCartIcon/><sup>{cartCount}</sup></Link>
  </IconButton>
</Stack>
</div>
  )
}
