/*
* A responsive table component. It switches from a conventional table to the Collapse By Rows form
*/
import React from 'react';
import classes from './responsiveTable.module.css'

/**
 * Generates a Table component
 * @param {string array} props.labels Column labels  
 * @param {object array} props.data Table data, one element per row 
 * @param {number} props.primary (Optional) index of the column whose cell value will appear as the "cell label" in the responsive view 
 * @returns the Table 
 */
const responsiveTable = props => {
    const cellWidth = ((1 / props.labels.length) * 100).toString().split('.')[0];
    return (
        <div className={classes.table}>
            <Header labels={props.labels} cellWidth={cellWidth} colors={props.colors} />
            {props.data.map((datum, index) => {
                return (
                    <Row data={datum} 
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

/**
 * Generates a Header component
 * @param {string array} props.labels Column labels  
 * @returns the Header 
 */
const Header = props => {
    const labelStyle = { width: props.cellWidth + '%' }
    const colorStyles = { 
        backgroundColor : props.colors.headerBg,
        color: props.colors.headerText
    }
    return (
        <div className={classes.header} style={colorStyles}>
            {props.labels.map((label, index) => {
                return <div style={labelStyle} key={index}>{label}</div>
            })}
        </div>
    )
}

/**
 * Generates a Row component
 * @param {object} props.data The row data 
 * @param {string array} props.labels Column labels  
 * @param {number} props.primary (Optional) index of the column whose cell value will appear as the "cell label" in the responsive view 
 * @returns the Row
 */
const Row = props => {
    const values = Object.values(props.data)
    const rowClasses = [classes.row];
    let colorStyles = {color: props.colors.rowText}
    if (props.striped){
        colorStyles.backgroundColor = props.colors.rowStripe
    } 
    return (
        <div className={rowClasses} style={colorStyles}>
            {values.map((value, index)=> {
                return <Cell value={value} label={props.labels[index]} width={props.cellWidth} colors={props.colors} primary = {props.primary === index} key={index}/>
            })}
        </div>
    )
}

/**
 * Generates a Cell component
 * @param {string} props.label The 
 * @param {string array} props.labels Column labels  
 * @param {boolean} props.primary If true, this cell the top when the row is displayed in the responsive form  
 * @returns the Cell
 */
const Cell = props => {
    const style = { width: props.width + '%' }
    const outerClasses = classes.cell;
    const labelColor = {backgroundColor : props.colors.headerBg} 
    return (
        <div className={outerClasses} style={style}>
            <div className={classes.label_collapse} >{props.label}</div>
            <div className={classes.content} >{props.value}</div>
        </div>
    )

}

export default responsiveTable;

