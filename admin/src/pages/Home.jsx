import Layout from '../components/Layout';
import withAuth from '../components/withAuth';

const Home = () => {
  return (
    <Layout>
        <div>Home Page</div>
    </Layout>
  );
};

export default withAuth(Home);