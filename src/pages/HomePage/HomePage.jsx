import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs, Row, Col, Statistic } from 'antd';

import { firebaseService } from '../../services/firebaseService';

import {
  MentorsPanel,
} from '../../components/TabPanels/MentorsPanel/MentorsPanel';
import {
  LeadsPanel,
} from '../../components/TabPanels/LeadsPanel/LeadsPanel';
import {
  GroupsPanel,
} from '../../components/TabPanels/GroupsPanel/GroupsPanel';

const { TabPane } = Tabs;

firebaseService.init();

export const HomePage = () => {
  const { initialSum } = useSelector((state) => state.budget);

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
