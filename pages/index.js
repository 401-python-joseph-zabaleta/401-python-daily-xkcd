import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home(props) {
    return (
    <div className="container">
        <Nav />
        <h1>XKCD</h1>

        <h3>{props.comics.title}</h3>
        <img src={props.comics.img} alt={props.comics.alt}></img>

        <Footer comicNum={props.comics.num} />
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
                    border: solid 1px #DDD;
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


export async function getServerSideProps() {
    const response = await fetch('https://xkcd.com/info.0.json');

    const data = await response.json();

    return {
        props: {
            comics: data, 
        }
    }
}