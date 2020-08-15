import React from 'react';
import './App.css';
import ResponsiveTable from './responsiveTable'
// import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App() {
    const labels = ['Alpha', 'Beta', 'Gamma']
    const data = [
        {
            alpha: 'A',
            beta: 'B',
            gamma: 'C'
        },
        {
            alpha: 'AA',
            beta: 'BB',
            gamma: 'CC'
        },
        {
            alpha: 'AAA',
            beta: 'BBB',
            gamma: 'CCCCCC'
        }
    ]
    const colors = {
        headerText: 'white',
        headerBg: 'black',
        rowText: 'black',
        rowBg: 'white',
        rowStripe: 'gainsboro'
    }
    return (
        <div className="App">
            <ResponsiveTable data={data} labels={labels} colors = {colors} primary={2}/>
        </div>
    );
}

export default App;
