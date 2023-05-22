
import "./ToDoForm.scss";
import { Button, DatePicker, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import useTodo from "../../../Hooks/useTodo";

function ToDoForm() {
  const [form] = Form.useForm();
  const [isNewTask, setisNewTask] = useState(true);
  const {toDoEdit, postToDo} = useTodo();

  useEffect(()=>{
    form.setFieldsValue(toDoEdit);
    if(toDoEdit.id!==null){
      setisNewTask(false);
    }
    // eslint-disable-next-line
  },[toDoEdit])

  const onFinish = (values) => {
    if(toDoEdit.id===null){
      postToDo(values);
    }
  };
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
          name="date-picker"
          label="Due Date"
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