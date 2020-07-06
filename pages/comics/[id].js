export default function ComicDetail(props) {
    return <h1>Comic Detail Page Single: {props.comic.name}</h1>
}

export async function getServerSideProps(context) {
    const response = await fetch(`http://localhost:3000/api/comics/${context.params.id}`);
    const comic = await response.json();
    return {
        props: {
            comic
        }
    }
}