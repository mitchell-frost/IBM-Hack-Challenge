import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import pieChart from './pie_chart.png';
import graph from './graph.png';

function MainContent() {
    return (
      <div className="row">
          <div class="card" id="first-card">
            <div class="container">
              <h2 id="lockdown"><b>Lockdown 1.0 Extended</b></h2>
              <Container>
                <Row>
                  <Col sm={4} className="column-side">
                    <p className="chart">Charts</p>
                    <img src={pieChart} alt="pieChart" id="pie-chart" />
                  </Col>
                  <Col sm={4}>
                    <p className="chart">Graphs</p>
                    <img src={graph} alt="pieChart" id="graph" />
                  </Col>
                  <Col sm={4}>
                    <p className="tweet">tweets</p>
                    <ul id="tweet-list">
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                    </ul>
                  </Col>
                </Row>
              </Container>              
            </div>
          </div>
          <br /><br />
          <div class="card">
            <div class="container">
              <h2 id="lockdown"><b>Lockdown 2.0 Extended</b></h2>
              <Container>
                <Row>
                  <Col sm={4} className="column-side">
                    <p className="chart">Charts</p>
                    <img src={pieChart} alt="pieChart" id="pie-chart" />
                  </Col>
                  <Col sm={4}>
                    <p className="chart">Graphs</p>
                    <img src={graph} alt="pieChart" id="graph" />
                  </Col>
                  <Col sm={4}>
                    <p className="tweet">tweets</p>
                    <ul id="tweet-list">
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                    </ul>
                  </Col>
                </Row>
              </Container>              
            </div>
          </div>
          <br /><br />
          <div class="card">
            <div class="container">
              <h2 id="lockdown"><b>Lockdown 3.0 Extended</b></h2>
              <Container>
                <Row>
                  <Col sm={4} className="column-side">
                    <p className="chart">Charts</p>
                    <img src={pieChart} alt="pieChart" id="pie-chart" />
                  </Col>
                  <Col sm={4}>
                    <p className="chart">Graphs</p>
                    <img src={graph} alt="pieChart" id="graph" />
                  </Col>
                  <Col sm={4}>
                    <p className="tweet">tweets</p>
                    <ul id="tweet-list">
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                    </ul>
                  </Col>
                </Row>
              </Container>              
            </div>
          </div>
          <br /><br />
          <div class="card">
            <div class="container">
              <h2 id="lockdown"><b>Lockdown 4.0 Extended</b></h2>
              <Container>
                <Row>
                  <Col sm={4} className="column-side">
                    <p className="chart">Charts</p>
                    <img src={pieChart} alt="pieChart" id="pie-chart" />
                  </Col>
                  <Col sm={4}>
                    <p className="chart">Graphs</p>
                    <img src={graph} alt="pieChart" id="graph" />
                  </Col>
                  <Col sm={4}>
                    <p className="tweet">tweets</p>
                    <ul id="tweet-list">
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                    </ul>
                  </Col>
                </Row>
              </Container>              
            </div>
          </div>
          <br /><br />
          <div class="card">
            <div class="container">
              <h2 id="lockdown"><b>Lockdown 5.0 Extended</b></h2>
              <Container>
                <Row>
                  <Col sm={4} className="column-side">
                    <p className="chart">Charts</p>
                    <img src={pieChart} alt="pieChart" id="pie-chart" />
                  </Col>
                  <Col sm={4}>
                    <p className="chart">Graphs</p>
                    <img src={graph} alt="pieChart" id="graph" />
                  </Col>
                  <Col sm={4}>
                    <p className="tweet">tweets</p>
                    <ul id="tweet-list">
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                      <li>placeholder text</li><br />
                    </ul>
                  </Col>
                </Row>
              </Container>              
            </div>
          </div>
          <br /><br />
      </div>
    
    )
}

export default MainContent