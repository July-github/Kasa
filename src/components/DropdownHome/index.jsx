import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import PropTypes from 'prop-types'
import { useState } from 'react';


const DescriptionContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 45%;
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
    left: 90%;
    font-size: 30px;
    color: ${Colors.secondary};
    z-index: 3;
    &:hover{
        cursor: pointer;
    }
`

const DescriptionDetails = styled.div`
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
const EquipUl = styled.ul`
    padding: 0;
`

const EquipLines = styled.li`
    list-style: none;
`

function DropDetail({description, equipments, detailType}){
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const Text = detailType === 'description' ? 'Description' : 'Équipements'
    const TextDetails = detailType === 'description' ? description : (<EquipUl>{equipments.map((equipment) => <EquipLines>{equipment}</EquipLines>)}</EquipUl>)

    return (
        <DescriptionContainer>
            <DropWrap>
                {Text}
                {isOpen ? <Icon onClick={toggle}><BiChevronUp /></Icon> : <Icon onClick={toggle}><BiChevronDown /></Icon>}
            </DropWrap>
            {isOpen && (<DescriptionDetails>{TextDetails}</DescriptionDetails>)}
        </DescriptionContainer>
    )}

DropDetail.propTypes = {
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string.isRequired)
}

DropDetail.defaultProps = {
    description: 'pas de description',
    equipments: ''
}

export default DropDetail