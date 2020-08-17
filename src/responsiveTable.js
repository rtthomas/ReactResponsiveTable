/*
* A responsive table component. It switches from a conventional table to the Collapse By Rows form
*/
import React from 'react';
import styled from 'styled-components'

/**
 * Generates a Table component
 * @param {string array} props.labels Column labels  
 * @param {object array} props.data Table data, one element per row 
 * @param {number} props.primary (Optional) index of the column whose cell value will appear as the "cell label" in the responsive view 
 * @returns the Table 
 */
const responsiveTable = props => {
    const cellWidth = ((1 / props.labels.length) * 100).toString().split('.')[0];
    const tableStyle = {
        textAlign: 'left',
        border: props.border ? props.border : '1px solid black'
    }
    return (
        <div style={tableStyle}>
            <StyledHeader labels={props.labels} cellWidth={cellWidth} colors={props.colors} />
            {props.data.map((datum, index) => {
                return (
                    <StyledRow data={datum} 
                        striped={index % 2 === 1} 
                        labels={props.labels} 
                        colors={props.colors} 
                        cellWidth={cellWidth} 
                        primary={props.primary} key={index}/>
                )
            })}
        </div>
     )
}

const Header = props => {
    const labelStyle = { width: props.cellWidth + '%' }
    return <div className={props.className}>
            {props.labels.map((label, index) => {
                return <div style={labelStyle} key={index}>{label}</div>
            })}
    </div>
}

const StyledHeader = styled(Header)`
    color: ${props => props.colors.headerText};
    background-color: ${props => props.colors.headerBg};
    display: flex;
    padding: 0.2em;
    @media all and (max-width: 768px) {
        display: none;
    }
`

/**
 * Generates a Row component
 * @param {object} props.data The row data 
 * @param {string array} props.labels Column labels  
 * @param {number} props.primary (Optional) index of the column whose cell value will appear as the "cell label" in the responsive view 
 * @returns the Row
 */
const Row = props => {
    const values = Object.values(props.data)
    return <div className={props.className}>
            {values.map((value, index)=> {
                return (
                    <StyledCell width={props.cellWidth} colors={props.colors} 
                        primary = {props.primary === index} key={index}>
                            <CollapsedLabel>{props.labels[index]}</CollapsedLabel>
                            <CellContent>{value}</CellContent>
                    </StyledCell>
                )
            })}
    </div>
}

const StyledRow = styled(Row)`
    display: flex;
    padding: 0.2em;
    color: ${props => props.colors.rowText};
    background-color: ${props => props.striped ? props.colors.rowStripe : props.colors.rowBg};
    @media all and (max-width: 768px) {
        flex-direction: column;
    }
`
const Cell = ({ className, children }) => {
    return <div className={className}>
        {children}
    </div>
}

const StyledCell = styled(Cell)`
    overflow: hidden;
    width: ${props => props.width + '%'};
    @media all and (max-width: 768px) {
        display: block;
        width: 100% !important;    
    }
`
const CollapsedLabel = styled.div`
    display: none;
    @media all and (max-width: 768px) {
        display: inline-block;
        width: 30%;
        text-align: right;
        margin-right: 0.6em;
        overflow: hidden;    
    }
`
const CellContent  = styled.div`
    @media all and (max-width: 768px) {
        display: inline-block;
        overflow: hidden;
    }
`

export default responsiveTable;

