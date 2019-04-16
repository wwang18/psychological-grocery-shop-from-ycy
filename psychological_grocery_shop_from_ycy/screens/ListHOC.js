import React, { PureComponent } from "react";
import { getCardValue, lockedImg } from '../components/CardStore';

const PPHOC = (WrappedComponent, type) => {
    return class PP extends PureComponent {
        constructor(props) {
            super(props)
            this.state = { dataSource: [] };
            this.getValue();
        }
        componentDidUpdate() {
            this.getValue();
        }
        getValue = async () => {
            const result = await getCardValue(type);
            // console.log(result, 'result')
            this.setState({
                dataSource: result
            });
        }
        render() {
            const props = Object.assign({}, this.props, {
                dataSource: this.state.dataSource,
                lockedImg: lockedImg
            })
            return (<WrappedComponent {...props} />);
        }
    }
}

export default PPHOC;