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
