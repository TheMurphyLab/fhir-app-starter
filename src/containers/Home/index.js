import React from 'react';
import { connect } from 'react-redux';

import { Header, Grid, Table } from 'semantic-ui-react';

import { LOAD_PATIENT_INFO } from './constants';
import { getReady } from './selectors';
import { getPatient } from '../App/selectors';

class Home extends React.Component {
  componentDidMount() {
    const { error, patient, loadPatient } = this.props;
    if (!error && !patient) {
      loadPatient();
    }
  }

  render() {
    const { conditions } = this.props;

    if (!conditions) {
      return <p><i>Still loading...</i></p>;
    }

    return (
      <React.Fragment>
        <Grid.Row>
          <Header as="h2">
            The final build:
          </Header>
        </Grid.Row>

        <Grid.Row>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Condition</Table.HeaderCell>
                <Table.HeaderCell>Code</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {conditions
              .filter(condition => condition.code.coding)
              .map(condition => {
                return (
                <Table.Row>
                  <Table.Cell>(condition.code.coding[0].display)</Table.Cell>
                  <Table.Cell>(condition.code.coding[0].code)</Table.Cell>
                </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Grid.Row>




      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { 
    ready: getReady(state), 
    patient: getPatient(state),
    conditions: state.home.conditions, 
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPatient: () => {
      dispatch({ type: LOAD_PATIENT_INFO });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
