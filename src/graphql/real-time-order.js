/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          duration
          distance
          cost
          place
          destLatitude
          destLongitude
          nota
          userId
          carId
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        oneline
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          duration
          distance
          cost
          place
          destLatitude
          destLongitude
          nota
          userId
          carId
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        oneline
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          duration
          distance
          cost
          place
          destLatitude
          destLongitude
          nota
          userId
          carId
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        oneline
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
      id
      type
      latitude
      longitude
      heading
      oneline
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          duration
          distance
          cost
          place
          destLatitude
          destLongitude
          nota
          userId
          carId
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          oneline
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
      id
      type
      latitude
      longitude
      heading
      oneline
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          duration
          distance
          cost
          place
          destLatitude
          destLongitude
          nota
          userId
          carId
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          oneline
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
      id
      type
      latitude
      longitude
      heading
      oneline
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          originLongitude
          duration
          distance
          cost
          place
          destLatitude
          destLongitude
          nota
          userId
          carId
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          oneline
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      duration
      distance
      cost
      place
      destLatitude
      destLongitude
      nota
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          oneline
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        oneline
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      duration
      distance
      cost
      place
      destLatitude
      destLongitude
      nota
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          oneline
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        oneline
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      duration
      distance
      cost
      place
      destLatitude
      destLongitude
      nota
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          oneline
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        oneline
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateCarInfo = /* GraphQL */ `
  subscription OnCreateCarInfo {
    onCreateCarInfo {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      duration
      distance
      cost
      place
      destLatitude
      destLongitude
      nota
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          oneline
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        oneline
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateCarInfo = /* GraphQL */ `
  subscription OnUpdateCarInfo {
    onUpdateCarInfo {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      duration
      distance
      cost
      place
      destLatitude
      destLongitude
      nota
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          oneline
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        oneline
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteCarInfo = /* GraphQL */ `
  subscription OnDeleteCarInfo {
    onDeleteCarInfo {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      duration
      distance
      cost
      place
      destLatitude
      destLongitude
      nota
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          oneline
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        oneline
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
