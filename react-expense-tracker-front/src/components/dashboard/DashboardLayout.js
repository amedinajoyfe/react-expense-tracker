// src/components/DashboardLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DashboardLayout.css'
import { useTranslation } from 'react-i18next';
import { FaPlus } from 'react-icons/fa';
import  CategoriesTable  from '../categories-table/CategoriesTable';
import  MovementsTable  from '../movements-table/MovementsTable';
import  Chart  from '../chart/Chart';


const DashboardLayout = () => {
    const { t, i18n } = useTranslation();
    return (
    <div className='dashboard-layout'>
        <Container fluid>
            <Row>
                <Col xl={5} lg={4} md={12}>
                    <Row>
                        <Col>
                        <div className="box empty-space"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="box user-info">
                            <h1>{t('welcome')} Alejandro</h1>
                            <h2>{t('balanceinfo')} 1320€</h2>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="box empty-space"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="box categories">
                                <CategoriesTable></CategoriesTable>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xl={1} className='separator'>
                </Col>
                <Col xl={6} lg={8} md={12}>
                    <Row>
                        <Col>
                        <div className="box empty-space"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="box chart-tag">
                                <h2>
                                    {t('expenses')}
                                </h2>
                            </div>
                        </Col>
                        
                        <Col>                            
                            <div className="box chart-tag">
                                <h2>
                                    {t('income')}
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="box chart">
                            <Chart></Chart>
                        </div>
                        </Col>
                        
                        <Col>
                        <div className="box chart">
                            <Chart></Chart>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="box movements-table">
                            <MovementsTable></MovementsTable>
                        </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
            <button className='add-button'>
                <FaPlus />
            </button>
    </div>
  );
};

export default DashboardLayout;
