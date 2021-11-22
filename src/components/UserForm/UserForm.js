import React from "react";
import {Button, DatePicker, Form, Input, Select, Switch} from "antd";

const UserForm = ({onFinish,user}) => {

    const [form] = Form.useForm();
    const { Option } = Select;
    const { TextArea } = Input;

    return (
        <Form
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 15 }}
            layout="horizontal"
            onFinish={onFinish}
            initialValues={user}
            form={form}
        >
            <Form.Item label="First Name" rules={[{required: true, min: 3, max: 256}]} name={'first_name'}>
                <Input  name="name" placeholder="First Name"  />
            </Form.Item>
            <Form.Item label="Last name" rules={[{required: true, min: 3, max: 256}]} name={'last_name'}>
                <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item label="Birth date" rules={[{required: true}]} name={'birth_date'}>
                <DatePicker  format={'YYYY-MM-DD'}/>
            </Form.Item>
            <Form.Item label="Gender"  name={'gender'}>
                <Select defaultValue="male" style={{ width: 120 }}>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Job" rules={[{required: true, min: 3, max: 256}]} name={'job'}>
                <Input placeholder="job" />
            </Form.Item>
            <Form.Item label="Biography" rules={[{required: true, max: 1024}]} name={'biography'}>
                <TextArea placeholder="job" />
            </Form.Item>
            <Form.Item label="is_active" valuePropName="checked" name={'is_active'}>
                <Switch  />
            </Form.Item>
            <Form.Item >
                <Button  htmlType='submit'>Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default UserForm