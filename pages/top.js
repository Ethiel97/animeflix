
import { getTopAnimes } from '../network/requests';

export default function Top({ topAnimes }) {

}

export async function getServerSideProps(context) {
    const { data } = await getTopAnimes()

    return {
        props: {
            topAnimes: data,
        }
    }
}
