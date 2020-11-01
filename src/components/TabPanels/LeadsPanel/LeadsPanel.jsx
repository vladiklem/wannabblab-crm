import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input, Button, Select, Modal, Card, Tag, Checkbox } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { addClient, updateClient } from '../../../store/clients/actions';
import {
  sourceTypes,
  statusTypes,
  engLevelTypes,
  goalTypes,
  initialClient,
  workTypes,
} from '../../../constants';

const { Option } = Select;

export const LeadsPanel = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialClient);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const clients = useSelector((state) => state.clients);

  const getClient = useCallback((id) =>
    clients.find((client) => client.id === id), [clients]);

  const onFormChange = useCallback(
    (event) => {
      const { name, value, checked } = event.target;
      setForm((data) => ({ ...data, [name]: value || checked }));
    },
    [setForm],
  );

  const setSelectValue = useCallback(
    (s, v) => setForm((data) => ({ ...data, [s]: v })),
    [setForm],
  );

  const onSelectChange = {
    status: (v) => setSelectValue('status', v),
    source: (v) => setSelectValue('source', v),
    level: (v) => setSelectValue('level', v),
    goal: (v) => setSelectValue('goal', v),
    work: (v) => setSelectValue('work', v),
  };

  const onOk = useCallback(() => {
    isEditing ? dispatch(updateClient(form)) : dispatch(addClient(form));
    setIsEditing(false);
    setForm(initialClient);
    setIsFormVisible(false);
  }, [isEditing, setForm, dispatch, form]);

  const onAddClick = useCallback(() => {
    setIsFormVisible((visible) => !visible);
    setForm(initialClient);
  }, [setForm, setIsFormVisible]);

  const onEditClick = useCallback(
    (id) => {
      const client = getClient(id);
      setIsEditing(true);
      setForm(client);
      setIsFormVisible((visible) => !visible);
    },
    [setIsFormVisible, setForm, getClient],
  );

  const {
    fullName,
    phoneNumber,
    description,
    source,
    level,
    goal,
    work,
    status,
    callback,
    callbackDate,
    instagram,
  } = form;

  return (
    <>
      <Button onClick={onAddClick} style={{ marginBottom: 16 }}>
        Додати ліда
      </Button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {clients &&
          clients.map(
            ({
              id,
              status: st,
              fullName: fN,
              phoneNumber: pn,
              description: d,
              level: l,
              source: s,
              work: w,
              instagram: i,
              goal: g,
              callback: cb,
              callbackDate: cbd,
            }) => (
              <div key={id} style={{ padding: 32, width: '50%' }}>
                <Card
                  actions={[<EditOutlined onClick={() => onEditClick(id)} />]}
                  title={fN}
                  extra={<b>{statusTypes[st]}</b>}
                >
                  {!!pn && <p>{`Tel: ${pn}`}</p>}
                  {!!i && <p>{`інст: ${i}`}</p>}
                  <p>
                    {'Рівень: '}
                    <Tag color="green">{engLevelTypes[l]}</Tag>
                  </p>
                  <p>{`Ціль: ${goalTypes[g]}`}</p>
                  <p>{`Звідкии прийшов: ${sourceTypes[s]}`}</p>
                  <p>{`Де працює: ${workTypes[w]}`}</p>
                  {cb && <h4>{`ПЕРЕТЕЛЕФОНУВАТИ - ${cbd}`}</h4>}
                  {!!d && <p>{`Опис: ${d}`}</p>}
                </Card>
              </div>
            ),
          )}
      </div>
      <Modal
        title="Новенький лід"
        style={{ top: 20 }}
        visible={isFormVisible}
        onOk={onOk}
        onCancel={onAddClick}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          layout="horizontal"
        >
          <Form.Item label="хто?" rules={[{ required: true }]}>
            <Input
              placeholder="Василь"
              name="fullName"
              value={fullName}
              onChange={onFormChange}
            />
          </Form.Item>
          <Form.Item label="номерок">
            <Input
              placeholder="06636171717"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onFormChange}
            />
          </Form.Item>
          <Form.Item label="instagram">
            <Input
              placeholder="wannablab.eng"
              name="instagram"
              value={instagram}
              onChange={onFormChange}
            />
          </Form.Item>
          <Form.Item label="який статус?">
            <Select defaultValue={status} onChange={onSelectChange.status}>
              {Object.keys(statusTypes).map((key) => (
                <Option key={key} value={key}>
                  {statusTypes[key]}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="де підібрали?">
            <Select defaultValue={source} onChange={onSelectChange.source}>
              {Object.keys(sourceTypes).map((key) => (
                <Option key={key} value={key}>
                  {sourceTypes[key]}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="шо по рівню?">
            <Select defaultValue={level} onChange={onSelectChange.level}>
              {Object.keys(engLevelTypes).map((key) => (
                <Option key={key} value={key}>
                  {engLevelTypes[key]}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="нашо англ?">
            <Select defaultValue={goal} onChange={onSelectChange.goal}>
              {Object.keys(goalTypes).map((key) => (
                <Option key={key} value={key}>
                  {goalTypes[key]}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="де працює?">
            <Select defaultValue={work} onChange={onSelectChange.work}>
              {Object.keys(workTypes).map((key) => (
                <Option key={key} value={key}>
                  {workTypes[key]}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="колл бэк?">
            <Checkbox
              name="callback"
              checked={callback}
              onChange={onFormChange}
            />
          </Form.Item>
          {callback && (
            <Form.Item label="дата коллбэку">
              <Input
                id="callbackDate"
                name="callbackDate"
                value={callbackDate}
                type="date"
                onChange={onFormChange}
              />
            </Form.Item>
          )}
          <Form.Item label="ессе">
            <Input.TextArea
              placeholder="бест оф зе бест"
              name="description"
              value={description}
              onChange={onFormChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
