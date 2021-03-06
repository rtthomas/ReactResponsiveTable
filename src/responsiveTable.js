/*
* A responsive table component. It switches from a conventional table to the Collapse By Rows form
*/
import React, { useState } from 'react';
import styled from 'styled-components'
import { CardColumns } from 'react-bootstrap';

/**
 * Generates a Table component
 * @param {string array} props.labels Column labels  
 * @param {object array} props.data Table data, one element per row 
 * @param {object} props.colors (Optional) Color override values 
 * @param {string} props.border (Optional) Border override style
 * @param {object} props.enableSort (Optional) 
 */
const responsiveTable = props => {
    const cellWidth = ((1 / props.labels.length) * 100).toString().split('.')[0];
    
    const tableStyle = {
        textAlign: 'left',
        border: props.border ? props.border : '1px solid black'
    }

    const colors = setColors(props.colors)

    return (
        <div style={tableStyle}>
            <StyledHeader labels={props.labels} cellWidth={cellWidth} colors={colors} enableSort={props.enableSort}/>
            {props.data.map((datum, index) => {
                return (
                    <StyledRow data={datum} 
                        striped={index % 2 === 1} 
                        labels={props.labels} 
                        colors={colors} 
                        cellWidth={cellWidth} 
                        primary={props.primary} key={index}/>
                )
            })}
        </div>
     )
}

/**
 * Establishes the colors from defaults and override values from the component properties
 * @param propColors (Optional) one or more color override attributes
 * @return the combined colors
 */ 
const setColors = propColors => {
    const defaultColors = {
        headerText: 'white',
        headerBg: 'black',
        rowText: 'black',
        rowBg: 'white',
        rowStripe: 'gainsboro'
    }
    if (propColors){
        return {
            headerText: propColors.headerText ?  propColors.headerText : 'white',
            headerBg: propColors.headerBg ?  propColors.headerBg : 'black',
            rowText: propColors.rowText ?  propColors.rowText : 'black',
            rowBg: propColors.rowBg ? propColors.rowBg : 'white',
            rowStripe: propColors.rowStripe ?  propColors.rowStripe : 'gainsboro'
        }
    }
    else {
        return defaultColors;
    }
}

/**
 * Creates the Header
 * @param {*} props 
 */
const Header = props => {
    const labelStyle = { width: props.cellWidth + '%' }
    
    const doSort = props.enableSort ? props.enableSort.doSort : undefined;
    const sortColumn = props.enableSort ? props.enableSort.column : undefined;
    const ascending = props.enableSort ? props.enableSort.ascending : undefined;

    return <div className={props.className}>
            {props.labels.map((label, index) => {
                if (doSort && sortColumn === index){
                    if (ascending){
                        return <div style={labelStyle} key={index} onClick={(e) => doSort(index)}>
                            {label}<span className="fas fa-caret-down fa-lg"></span>
                        </div>
                    }
                    else {
                        return <div style={labelStyle} key={index} onClick={(e) => doSort(index)}>
                            {label}<span className="fas fa-caret-up fa-lg"></span>
                        </div>
                    }
                }
                else {
                    return <div style={labelStyle} key={index} onClick={(e) => doSort(index)}>{label}</div>
                }
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

