import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, DatePicker, Form, Input, Select, Spin, Switch} from "antd";
import LayoutComponent from "../components/LayoutComponent/LayoutComponent";
import {editUserRequest, getUserInfoRequest} from "../api/api";
import moment from 'moment';
const UserEdit = (props) => {
    const {id} = useParams()

    const[user, setUser] = useState()

    const [form] = Form.useForm();
    const { Option } = Select;
    const { TextArea } = Input;
    let navigate = useNavigate();
    useEffect(() => {
        const getUserData = async () => {
            const {data} = await getUserInfoRequest(id)
            data.birth_date = moment(data.birth_date)
            setUser(data)
        }
        getUserData()

    },[])

    const onFinish = (values) => {
        values.birth_date = new Date(values.birth_date).toISOString().slice(0, 10)
        editUserRequest(id, values).then(() =>  navigate('/users'))
    }

    return (
        <LayoutComponent >
            <div className={'createUser'}>
                {
                    user ? (<Form
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
                    </Form>) :
                        <Spin/>
                }
            </div>
        </LayoutComponent>
    )
}

export default UserEdit