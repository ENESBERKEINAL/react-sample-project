import { Button, Col, Descriptions, Form, Input, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { showSuccessUpdateNotification } from './notifications/Notifications';

function CustomerUpdatePage() {

    const [customers, setcustomers] = useState([]);
    const { id } = useParams();
    const [form] = Form.useForm();
    useEffect(() => {
        getCustomers()
    }, [])

    const submitForm = (values) => {

        axios.put(`https://northwind.vercel.app/api/customers/${id}`, values)
            .then(res => {
                console.log('RES', res.data);
                showSuccessUpdateNotification('info')
                form.resetFields();
                getCustomers();
            }).catch(err=> {
                console.log("Error accured while customer updating", err)
            })
    }
    const getCustomers = () => {
        axios.get(`https://northwind.vercel.app/api/customers/${id}`)
            .then(res => {
            setcustomers(res.data)
            })
            .catch(err=> {
                console.log("Error accured while customer getting", err)
                
            }).finally(()=>{

            });
        }

    return (<>
        <Descriptions  title="Customer Update" bordered></Descriptions>
    
        <Form
            layout='vertical'
            onFinish={submitForm}
            form={form}
        >

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label='Company Name'
                        name='companyName'
                        rules={[{ required: true, message: 'Please input your company Name!' }, { max: 30 }]}
                    >

                        <Input value={customers.companyName} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label='Contact Name'
                        name='contactName'
                    >
                        <Input placeholder={customers.contactName} />
                    </Form.Item>
                </Col>

            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label='Contact Title'
                        name='contactTitle'
                    >
                        <Input placeholder={customers.contactTitle} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label='Adress'
                        name='adress.street'
                    >
                        <Input placeholder={customers.address?.street} />
                    </Form.Item>
                </Col>
            </Row>

            <Button type="primary" htmlType="submit">Update</Button>

        </Form>
    </>
    )
}

export default CustomerUpdatePage