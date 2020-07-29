import React from 'react';
import { Form, Slider } from 'antd';

import {useTranslation} from "react-i18next";

const GeneralForm = (props:any) => {
  const { t } = useTranslation();

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };

  const onChange = (value:number) => {
    props.setCountPeople(value);
  }

  return (
    <>
      <Form
        {...layout}
      >
        <Form.Item
          label={t('components.forms.labels.count-people', {countPeople: props.countPeople})}
        >
          <Slider
            defaultValue={1} max={20}
            onChange={onChange}
          />
        </Form.Item>
      </Form>
    </>
  )
}

export default GeneralForm;
