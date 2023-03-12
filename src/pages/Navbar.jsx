import { Fullscreen } from '@mui/icons-material';
import { Grid, ListItem, styled, IconButton, useTheme, Typography, colors } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const theme = useTheme();

    const GridBase = styled(Grid)(({ theme }) => ({
        width: '100%',
        height: '60px',
        alignItems: 'center',
        backgroundColor: '#3AA2BF',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontStyle: 'white',
    }))


    return (
        <GridBase
            container
            fontFamily={'Poppins'}
        >
            <Grid xs={6} md={1} >
                <ListItem>
                    <MenuIcon

                    />
                </ListItem>
            </Grid>
            <Grid xs={6} md={3}>
                <ListItem>
                    <Typography
                        sx={{
                            color: 'white',
                            fontWeight: '600',
                        }}>
                        MUDIK SEHAT BERSAMA BUMN</Typography>
                </ListItem>
            </Grid>
        </GridBase >
    )
}

export default Navbar