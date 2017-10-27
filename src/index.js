import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RGL, { WidthProvider, Responsive } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export class MyGridConfig extends React.Component{
    render (){
        const layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 }
        ];
        return (
            <div>
                <h2>RGL with layout as psuedo-prop</h2>
                <ReactGridLayout 
                    className="layout" 
                    layout={layout} 
                    cols={12} 
                    rowHeight={100} >
                    <div key="a">a (pinned)</div>
                    <div key="b">b</div>
                    <div key="c">c</div>
                </ReactGridLayout>
            </div>
        )
    }
}
export class MyGridInline extends React.Component {
    render() {
        return (
            <div>
                <h2>RGL with layout inline on children</h2>
                <ReactGridLayout 
                    className="layout" 
                    cols={12} 
                    rowHeight={100} >
                    <div key="a" data-grid={{ i: 'a', x: 0, y: 0, w: 1, h: 2, static: true }}>a (pinend)</div>
                    <div key="b" data-grid={{ i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>b</div>
                    <div key="c" data-grid={{ i: 'c', x: 4, y: 0, w: 1, h: 2 }}>c</div>
                </ReactGridLayout>
            </div>
        )
    }
}
export class MyGridExistingContent extends React.Component {

    componentWillMount(){
        if(localStorage.getItem('layout')){
            this.layout = JSON.parse(localStorage.getItem('layout'));
        }else{
            this.layout = [
                { i: 'a', x: 6, y: 0, w: 6, h: 2, minW: 2, maxW: 6 },
                { i: 'b', x: 0, y: 0, w: 6, h: 2, static: true },
                { i: 'c', x: 0, y: 3, w: 4, h: 1, minH: 1, maxH: 3 },
                { i: 'd', x: 4, y: 3, w: 4, h: 1, minH: 1, maxH: 3 },
                { i: 'e', x: 8, y: 3, w: 4, h: 1, minH: 1, maxH: 3 },
            ];
        }
        localStorage.setItem('layout', JSON.stringify(this.layout));
    }

    onLayoutChange(layout){
        localStorage.setItem('layout', JSON.stringify(layout));
    }
    // Calls when drag starts.
    onDragStart(layout, oldItem, newItem, placeholder, event, element){
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls on each drag movement.
    onDrag(layout, oldItem, newItem, placeholder, event, element){
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls when drag is complete.
    onDragStop(layout, oldItem, newItem, placeholder, event, element){
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls when resize starts.
    onResizeStart(layout, oldItem, newItem, placeholder, event, element){
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls when resize movement happens.
    onResize(layout, oldItem, newItem, placeholder, event, element){
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls when resize is complete.
    onResizeStop(layout, oldItem, newItem, placeholder, event, element){
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    render() {
        const layout = this.layout;
        return (
            <div>
                <h2>RGL with layout as psuedo-prop and actual content</h2>
                <ReactGridLayout 
                    className="layout" 
                    layout={layout} 
                    cols={12} 
                    rowHeight={100}
                    onDragStart={this.onDragStart}
                    onDrag={this.onDrag}
                    onDragStop={this.onDragStop}
                    onResizeStart={this.onResizeStart}
                    onResize={this.onResize}
                    onResizeStop={this.onResizeStop}
                    onLayoutChange={this.onLayoutChange} >
                    <div className="col-sm-6" key="a" >
                        <div id="sales-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Sales (Pinned in place)</h4>
                            </div>
                            <div className="card-content">You don't have any sales yet</div>
                        </div>
                    </div>
                    <div className="col-sm-6" key="b">
                        <div id="tour-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Get started with Project 4</h4>
                            </div>
                            <div className="card-content">Introductory copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget dictum purus.
                Cras eget ipsum ultrices augue molestie rutrum nec rutrum orci. Integer erat leo, accumsan non sollicitudin
                volutpat, elementum id sem. Aliquam ac ex non nibh dapibus ultricies. Curabitur nulla nisl, tempor
                in risus quis, maximus mollis leo. Fusce.</div>
                        </div>
                    </div>
                    <div className="col-sm-4" key="c">
                        <div id="products-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Products</h4>
                            </div>
                            <div className="card-content">You don't have any products yet</div>
                        </div>
                    </div>
                    <div className="col-sm-4" key="d">
                        <div id="promotions-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Promotions</h4>
                            </div>
                            <div className="card-content">You don't have any promotions yet</div>
                        </div>
                    </div>
                    <div className="col-sm-4" key="e">
                        <div id="trends-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Purchase Trends</h4>
                            </div>
                            <div className="card-content">You don't have any sales yet</div>
                        </div>
                    </div>
                </ReactGridLayout>
            </div>
        )
    }
}

export class MyResponsiveGridExistingContent extends React.Component {

    onBreakpointChange(newBreakpoint, newCols){
        console.log(newBreakpoint, newCols);
    }
    onLayoutChange(currentLayout, allLayouts) {
        localStorage.setItem('layouts', JSON.stringify(allLayouts));
    }
    onWidthChange(containerWidth, margin, cols, containerPadding){
        console.log(containerWidth, margin, cols, containerPadding);
    }
    // Calls when drag starts.
    onDragStart(layout, oldItem, newItem, placeholder, event, element) {
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls on each drag movement.
    onDrag(layout, oldItem, newItem, placeholder, event, element) {
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls when drag is complete.
    onDragStop(layout, oldItem, newItem, placeholder, event, element) {
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls when resize starts.
    onResizeStart(layout, oldItem, newItem, placeholder, event, element) {
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls when resize movement happens.
    onResize(layout, oldItem, newItem, placeholder, event, element) {
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    // Calls when resize is complete.
    onResizeStop(layout, oldItem, newItem, placeholder, event, element) {
        console.log(layout, oldItem, newItem, placeholder, event, element);
    }
    render() {
        const {layouts, cols, breakpoints} = this.props;
        return (
            <div>
                <h2>RGL with layout as psuedo-prop and actual content</h2>
                <ResponsiveReactGridLayout
                    className="layout"
                    layouts={layouts}
                    breakpoints={breakpoints}
                    cols={cols}
                    margin={[10, 10]}
                    containerPadding={[10, 10]}
                    rowHeight={100}
                    onDragStart={this.onDragStart}
                    //This produces a lot of events
                    //onDrag={this.onDrag}
                    onDragStop={this.onDragStop}
                    onResizeStart={this.onResizeStart}
                    //this produces a lot of events
                    //onResize={this.onResize}
                    onResizeStop={this.onResizeStop}
                    onBreakpointChange={this.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}
                    onWidthChange={this.onWidthChange} >
                    <div className="col-sm-6" key="a" >
                        <div id="sales-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Sales</h4>
                            </div>
                            <div className="card-content">You don't have any sales yet</div>
                        </div>
                    </div>
                    <div className="col-sm-6" key="b">
                        <div id="tour-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Get started with Project 4 (Pinned in place)</h4>
                            </div>
                            <div className="card-content">Introductory copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget dictum purus.
                Cras eget ipsum ultrices augue molestie rutrum nec rutrum orci. Integer erat leo, accumsan non sollicitudin
                volutpat, elementum id sem. Aliquam ac ex non nibh dapibus ultricies. Curabitur nulla nisl, tempor
                in risus quis, maximus mollis leo. Fusce.</div>
                        </div>
                    </div>
                    <div className="col-sm-4" key="c">
                        <div id="products-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Products</h4>
                            </div>
                            <div className="card-content">You don't have any products yet</div>
                        </div>
                    </div>
                    <div className="col-sm-4" key="d">
                        <div id="promotions-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Promotions</h4>
                            </div>
                            <div className="card-content">You don't have any promotions yet</div>
                        </div>
                    </div>
                    <div className="col-sm-4" key="e">
                        <div id="trends-tile" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Purchase Trends</h4>
                            </div>
                            <div className="card-content">You don't have any sales yet</div>
                        </div>
                    </div>
                </ResponsiveReactGridLayout>
            </div>
        )
    }
}
const layouts = {
    lg: [
        { i: 'a', x: 0, y: 0, w: 6, h: 3, minW: 2, maxW: 6 },
        { i: 'b', x: 6, y: 0, w: 6, h: 3, static: true },
        { i: 'c', x: 0, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
        { i: 'd', x: 4, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
        { i: 'e', x: 8, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
    ],
    md: [
        { i: 'a', x: 0, y: 0, w: 5, h: 3, minW: 2, maxW: 6 },
        { i: 'b', x: 5, y: 0, w: 5, h: 3, static: true },
        { i: 'c', x: 0, y: 3, w: 3, h: 2, minH: 1, maxH: 3 },
        { i: 'd', x: 3, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
        { i: 'e', x: 7, y: 3, w: 3, h: 2, minH: 1, maxH: 3 },
    ],
    sm: [
        { i: 'a', x: 0, y: 0, w: 6, h: 3, minW: 2, maxW: 6 },
        { i: 'b', x: 0, y: 1, w: 6, h: 3, static: true },
        { i: 'c', x: 0, y: 3, w: 2, h: 2, minH: 1, maxH: 3 },
        { i: 'd', x: 2, y: 3, w: 2, h: 2, minH: 1, maxH: 3 },
        { i: 'e', x: 4, y: 3, w: 2, h: 2, minH: 1, maxH: 3 },
    ],
    xs: [
        { i: 'a', x: 0, y: 0, w: 4, h: 3, minW: 2, maxW: 6, isDraggable: false },
        { i: 'b', x: 6, y: 0, w: 4, h: 3, static: true },
        { i: 'c', x: 0, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
        { i: 'd', x: 4, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
        { i: 'e', x: 8, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
    ],
    xxs: [
        { i: 'a', x: 0, y: 0, w: 6, h: 3, minW: 2, maxW: 6 },
        { i: 'b', x: 6, y: 0, w: 6, h: 3, static: true },
        { i: 'c', x: 0, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
        { i: 'd', x: 4, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
        { i: 'e', x: 8, y: 3, w: 4, h: 2, minH: 1, maxH: 3 },
    ],
}
const breakpoints = { lg: 940, md: 736, sm: 508, xs: 220, xxs: 0 };
const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
//ReactDOM.render(<MyGridConfig />, document.getElementById('gridConfig'));
//ReactDOM.render(<MyGridInline />, document.getElementById('gridInline'));
//ReactDOM.render(<MyGridExistingContent />, document.getElementById('gridExistingContent'));
ReactDOM.render(<MyResponsiveGridExistingContent
    layouts={layouts}
    breakpoints={breakpoints}
    cols={cols} />,
    document.getElementById('gridResponsiveExistingContent'));

