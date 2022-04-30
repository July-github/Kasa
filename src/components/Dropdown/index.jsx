import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import PropTypes from 'prop-types'
import { useState } from 'react'
import "../Dropdown/index.css"

function Dropdown({detailType, children}){
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className='dropContainer'>
            <div className='dropWrap'>
                {detailType}
                {isOpen ? <div className='icon' onClick={toggle}><RiArrowUpSLine /></div> : <div className='icon' onClick={toggle}><RiArrowDownSLine /></div>}
            </div>
            {isOpen && (<div className='descriptionDetails'>{children}</div>)}
        </div>
    )}

Dropdown.propTypes = {
    detailType: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Dropdown