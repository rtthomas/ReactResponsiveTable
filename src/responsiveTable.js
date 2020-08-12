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
//    const tableClasses = [classes.table, classes.table_collapse].join(' ');
    return (
        <div className={classes.table}>
            <Header labels={props.labels}/>
            {props.data.map((datum, index) => {
                return <Row data={datum} striped={index % 2 === 1} labels={props.labels} primary={props.primary} key={index}/>
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
//    const headerClasses = [classes.table_row, classes.table_row_head].join(' ')
//    const columnClasses = [classes.table_cell, classes.column_label].join(' ');   
    return (
        <div className={classes.header}>
            {props.labels.map((label, index) => {
                return <div className={classes.label} key={index}>{label}</div>
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
    let rowClasses = [classes.row];
    if (props.striped){
        rowClasses = rowClasses.concat(classes.striped).join(' ')
    }
    return (
        <div className={rowClasses}>
            {values.map((value, index)=> {
                return <Cell value={value} label={props.labels[index]} primary = {props.primary === index} key={index}/>
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

    // let outerClasses = [classes.table_cell];
    // console.log('-----------------------------------------------\n' + outerClasses);
    // if (props.primary){
    //     outerClasses = outerClasses.concat(classes.topic_cell).join(' ');
    //     console.log('---' + outerClasses)
    // }
    // console.log(outerClasses);
    const outerClasses = classes.cell;
    /*
    return (
        <div className={outerClasses}>
            {props.primary ? '' : <div className={classes.table_cell_label}>{props.label}</div>}
            <div className={classes.table_cell_content}>{props.value}</div>
        </div>
    )
    */
    return (
        <div className={outerClasses}>
            <div className={classes.label_collapse}>{props.label}</div>
            <div className={classes.content}>{props.value}</div>
        </div>
    )

}

export default responsiveTable;

