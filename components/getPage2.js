import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  Card,
  Page,
  DataTable,
  Pagination,
  Button
} from '@shopify/polaris';
import React, { PureComponent, Fragment } from 'react';

const GET_PAGE2 = gql`
query {
  orders(first: 50) {
    edges {
      cursor
      node {
        name
        email
        createdAt
        fulfillments{
          id
          name
          trackingInfo{
            company
            number
          }
          estimatedDeliveryAt
          deliveredAt
          displayStatus
          status
        }
        shippingLine{
          carrierIdentifier
        }
        customer{
          firstName
          lastName
          email
        }
      }
    }
  }
}`;

function DataTableExample(data) {
    console.log(data)
    var rows = [
        ["a", "b"],
        ["b", "c"]
    ];
    return (
        <Page fullWidth="true">
          <Card>
            <DataTable
              columnContentTypes={[
                'text',
                'text',
              ]}
              headings={[
                'id',
                'name',
              ]}
              rows={rows}
            />
          </Card>
        </Page>
    );
}


class ResourceListPage2 extends React.Component {
    render() {
        return (
          <Query query={GET_PAGE2}>
            {({ data, loading, error }) => {
              console.log("DATA")
              if (loading) return <div>Loading…</div>;
              if (error) return <div>{error.message}</div>;
              console.log(data);
              console.log(data.orders.edges);
              //console.log(data.orders.edges[0].node.lineItems.edges[0].node.image.originalSrc);
    
              return (
                DataTableExample(data)
              );
            }}
          </Query>
        );
      }
}

export default ResourceListPage2;