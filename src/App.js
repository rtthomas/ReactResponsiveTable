import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveTable from './responsiveTable'

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
            gamma: 'CCC'
        }
    ]
    return (
        <div className="App">
            <ResponsiveTable data={data} labels={labels} primary={2}/>
        </div>
    );
}

export default App;
