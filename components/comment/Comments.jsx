import { useEffect, useState } from "react";
import { Avatar, Grid, Typography, Container } from "@mui/material";
// data
import { getComments } from "../../services";
// style
import styles from '../../styles/CommentForm.module.css';



const Comments = ({ slug }) => {

    const [comments, setComments] = useState(null)

    useEffect(() => {
        getComments(slug).then(res => {
            setComments(res.comments)
        })
    }, [])

    return (
        <Container>
            <Grid container spacing={1} sx={{
                borderRadius: 4,
                mt: 5,
                ml: { xs: .1, md: 0 },
                background: "#ecececed",
                p: 4,
                maxWidth: { xs: '350px', md: '400px' },
                minHeight: 500,
                mb: 5
            }}>
                <Grid item xs={12}>
                    <Grid item xs={12} mb={4} className={styles.headerContainer}>
                        <Typography variant="h5" color={"#413f3e"} fontWeight={700}
                            sx={{
                                mb: 3,
                                ml: 1,
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                fontFamily: 'Josefin Sans',
                            }}>
                            Comments
                        </Typography>
                    </Grid>
                    {
                        comments?.map(item => {
                            return (
                                <div className={styles.commentContainer}>
                                    <Avatar sx={{ width: '50px', height: '50px' }} />
                                    <div className={styles.commentTxt}>
                                        <h3 className={styles.cmName}>{item.name}</h3>
                                        <Typography sx={{ fontFamily: 'Josefin Sans' }} variant="body1" color={"rgb(43, 42, 42)"}>
                                            {item.text}
                                        </Typography>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Grid>
            </Grid >
        </Container>
    );
};

export default Comments;