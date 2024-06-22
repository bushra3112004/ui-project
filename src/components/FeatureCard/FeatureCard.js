import { footerDetails, theme } from "../../data"
import "./FeatureCard.css"

function FeatureCard({title,img}){
    return(
        <div className="feature-card" style={{backgroundColor:theme.primaryDark}}>
            <img src={img}  alt={title} className="feature-img" />
            <p className="feature-title">{title}</p>
            
        </div>
    )
}

export default FeatureCard