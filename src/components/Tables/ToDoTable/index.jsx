import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import useTodo from '../../../Hooks/useTodo';
import useModal from '../../../Hooks/useModal';
import dayjs from 'dayjs';


const ToDoTable = () => {
    const {todoData, setToDoEdit} = useTodo();
    const {setIsOpen, setTitle} = useModal(); 
    const {deleteToDo} = useTodo();

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
        deleteToDo(e.id)
    };

    const editTask = (data) => {
        setToDoEdit(data);
        setIsOpen(true);
        setTitle("Editing "+data.name);

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
            render: (element,data)=> (
                <>
                    {dayjs(element).format('DD/MM/YYYY')}
                </>
            )
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
                            onConfirm={()=>confirm(data)}
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