import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
import { Descriptions } from 'antd';
function CustomerDetailPage() {

  const [customers, setcustomers] = useState([]);
  const [loading, setloading] = useState(true)
  let { id } = useParams();

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios.get(`https://northwind.vercel.app/api/customers/${id}`)
      .then(res => {
        setcustomers(res.data)
        setloading(false)
      });
  }

  return (<>
    <Descriptions style={{paddingLeft:'15px'}} title="Customer Info" bordered></Descriptions>
    <div style={{ padding: '10px' }} className="site-card-wrapper" >
      <Row gutter={16} >
        <Col span={8}>
          <Card title="ID" bordered={false} loading={loading}>
            {customers.id}
          </Card>
        </Col>
        
        <Col span={8}>
          <Card title="Company Name" bordered={false} loading={loading}>
            {customers.companyName}
          </Card>
        </Col>
        
        <Col span={8}>
          <Card title="Contact Name" bordered={false} loading={loading}>
            {customers.contactName}
          </Card>
        </Col>

      </Row>

      <div style={{ paddingTop: '10px' }} className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Contact Title" bordered={false} loading={loading}>
              {customers.contactTitle}
            </Card>
          </Col>
        </Row>
      </div>

    </div>
  </>
  )
}

export default CustomerDetailPage
