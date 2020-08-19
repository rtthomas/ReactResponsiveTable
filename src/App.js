import React, { Component } from 'react';
import './App.css';
import ResponsiveTable from './responsiveTable'

class App extends Component {

    constructor (props){
        super(props);

        this.state = {
            column: undefined,      // OPTIONAL, index of column on which data ios sorted
            ascending: undefined,   // OPTIONAL, true is sort is ascending
            
            // Define the column header labels 
            labels:['Alpha', 'Beta', 'Gamma'],  
            
            // Row data can be objects or arrays   
            data: [                         
                {
                    foo: 'fee',
                    xxx: 'XXXX',
                    gamma: 'red'
                },
                {
                    alpha: 'fi',
                    yyy: 'BBBBB',
                    gamma: 'blue'
                },
                [
                    'fo',
                    'HHH',
                    'grey'
                ]
            ],
            // OPTIONAL: Override one or more color defaults
            colors: {              
                headerBg: 'orange' 
            },
            // OPTIONAL: Override the default border
            border: '2px solid red'
        }
        // OPTIONAL sort method
        this.sort = this.sort.bind(this);
    }

    // For a sortable table, the sort state is maintained in the parent component. For instance:
    sort = column => {
        // Given the column header which was clicked, and the current 'ascending' and 'column' states,
        // determine if sort is to be ascending or descending
        const ascending = this.state.column === column ? !this.state.ascending : false
        // Then sort the data on the specified column and the calculated direction. 
        // For this example, just leave as is 
        const sortedData = [...this.state.data];
        this.setState( {
            ...this.state,
            column,
            ascending,
            data: sortedData
        })
    }

    render() {
        // Only if sorting is required:
        const enableSort = {
            column: this.state.column,
            ascending: this.state.ascending,
            doSort: this.sort
        } 
        return (
            <div className="App">
                <ResponsiveTable data={this.state.data} labels={this.state.labels} colors={this.state.colors} border={this.state.border} enableSort={enableSort}/>
            </div>
        );
    }
}

export default App;
