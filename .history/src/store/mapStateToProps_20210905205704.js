function mapStateToProps(component) {
    switch(component) {
        case "MainPage": {
            return (state) => {
                return {
                    norrisJokes: state.jokes
                };
            }
        }
        default: return undefined;
    }
}

export default mapStateToProps;