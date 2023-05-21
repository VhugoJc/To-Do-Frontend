import { Button, Popconfirm, Space, Table, Tag, message } from 'antd';
import useTodo from '../../../Hooks/useTodo';


const ToDoTable = ({ setOpen }) => {
    const {todoData, setToDoEdit} = useTodo();

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
        setToDoEdit(data);
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
            dataIndex: 'dueDate',
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
                rowKey={"id"}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={todoData}
            />
        </div>
    );
}
export default ToDoTable;