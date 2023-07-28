import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle
} from "../utils/constants";

const VideoCard = ({ video: { id: videoId, snippet } }) => {

    return (
        <Card variant='' sx={{ width: {md: '300px', xs: '100%'}, boxShadow: 3 , borderRadius: 3}}>
            <Link to={videoId ? `/video/${videoId.videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 300, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '30px' }}>
                <Link to={videoId ? `/video/${videoId.videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#FFF' >
                        {snippet?.title.slice(0, 27)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray' >
                        {snippet?.channelTitle.slice(0, 27) || demoChannelTitle}
                        <CheckCircleIcon sx={{ fontSize: 12, color: 'red', ml: '5px' }}/> 
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard