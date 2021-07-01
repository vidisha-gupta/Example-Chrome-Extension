import React, {Component} from 'react';
import './App.css';

interface AppState {
    lo: number;
    hi: number;
    random: string;
    error: boolean;
}

class App extends Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            lo: 0,
            hi: 10,
            random: "",
            error: false,
        };
    }

    generate = () => {
        if (!Number.isInteger(this.state.lo) || !Number.isInteger(this.state.hi)) {
            this.setState({
                error: true,
                random: "You must input integer values.",
            });
        } else if (this.state.lo >= this.state.hi) {
            this.setState({
                error: true,
                random: "The high value must be strictly greater than than the low.",
            });
        } else {
            this.setState({
                error: false,
                random: (Math.floor(Math.random() * (this.state.hi - this.state.lo + 1) + this.state.lo)).toString(),
            });
        }
    }
    
    reset = () => {
        this.setState({
            lo: 0,
            hi: 10,
            random: "",
            error: false,
        });
    }

    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        return this.setState({...this.state, [event.target.name] : event.target.valueAsNumber});
    }

    render() {
        return (
            <div className="App">
                <h1>Random Number Generator</h1>
                <form>
                    Low: <input
                        name="lo"
                        type="number"
                        value={this.state.lo}
                        onChange={this.onInputChange}
                    />
                    High: <input
                        name="hi"
                        type="number"
                        value={this.state.hi}
                        onChange={this.onInputChange}
                    />
                </form>
                <input
                    type='submit'
                    onClick={this.generate}
                />
                <input
                    type='reset'
                    onClick={this.reset}
                />
                <h4 style={{color: this.state.error ? "red" : "black"}}>{this.state.random}</h4>
            </div>
        );
    }
}



export default App;
