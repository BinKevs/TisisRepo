import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSupplierList } from "../../store/actions/supplier/suppliers";
import { getProductList } from "../../store/actions/product/products";
import { getAccountList } from "../../store/actions/account/auth";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

let ItemAdded = false;
class Archive extends React.Component {
  state = { search: "" };

  componentDidMount() {
    this.props.getSupplierList();
    this.props.getProductList();
    this.props.getAccountList();
  }

  render() {
    let lowercasedFilter = this.state.search.toLowerCase();
    let filteredDataSupplier;
    let filteredDataProduct;
    let filteredDataAccounts;
    let products;
    let Accounts;
    // This will filter the data from supplier
    filteredDataSupplier = this.props.suppliers.filter((supplier) => {
      if (!supplier.status)
        if (lowercasedFilter === "") {
          return supplier;
        } else {
          return supplier.name
            .toString()
            .toLowerCase()
            .includes(lowercasedFilter);
        }
    });
    filteredDataProduct = [];
    products = [];
    this.props.products.map((product) =>
      products.push({
        id: product.id,
        product_id: product.product_id,
        name: product.name,
        status: product.status,
      })
    );
    filteredDataProduct = products.filter((product) => {
      if (!product.status)
        return (
          product.name.toString().toLowerCase().includes(lowercasedFilter) ||
          product.product_id.toString().toLowerCase().includes(lowercasedFilter)
        );
    });
    Accounts = [];
    this.props.accounts.map((account) =>
      Accounts.push({
        id: account.id,
        username: account.user.username,
        email: account.user.email,
        status: account.user.is_active,
        is_superuser: account.user.is_superuser,
        name: account.user.last_name + " " + account.user.first_name,
      })
    );
    filteredDataAccounts = Accounts.filter((account) => {
      // return Object.keys(item).some((key) =>
      // 	item[key].toString().toLowerCase().includes(lowercasedFilter)
      // );
      if (!account.status) return account;
    });
    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow text-2xl text-white">
              <h3 class="font-bold pl-2">Archives</h3>
            </div>
          </div>

          <div className="p-5 w-full">
            <div className="mx-auto shadow rounded">
              <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span class=" text-2xl font-medium ">Products</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="bg-white flex flex-col lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch w-full">
                      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="lg:ml-6 flex items-start w-full">
                          <div className="text-white cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-teal_custom transition duration-150 ease-in-out hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center">
                            <i class="fal fa-print fa-lg"></i>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="lg:ml-6 flex items-center">
                          <div class="relative w-full">
                            <input
                              type="text"
                              name="search"
                              placeholder=" "
                              required
                              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                              // onChange={this.onChange}
                              // value={this.state.search}
                            />
                            <label
                              for="search"
                              class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                            >
                              Search
                            </label>
                          </div>
                          <i class="fad fa-search fa-lg"></i>
                        </div>
                      </div>
                    </div>
                    <div className="w-full overflow-x-auto">
                      <table className="min-w-full bg-white dark:bg-gray-800">
                        <thead>
                          <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                            <th className="pl-12 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                              Item No.
                            </th>
                            <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                              Item Name
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredDataProduct.map((product) => (
                            <tr
                              key={product.id}
                              className="h-24 border-gray-300 dark:border-gray-200 border-b"
                            >
                              <td className="pl-12 text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {product.product_id}
                              </td>
                              <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {product.name}
                              </td>

                              <td className="pr-8 relative">
                                <div className="cursor-pointer text-sm bg-teal_custom text-white px-3 py-3 font-normal hover:bg-gray-600 text-center">
                                  Retrive
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span class=" text-2xl font-medium">Suppliers</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="bg-white flex flex-col lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch w-full">
                      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="lg:ml-6 flex items-start w-full">
                          <div className="text-white cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-teal_custom transition duration-150 ease-in-out hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center">
                            <i class="fal fa-print fa-lg"></i>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="lg:ml-6 flex items-center">
                          <div class="relative w-full">
                            <input
                              type="text"
                              name="search"
                              placeholder=" "
                              required
                              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                              // onChange={this.onChange}
                              // value={this.state.search}
                            />
                            <label
                              for="search"
                              class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                            >
                              Search
                            </label>
                          </div>
                          <i class="fad fa-search fa-lg"></i>
                        </div>
                      </div>
                    </div>
                    <div className="w-full overflow-x-auto">
                      <table className="min-w-full bg-white dark:bg-gray-800">
                        <thead>
                          <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                            <th className="pl-14 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                              Supplier ID
                            </th>
                            <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                              Supplier Name
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredDataSupplier.map((supplier) => (
                            <tr
                              key={supplier.id}
                              className="h-24 border-gray-300 dark:border-gray-200 border-b"
                            >
                              <td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {supplier.supplier_id}
                              </td>
                              <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {supplier.name}
                              </td>
                              <td className="pr-8 relative">
                                <div className="cursor-pointer text-sm bg-teal_custom text-white px-3 py-3 font-normal hover:bg-gray-600 text-center">
                                  Retrive
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span class=" text-2xl font-medium">Accounts</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="bg-white flex flex-col lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch w-full">
                      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="lg:ml-6 flex items-start w-full">
                          <div className="text-white cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-teal_custom transition duration-150 ease-in-out hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center">
                            <i class="fal fa-print fa-lg"></i>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="lg:ml-6 flex items-center">
                          <div class="relative w-full">
                            <input
                              type="text"
                              name="search"
                              placeholder=" "
                              required
                              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                              // onChange={this.onChange}
                              // value={this.state.search}
                            />
                            <label
                              for="search"
                              class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                            >
                              Search
                            </label>
                          </div>
                          <i class="fad fa-search fa-lg"></i>
                        </div>
                      </div>
                    </div>
                    <div className="w-full overflow-x-auto">
                      <table className="min-w-full bg-white dark:bg-gray-800">
                        <thead>
                          <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                            <th className="pl-14 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                              Account ID
                            </th>
                            <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                              Username
                            </th>
                            <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                              Name
                            </th>
                            <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                              Email
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredDataAccounts.map((account) => (
                            <tr
                              key={account.id}
                              className="h-24 border-gray-300 dark:border-gray-200 border-b"
                            >
                              <td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {account.id}
                              </td>
                              <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {account.username}
                              </td>
                              <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {account.name}
                              </td>
                              <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {account.email}
                              </td>

                              <td className="pr-8 relative">
                                <div className="cursor-pointer text-sm bg-teal_custom text-white px-3 py-3 font-normal hover:bg-gray-600 text-center">
                                  Retrive
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  suppliers: state.suppliers.suppliers,
  products: state.products.products,
  accounts: state.AuthReducer.accounts,
});

export default connect(mapStateToProps, {
  getSupplierList,
  getProductList,
  getAccountList,
})(Archive);
