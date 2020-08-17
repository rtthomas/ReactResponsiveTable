import React from 'react';
import './App.css';
import ResponsiveTable from './responsiveTable'

function App() {
    const labels = ['Alpha', 'Beta', 'Gamma']
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
    const colors = {
        headerText: 'white',
        headerBg: 'black',
        rowText: 'black',
        rowBg: 'white',
        rowStripe: 'magenta'
    }

    const border = '2px solid green'

    return (
        <div className="App">
            <ResponsiveTable data={data} labels={labels} colors={colors} primary={2}/>
        </div>
    );
}

export default App;
