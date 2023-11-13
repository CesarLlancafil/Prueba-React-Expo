import React from 'react';
import { Text } from 'react-native';

const Error = ({ msg }: { msg: string }) => {
    return <Text style={{ textAlign: 'center', fontSize: 20}}>Error al cargar productos{"\n"}
              <Text style={{ textAlign: 'center', fontSize: 15}}>{msg}</Text>
            </Text>
  };
  
  export default Error;