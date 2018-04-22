import React, { Component } from 'react';
import logo from './football.png';
import face from './face.png';
import './App.css';
import { Link } from 'react-router-dom';


import { Card, Icon, Avatar, List, Button } from 'antd';
const { Meta } = Card;

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `Player ${i}`,
    avatar: 'https://picsum.photos/200/300/?random',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Kicker King</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/save">
            <Button className="Play-button" type="primary" size="large">Play for Victory</Button>
          </Link>
        </header>
        <div className="App-body">
          <div className="king">
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src="https://i2-prod.mirror.co.uk/incoming/article10263400.ece/ALTERNATES/s615b/PROD-Kim-Jong-Un.jpg" />}
              actions={[<Icon type="man" />, <Icon type="eye-o" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={<Avatar src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/crown.png" />}
                title="Kim Joung Yung"
                description="14988 points"
              />
            </Card>
          </div>

          <div className="List">

            <List
              size="large"
              itemLayout="horizontal"
              style={{width: '100%'}}
              dataSource={listData}
              renderItem={item => (
                <List.Item actions={[<Icon type="man" />, <Icon type="eye-o" />]}>
                  <List.Item.Meta
                    avatar={<Avatar size="large" src="https://i2-prod.mirror.co.uk/incoming/article10263400.ece/ALTERNATES/s615b/PROD-Kim-Jong-Un.jpg" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />

          </div>
          
        </div>
      </div>
    );
  }
}

export default LandingPage;
