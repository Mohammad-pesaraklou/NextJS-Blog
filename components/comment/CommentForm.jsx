import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { submitComment } from '../../services';
// style
import styles from '../../styles/CommentForm.module.css';

const CommentForm = ({ slug }) => {



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
            setTimeout(() => {
                setError(false)
            }, 4000)
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
                    formData.name = '';
                    formData.email = '';
                    setFormData((prevState) => ({
                        ...prevState,
                        ...formData,
                    }));
                    setSuccessMsg(true);
                    setTimeout(() => {
                        setSuccessMsg(false);
                    }, 4000);
                }
            });

    };





    return (
        <Container>
            <Grid className={styles.cardContainer} container sx={{
                borderRadius: 4,
                mt: { xs: 0, md: 4.2 },
                background: "#ecececed",
                p: 4,
                maxWidth: { xs: '350px', md: '400px' }

            }}>

                <Grid item xs={12} mb={4} className={styles.headerContainer}>
                    <Typography variant="h5" color={successMsg ? 'green' : "#413f3e"} fontWeight={700}
                        sx={{
                            mb: 3,
                            ml: 1,
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            fontFamily: 'Josefin Sans',

                        }}>
                        Send Comment
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <input className={styles.input} name="name" value={formData.name} onChange={onChangHandler} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <input className={styles.input} name="email" value={formData.email} onChange={onChangHandler} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <textarea className={styles.input} style={{ minHeight: '80px' }} name="text" value={formData.text} onChange={onChangHandler} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    {error && <Alert sx={{ fontFamily: 'Josefin Sans' }} severity="error" color="error">
                        All Fields are Mandatory
                    </Alert>}
                </Grid>
                <Grid item xs={12} my={successMsg ? 4 : 0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        successMsg && <Alert sx={{ fontFamily: 'Josefin Sans' }} severity="success" color="success">
                            Your Comment Send SuccessFully, Please Wait for Confirmation
                        </Alert>
                    }
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        <Button variant='contained' onClick={submitHandler} color={successMsg ? 'success' : 'secondary'} sx={{ width: '150px', fontFamily: 'Josefin Sans', mt: 3 }}>
                            Send
                        </Button>
                    }
                </Grid>

            </Grid >
        </Container>
    );
};

export default CommentForm;