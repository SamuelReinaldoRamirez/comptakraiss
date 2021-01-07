import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false };
  render() {
    const emptyState = !store.get('ids');
    return (
      <Page>
        <TitleBar
          title="Sample App"
          primaryAction={{
            content: 'Select products',
            //comment faire 2 lambdas à la suite pour avoir aussi le console log?
            onAction: () => this.setState({ open: true }),
            //onAction: () => console.log('clickedd'),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
          <Layout>
            <EmptyState
              heading="Select products to start"
              action={{
                content: 'Select products',
                onAction: () => this.setState({ open: true }),
              }}
              image={img}
            >
              <p>Select products and change their price temporarily</p>
            </EmptyState>
          </Layout>
          {emptyState ? (
            <Layout></Layout>
        ) : (
            <ResourceListWithProducts />
        )}
      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false })
    console.log(resources)
    console.log(idsFromResources)
    console.log(resources.id)
    store.set('ids', idsFromResources);
  };
}

export default Index;