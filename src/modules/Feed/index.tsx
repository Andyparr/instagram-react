import React from 'react'
import Card from '../Card'

export class Feed extends React.PureComponent {
  render() {
    return (
      <>
        <Card
          profileImage="http://img.timeinc.net/time/daily/2012/1211/poy_benbernanke.jpg"
          username="andyparr"
          location="Manchester, U.K."
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/City_of_London_skyline_from_London_City_Hall_-_Sept_2015_-_Crop_Aligned.jpg/1200px-City_of_London_skyline_from_London_City_Hall_-_Sept_2015_-_Crop_Aligned.jpg"
          postedAt="now"
          likes={20}
          postedBy="andyparr"
          comment="What an amazing day!"
        />
        <Card
          profileImage="https://www.yourtango.com/sites/default/files/styles/header_slider/public/image_blog/highly.jpg?itok=CwkBp4Zc"
          username="_jlm91"
          location="Nantes, France"
          photo="https://a1.r9cdn.net/rimg/dimg/4d/94/b37a33af-city-27584-164dce7c2fd.jpg?crop=true&width=500&height=300&xhint=2766&yhint=1636"
          postedAt="10 minutes ago"
          likes={100}
          postedBy="_jlm91"
          comment="Beautiful!"
        />
      </>
    )
  }
}
