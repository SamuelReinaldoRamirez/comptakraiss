import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card,
  Page,
  DataTable,
    ResourceList,
    Stack,
    TextStyle,
    Thumbnail, } from '@shopify/polaris';
import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';
import Select from './selectdrop';

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

/*const GET_ORDERS_BY_ID = gql`
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
}`;*/


/*
const GET_ORDERS_BY_ID = gql`
query {
  orders(first: 50) {
    edges {
      cursor
      node {
        id
        name
        email
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
}`;*/

/*query {
  orders(first: 50) {
    edges {
      cursor
      node {
        name
        customer{
          firstName
          lastName
          email
        }
        email
        createdAt
        shippingLine{
          carrierIdentifier
        }
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
      }
    }
  }
}*/


const GET_ORDERS_BY_ID = gql`
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
  const items = data.orders.edges;


  function itemsToNode({cursor, node}) {
    return {node}.node
  };

  /*function nodeToRows(node, buildingRaw){
    console.log("node")
    console.log(node)
    console.log('dans la lambda profonde')

      Object.values(node).forEach((element, index)=> {
        
        //console.log(element)
        //console.log(typeof element === 'object' && element !== null)
        console.log(index)
        if(index !== '_typename'){
        console.log(buildingRaw)
        console.log([element])
        console.log(buildingRaw.concat([element]))
        console.log('____________')
          buildingRaw =  (typeof element === 'object' && element !== null) ? nodeToRows(element, buildingRaw) : buildingRaw.concat([element]);
        }
      });
      return buildingRaw;

  }*/

  function nodeToRows(node, buildingRaw){
    /*console.log("node")
    console.log(node)
    console.log('dans la lambda profonde')*/


      Object.entries(node).forEach((element, index)=> {
        
        /*console.log(element[0] !== '__typename')
        console.log(element[0] != '__typename')
        console.log(element[0])*/

        if(element[0] !== '__typename'){
       /* console.log(buildingRaw)
        console.log([element[1]])
        console.log(buildingRaw.concat([element[1]]))
        console.log('____________')*/
          buildingRaw =  (typeof element[1] === 'object' && element[1] !== null) ? nodeToRows(element[1], buildingRaw) : buildingRaw.concat([element[1]]);
        }
      });
      return buildingRaw;

  }

  
  

 /* console.log('items.map(itemsToNode)')
  console.log(items.map(itemsToNode))*/
  var rows = [];
  items.map(itemsToNode).forEach((value, key)=> {
   /* console.log('key,value')
    console.log(key)
    console.log(value)*/
    rows[key] = nodeToRows(value,[]) 
  })

  rows.forEach(function(part, index){
   /* element = ['<Dropdown>' +
    '<Dropdown.Toggle variant="success" id="dropdown-basic">' +
        'Dropdown Button'+
      '</Dropdown.Toggle>'+
    
      '<Dropdown.Menu>'+
        '<Dropdown.Item href="#/action-1">Action</Dropdown.Item>'+
        '<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>'+
        '<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>'+
     '</Dropdown.Menu>'+
    '</Dropdown>'].concat(element);*/

  /* rows[index] = [<select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>].concat(part);*/
        rows[index] = [<Select id={index}></Select>].concat(part);
    //console.log(part)
  }, rows);



//ReactDOM.render(<Select />, window.document.body);


/*  const clickableRowAction = () => {
    alert("I am clicked !");
  };

  rows = [
    [<div>
      <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
    </div>,
      <div className="testClick" onClick={clickableRowAction}>
        $875.00
      </div>,
      <div className="testClick" onClick={clickableRowAction}>
        124689
      </div>,
      <div className="testClick" onClick={clickableRowAction}>
        140
      </div>,
      <div className="testClick" onClick={clickableRowAction}>
        $122,500.00
      </div>
    ]].concat(rows);*/

  console.log('rows');
  console.log(rows);


  return (
    <Page fullWidth="true">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'text',
            'text',
            'text',
            'text',
          ]}
          headings={[
            'id',
            'name',
            'email',
            'jcp',
            'jcp',
            'jcp',
            'jcp',
          ]}
          //il faut récupérer les order states de la db et peut etre les mettre en cache ca serait cool
          rows={rows}
          //'<img src="'+data+'">'

          /*source={
            item.node.lineItems.edges[0]
              ? item.node.lineItems.edges[0].node.image.originalSrc
              : ''
          }*/
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