import "./Home.css"
import{siteDetails,features, theme,footerDetails} from "./../../data"
import FeatureCard from "./../../components/FeatureCard/FeatureCard";

function Home(){
    return (
        <div className="card">
            <h1 style={{color:theme.primary}}>
                 {siteDetails.title}
            </h1>
            <p className="product-desc">Description:{siteDetails.description}</p>
            <div className="features">
                Feature:
                {
                    features.map((features,i)=>{
                        const {title,img}= features
                        return(
                            <div>
                                <FeatureCard key={i} title={title} img={img}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
               <p className="address" style={{color:theme.secondary}}>Footer={footerDetails.address}</p>
            </div>
        </div>
    );
}
export default Home