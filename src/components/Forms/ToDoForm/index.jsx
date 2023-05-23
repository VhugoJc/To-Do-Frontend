
import "./ToDoForm.scss";
import { Button, DatePicker, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import useTodo from "../../../Hooks/useTodo";
import dayjs from "dayjs";


function ToDoForm() {
  const [form] = Form.useForm();
  const [isNewTask, setisNewTask] = useState(true);
  const {toDoEdit, postToDo} = useTodo();
  const {updateTodo} = useTodo();

  useEffect(()=>{
    form.setFieldsValue(toDoEdit);
    if(toDoEdit.id!==null){
      setisNewTask(false);
    }else{
      setisNewTask(true);
    }
    // eslint-disable-next-line
  },[toDoEdit])

  const onFinish = (values) => {
    if(toDoEdit.id===null){
      postToDo(values);
    }else{
      updateTodo(toDoEdit.id,values);
    }
  };
  const dueDateFormat=(date)=>{
    if(date===null){
      return null
    }else{
      return dayjs(date);
    }
  }
  
  return (
    <>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
      >
        <Form.Item
          name='name'
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="priority"
          label="Priority"
          rules={[{ required: true, message: 'Please choose a priority!' }]}
        >
          <Select
            options={[{
              value: "low",
              label: "Low"
            },
            {
              value: "medium",
              label: "Medium"
            },
            {
              value: "high",
              label: "High"
            }
            ]}
          />
        </Form.Item>
        <Form.Item
          name="dueDate"
          label="Due Date"
          getValueProps={(i) => ({value: dueDateFormat(i)})}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button className='todo-form-btn' htmlType='submit'>
            {
              isNewTask
                ? 'Add'
                : 'Update'
            }
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ToDoForm