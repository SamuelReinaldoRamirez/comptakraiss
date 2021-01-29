import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import store from 'store-js';


//class Select extends PureComponent {
class Select extends React.Component{
    state = {
      options: [
        {
          name: 'Select…',
          value: null,
        },
        {
          name: 'A',
          value: 'a',
        },
        {
          name: 'B',
          value: 'b',
        },
        {
          name: 'C',
          value: 'c',
        },
      ],
      value: '?',
    };

    /*
    handleSelection = (resources) => {
      const idsFromResources = resources.selection.map((product) => product.id);
      this.setState({ open: false })
      console.log(resources)
      console.log(idsFromResources)
      console.log(resources.id)
      store.set('ids', idsFromResources);
    };*/
  
    handleChange = (event) => {
      this.setState({ value: event.target.value });
      console.log(this.props.id)
      console.log(event.target.value)
      store.set('etat'+this.props.id, { id : this.props.id, choix : event.target.value})
    };
  
    render() {
      const { options, value } = this.state;
      var currentId;
      var etatFromStore;
      var val;

      currentId = this.props.id,
      etatFromStore = store.get('etat'+currentId),
      val = value,

      //pour setter la ligne 1 (pas la 0) à undefined
      //etatFromStore.id == 1 ? etatFromStore = undefined : '',

      etatFromStore == undefined ? 
      store.set('etat'+currentId,{ id : currentId, choix : val}) : 
      val=etatFromStore.choix,
      console.log('etat' + currentId),
      console.log(etatFromStore)
      console.log(etatFromStore == undefined ? 'pas d\'id' : etatFromStore.id),



      console.log('this')
      console.log(this)

  

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