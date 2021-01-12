import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card,
  Page,
  DataTable,
    ResourceList,
    Stack,
    TextStyle,
    Thumbnail, } from '@shopify/polaris';
import store from 'store-js';
import React from 'react';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';

/*mutation exampleProductCreate($input: ProductInput!) {
  productCreate(input: $input) {
    userErrors {
      field
      message
    }
    product {
      id
      title
      productType
    }
  }
}
*/

/*{
  "input": {"title": "test product", "productType": "test type"}
}*/

/*query {
  orders(first: 3) {
    edges {
      cursor
      node {
        id
        name
        email
        netPaymentSet{
          shopMoney{
            amount
          }	
        }
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
*/

const GET_ORDERS_BY_ID = gql`
query {
  orders(first: 50) {
    edges {
      cursor
      node {
        id
        name
        email
        netPaymentSet{
          shopMoney{
            amount
          }	
        }
        lineItems(first:5){
          edges{
            node{
              name
              image {
                id
                    originalSrc
                    altText
              }
               
            }
          }
        }
      }
    }
  }
}`;


function DataTableExample() {
  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blaz',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          //totals={['', '', '', 255, '$155,830.00']}
        />
      </Card>
    </Page>
  );
}

class ResourceListWithOrders extends React.Component {
  render() {
    return (
      <Query query={GET_ORDERS_BY_ID}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading…</div>;
          if (error) return <div>{error.message}</div>;
          console.log(data);
          console.log(data.orders.edges[0].node);
          console.log(data.orders.edges[0].node.lineItems.edges[0].node.image.originalSrc);




          return (
            DataTableExample()
          );
        }}
        </Query>
    );
      }
    }

            /*<Card>
              <p>Les 50 dernières commandes</p>
              <ResourceList
                showHeader
                resourceName={{ singular: 'Order', plural: 'Orders' }}
                items={data.orders.edges}
                renderItem={item => {
                  const orderName = item.node.name
                  const media = (
                    <Thumbnail
                      source={
                        item.node.lineItems.edges[0]
                          ? item.node.lineItems.edges[0].node.image.originalSrc
                          : ''
                      }
                    />
                  );
                  const price = item.node.netPaymentSet.shopMoney.amount;
                  return (
                    
                    <ResourceList.Item
                    media = {orderName}
                     // id={item.id}
                      media={media}
                      //accessibilityLabel={`View details for ${item.title}`}
                      onClick={() => {
                        //store.set('item', item);
                        console.log('store.set')
                        //redirectToProduct();
                      }}
                    >
                      <Stack>
                      <Stack.Item>
                          <p>{orderName}</p>
                        </Stack.Item>
                        <Stack.Item fill>
                          <h3>
                            <TextStyle variation="strong">

                              {item.node.id}
                            </TextStyle>
                          </h3>
                        </Stack.Item>
                        <Stack.Item>
                          <p>${price}</p>
                        </Stack.Item>
                        <Stack.Item>
                          <p>Expires on R </p>
                        </Stack.Item>
                      </Stack>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card>
          );
        }}
      </Query>
    );
  }
}*/

 export default ResourceListWithOrders;