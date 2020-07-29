import React from "react";
import { Tabs } from 'antd';
import {useTranslation} from "react-i18next";

const { TabPane } = Tabs;

const CalculatorTabs = (props:any) => {
  const { t } = useTranslation();

  return (
    <Tabs
      animated={true}
      onChange={props.changeLocation}
      defaultActiveKey={ props.currentLocation.pathname }
    >
      <TabPane
        tab={<span>{ t('views.calculator-co2.tabs.general') }</span>}
        key={ props.ROUTERS.CALCULATOR_CO2.child.GENERAL.path }
      >
      </TabPane>
      <TabPane
        tab={<span>{ t('views.calculator-co2.tabs.home') }</span>}
        key={ props.ROUTERS.CALCULATOR_CO2.child.HOME.path }
      >
      </TabPane>
      <TabPane
        tab={
          <span>
            { t('views.calculator-co2.tabs.transport') }
          </span>
        }
        key={ props.ROUTERS.CALCULATOR_CO2.child.TRANSPORT.path }
      >
      </TabPane>
    </Tabs>
  )
}

export default CalculatorTabs;
