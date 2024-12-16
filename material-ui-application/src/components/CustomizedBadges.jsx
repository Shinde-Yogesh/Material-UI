import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import Box from '@mui/material/Box';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CartContainer = styled(Box)(({ position }) => ({
  position: 'absolute',
  top: '50%', // Center vertically
  left: position, // Controlled dynamically
  transform: 'translateY(-50%)',
  transition: 'left 1s ease-in-out', // Smooth animation
}));

export default function CustomizedBadges() {
  const [position, setPosition] = useState(0);

  const handleClick = () => {
    setPosition((prev) => {
      // Move the cart only if it's within the container (max 90%)
      const newPosition = prev + 50; // Increment position by 50px
      return newPosition <= 90 ? newPosition : 90; // Limit movement to 90% of container
    });
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="300px"
      bgcolor="#FAD2CF"
      overflow="hidden" // Prevent overflow beyond the container
    >
      {/* Road background simulation */}
      <CartContainer position={`${position}%`} onClick={handleClick}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon style={{ fontSize: 50, color: '#202124' }} />
          </StyledBadge>
        </IconButton>
      </CartContainer>
    </Box>
  );
}
