import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import PropTypes from 'prop-types'
import { useState } from 'react';


const DropContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 80%;
    z-index: 1;
    `

const DropWrap = styled.div`
    display: flex;  
    color: ${Colors.secondary};
    background-color: ${Colors.primary};
    height: 52px;
    width: 100%;
    border-radius: 10px;
    margin-top: 40px;
    font-size: 18px; 
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

const Icon = styled.div`
    position: absolute;
    top : 50px;
    left: 95%;
    font-size: 30px;
    color: ${Colors.secondary};
    z-index: 3;
    &:hover{
        cursor: pointer;
    }
`

const TextDetailsWrap = styled.div`
    width: 100%;
    background-color: ${Colors.tertiary};
    color: ${Colors.primary};
    font-size: 18px;
    min-height: 250px;
    padding: 35px 25px;
    box-sizing: border-box;
    line-height: 26px;
    font-weight: 400;
    border-radius: 10px;
    margin-top: -5px;
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
`

function DropDetail({detailTitle, detailType}){
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <DropContainer>
            <DropWrap>
                {detailTitle}
                {isOpen ? <Icon onClick={toggle}><BiChevronUp /></Icon> : <Icon onClick={toggle}><BiChevronDown /></Icon>}
            </DropWrap>
            {isOpen && (<TextDetailsWrap>{detailType}</TextDetailsWrap>)}
        </DropContainer>
    )}

DropDetail.propTypes = {
    description: PropTypes.string.isRequired,
    detailType: PropTypes.string.isRequired
}

DropDetail.defaultProps = {
    description: '',
    detailType: ''
}

export default DropDetail