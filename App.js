import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

import {PermissionsAndroid, Platform} from 'react-native';
import App from './src/Nav/index';
import Amplify, {API, Auth, graphqlOperation} from 'aws-amplify';
import config from './aws-exports/aws-exports';
import {getCarId} from './src/graphql/query';
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';
import {createCar} from './src/graphql/mutation';
Amplify.configure(config);

const all = () => {
  useEffect(() => {
    const updateUserCar = async () => {
      /// get
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      if (!authUser) {
        return;
      }

      /// chekt
      const carData = await API.graphql(
        graphqlOperation(getCarId, {
          id: authUser.attributes.sub,
        }),
      );
      console.log(authUser);

      if (!!carData.data.getCarId) {
        console.log('listo');
        return;
      }

      /// if not create

      const newCar = {
        id: authUser.attributes.sub,
        type: 'taxi',
        userId: authUser.attributes.sub,
      };

      await API.graphql(
        graphqlOperation(createCar, {
          input: newCar,
        }),
      );
    };

    updateUserCar();
  }, []);

  return <App />;
};

export default withAuthenticator(all);
