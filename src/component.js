'use strict';

const e = React.createElement;

class CustomComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { enable: !true };
    }

    render() {
        if (this.state.enable) {
            return (
                <div>
                    <button onClick={() => this.setState({ enable: false })}>
                        Delete
                    </button>
                    <p>Generated by react js</p>
                </div>

            );
        }

        return (
            <button onClick={() => this.setState({ enable: true })}>
                Generate
            </button>
        );
    }
}

const domContainer = document.querySelector('.react-component');
ReactDOM.render(e(CustomComponent), domContainer);