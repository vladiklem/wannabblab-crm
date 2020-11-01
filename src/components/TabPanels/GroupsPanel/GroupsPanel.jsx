import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button,
  Select,
  Modal,
  Card,
  DatePicker,
} from "antd";

import { addGroup } from "../../../store/groups/actions";
import {
  initialGroup,
  weekDayTypes,
} from "../../../constants";

const { Option } = Select;

export const GroupsPanel = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialGroup);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const groups = useSelector((state) => state.groups);
  const mentors = useSelector((state) => state.mentors);
  const clients = useSelector((state) => state.leads);

  const onFormChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((data) => ({ ...data, [name]: value }));
  }, [form, setForm]);

  const setSelectValue = useCallback((s, v) => {
    setForm((data) => ({ ...data, [s]: v }));
  }, [setForm]);

  const onSelectChange = {
    mentor: (v) => setSelectValue("mentorId", v),
    member: (v) => setSelectValue("memberIds", v),
    schedule: (v) => setSelectValue("schedule", v),
    start: (d, ds) => setSelectValue("startDate", ds),
  };

  const getMentor = (mentorId) => mentors.find(({ id }) => id === mentorId);
  const getStudent = (studentId) => clients.find(({ id }) => id === studentId);

  const onOk = useCallback(() => {
    dispatch(addGroup(form));
    setForm(initialGroup);
    setIsFormVisible(false);
  }, [form, setForm]);

  const onAddClick = useCallback(
    () => setIsFormVisible((visible) => !visible),
    [setIsFormVisible],
  );

  const { name, schedule } = form;

  return (
    <>
      <Button onClick={onAddClick} style={{ marginBottom: 16 }}>
        Додати групу
      </Button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {groups && groups.map(({
          mentorId, memberIds, name: n, schedule, ...rest
        }) => (
          <div style={{ padding: 32, width: "50%" }}>
            <Card title={n}>
              <p>{`Групу веде ${getMentor(mentorId).fullName}`}</p>
              <p>{`В группі навчаються ${memberIds.map((memberId) => `${getStudent(memberId).fullName} `)}`}</p>
              <p>Розклад</p>
              {schedule.map((key) => <p>{`${weekDayTypes[key.toUpperCase()]} - ${rest[key]}`}</p>)}
            </Card>
          </div>
        ))}
      </div>
      <Modal
        title="Новенька група"
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
          <Form.Item label="як називається?" rules={[{ required: true }]}>
            <Input placeholder="WB-0" name="name" value={name} onChange={onFormChange} />
          </Form.Item>
          <Form.Item label="хто ментор?" rules={[{ required: true }]}>
            <Select onChange={onSelectChange.mentor}>
              {mentors.map(({ id, fullName }) => (
                <Option key={id} value={id}>{fullName}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="які тіпи займаються?" rules={[{ required: true }]}>
            <Select mode="multiple" onChange={onSelectChange.member}>
              {clients.map(({ id, fullName }) => (
                <Option key={id} value={id}>{fullName}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="дні?" rules={[{ required: true }]}>
            <Select mode="multiple" onChange={onSelectChange.schedule}>
              {Object.keys(weekDayTypes).map((key) => (
                <Option key={key} value={key.toLowerCase()}>{weekDayTypes[key]}</Option>
              ))}
            </Select>
          </Form.Item>
          {!!schedule.length && (
          <Form.Item label="час?" rules={[{ required: true }]}>
            {schedule.map((day) => (
              <>
                <label htmlFor={day}>{weekDayTypes[day.toUpperCase()]}</label>
                <Input id={day} name={day} type="time" value={form[day]} onChange={onFormChange} />
              </>
            ))}
          </Form.Item>
          )}
          <Form.Item label="дата початку?">
            <DatePicker onChange={onSelectChange.start} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
