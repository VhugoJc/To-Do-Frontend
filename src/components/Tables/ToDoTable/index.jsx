import { useEffect, useState } from 'react';
import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import dayjs from 'dayjs';

import useTodo from '../../../Hooks/useTodo';
import useModal from '../../../Hooks/useModal';
import useFilter from "../../../Hooks/useFilter";


const ToDoTable = () => {
    const {todoData, setToDoEdit, setRefresh} = useTodo();
    const {setIsOpen, setTitle} = useModal(); 
    const {deleteToDo, doneTodo, undoneTodo} = useTodo();
    const {pagination, setpagination, } = useTodo();
    const [selected, setSelected] = useState([]);
    const {setSortData}= useFilter();

    useEffect(()=>{
        const idSelected = todoData.map(item=>{
            if(item.done===true){
                return item.id
            }
            return null
        })
        setSelected(idSelected);
    },[todoData]);

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
    const handlePage = (page) => {
        setRefresh(true);
        setpagination({
            currentPage: page
        })
    }
    const handleTableChange = (pagiination, filters, sorter) => {
        const {order, field} = sorter;
        
        let value = null;
        if(field==="priority"){
            if(typeof order !== "undefined"){
                value=order;
            }
            setSortData({
                sortByDate:null,
                sortByPriority: value
            });
            setRefresh(true);
        }
        if(field==="dueDate"){
            if(typeof order !== "undefined"){
                value=order;
            }
            setSortData({
                sortByPriority: null,
                sortByDate: value
            });
            setRefresh(true);
        }
        
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Priority',
            key: 'priority',
            dataIndex: 'priority',
            sorter: true, // (a,b)=>a.name.length - b.name.length,
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
            sorter: true, //(a,b)=> dayjs(a.dueDate).unix() - dayjs(b.dueDate).unix(),
            render: (element,data)=> (
                <>
                    {
                        element===null
                        ? '-'
                        : dayjs(element).format('YYYY-MM-DD')
                    }
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
        selectedRowKeys:selected,
        onChange: (selectedRowKeys, selectedRows, info) => {
            setSelected(selectedRowKeys);
        },
        onSelect: (record, isselected, selectedRows, nativeEvent)=>{
            if(isselected){
                doneTodo(record.id);
            }else{
                undoneTodo(record.id);
            }
        },
        onSelectAll: (selected, selectedRows, changeRows)=>{
            
            if(selected){
                changeRows.forEach(row=>{
                    doneTodo(row.id);
                });
            }else{
                changeRows.forEach(row=>{
                    undoneTodo(row.id);
                });

            }
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            selected: record.done === true,
            // Column configuration not to be checked
            name: record.name,
        }),
        
    };
    return (
        <div>
            <br />
            <Table
            onChange={handleTableChange}
            scroll={{y:300}}
                pagination={{
                    total:pagination.totalPages*10,
                    defaultPageSize:10,
                    current:pagination.currentPage,
                    onChange:page=>{handlePage(page)}
                }}
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