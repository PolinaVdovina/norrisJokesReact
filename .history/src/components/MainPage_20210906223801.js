import '../styles/style.scss'
import React from 'react';
import { JokeCard } from './JokeCard';
import { MoreButton } from './MoreButton';
import { connect, useDispatch } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import { FetchJokes } from '../store/actionCreators/action';

const MainPageRaw = (props) => {
    const dispatch = useDispatch();

    const loadJoke = () => {
        dispatch(FetchJokes());
    }
    
    return(
        <div class="page">
            {props.loading 
                ? <p>Loading...</p> 
                : props.error
                    ? <p>Error, try again</p>
                    : <div>
                        <MoreButton loadJoke={loadJoke}/>
                        {props.norrisJokes.map(joke => 
                            <JokeCard text={joke}/>
                        )} 
                    </div> 
            }              
        </div>
    )
}

export const MainPage = connect(mapStateToProps("MainPage"), mapDispatchToProps("MainPage"))(MainPageRaw);

