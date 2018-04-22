import React, { Component } from 'react';
import logo from './football.png';
import face from './face.png';
import './App.css';
import { Link } from 'react-router-dom';


import { Card, Icon, Avatar, List, Button, Select, Spin, InputNumber } from 'antd';

const Option = Select.Option;

class SaveMatch extends Component {
    constructor(props) {
        super(props);
        this.lastFetchId = 0;
        
      }
    state = {
        data: [],
        value: [],
        fetching: false,
      }
      fetchUser = (value) => {
        console.log('fetching user', value);
        this.lastFetchId += 1;
        const fetchId = this.lastFetchId;
        this.setState({ data: [], fetching: true });
        fetch('https://randomuser.me/api/?results=5')
          .then(response => response.json())
          .then((body) => {
            if (fetchId !== this.lastFetchId) { // for fetch callback order
              return;
            }
            const data = body.results.map(user => ({
              text: `${user.name.first} ${user.name.last}`,
              value: user.login.username,
            }));
            this.setState({ data, fetching: false });
          });
      }
      handleChange = (value) => {
        this.setState({
          value,
          data: [],
          fetching: false,
        });
      }
  render() {
    const { fetching, data, value } = this.state;
    return (
        [
        <div className="Save-match">
            <div className="group">
                <h1>Group 1</h1>
                <Select
                    mode="multiple"
                    labelInValue
                    value={value}
                    size="large"
                    placeholder="Select users"
                    notFoundContent={fetching ? <Spin size="small" /> : null}
                    filterOption={false}
                    onSearch={this.fetchUser}
                    onChange={this.handleChange}
                    style={{ width: '80%', marginTop:40 }}
                >
                    {data.map(d => <Option key={d.value}>{d.text}</Option>)}
                </Select>
                <InputNumber size="large" min={0} max={10} defaultValue={3}  />
                
            </div>
            <div className="group group2">
                <h1>Group 2</h1>
                <Select
                    mode="multiple"
                    labelInValue
                    value={value}
                    size="large"
                    placeholder="Select users"
                    notFoundContent={fetching ? <Spin size="small" /> : null}
                    filterOption={false}
                    onSearch={this.fetchUser}
                    onChange={this.handleChange}
                    style={{ width: '80%', marginTop:40 }}
                >
                    {data.map(d => <Option key={d.value}>{d.text}</Option>)}
                </Select>
                <InputNumber size="large" min={0} max={10} defaultValue={3}  />
            </div>
        </div>
        ]
    );
  }
}

export default SaveMatch;
