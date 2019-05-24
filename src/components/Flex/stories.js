import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Flex from './Flex'
import Button from '../Button'
import Container from '../Container'

storiesOf('Flex')
    .add('flexbox justifyAround', () => (
        <Flex justifyAround>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
        </Flex>
    ))
    .add('flexbox noWrap', () => (
        <Flex noWrap>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
        </Flex>
    ))
    .add('flexbox justify', () => (
        <Flex justifyAround>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
            <Container Full small testColor>
                <Button>butter</Button>
                <Button>on toast</Button>
                <Button>is nice</Button>
            </Container>
        </Flex>
    ))