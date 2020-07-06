import Link from 'next/link'

export default function Footer(props) {
    
    const currentNum = props.comicNum;
    const nums = [];

    for (let i = currentNum; i > currentNum - 10; i--) {
        nums.push(i)
    }

    

    return (
        <footer>
            <h3>Previous {nums.length}</h3>
            <ul>
                {nums.map(num => (
                    <li key={num}>
                        <Link href="/comics/[id]" as={`/comics/${num}`}>
                            <a>
                                # {num}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
            
        </footer>
    )
}