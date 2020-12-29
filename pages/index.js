import { EmptyState, Layout, Page } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    <TitleBar
      title="Sample App"
      primaryAction={{
        content: 'Select products',
        onAction: () => console.log('clickedd'),
      }}
    />
    <Layout>
    <EmptyState
        heading="Discount your products temporarily"
        action={{
          content: 'Select products',
          onAction: () => console.log('clicked'),
        }}
        image={img}
      >
        <p>Select products to change their price temporarily.</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;