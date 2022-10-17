import { Button, Col, Descriptions, Form, Input, Row } from 'antd'
import axios from 'axios'
import React from 'react'
import { showErrorNotification, showSuccessNotification } from './notifications/Notifications'

function AddCustomer() {

    const [form] = Form.useForm();

    const submitForm = (values) => {
        axios.post('https://northwind.vercel.app/api/customers', values)
            .then(res => {
                showSuccessNotification('success')
                console.log('RES', res.data);
                form.resetFields();
            }).catch(err =>{
                console.log(err)
                showErrorNotification('error')
            })
    }

    return (<>
        <Descriptions  title="Add New Customer" bordered></Descriptions>
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
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label='Contact Name'
                        name='contactName'
                    >
                        <Input />
                    </Form.Item>
                </Col>

            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label='Contact Title'
                        name='contactTitle'
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label='Adress'
                        name='adress:{street}'
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Button type="primary" htmlType="submit">Add</Button>

        </Form>
    </>
    )
}

export default AddCustomer