import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'
// styles
import styles from '../styles/Landing.module.css';
import { slicer } from '../helper/functions';

const LandingPosts = ({ mainPosts }) => {

    console.log(mainPosts);

    return (
        <div className={styles.container}>
            {
                mainPosts?.map(item => {
                    return (
                        <Card sx={{ maxWidth: 545, mb: 3, mt: 5 }} key={item.id} >
                            <CardMedia
                                sx={{ height: 300 }}
                                image={item?.photoCover.url}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item?.title}
                                </Typography>
                                <p dangerouslySetInnerHTML={{ __html: slicer(item.text.html) }}>

                                </p>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </div >
    );
};

export default LandingPosts;