import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Flex from '../Flex'
import Button from '../Button'
import Container from '../Container'
import Tags from './Tags'

storiesOf('Tags')
    .add('Tags', () => (
        <Flex>
            <Tags primary>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
        </Flex>
    ))
    .add('Big Tags', () => (
        <Flex>
            <Tags primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
						<Tags primary big>
								<h1>Lorem ipsum dolor amet cliche</h1>
								umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
        </Flex>
        ))    .add('Delayed Tags', () => (
        <Flex>
            <Tags primary delay={500}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary delay={600}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary delay={700}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary delay={800}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary delay={900}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
            <Tags primary delay={1000}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Tags>
        </Flex>
		))    .add('Themed cards', () => (
			<Flex>
					<Tags>
							<h2>standard</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Tags>
					<Tags primary>
							<h2>primary</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Tags>
					<Tags inf>
							<h2>INF</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Tags>
					<Tags mat>
							<h2>MAT</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Tags>
					<Tags dat>
							<h2>DAT</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Tags>
					<Tags mnf>
							<h2>MNF</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Tags>
			</Flex>
	));
