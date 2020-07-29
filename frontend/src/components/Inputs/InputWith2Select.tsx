import React, { useState, useEffect } from "react";
import { InputNumber, Select } from 'antd';
import { CALCULATOR_CONST_LABELS } from '../../constants';
const { Option } = Select;

const InputWith2Select = (props:any) => {
  const [selectValue1, setSelectValue1] =  useState();
  const [selectValue2, setSelectValue2] =  useState();

  useEffect(() => {
    setSelectValue1(props.selectFirstDefault);
    setSelectValue2(props.selectSecondDefault);
  }, [props])


  const handleChange = (val:any)=> {
    props.handlerParams({
      name: props.name,
      value: val,
      selectFirst: selectValue1,
      selectSecond: selectValue2,
    })
  };

  const onChangeSelect1 = (val:any) => {
    setSelectValue1(val);
  }

  const onChangeSelect2 = (val:any) => {
    setSelectValue2(val)
  }

  // @ts-ignore
  return(
    <>
      <InputNumber key={`input_${props.name}`}
                   onChange={handleChange}
                   defaultValue={props.valueDefault}
                   min={0}
                   style={{ width: 200, marginRight: '0.25rem' }}
      ></InputNumber>
      <Select key={`select1_${props.name}`}
              style={{ width: 120 }}
              onChange={onChangeSelect1}
              defaultValue={props.selectFirstDefault}
      >
        { props.selectFirst ?
          props.selectFirst.map((option:any, index: number) => (
            <Option
              key={`option_select_1_${index}`}
              value={option}>
              { CALCULATOR_CONST_LABELS[option]  }
            </Option>
          )) : null
        }
      </Select>
      <Select key={`select2_${props.name}`}
              style={{ width: 120 }}
              onChange={onChangeSelect2}
              defaultValue={props.selectSecondDefault}
      >
        { props.selectSecond ?
          props.selectSecond.map((option:string, index:number) => (
            <Option
              key={`option_select_2_${index}`}
              value={option}>
              { CALCULATOR_CONST_LABELS[option]  }
            </Option>
          )) : null
        }
      </Select>
    </>
  )
}

export default InputWith2Select;

