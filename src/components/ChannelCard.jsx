import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop, linkToMyself }) => (

   
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            marginTop,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Link to={
            linkToMyself != '' ? linkToMyself : `/chanel/${channelDetail?.id?.channelId}`
        } >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: '#fff'
                }}
            >
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{
                        borderRadius: '50%',
                        width: '180px',
                        height: '180px',
                        marginLeft: 5.5,
                        marginRight: 5.5,
                    }}
                />
                <Typography
                    variant='h6'
                >
                    {channelDetail?.snippet?.title.slice(0,18)}
                    <CheckCircleIcon
                        sx={{ fontSize: 14, color: 'red', ml: '5px' }}
                    />
                </Typography>
                {channelDetail?.statistics?.subscribeCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscribeCount)
                            .toLocaleString()
                        } Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
)

export default ChannelCard