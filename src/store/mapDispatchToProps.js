import { bindActionCreators } from "redux";
import { SaveJoke } from "./actionCreators/action";

function mapDispatchToProps(component) { 
    switch(component) {
        case "MainPage": return function(dispatch) {
            return {
                jokes: bindActionCreators(SaveJoke, dispatch)
            };
        };
        default: return undefined;
    }
}

export default mapDispatchToProps;