import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Flex from '../Flex'
import Button from '../Button'
import Container from '../Container'
import Card from './Card'

storiesOf('Card')
    .add('Card', () => (
        <Flex>
            <Card primary>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
        </Flex>
    ))
    .add('Big Card', () => (
        <Flex>
            <Card primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary big>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
						<Card primary big>
								<h1>Lorem ipsum dolor amet cliche</h1>
								umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
        </Flex>
        ))    .add('Delayed Card', () => (
        <Flex>
            <Card primary delay={500}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary delay={600}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary delay={700}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary delay={800}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary delay={900}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
            <Card primary delay={1000}>
                Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
            </Card>
        </Flex>
		))    .add('Themed cards', () => (
			<Flex>
					<Card>
							<h2>standard</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Card>
					<Card primary>
							<h2>primary</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Card>
					<Card inf>
							<h2>INF</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Card>
					<Card mat>
							<h2>MAT</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Card>
					<Card dat>
							<h2>DAT</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Card>
					<Card mnf>
							<h2>MNF</h2>Lorem ipsum dolor amet cliche umami hell of, pork belly master cleanse biodiesel air plant. Quinoa tumblr VHS kogi microdosing normcore. Portland paleo normcore kinfolk viral bitters, mlkshk chartreuse ennui photo booth. Brooklyn master cleanse shoreditch, marfa williamsburg hashtag heirloom activated charcoal 3 wolf moon ugh intelligentsia DIY synth hot chicken 8-bit.
					</Card>
			</Flex>
	));
