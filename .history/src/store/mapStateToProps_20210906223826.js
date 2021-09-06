function mapStateToProps(component) {
    switch(component) {
        case "MainPage": {
            return (state) => {
                return {
                    norrisJokes: state.jokes,
                    loading: state.loading,
                    error: state.error
                };
            }
        }
        default: return undefined;
    }
}

export default mapStateToProps;