import '../styles/style.scss'
import React from 'react';
import { JokeCard } from './JokeCard';
import { MoreButton } from './MoreButton';
import { connect, useDispatch } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import { SaveJoke } from '../store/actionCreators/action';

const axios = require('axios').default;

const MainPageRaw = (props) => {
    const dispatch = useDispatch();

    const loadJoke = () => {
        axios.get("https://api.chucknorris.io/jokes/random").then(response => 
            dispatch(SaveJoke([...props.norrisJokes, response.data.value]))
        );
    }
    
    return(
        <div class="page">
            <MoreButton loadJoke={loadJoke}/>
            {props.norrisJokes.map(joke => 
                <JokeCard text={joke}/>
            )}                
        </div>
    )
}

export const MainPage = connect(mapStateToProps("MainPage"), mapDispatchToProps("MainPage"))(MainPageRaw);

