import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import PropTypes from 'prop-types'
import { useState } from 'react'


const DropContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
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

    @media (max-width: 667px) { 
        height: 30px;
        font-size: 13px; 
        border-radius: 5px;
    } 
`

const Icon = styled.div`
    position: absolute;
    top : 45px;
    left: 87%;
    font-size: 45px;
    color: ${Colors.secondary};
    z-index: 3;
    &:hover{
        cursor: pointer;
    }

    @media (max-width: 667px) { 
        font-size: 30px;
        top : 40px;
        left: 90%;
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

    @media (max-width: 667px) { 
        font-size: 12px;
        min-height: 143px;
        border-radius: 5px;
        padding: 15px 15px;
        line-height: 17px;
    } 
`

const EquipUl = styled.ul`
    padding: 0;
    margin: 0;
`

const EquipLines = styled.li`
    list-style: none;
`

function Dropdown({description, equipments, detailType, detail}){
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const TextDetails = detail === 'string' 
        ? <p>{description}</p>
        : <EquipUl>
                {equipments.map((equipment) => <EquipLines key={equipment}>{equipment}</EquipLines>)}
          </EquipUl>

    return (
        <DropContainer>
            <DropWrap>
                {detailType}
                {isOpen ? <Icon onClick={toggle}><RiArrowUpSLine /></Icon> : <Icon onClick={toggle}><RiArrowDownSLine /></Icon>}
            </DropWrap>
            {isOpen && (<DescriptionDetails>{TextDetails}</DescriptionDetails>)}
        </DropContainer>
    )}

Dropdown.propTypes = {
    detailType: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
}

Dropdown.defaultProps = {
    equipments: [],
    description: '',
}

export default Dropdown