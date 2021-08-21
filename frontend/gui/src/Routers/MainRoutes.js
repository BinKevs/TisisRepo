import { Route, Switch } from "react-router-dom";
// import ProductListIndex from '../components/Products/ProductListIndex';

import ProductListIndexOnlineCustomer from "../components/Online_Customers/ProductListIndexOnlineCustomer";
import ProductDetails from "../components/Online_Customers/ProductDetails";
import OnlineCustomerAccountSetting from "../components/Online_Customers/OnlineCustomerAccountSetting";
import CheckoutOnlineCustomer from "../components/Online_Customers/Checkout/CheckoutOnlineCustomer";

import ProductListIndex from "../components/Products/ProductListIndex";
import ProductSetting from "../components/Products/ProductSetting";
import CheckoutIndex from "../components/Products/Checkout/CheckoutIndex";

import DashboardIndex from "../components/Dashboard/dashboard";

import InventorySetting from "../components/Inventories/InventorySetting";

import SupplierSetting from "../components/Suppliers/SupplierSetting";

import TransactionSetting from "../components/Transactions/TransactionSetting";
import TransactionItemsSetting from "../components/Transactions/TransactionItemsSetting";

import ReportIndex from "../components/Reports/ReportIndex";
import ProductReport from "../components/Reports/ProductReport";
import SalesReport from "../components/Reports/SalesReport";
import InventoriesReport from "../components/Reports/InventoriesReport";

import ActivityLog from "../components/Accounts/ActivityLog";
import AttendanceLog from "../components/Accounts/AttendanceLog";
import AccountsIndex from "../components/Accounts/AccountsIndex";
import AccountSettingsMenu from "../components/Accounts/AccountSettingsMenu";

import PrivateRoute from "../Helpers/PrivateRoute";

const MainBaseRouter = () => (
  <>
    <Switch>
      <Route
        exact
        path="/customer/products"
        component={ProductListIndexOnlineCustomer}
      />
      <Route
        exact
        path="/customer/products/:productID"
        component={ProductDetails}
      />
      <Route
        exact
        path="/customer/account/settings"
        component={OnlineCustomerAccountSetting}
      />
      <Route
        exact
        path="/customer-checkout"
        component={CheckoutOnlineCustomer}
      />

      <Route exact path="/checkout" component={CheckoutIndex} />
      <Route exact path="/products/settings" component={ProductSetting} />
      <Route exact path="/products" component={ProductListIndex} />

      <Route exact path="/dashboard" component={DashboardIndex} />

      <Route exact path="/inventories" component={InventorySetting} />

      <Route exact path="/supplier" component={SupplierSetting} />

      <Route exact path="/transactions" component={TransactionSetting} />
      <Route
        exact
        path="/transactions/items"
        component={TransactionItemsSetting}
      />

      {/* <PrivateRoute exact path="/reports" component={ReportIndex} /> */}
      <Route exact path="/reports/inventories" component={InventoriesReport} />
      <Route exact path="/reports/products" component={ProductReport} />
      <Route exact path="/reports/sales" component={SalesReport} />

      <Route exact path="/activity_log" component={ActivityLog} />
      <Route exact path="/attendance_log" component={AttendanceLog} />
      <Route exact path="/accounts" component={AccountsIndex} />
      <Route
        exact
        path="/accounts/settings/menu"
        component={AccountSettingsMenu}
      />
    </Switch>
  </>
);

export default MainBaseRouter;
