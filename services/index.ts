import { request, gql } from 'graphql-request'

export const getCarLists = async() =>{
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
          carType
        }
      }
    `
    const result = await request("https://api-ap-south-1.hygraph.com/v2/cltakc3is2h7007uzzslrf4g0/master",query)
    return result;
}