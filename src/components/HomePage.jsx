import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph} = Typography;


function HomePage() {
  return (<>
    <Typography>
      <Title>Welcome</Title>
      <Paragraph>
        Welcome to react app! You can list all customer and add customer with this app.
      </Paragraph>
      
    </Typography>


  </>)
}

export default HomePage