import React, {Component} from 'react';
import './index.css';
/**
 * 自定义inputnumber组件
 * 缺点：不可输入
 */

 /**
  * min: 最小值，默认为1
  * max：最大值，默认为9999
  * defaultValue：默认值，默认为1
  * onChanged：每次操作后的回调，返回改变后的值
  * step：每次增减的step
  * disable: 是否禁止操作，默认为false
  */
export default class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            reduceDisable: true,
            addDisable: true,
        }
    }

    componentDidMount(){
        const {min=1, max=9999, defaultValue=1, disable=false} = this.props;
        let leftDisable = false, rightDisable = false;
        if (defaultValue > min && defaultValue < max) {
            leftDisable = false;
            rightDisable = false;
        }
        if (defaultValue <= min) {
            leftDisable = true;
        }
        if (defaultValue >= max) {
            rightDisable = true;
        }
        if (disable) {
            leftDisable = true;
            rightDisable = true;
        }
        this.setState({
            addDisable: rightDisable,
            reduceDisable: leftDisable,
            value: defaultValue,
        })
    }
    /**
     * 点击减号
     */
    reduce = () => {
        const {value, reduceDisable} = this.state;
        if (reduceDisable) {
            return;
        }
        const {step=1, min=1, onChanged, max=9999} = this.props;
        const newValue = (value - step) < min ? min : (value - step);
        this.setState({
            value: newValue,
            reduceDisable: (value - step) <= min,
            addDisable: !(newValue <= max)
        });
        onChanged && onChanged(newValue);
    }
    /**
     * 点击加号
     */
    add = () => {
        const {value, addDisable} = this.state;
        if (addDisable) {
            return;
        }
        const {step=1, max=9999, onChanged, min=1} = this.props;
        const newValue = (value + step) > max ? max : (value + step);
        this.setState({
            value: newValue,
            addDisable: (value + step) >= max,
            reduceDisable: !(newValue >= min)
        });
        onChanged && onChanged(newValue);
    }

    render() {
        let {value, addDisable, reduceDisable} = this.state;
        return (
            <div className="input-number">
                <div className="iconBox" onClick={this.reduce.bind(this)}>
                    <div className={`reduceIcon ${reduceDisable ? 'reduceDisable' : ''}`}></div>
                </div>
                <div className="number">{value}</div>
                <div className="iconBox" onClick={this.add.bind(this)}>
                    <div className={`addIcon addIcon-x ${addDisable ? 'addDisable' : ''}`}></div>
                    <div className={`addIcon addIcon-y ${addDisable ? 'addDisable' : ''}`}></div>
                </div>
            </div>
        )
    }
}