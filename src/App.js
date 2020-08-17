import React from 'react';
import './App.css';
import ResponsiveTable from './responsiveTable'

function App() {

    // Define the column header labels
    const labels = ['Alpha', 'Beta', 'Gamma']

    // Row data can be objects or arrays
    const data = [
        {
            foo: 'A',
            xxx: 'B',
            gamma: 'C'
        },
        {
            alpha: 'AA',
            yyy: 'BB',
            gamma: 'CC'
        },
        [
            'AAA',
            'BBB',
            'CCCCCC'
        ]
    ]
    // Override the default header background color
    const colors = {
        headerBg: 'orange' 
    }
    // Overrides the default border
    const border = '2px solid red'

    // The overriding colors and border attributes are optional 
    return (
        <div className="App">
            <ResponsiveTable data={data} labels={labels} colors={colors} border={border}/>
        </div>
    );
}

export default App;
