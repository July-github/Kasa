import {Link} from 'react-router-dom'
import Colors from './Colors'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
    color: ${Colors.primary};
    text-decoration: none;
    &:hover{
        border-bottom: solid 2px;
    }
`