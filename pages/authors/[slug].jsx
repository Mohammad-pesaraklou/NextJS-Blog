// components
import AuthorCard from '../../components/Author/AuthorCard';
// data
import { getAuthors, getAuthorsDetails } from '../../services';

const AuthorDetails = ({ data }) => {


    return (
        <div>
            <AuthorCard data={data} />
        </div>
    );
};


export default AuthorDetails;

export async function getStaticProps({ params }) {
    const data = await getAuthorsDetails(params.slug)
    return {
        props: {
            data
        }
    }
}

export async function getStaticPaths() {
    const data = (await getAuthors()) || [];

    const paths = data.authors.map(item => {
        return {
            params: {
                slug: item.slug
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}
