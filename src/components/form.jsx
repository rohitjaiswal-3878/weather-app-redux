
import { useDispatch,useSelector } from "react-redux";
import { updatePlace,updatePlaceData } from "../actions/action";
const Form = () => {
    const dispatch= useDispatch();
    const place =useSelector(state => state.place);
    const theme = useSelector(state => state.theme);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12  form">
                    <input type="text"  value={place} onChange={(e)=>{
                        dispatch(updatePlace(e.target.value));
                    }}/>
                    <button className={theme ? "btn btn-light" : "btn btn-dark"} onClick={
                        () =>{
                            dispatch(updatePlaceData(place));
                        }
                    }>submit</button>
                </div>
            </div>
        </div>
    )

}
export default Form;