import {Link} from 'react-router-dom'
function Index(){

    return(
        <div className="bg-black">
        <div className="h-screen text-white">
            {/* <nav>
                <Link>
                </Link>
            </nav> */}
            <img src={require("./programmer.png")} alt="Logo" />
        </div>
        </div>
    )
}

export default Index;