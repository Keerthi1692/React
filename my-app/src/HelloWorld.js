import React, {Component} from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' };
        this.frenchify= this.frenchify.bind(this);
        this.Mexicanize= this.Mexicanize.bind(this);
        this.Indianize= this.Indianize.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }
    frenchify() {
        this.setState({ greeting: 'Bonjour' });
    }
    Mexicanize() {
        this.setState({ greeting: 'Ola' });
    }
    Indianize() {
        this.setState({ greeting: 'Namasthe' });
    }
    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br/>
                <button onClick={this.frenchify}>Frenchify!</button>
                <button onClick={this.Mexicanize}>Mexicanize!</button>
                <button onClick={this.Indianize}>Indianize!</button>
                <br/>
                <button onClick={this.removeGreeting}>Remove Me!</button>
            </div>
        );
    }
}

export default HelloWorld;
