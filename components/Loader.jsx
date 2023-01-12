import { CircularProgress } from '@mui/material'
const Loader = () => {
    return (
        <div>
            <CircularProgress color="warning" size="lg" />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;