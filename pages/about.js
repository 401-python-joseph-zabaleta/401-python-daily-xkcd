import Nav from '../components/Nav'

export default function About() {
    return (
        <div className="container">
            <Nav />
            <h1>About Page</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at semper eros, sed cursus urna. In non metus sit amet dui elementum porta. Proin dolor mauris, pellentesque id sollicitudin nec, egestas sed dolor. Cras accumsan turpis vitae est sodales hendrerit. Vestibulum mattis a magna hendrerit luctus. Suspendisse facilisis iaculis libero, eu lacinia lorem sodales quis. Proin at mollis libero. Mauris varius nisl non ipsum tincidunt rhoncus. Vivamus ullamcorper odio ut velit aliquet, nec volutpat mi suscipit. Nunc et mattis felis. Morbi nisl tortor, vestibulum ac maximus eu, pretium ac nisl. Mauris quis mollis odio. Sed ultrices dignissim risus, id vulputate dui varius in. Fusce sit amet justo nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec in lorem at neque blandit blandit a ac magna.
            </p>
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