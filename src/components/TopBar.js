import React from 'react'
import { AppBar, Box, Typography, Tooltip } from '@mui/material';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailIcon from '@mui/icons-material/Email';

const TopBar = () => {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: 'rgba(30, 130, 76,1)' }}>
                <Box style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ padding: "15px" }}>
                        Nusrat Jahan
                        <Typography variant="caption" component="div">
                            <EmailIcon sx={{ fontSize: 12 }} /> nusratjahan1535@gmail.com
                        </Typography>
                        <Typography variant="caption" component="div">
                            <LocalPhoneRoundedIcon sx={{ fontSize: 12 }} /> 01766516039
                        </Typography>
                    </Typography>
                    <Typography variant="h6" component="div" style={{ padding: "15px" }}>
                        <Tooltip title="Linkedin Profile">
                            <a href='https://www.linkedin.com/in/nusratjahan35/'>
                                <i class="fab fa-linkedin" style={{ marginRight: "8px", color: 'white' }}></i>
                            </a>
                        </Tooltip>
                        <Tooltip title="Github Profile">
                            <a href='https://github.com/nusrat35' style={{ marginRight: "8px", color: 'white' }}><i class="fab fa-github-square"></i></a>
                        </Tooltip>
                        <Tooltip title="Facebook Profile">
                            <a href='https://web.facebook.com/nusratjahan1535' style={{ color: 'white' }}><i class="fab fa-facebook-square" ></i></a>
                        </Tooltip>
                    </Typography>
                </Box>
            </AppBar>
        </>
    )
}
export default TopBar;