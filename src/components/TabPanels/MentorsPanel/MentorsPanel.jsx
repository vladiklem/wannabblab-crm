import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button,
  Select,
  Checkbox,
  Radio,
  Card,
  Modal,
  Tag,
} from "antd";

import { addMentor, initMentors } from "../../../store/mentors/actions";
import { engLevelTypes, initialMentor, salaryTypes } from "../../../constants";

const { Option } = Select;

export const MentorsPanel = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialMentor);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const mentors = useSelector((state) => state.mentors);

  const onFormChange = useCallback((event) => {
    const { name, value, checked } = event.target;
    const newValue = name === "haveCert" || name === "instagramAd" ? checked : value;
    setForm((data) => ({ ...data, [name]: newValue }));
  }, [form, setForm]);

  const setSelectValue = useCallback((s, v) => {
    setForm((data) => ({ ...data, [s]: v }));
  }, [setForm]);

  const onSelectChange = {
    level: (v) => setSelectValue("level", v),
  };

  const onOk = useCallback(() => {
    dispatch(addMentor(form));
    setForm(initialMentor);
    setIsFormVisible(false);
  }, [form, setForm]);

  const onAddClick = useCallback(
    () => setIsFormVisible((visible) => !visible), [setIsFormVisible],
  );

  useEffect(() => {
    dispatch(initMentors());
  }, []);

  const {
    fullName, salary, salaryType,
  } = form;

  return (
    <>
      <Button onClick={onAddClick} style={{ marginBottom: 16 }}>
        Додати ментора
      </Button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {mentors && mentors.map(({
          fullName: fn, level: l, salary: s, salaryType: st, haveCert: hc, instagramAd: ia,
        }) => (
          <div style={{ padding: 32, width: "50%" }}>
            <Card title={fn} extra={<b>{l}</b>}>
              <p>{`отримує ${s} ${salaryTypes.FIX === st ? "грн за заняття" : "% від прибутку з групи"}`}</p>
              {hc && <Tag color="blue">IELTS</Tag>}
              {ia && <Tag color="orange">inst</Tag>}
            </Card>
          </div>
        ))}
      </div>
      <Modal
        title="Новенький ментор"
        style={{ top: 20 }}
        visible={isFormVisible}
        onOk={onOk}
        onCancel={onAddClick}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          layout="horizontal"
        >
          <Form.Item label="Ім'я" rules={[{ required: true }]}>
            <Input name="fullName" value={fullName} onChange={onFormChange} />
          </Form.Item>
          <Form.Item label="тип оплати">
            <Radio.Group name="salaryType" onChange={onFormChange} value={salaryType}>
              {Object.keys(salaryTypes).map((t) => (
                <Radio key={t} value={salaryTypes[t]}>{t}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label={salaryType === salaryTypes.FIX ? "грн / урок" : "% від ск"}>
            <Input
              type="number"
              name="salary"
              value={salary}
              onChange={onFormChange}
            />
          </Form.Item>
          <Form.Item name="level" label="Рівень англійської">
            <Select defaultValue={engLevelTypes.B2} name="level" onChange={onSelectChange.level}>
              {Object.keys(engLevelTypes).map((key) => (
                <Option key={key} value={key}>{engLevelTypes[key]}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Рекламує нас в інсті">
            <Checkbox name="instagramAd" defaultValue={false} onChange={onFormChange} />
          </Form.Item>
          <Form.Item label="Має сертифікат">
            <Checkbox name="haveCert" defaultValue={false} onChange={onFormChange} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
