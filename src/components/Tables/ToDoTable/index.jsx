import { Button, Popconfirm, Space, Table, Tag, message } from 'antd';
import Modal from '../../Modal';
import ToDoForm from '../../Forms/ToDoForm';
import { useState } from 'react';


const ToDoTable = ({ open, setOpen }) => {

    const [task, setTask] = useState({
        name:'',
        date:'',
        priority:''
    });

    const priorityTag = (priority) => {
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
    const confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };
    const editTask = (data) => {
        setTask(data);
        setOpen(true);
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
            dataIndex: 'date',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, data) => (
                <>
                    <Space size="middle">
                        <Button onClick={() => editTask(data)} type='link'>Edit</Button>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type='link'>Delete</Button>
                        </Popconfirm>
                    </Space>
                </>
            )
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Task 1',
            date: '2022-02-12',
            priority: 'low',
        },
        {
            key: '2',
            name: 'Task 2',
            date: '2022-02-12',
            priority: 'medium',
        },
        {
            key: '3',
            name: 'Task 3',
            date: '2022-02-12',
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
    return (
        <div>
            <br />
            <Table
                // rowKey={"id"}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
            <Modal open={open} setOpen={setOpen} title={`Editing ${task.name}`}>
                <ToDoForm task={task} />
            </Modal>
        </div>
    );
}
export default ToDoTable;