import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Tabs, Row, Col, Statistic,
} from "antd";

import { firebaseService } from "../../services/firebaseService";

import { initClients } from "../../store/leads/actions";
import { initMentors } from "../../store/mentors/actions";
import { initGroups } from "../../store/groups/actions";
import { MentorsPanel } from "../../components/TabPanels/MentorsPanel/MentorsPanel";
import { LeadsPanel } from "../../components/TabPanels/LeadsPanel/LeadsPanel";
import { GroupsPanel } from "../../components/TabPanels/GroupsPanel/GroupsPanel";

const { TabPane } = Tabs;

firebaseService.init();

export const HomePage = () => {
  const dispatch = useDispatch();
  const { initialSum } = useSelector((state) => state.budget);

  useEffect(() => {
    dispatch(initClients());
    dispatch(initGroups());
    dispatch(initMentors());
  }, []);

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Бюджет (ГРН)" value={initialSum} />
        </Col>
      </Row>
      <Tabs defaultActiveKey="1">
        <TabPane tab="ментори" key="1">
          <MentorsPanel />
        </TabPane>
        <TabPane tab="ліди" key="2">
          <LeadsPanel />
        </TabPane>
        <TabPane tab="групи" key="3">
          <GroupsPanel />
        </TabPane>
      </Tabs>
    </div>
  );
};
