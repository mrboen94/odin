import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const animatedCss = css`
    opacity: 1;
    transform: translateY(0);
`

const primaryCss = css`
    background-color: #008bf8;
    color: #fff;
`

const infCss = css`
		background-color: #e500ce;
		color: #fff;
`

const matCss = css`
		background-color: #e50003;
		color: #fff;
`

const datCss = css`
		background-color: #00e557;
		color: #fff;
`

const mnfCss = css`
		background-color: #161616;
		color: #fff;
`

const StyledCard = styled.div`
    width: ${props => (props.big ? '450px' : '300px')};
    padding: 15px;
    opacity: 0;
    transform: translateY(50px);
    transition: 250ms all ease-in-out;
    margin: ${props => (props.noMargin ? 0 : '15px')};
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
    border-radius: 2px;
    ${props => props.animated && animatedCss}
		${props => props.primary && primaryCss}
		${props => props.inf && infCss}
		${props => props.mat && matCss}
		${props => props.dat && datCss}
		${props => props.mnf && mnfCss}
`

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animated: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => {
                return { animated: true }
            })
        }, this.props.delay)
    }

    render() {
        const { delay = 0, noAnimation, primary, inf, mat, dat, mnf, noMargin, big, ...props } = this.props
        return (
            <StyledCard
                animated={this.state.animated}
                delay={delay}
								primary={primary}
								inf={inf}
								mat={mat}
								dat={dat}
								mnf={mnf}
                noAnimation={noAnimation}
                big={big}
                noMargin={noMargin}
                {...props}
            />
        )
    }
}

export default Card
