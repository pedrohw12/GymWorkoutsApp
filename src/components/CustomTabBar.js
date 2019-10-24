import React from 'react';
import { 
  TabBarArea, 
  TabBarItem, 
  TabRegular, 
  TabImage, 
  TabBall, 
  TabBallImage,
  Text, 
} from './styles';

export default (props) => {

  return (
    <TabBarArea>
      {props.items.map(item=>(
        <TabBarItem key={item.route}>
          {item.type == 'regular' &&
            <TabRegular underlayColor="transparent" onPress={()=>props.navigation.navigate(item.route)}>
              <>
                <TabImage source={item.icon} />
                <Text>{item.text}</Text>
              </>
            </TabRegular>
          }
          {item.type == 'big' &&
            <TabBall underlayColor="#00FF00" onPress={()=>props.navigation.navigate(item.route)}>
              <TabBallImage source={item.icon} />
            </TabBall>
          }
        </TabBarItem>
      ))}
    </TabBarArea>
  );
};