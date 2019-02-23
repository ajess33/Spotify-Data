import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ExampleFetch />
  </Layout>
);

class ExampleFetch extends React.Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default IndexPage;
