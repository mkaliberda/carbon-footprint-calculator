import React, {useState, useEffect} from 'react';

import { Card, Row, Col } from 'antd';
import { ROUTERS } from '../../constants';
import { Switch, Route } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import GeneralForm from './GeneralForm';
import CalculatorForm from './CalculatorForm';


import CalculatorTabs from './components/CalculatorTabs';
import StatisticWrapper from './components/StatisticWrapper';
import mutation from "../../graphql/mutations";

const CalculatorCO2 = () => {
  const currentLocation = useLocation();
  const history = useHistory();

  const [ countPeople, setCountPeople ] = useState(1);
  const [ totalData, setTotalData ] = useState({});

  const [ homeFactorsParams, setHomeFactorsParams ] = useState(null);

  const [calculateEmissions, homeData] = useMutation(mutation.CALCULATE_EMISSIONS);

  useEffect(() => {
      const updatedTotalData =  { ...totalData }
      if (homeData.data) {
        homeData.data.calculateEmissions.forEach((el: any) => {
          Object(updatedTotalData)[el.name] = {
            emission: el.emission,
            label: el.label,
            unit: el.nice,
          }
        })
        setTotalData(updatedTotalData);
      }
  }, [homeData.data])

  const changeLocation = (newPath:string) => {
    history.push(newPath);
  }

  const getTotal = () => {
    console.log('getTotal')
    let total = 0;
    Object.keys(totalData).forEach((key) => {
      total += Object(totalData)[key].emission;
    })
    return total;
  }

  const handleSubmit = async (factorsValues:any) => {
    try {
      await calculateEmissions({variables: {peoples: countPeople, category: 'home', emission: 'co2', factorsValues}})
    } catch (e) {
      console.log(e);
    }
    if (!homeData.loading) {
      console.log('data', homeData.data);
    }
  }

  return (
    <>
      <Card>
        <CalculatorTabs
          changeLocation={changeLocation}
          currentLocation={currentLocation}
          ROUTERS={ROUTERS}
        />
        <Row>
          <Col span={12} className="p-2">
            <Switch>
              <Route
                exact
                path={ ROUTERS.CALCULATOR_CO2.child.GENERAL.path }
              >
                <GeneralForm
                  countPeople={countPeople}
                  setCountPeople={setCountPeople}
                ></GeneralForm>
              </Route>
              <Route
                exact
                path={ ROUTERS.CALCULATOR_CO2.child.HOME.path }
              >
                <CalculatorForm
                  category={'home'}
                  emission={'co2'}
                  factorsParams={ homeFactorsParams }
                  setFactorsParams={ setHomeFactorsParams }
                  onSubmit={handleSubmit}
                ></CalculatorForm>
              </Route>
              <Route
                exact
                path={ ROUTERS.CALCULATOR_CO2.child.TRANSPORT.path }
              >
              </Route>
            </Switch>
          </Col>
        <Col span={12}  className="p-2">
          <StatisticWrapper
            countPeople={countPeople}
            total={getTotal}
            totalData={totalData}
          ></StatisticWrapper>
        </Col>
        </Row>
      </Card>
    </>
  )
}

export default CalculatorCO2;
