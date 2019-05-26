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

const StyledTags = styled.div`
		font-family: Arial;
		font-size: 12px;
		font-weight: bold;
		position: relative !important;
		float: left;
		padding: 1em 1em;
		margin: 0 1em 1em 0;
    opacity: 0;
    transform: translateY(50px);
    transition: 50ms all ease-in-out;
		border-radius: 10px;
    ${props => props.animated && animatedCss}
		${props => props.primary && primaryCss}
		${props => props.inf && infCss}
		${props => props.mat && matCss}
		${props => props.dat && datCss}
		${props => props.mnf && mnfCss}
`

class Tags extends React.Component {
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

export default Tags
