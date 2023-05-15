import { Table,Tag } from 'antd';
const priorityTag = (priority) =>{
    let color = 'green';
    switch (priority) {
        case 'low':
            color = 'green';
            break;
        case 'medium':
            color = 'gold';
            break;
        case 'high':
            color = 'volcano';
            break;
        default:
            break;
        }
    return (
        <>
            <Tag color={color}>
                {priority}
            </Tag>
        </>
    )
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'Priority',
        key: 'priority',
        dataIndex: 'priority',
        render: (_, { priority }) => (
            <>
                {
                    priorityTag(priority)
                }
            </>
        ),
    },
    {
        title: 'Due Date',
        dataIndex: 'address',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        priority: 'low',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        priority: 'medium',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        priority: 'high',
    },
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

const ToDoTable = () => {
    return (
        <div>
            <br />
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
}
export default ToDoTable;