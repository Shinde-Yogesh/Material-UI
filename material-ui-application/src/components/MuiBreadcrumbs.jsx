import {Box, Breadcrumbs, Typography} from '@mui/material'
export const MuiBreadcrumbs = () => {
    return (
        <Box m={2}>
            <Breadcrumbs aria-label="breadcrumb" separator=">"
            maxItems={2}
            itemsBeforeCollapse={2}>
                <a underline="hover" href="#">Home</a>
                <a underline="hover" href="#">Catalog</a>
                <a underline="hover" href="#">Accessories</a>
                <Typography color="text.primary">Shoes</Typography> 
            </Breadcrumbs>
        </Box>
    )
}
// max are8 and start from 1 index
