import React from "react"
import { List, Avatar, Space, Button } from "antd"
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons"
import { deleteArticle } from "../store/actions/Article/articles"
import { connect } from "react-redux"
import PropTypes from "prop-types"
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)
class Articles extends React.Component {
  // const handleClick = (ArticleID) => {
  //   console.log(ArticleID)
  // }
  static propTypes = {
    deleteArticle: PropTypes.func.isRequired,
  }

  render() {
    return (
      <>
        <List
          itemLayout='vertical'
          size='large'
          pagination={{
            onChange: (page) => {
              console.log(page)
            },
            pageSize: 3,
          }}
          dataSource={this.props.data}
          footer={
            <div>
              <b>ant design</b> footer part
            </div>
          }
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text='156'
                  key='list-vertical-star-o'
                />,
                <IconText
                  icon={LikeOutlined}
                  text='156'
                  key='list-vertical-like-o'
                />,
                <IconText
                  icon={MessageOutlined}
                  text='2'
                  key='list-vertical-message'
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt='logo'
                  src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                />
              }>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={"/articles/" + item.id + "/"}>{item.title}</a>}
                description={item.description}
              />
              <Space size={8}>
                {item.content}

                <Button
                  type='danger'
                  onClick={this.props.deleteArticle.bind(this, item.id)}>
                  Delete Button
                </Button>
              </Space>
            </List.Item>
          )}
        />
      </>
    )
  }
}

export default connect(null, { deleteArticle })(Articles)
