import * as React from 'react'

interface Props {
  profileImage: string
  username: string
  location: string
  photo: string
  postedAt: string
  likes: number
  postedBy: string
  comment: string
}

export default class Card extends React.PureComponent<Props> {
  render() {
    return (
      <div style={{ marginBottom: 10 }}>
        <div>
          <div style={{ display: 'flex', fontSize: 28 }}>
            <div style={{ display: 'flex', width: 450 }}>
              <div>
                <img
                  style={{
                    borderRadius: 50,
                    height: 50,
                    width: 50,
                    margin: 'auto',
                    padding: 10
                  }}
                  src={this.props.profileImage}
                />
              </div>
              <div
                style={{
                  margin: 'auto',
                  marginLeft: 0
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {this.props.username}
                </div>
                <div style={{ fontSize: 14, color: '#666666' }}>
                  {this.props.location}
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontWeight: 'bolder',
                  fontSize: 40,
                  margin: 'auto',
                  paddingBottom: 10,
                  paddingRight: 10
                }}
              >
                ...
              </div>
            </div>
          </div>
        </div>

        <div>
          <img style={{ width: 500 }} src={this.props.photo} />
        </div>
        <div>
          <div>
            <div style={{ display: 'flex', fontSize: 28 }}>
              <div style={{ display: 'flex', width: 450 }}>
                <div style={{ margin: 10 }}>❤️</div>
                <div style={{ margin: 10 }}>💬</div>
                <div style={{ margin: 10 }}>🚀</div>
              </div>
              <div style={{ marginTop: 10, paddingRight: 10 }}>📥</div>
            </div>
          </div>
          <div style={{ paddingLeft: 10, fontWeight: 'bold' }}>
            {this.props.likes} likes
          </div>
          <div style={{ paddingLeft: 10, paddingTop: 10 }}>
            <span style={{ fontWeight: 'bold' }}>{this.props.postedBy} </span>
            {this.props.comment}
          </div>
          <div
            style={{
              paddingLeft: 10,
              paddingTop: 10,
              color: '#666666',
              fontSize: 12
            }}
          >
            {this.props.postedAt.toUpperCase()}
          </div>
        </div>
      </div>
    )
  }
}
