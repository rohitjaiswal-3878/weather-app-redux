import { useSelector } from "react-redux";
const Card = () => {
    const placeholder = useSelector((state) => state.placeholder);
    const theme = useSelector(state => state.theme);
    console.log(placeholder)
    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-4 col-4 weather">
                    <div className={theme?"card dark":"card"} style={{ borderRadius: "50px" }}>
                        {placeholder.location ? <div>

                            <img src={placeholder.current.condition.icon} alt="icon" style={{ opacity: "100%" }}></img>
                            <div className="temp">{placeholder.current.temp_c}°</div>
                            <div className="desc">{placeholder.current.condition.text}</div>
                            <div className="place">{placeholder.location.name}</div>
                            <div className="container">
                                <div className="row whp">
                                    <div className="col">
                                        <div className="title">Wind Now</div>
                                        <div className="data">{placeholder.current.wind_kph}<span className="unit">km</span></div>
                                    </div>
                                    <div className="col">
                                        <div className="title">Humidity</div>
                                        <div className="data">{placeholder.current.humidity}<span className="unit">%</span></div>
                                    </div>
                                    <div className="col">
                                        <div className="title">Precipitation</div>
                                        <div className="data">{placeholder.current.precip_in}<span className="unit">%</span></div>
                                    </div>
                                </div>
                            </div>


                        </div> : <h1>not found!</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;