import React from "react";
import {Table} from "antd";

const LayoutComponent = () => {

    const columns = [
        {
            title: 'first name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'last name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
        },
        {
            title: 'Action',
            key: 'action',

        },
    ];

    const data = [
        {
            title: 'Action',
            key: 'action',

        },
    ];
    return (
        <div className='app-wrapper'>
            <Table columns={columns} dataSource={data} />
        </div>

    )
}

export default LayoutComponent