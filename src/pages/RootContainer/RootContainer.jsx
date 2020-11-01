import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';

import { HomePage } from '../HomePage/HomePage';
import { AnotherPage } from '../HomePage/AnotherPage';

import { initClients } from '../../store/clients/actions';
import { initMentors } from '../../store/mentors/actions';
import { initGroups } from '../../store/groups/actions';

const { Header, Content } = Layout;

export const RootContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initClients());
    dispatch(initGroups());
    dispatch(initMentors());
  }, [dispatch]);

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="another">Another</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Content style={{ padding: '50px 50px' }}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/another">
            <AnotherPage />
          </Route>
        </Switch>
      </Content>
    </Router>
  );
};
