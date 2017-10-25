import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);


export class MyGrid extends React.Component{
    render (){
        return (
            <div>Hello world</div>
        )
    }
}

ReactDOM.render(<MyGrid />, document.getElementById('app'))

