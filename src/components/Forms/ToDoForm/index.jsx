
import "./ToDoForm.scss";
import { Button, DatePicker, Form, Input, Select } from 'antd'
import React from 'react'

function ToDoForm() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <Form
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
            value:"low",
            label:"Low"
          },
          {
            value:"meidum",
            label:"Medium"
          },
          {
            value:"high",
            label:"High"
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
          Add
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ToDoForm