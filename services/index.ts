import { request, gql } from 'graphql-request'

export const getCarLists = async () => {
    const query = gql`
        query CarLists {
            carList {
                carAvg
                createdAt
                id
                name
                price
                seats
                publishedAt
                updatedAt
                image {
                    url
                }
                photos {
                  url
                }
                carType
                carBrand
            }
        }
    `
    const result = await request(
        'https://api-ap-south-1.hygraph.com/v2/cltakc3is2h7007uzzslrf4g0/master',
        query
    )
    return result
}

export const createBooking = async (formValue: any) => {
 
  const query = gql`
    mutation MyMutation {
      createBookingDetails(
        data: {
          userName:"${formValue.userName}",
          carId: {connect: {id: "${formValue.carId.connect.id}"}}
          contactNumber: "${formValue.contactNumber}",
          dropOffDate: "${formValue.dropOffDate}",
          dropOffTime: "${formValue.dropOffTime}",
          location: "${formValue.location}",
          pickUpDate: "${formValue.pickUpDate}",
          pickUpTime: "${formValue.pickUpTime}",
        }
      ) {
        id
      }
    }
  `;

  const result = await request(
    'https://api-ap-south-1.hygraph.com/v2/cltakc3is2h7007uzzslrf4g0/master',
    query
  );
  return result;
};
