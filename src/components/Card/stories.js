import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Flex from '../Flex'
import Button from '../Button'
import Container from '../Container'
import Card from './Card'

storiesOf('Card')
    .add('Card', () => (    
        <Card primary>
            Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
        </Card>
    ))
    .add('Big Card', () => (    
        <Card primary big>
            Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
        </Card>
    ))    .add('Delayed Card', () => (    
        <Card primary delay={1000}>
            Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
        </Card>
    ));