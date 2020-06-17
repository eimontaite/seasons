import './SeasonDisplay.css';
import React  from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        icon: 'sun outline massive icon'
    },
    winter: {
        text: 'Burr, it\'s chilly!',
        icon: 'snowflake outline massive icon'
    }
}

const determineSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter'
    } else {
        return latitude > 0 ? 'winter' : 'summer'

    }

}

const SeasonDisplay = props => {
    const season = determineSeason(props.latitude, new Date().getMonth());

    const { text, icon } = seasonConfig[season];

    return (
            <div className={`season-display ${season}`}>
                <i className={`icon-left ${icon}`} />
                <h1>{text}</h1>
                <i className={`icon-right ${icon}`} />
            </div>
            )
}

export default SeasonDisplay;