import { Link, Stack } from "@mui/material";
export const MuiLinks = () => {
    return (
        <Stack spacing={2} direction="row" sx={{ p: 2, bgcolor: 'background.paper' }}>
            <Link href="#simple-link">Simple link</Link>    
{/*             on cursor over link is visiable */}
            <Link href="#" color="inherit">
                Inherited color link
            </Link>
            <Link href="#" variant="body2"> Body link</Link>
            <Link href="#" variant="body2" underline="hover"> OnHover</Link>
        </Stack>
    );
}
