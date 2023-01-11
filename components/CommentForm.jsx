import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { submitComment } from '../services';
// style
import styles from '../styles/CommentForm.module.css';

const CommentForm = ({ slug }) => {

    const router = useRouter()


    const [formData, setFormData] = useState({ name: '', email: '', text: '' });
    const [error, setError] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)

    const onChangHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const submitHandler = () => {
        setError(false);
        const { name, email, text } = formData;
        if (!name || !email || !text) {
            setError(true);
            return;
        }
        const commentObj = {
            name,
            email,
            text,
            slug,
        };


        submitComment(commentObj)
            .then((res) => {
                if (res.createComment) {
                    formData.text = '';
                    setFormData((prevState) => ({
                        ...prevState,
                        ...formData,
                    }));
                    setSuccessMsg(true);
                    setTimeout(() => {
                        setSuccessMsg(false);
                    }, 3000);
                }
            });
    };

    return (
        <Container>
            <Grid className={styles.cardContainer} container sx={{
                boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
                borderRadius: 4,
                mt: 5,
                background: "#ecececed",
                p: 4,
                maxWidth: { xs: '350px', md: '400px' }

            }}>
                <Grid item xs={12}>
                    <Typography variant="h5" color="textPrimary" fontWeight={700}
                        sx={{
                            ml: 3,
                            mt: 3
                        }}>
                        Send Comment
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <input name="name" value={formData.name} onChange={onChangHandler} />
                    {/* <TextField
                    label={<Typography variant="p" component="p"
                        onChange={(e) => setFormDataonChangHandler)}
                    >
                        User Name
                    </Typography>}
                    color='warning'
                    sx={{ width: "800px", mt: 8 }}
                /> */}
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    {/* <TextField
                    label={<Typography variant="p" component="p"
                        onChange={(e) => setFormData(onChangHandler)}
                    >
                        Email
                    </Typography>}
                    color='warning'
                    sx={{ width: "800px", mt: 5 }}
                /> */}
                    <input name="email" value={formData.email} onChange={onChangHandler} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    {/* <TextField
                        label={<Typography variant="p" component="p" value={text}
                            onChange={(e) => setFormData(onChangHandler)}
                        >
                            Comment Text
                        </Typography>}
                        multiline
                        rows={5}
                        color='warning'
                        sx={{ width: "800px", mt: 5, mb: 8 }}
                    /> */}
                    <input name="text" value={formData.text} onChange={onChangHandler} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        <Button variant='contained' onClick={submitHandler} color="warning" sx={{ width: '150px', fontFamily: 'Josefin Sans' }}>
                            Send
                        </Button>
                    }
                </Grid>  <Grid item xs={12} sx={{ ml: 7, mb: 4 }}>
                </Grid>
            </Grid >
        </Container>
    );
};

export default CommentForm;