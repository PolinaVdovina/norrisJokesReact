export const MoreButton = (props) => {
    const buttonHandler = () => {
        props.loadJoke();
    }

    return(
        <button 
            class="more-button card border"
            onClick={buttonHandler}
        >
            MORE!!!!
        </button>
    )
}
