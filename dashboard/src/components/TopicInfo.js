import React, {Component} from 'react';
import {Button, PageHeader, Popconfirm, Space, Table, Tabs, Tag, Tooltip} from "antd";
import {Link} from "react-router-dom";
import request from "../common/request";
import TopicPartition from "./TopicPartition";
import TopicBroker from "./TopicBroker";
import TopicConsumerGroup from "./TopicConsumerGroup";

const {TabPane} = Tabs;

class TopicInfo extends Component {

    state = {
        clusterId: undefined,
        topic: undefined
    }

    componentDidMount() {
        let urlParams = new URLSearchParams(this.props.location.search);
        let clusterId = urlParams.get('clusterId');
        let topic = urlParams.get('topic');
        this.setState({
            clusterId: clusterId,
            topic: topic,
        })
    }

    handleTabChange(key) {

    }

    render() {

        return (
            <div>
                <div className='kd-page-header'>
                    <PageHeader
                        className="site-page-header"
                        onBack={() => {
                            this.props.history.goBack();
                        }}
                        title={this.state.topic}
                        subTitle=""
                    />
                </div>

                <div className='kd-content'>
                    <Tabs defaultActiveKey='0' onChange={this.handleTabChange}>
                        <TabPane tab="分区信息" key="partition">
                            <TopicPartition
                                clusterId={this.state.clusterId}
                                topic={this.state.topic}>

                            </TopicPartition>
                        </TabPane>
                        <TabPane tab="Broker信息" key="broker">
                            <TopicBroker
                                clusterId={this.state.clusterId}
                                topic={this.state.topic}>

                            </TopicBroker>
                        </TabPane>
                        <TabPane tab="消费组信息" key="consumer-group">
                            <TopicConsumerGroup
                                clusterId={this.state.clusterId}
                                topic={this.state.topic}>

                            </TopicConsumerGroup>
                        </TabPane>

                    </Tabs>
                </div>
            </div>
        );
    }
}

export default TopicInfo;