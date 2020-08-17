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
        headerBg: 'orange',
        rowText: 'black',
        rowBg: 'white',
        rowStripe: 'gainsboro'
    }

    const border = '1px solid black'

    return (
        <div className="App">
            <ResponsiveTable data={data} labels={labels} colors={colors} border={border}/>
        </div>
    );
}

export default App;
