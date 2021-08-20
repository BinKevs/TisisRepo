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
      <PrivateRoute
        exact
        path="/customer/products"
        component={ProductListIndexOnlineCustomer}
      />
      <PrivateRoute
        exact
        path="/customer/products/:productID"
        component={ProductDetails}
      />
      <PrivateRoute
        exact
        path="/customer/account/settings"
        component={OnlineCustomerAccountSetting}
      />
      <PrivateRoute
        exact
        path="/customer-checkout"
        component={CheckoutOnlineCustomer}
      />

      <PrivateRoute exact path="/checkout" component={CheckoutIndex} />
      <PrivateRoute
        exact
        path="/products/settings"
        component={ProductSetting}
      />
      <PrivateRoute exact path="/products" component={ProductListIndex} />

      <Route exact path="/dashboard" component={DashboardIndex} />

      <PrivateRoute exact path="/inventories" component={InventorySetting} />

      <PrivateRoute exact path="/supplier" component={SupplierSetting} />

      <PrivateRoute exact path="/transactions" component={TransactionSetting} />
      <PrivateRoute
        exact
        path="/transactions/items"
        component={TransactionItemsSetting}
      />

      {/* <PrivateRoute exact path="/reports" component={ReportIndex} /> */}
      <PrivateRoute
        exact
        path="/reports/inventories"
        component={InventoriesReport}
      />
      <PrivateRoute exact path="/reports/products" component={ProductReport} />
      <PrivateRoute exact path="/reports/sales" component={SalesReport} />

      <PrivateRoute exact path="/activity_log" component={ActivityLog} />
      <PrivateRoute exact path="/attendance_log" component={AttendanceLog} />
      <PrivateRoute exact path="/accounts" component={AccountsIndex} />
      <PrivateRoute
        exact
        path="/accounts/settings/menu"
        component={AccountSettingsMenu}
      />
    </Switch>
  </>
);

export default MainBaseRouter;
