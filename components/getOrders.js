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
import ReactDOM from 'react-dom';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';
import Select from './selectdrop';
import axios from 'axios';



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

var retourDuGet = [];

/*let AuthUser = function(data) {
   return google.login(data.username, data.password).then(token => { return token } )
 }
 let userToken = await AuthUser(data)
 console.log(userToken)*/

/* let callGet = function(){
   console.log("axios") 
 var retourDeFin;
 retourDuGet = await axios.get("https://"+KEY_NGROKBACK+".ngrok.io/getStateOrder", {headers: {"Content-Type": 'application/json'}})
 .then(function(result) {
   console.log("result dans le then dans le call")
   console.log(result.data)
   retourDeFin = result.data
   return result.data;
 })
 .catch(err => console.error(err))
// retourDuGet = axios.get("https://"+KEY_NGROKBACK+".ngrok.io/getStateOrder", {headers: {"Content-Type": 'application/json'}}).value.data
console.log("result à la fin du call")
console.log(retourDeFin) 
return retourDeFin
}*/

/*async function callGet(){
  console.log("axios") 
  var retourDeFin;
  retourDuGet = await axios.get("https://"+KEY_NGROKBACK+".ngrok.io/getStateOrder", {headers: {"Content-Type": 'application/json'}})
  .then(function(result) {
    console.log("result dans le then dans le call")
    console.log(result.data)
    retourDeFin = result.data
    return result.data;
  })
  .catch(err => console.error(err))
 // retourDuGet = axios.get("https://"+KEY_NGROKBACK+".ngrok.io/getStateOrder", {headers: {"Content-Type": 'application/json'}}).value.data
 console.log("result à la fin du call")
 console.log(retourDeFin) 
 return retourDeFin
}*/


function callGet() {
  console.log("axios")
  axios.get("https://" + KEY_NGROKBACK + ".ngrok.io/getStateOrder", { headers: { "Content-Type": 'application/json' } })
    .then(function (result) {
      console.log("rrrt")
      console.log(result.data)
      return result.data
    })
}




function getCol(matrix, col) {
  var column = [];
  for (var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][col]);
  }
  return column;
}


function DataTableExample(data) {

  function callGetStateOrder() {
    console.log("axios cal get state order")
    return axios.get("https://" + KEY_NGROKBACK + ".ngrok.io/getStateOrder", { headers: { "Content-Type": 'application/json' } })
  }

  const items = data.orders.edges;
  console.log("alpha phase")
  callGet()
  //console.log(callGet())
  //console.log(() => callGet())


  function itemsToNode({ cursor, node }) {
    return { node }.node
  };


  function nodeToRows(node, buildingRaw) {
    /*console.log("node")
    console.log(node)
    console.log('dans la lambda profonde')*/
    Object.entries(node).forEach((element, index) => {

      /*console.log(element[0] !== '__typename')
      console.log(element[0] != '__typename')
      console.log(element[0])*/

      if (element[0] !== '__typename') {
        /* console.log(buildingRaw)
         console.log([element[1]])
         console.log(buildingRaw.concat([element[1]]))
         console.log('____________')*/
        buildingRaw = (typeof element[1] === 'object' && element[1] !== null) ? nodeToRows(element[1], buildingRaw) : buildingRaw.concat([element[1]]);
      }
    });
    return buildingRaw;

  }




  /* console.log('items.map(itemsToNode)')
   console.log(items.map(itemsToNode))*/
  var rows = [];
  items.map(itemsToNode).forEach((value, key) => {
    /* console.log('key,value')
     console.log(key)
     console.log(value)*/
    rows[key] = nodeToRows(value, [])
  })

  function initRows(data) {
    console.log('Init rows')
    console.log(data)
    rows.forEach(function (part, index) {

     /* this.setState({ value: event.target.value });
       store.set('etat'+this.props.id, { id : this.props.id, choix : event.target.value})
       var orderState = (event.target.value == "Select…") ? null : event.target.value;
       console.log(orderState)*/

      rows[index] = [<Select id={index} valueDeDB={ data[index].order_state}></Select>].concat(part);
        //.setState({value : data[index].order_state})]
    }, rows);
  
    var coloneDesEtatsASetter = getCol(rows, 0)
    console.log("colonne des select")
    console.log(coloneDesEtatsASetter)
    var coloneDesNamesIds = getCol(rows, 1)
  
  }

  var rowsFromDB = [];

  callGetStateOrder().then(function (result) {
    console.log("call get state order callback")
    console.log(result.data)
    initRows(result.data)
  })

  /** SAMIA DEBUT
  rows.forEach(function (part, index) {
    //axios.getEtat du select à setter (en fonction de la page et du tri (le tri doit etre global dans un premier temps et puis on pourra faire un tri sur les seuls éléments de la page aussi))
    rows[index] = [<Select id={index}></Select>].concat(part);
  }, rows);

  console.log('rows');
  console.log(rows);

  //on ne tient pas encore compte de la pagination
  var coloneDesEtatsASetter = getCol(rows, 0)
  console.log('vide?')
  console.log(coloneDesEtatsASetter)
  var coloneDesNamesIds = getCol(rows, 1)

  var rowsFromDB = [];
  console.log(rowsFromDB)
  console.log("beta phase")
  SAMIA FIN **/

  /*let AuthUser = function(data) {
    return google.login(data.username, data.password).then(token => { return token } )
  }
  let userToken = await AuthUser(data)
  console.log(userToken)*/


  console.log(callGet())
  var retourDuCallGet;
  /*console.log(callGet().then(function(result) {
    console.log("le result dans le then")
    console.log(result) // "Some User token"
    retourDuCallGet = result;
    console.log('resoleveee')
    //resolve(result)
    return result
 }).then(function(result) {
  console.log("le result dans le then")
  console.log(result) // "Some User token"
  retourDuCallGet = result;
  return result
}))*/
  console.log("retourDuCallGet")
  console.log(retourDuCallGet)
  /*retourDuCallGet.forEach((value, key)=> {
    console.log(value)

    rowsFromDB[key] = nodeToRows(value,[]) 
   })*/
  console.log("rowsFromDB")
  console.log(rowsFromDB)


  return (
    <Page fullWidth="true">
      <Card>
        <Button onClick={() => callGet()}>Example button</Button>
        {//retourDuGet
        }
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