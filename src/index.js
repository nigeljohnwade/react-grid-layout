import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);


export class MyGrid extends React.Component{
    
    render (){
        const layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 }
        ];
        return (
            <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={100}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
            </ReactGridLayout>
        )
    }
}

ReactDOM.render(<MyGrid />, document.getElementById('app'))

