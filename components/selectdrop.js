import axios from 'axios';
import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import store from 'store-js';

/*const dotenv = require('dotenv');
const next = require('next');
dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const { REACT_APP_NGROKBACK } = process.env;
const handle = app.getRequestHandler();

console.log(process.env)
app.prepare().then(() => {
  console.log("in app prepare")
  console.log(REACT_APP_NGROKBACK)
});*/


//const {REACT_APP_ngrokBack} = process.env;
//const ngrokBack = REACT_APP_ngrokBack;
console.log('cAcAAAAAAAAAAAAAAAAAAAAA')
console.log(KEY_NGROKBACK)

//class Select extends PureComponent {
class Select extends React.Component{
  constructor(props){
    super(props);
    console.log("dans constructeur, pprops puis this")
    console.log(props)
    console.log(this)
    this.state.valueDeDbState = props.valueDeDB
  }
    state = {
      options: [
        {
          name: 'Select…',
          value: null,
        },
        {
          name: 'A',
          value: 444,
        },
        {
          name: 'B',
          value: 333,
        },
        {
          name: 'C',
          value: 222,
        },
      ],
      value: '?',
      valueDeDbState : '',
    };


    
  
    handleChange = (event) => {
      this.setState({ value: event.target.value });
      console.log("azertyuiop")
      console.log(this)
      console.log(this.state.value)
      console.log(event.target.value)
      console.log(this.props)


//L4ERREUR EST ICI, il faut arreter d'utiliser ValueDeDb de props mais utiliser ValueDeDBState du State :)
     /* Object.defineProperty(this, 'state', {
        valueDeDbState: event.target.value,
        writable: false
      });*/

      //exemple sur lequel s'appuyer pour setter le state
    /*  this.setState(prevState => {
        let jasper = Object.assign({}, prevState.jasper);  // creating copy of state variable jasper
        jasper.name = 'someothername';                     // update the name property, assign a new value                 
        return { jasper };                                 // return new object jasper object
      })*/

      console.log(this.state.valueDeDbState)
      this.state.valueDeDbState = event.target.value;
      this.state.value = event.target.value;
      console.log(this.state.valueDeDbState)

      //this.props.valueDeDB = event.target.value
      store.set('etat'+this.props.id, { id : this.props.id, choix : event.target.value})

      var orderState = (event.target.value == "Select…") ? null : event.target.value;
      console.log(orderState)


      //console.log(REACT_APP_ngrokBack)

      //l'id qu'on envoie en params est l'id du select dans la page concernée. il faudra le faire correspondre au vrai ID en fonction de la pagination et du tri de la datatable
      axios.put(
        //"https://547f417cc329.ngrok.io/handle", 
        "https://"+KEY_NGROKBACK+".ngrok.io/handle", 
        {"order_state" : orderState}, 
        {params: { id:this.props.id+1 }, headers: {"Content-Type": 'application/json'}}
    )
    


      //axios.put("https://"+REACT_APP_ngrokBack+".ngrok.io/handle", {})
     // "proxy": "http://${REACT_APP_ngrokBack}.ngrok.io",


      //axios.put("localhost:5000/handle", {})

      /*.then(function(response){
        console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
        console.log(response)
      })*/


      /* var sql = "UPDATE orders SET order_state = 6 WHERE order_id=1";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });*/
    };
  
    render() {
      console.log('render')
      console.log(this.state)
      console.log('value')
      console.log(this.props.valueDeDB)
      console.log(this.state.valueDeDbState)





      var { options, value } = this.state;
      var currentId;
      var etatFromStore;
      //ici, il faut choisir si value est celui de la bdd (à l'initialisation), ou celui qu'on vien de choisir,( apres un put)
      //value = this.props.valueDeDB == null ? 9949 : this.props.valueDeDB;

      console.log(this.state.valueDeDbState == null || this.state.valueDeDbState == 'Select…' )
      console.log(this.state.valueDeDbState == null )
      console.log(this.state.valueDeDbState == 'Select…' )
      console.log(true || false)

      value = (this.state.valueDeDbState == null || this.state.valueDeDbState == 'Select…' )? 9949 : this.state.valueDeDbState;
      var val;

      currentId = this.props.id,
      etatFromStore = store.get('etat'+currentId),
      val = value;

      //pour setter la ligne 1 (pas la 0) à undefined
      //etatFromStore.id == 1 ? etatFromStore = undefined : '',

      etatFromStore == undefined ? 
      store.set('etat'+currentId,{ id : currentId, choix : val}) : 
      val=etatFromStore.choix == null ? 9949 : etatFromStore.choix;
      //console.log('etat' + currentId),
      //console.log(etatFromStore)
      //console.log(etatFromStore == undefined ? 'pas d\'id' : etatFromStore.id),



     // console.log('this')
      //console.log(this)

  

     // <select onChange={this.handleChange} value={value}>


      return (
        <Fragment>
          <select onChange={this.handleChange} value={val}>
            {options.map(item => (

              
              
 
              /*console.log('etat'+currentId),
              console.log(etatFromStore),
              console.log(etatFromStore == undefined),
              console.log(etatFromStore == undefined ? 'pas d\'id' : etatFromStore.id),
              console.log(etatFromStore == undefined ? 'pas de choix choisi' : etatFromStore.choix),
             */
              //console.log("option"),
              //console.log(item),
              //console.log({value}),
              /*console.log(this),*/
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <h1>Favorite letter: {value}</h1>
        </Fragment>
      );
    }
  }
  export default Select;