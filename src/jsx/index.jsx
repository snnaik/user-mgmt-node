import React from 'react';
import { render } from 'react-dom';
import HomePage from './home';

class App extends React.Component {
    render() {
        return <div>{ this.props.elToRender }</div>;
    }
}

render( <App elToRender={ <HomePage/> }/>, document.getElementById( 'root' ) );

export default App;
