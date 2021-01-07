import {
    Card,
    DisplayText,
    Form,
    FormLayout,
    Layout,
    Page,
    PageActions,
    TextField
  } from '@shopify/polaris';
  import store from 'store-js';
  import React from 'react';
  //import { Redirect } from '@shopify/app-bridge/actions';
  //import { Context } from '@shopify/app-bridge-react';



  
  class EditProduct extends React.Component {
    state = {
      discount: '',
      price: '',
      variantId: ''
    };
  
    componentDidMount() {
      this.setState({ discount: this.itemToBeConsumed() });
    }
  
    render() {
      const { name, price, discount, variantId } = this.state;
      /*const app = this.context;
      const redirectToIndex = () => {
        const redirect = Redirect.create(app);
        redirect.dispatch(
        Redirect.Action.APP,
        '/index',
      );}
      */
  
      return (
        <Page>
          <Layout>
            <Layout.Section>
              <DisplayText size="large">{name}</DisplayText>
              <Form>
                <Card sectioned>
                  <FormLayout>
                    <FormLayout.Group>
                      <TextField
                        prefix="$"
                        value={price}
                        disabled={true}
                        label="Original price"
                        type="price"
                      />
                      <TextField
                        prefix="$"
                        value={discount}
                        onChange={this.handleChange('discount')}
                        label="Discounted price"
                        type="discount"
                      />
                    </FormLayout.Group>
                    <p>
                      This sale price will expire in two weeks
                    </p>
                  </FormLayout>
                </Card>
                <PageActions
                  primaryAction={[
                    {
                      content: 'Save',
                      onAction: () => {
                        console.log('submitted');
                        //redirectToIndex();
                      }
                    }
                  ]}
                  secondaryActions={[
                    {
                      content: 'Remove discount'
                    }
                  ]}
                />
              </Form>
            </Layout.Section>
          </Layout>
        </Page>
      );
    }
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
      
    };
  
    itemToBeConsumed = () => {
      const item = store.get('item');
      const price = item.variants.edges[0].node.price;
      const variantId = item.variants.edges[0].node.id;
      const discounter = price * 0.2;
      this.setState({ price, variantId });
      return (price - discounter).toFixed(2);
    };
  }
  
  export default EditProduct;