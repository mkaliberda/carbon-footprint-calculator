import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import queries from '../../graphql/queries';
import { Form, Button, Spin } from 'antd';

import InputWith2Select from '../../components/Inputs/InputWith2Select'

const CalculatorForm = (props:any) => {
  const [getFactors, { data, loading }] = useLazyQuery(queries.GET_FACTORS_PARAMS,
    { variables: { category: props.category, emission: props.category }});
  const [ paramsData, setParamsData ] = useState({});

  useEffect(() => {
     const asyncUpdateFactors = async () => {
        if (!props.homeFactorsParams) {
          await getFactors();
          props.setFactorsParams(data);
        }
      }
      asyncUpdateFactors();
  }, [props, getFactors, data]);

  const handlerParams = (params:any) => {
    let updatedParamsData: any = { ...paramsData };
    updatedParamsData[params.name] = {
      value: params.value,
      unit: params.selectFirst,
      period: params.selectSecond,
    }
    setParamsData(updatedParamsData);
  }

  const handleSubmit = () => {
    const factorsValues = Object.keys(paramsData).map(key => ({
        name: key,
        value: Object(paramsData)[key].value,
        unit: Object(paramsData)[key].unit,
        period: Object(paramsData)[key].period,
    }));
    props.onSubmit(factorsValues);
  }

  if (loading) return (
    <div className='spin-body'>
      <Spin/>
    </div>
  );

  return (
    <div>
      <Form
        layout={'vertical'}
      >
        { props.factorsParams ?
          props.factorsParams.getFactorsParams.map((el:any, index:number) => {
            return(
              <Form.Item
                key={`input_form${el.name}`}
                label={el.label}
              >
                <InputWith2Select
                  key={`input_home${el.name}`}
                  name={el.name}
                  selectFirst={el.units}
                  selectSecond={el.periods}
                  valueDefault = { Object(paramsData)[el.name] ? Object(paramsData)[el.name].value : 0 }
                  selectFirstDefault = { Object(paramsData)[el.name] ? Object(paramsData)[el.name].unit :
                    el.units ? el.units[0] : '' }
                  selectSecondDefault = { Object(paramsData)[el.name] ? Object(paramsData)[el.name].period :
                    el.periods ? el.periods[0] : '' }
                  handlerParams={handlerParams}
                />
              </Form.Item>
            )
          })
          : null }
          <Button type="primary" onClick={handleSubmit}>
            Calculate
          </Button>
      </Form>
    </div>
  )
}

export default CalculatorForm
