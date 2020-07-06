import Link from 'next/link'
import Nav from '../components/Nav'

export default function Home(props) {
    return (
    <div className="container">
        <Nav />
        <h1>XKCD</h1>
        <ul>
            {props.comics.map(comic => <ComicItem comic={comic} />)}
        </ul>

        <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }

                .container {
                    border: solid thin black;
                    margin: 2%;
                    padding: 20px;
                }
                
                ul {
                    padding: 0px;
                }

                li {
                    list-style: none;
                    display: inline;
                    padding-right: 15px
                }
                

            `}</style>
    </div>
    )
}

function ComicItem(props) {
    return (
        <li key={props.comic.id}>
            <Link href="/comics/[id]" as={`/comics/${props.comic.id}`}>
            <a>
                {props.comic.name}
            </a>
            </Link>
        </li>
    )
}

export async function getStaticProps() {
    const url = 'http://localhost:3000/api/comics';
    const response = await fetch(url);
    const comics = await response.json();

    return {
        props: {
            comics: comics,
        }
    }
}   