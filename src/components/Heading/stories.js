import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Heading from './Heading';
import Container from '../Container'
import Flex from '../Flex';

storiesOf('Heading')
	.add('Headings overview', () => (
        <Container>
            <Heading h1>
                This is heading one
            </Heading>
            <Heading h2>
                This is heading two
            </Heading>
            <Heading h3>
                This is heading three
            </Heading>
            <Heading h4>
                This is heading four
            </Heading>
            <Heading h5>
                This is heading five
            </Heading>
        </Container>
    ))