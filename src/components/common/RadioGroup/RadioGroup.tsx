import * as React from 'react';
import StyledRadioGroup from './StyledRadioGroup';

interface IRadioGroupProps {
  leftRadioLabel: string;
  leftRadioValue: string;
  rightRadioLabel: string;
  rightRadioValue: string;
  radioGroupName: string;
  callback: (val: string) => void;
  isLeftChecked: boolean;
}

interface IRadioGroupState {
  isChecked: boolean
}

class RadioGroup extends React.Component<IRadioGroupProps, {}> {
  public state: IRadioGroupState = {
    isChecked: this.props.isLeftChecked
  };

  public render() {
    const {
      leftRadioLabel,
      leftRadioValue,
      rightRadioLabel,
      rightRadioValue,
      radioGroupName
    } = this.props;

    const { isChecked } = this.state;

    return (
      <StyledRadioGroup>
        <div>
          <input checked={isChecked}
                 radioGroup={radioGroupName}
                 type='radio'
                 id={leftRadioLabel}
                 name={radioGroupName}
                 value={leftRadioValue}
                 onChange={this.handleOnChange}/>
          <label htmlFor={leftRadioLabel}>{leftRadioLabel}</label>
        </div>
        <div>
          <input checked={!isChecked}
                 type='radio'
                 radioGroup={radioGroupName}
                 id={rightRadioLabel}
                 name={radioGroupName}
                 value={rightRadioValue}
                 onChange={this.handleOnChange}/>
          <label htmlFor={rightRadioLabel}>{rightRadioLabel}</label>
        </div>
      </StyledRadioGroup>
    );
  }

  private handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.callback(e.currentTarget.value);
    this.setState({
      isChecked: !this.state.isChecked
    });
  };
}

export default RadioGroup;