import "./Home.css"
import{siteDetails,features} from "./../../data"

function Home(){
    return (
        <div className="card">
            <h1>{siteDetails.title}</h1>
            <p>{siteDetails.description}</p>
            <div className="feature">
                {
                    features.map((features,i)=>{
                        const {title,img}= features
                        return(
                            <div>
                                <img src={img} alt={title}/>
                                <p>{title}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}
export default Home