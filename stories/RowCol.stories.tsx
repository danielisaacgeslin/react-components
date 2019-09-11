import React from 'react';

import { storiesOf } from '@storybook/react';

import Row from '../src/components/Row';
import Col from '../src/components/Col';

const style = { textAlign: 'center', marginTop: 5, backgroundColor: 'black', color: 'white' };

storiesOf('Row and Col', module)
  .add(
    'layouts',
    () => (
      <Row style={{ backgroundColor: 'blue' }}>
        <Col><div style={style}>12</div></Col>
        <Col size={6}><div style={style}>6</div></Col>
        <Col size={6}><div style={style}>6</div></Col>
        <Col size={4}><div style={style}>4</div></Col>
        <Col size={4}><div style={style}>4</div></Col>
        <Col size={4}><div style={style}>4</div></Col>
        <Col size={6}>
          <Row style={{ backgroundColor: 'red' }}>
            <Col size={12}><div style={style}>internal row</div></Col>
            <Col size={3}><div style={style}>3</div></Col>
            <Col size={3}><div style={style}>3</div></Col>
            <Col size={3}><div style={style}>3</div></Col>
            <Col size={3}><div style={style}>3</div></Col>
            <Col size={2}><div style={style}>2</div></Col>
            <Col size={2}><div style={style}>2</div></Col>
            <Col size={2}><div style={style}>2</div></Col>
            <Col size={2}><div style={style}>2</div></Col>
            <Col size={2}><div style={style}>2</div></Col>
            <Col size={2}><div style={style}>2</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
          </Row>
        </Col>
        <Col size={6}>
          <Row style={{ backgroundColor: 'yellow' }}>
            <Col size={12}><div style={style}>internal row</div></Col>
            <Col size={5}><div style={style}>5</div></Col>
            <Col size={7}><div style={style}>7</div></Col>
            <Col size={8}><div style={style}>8</div></Col>
            <Col size={2}><div style={style}>2</div></Col>
            <Col size={2}><div style={style}>2</div></Col>
            <Col size={9}><div style={style}>9</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
            <Col size={1}><div style={style}>1</div></Col>
          </Row>
        </Col>
      </Row>
    )
  );
