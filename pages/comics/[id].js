import Nav from '../../components/Nav'

export default function ComicDetail(props) {
    return (
        <div className="container">
            <Nav />
            <h1>{props.comic.title}</h1>
            <img src={props.comic.img} alt={props.comic.alt}></img>
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

export async function getServerSideProps(context) {
    const num = context.query.id;
    const response = await fetch(`http://xkcd.com/${num}/info.0.json`);
    const comic = await response.json();
    return {
        props: {
            comic
        }
    }
}