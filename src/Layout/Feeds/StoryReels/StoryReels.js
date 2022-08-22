import React from 'react'
import './StoriesReels.css'
import Story from './Story/Story'
import story1 from '../../../images/story1.jpg'
import story2 from '../../../images/story2.jpg'
import story3 from '../../../images/story3.jpg'
import story4 from '../../../images/story4.jpg'


const Stories = () => {
    return (
        <div className='storiesReels'>
            <Story
                image={story1}
                profileSrc='https://avatars.githubusercontent.com/u/103167179?v=4'
                title='Ana' />
            <Story
                image={story2}
                profileSrc='https://avatars.githubusercontent.com/u/103167179?v=4'
                title='Roxy' />
            <Story
                image={story3}
                profileSrc='https://avatars.githubusercontent.com/u/103167179?v=4'
                title='Adam' />
            <Story
                image={story4}
                profileSrc='https://avatars.githubusercontent.com/u/103167179?v=4'
                title='Peter' />

        </div>
    )
}

export default Stories