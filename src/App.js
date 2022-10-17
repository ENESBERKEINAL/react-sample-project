import { Link, Route, Routes } from "react-router-dom";
import CustomerDetailPage from "./components/CustomerDetailPage";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import Customers from "./components/Customers";
import AddCustomer from "./components/AddCustomer";
import CustomerUpdatePage from "./components/CustomerUpdatePage";
import HomePage from "./components/HomePage";


const { Header, Content, Footer } = Layout;

function App() {
 
  const items = [
    { label: <Link to='/'>Home</Link>, key: '1' },
    { label: <Link to='/customers'>Customers</Link>, key: '2' },
    { label: <Link to='/addcustomer'>Add Customer</Link>, key: '3' },
  ];

  return (<>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={items}
          />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/addcustomer" element={<AddCustomer />}></Route>
              <Route path="/customer/detail/:id" element={<CustomerDetailPage />}></Route>
              <Route path="/customers" element={<Customers />}></Route>
              <Route path="/customer/update/:id" element={<CustomerUpdatePage />}></Route>
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}> </Footer>
      </Layout>
    </>
  );
}



export default App;

