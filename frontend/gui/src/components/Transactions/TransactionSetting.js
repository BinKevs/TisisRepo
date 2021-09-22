import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTransactionList } from "../../store/actions/transaction/transactions.js";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import { TransactionsTableExportModal } from "./Print/TransactionsTableExportModal";
let filteredData = [];
let Transactions = [];
class TransactionSettingIndex extends React.Component {
  static propTypes = {
    transanctions: PropTypes.array.isRequired,
    getTransanctionList: PropTypes.func.isRequired,
  };

  state = {
    search: "",
    InputDate: "",
  };
  setSeeMore(transaction_id) {
    return (e) => {
      e.preventDefault();
      document.getElementById(transaction_id).classList.toggle("hidden");
    };
  }
  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value, InputDate: "" });
  componentDidMount() {
    this.props.getTransactionList();
  }
  OnToggleExportTable = (event) => {
    event.preventDefault();
    this.setState({ table_export_modal: !this.state.table_export_modal });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("Body").classList.toggle("overflow-hidden");
  };
  render() {
    //returning the search filtered
    const { InputDate } = this.state;
    Transactions = [];

    this.props.transactions.map((trans) =>
      Transactions.push({
        id: trans.id,
        transaction_id: trans.transaction_id,
        creator: trans.user_info.name
          ? trans.user_info.name.split(" ")[0]
          : "None",
        items: trans.items,
        created_at: trans.created_at,
        totalAmount: trans.totalAmount,
        quantity: trans.quantity,
        mode_of_payment: trans.payment_method,
      })
    );
    filteredData = [];
    const lowercasedFilter = this.state.search.toLowerCase();
    filteredData = Transactions.filter((item) => {
      return (
        item.creator.toString().toLowerCase().includes(lowercasedFilter) ||
        item.transaction_id.toString().toLowerCase().includes(lowercasedFilter)
      );
    });
    if (InputDate === "") {
      filteredData = Transactions.filter((item) => {
        return (
          item.creator.toString().toLowerCase().includes(lowercasedFilter) ||
          item.transaction_id
            .toString()
            .toLowerCase()
            .includes(lowercasedFilter)
        );
      });
    } else {
      if (InputDate === null) {
        filteredData = Transactions.filter((item) => {
          return (
            item.creator.toString().toLowerCase().includes(lowercasedFilter) ||
            item.transaction_id.toString().includes(lowercasedFilter)
          );
        });
      } else {
        let InputDateDateSeparated = InputDate.toString().split(" ");
        filteredData = Transactions.filter((item) => {
          return item.created_at
            .toString()
            .includes(
              InputDateDateSeparated[1] +
                " " +
                InputDateDateSeparated[2] +
                " " +
                InputDateDateSeparated[3]
            );
        });
      }
    }
    if (lowercasedFilter !== "" && InputDate !== null && InputDate !== "") {
      let InputDateDateSeparated = InputDate.toString().split(" ");
      filteredData = Transactions.filter((item) => {
        return (
          item.created_at
            .toString()
            .includes(
              InputDateDateSeparated[1] +
                " " +
                InputDateDateSeparated[2] +
                " " +
                InputDateDateSeparated[3]
            ) &&
          (item.creator.toString().toLowerCase().includes(lowercasedFilter) ||
            item.transaction_id.toString().includes(lowercasedFilter))
        );
      });
    }

    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div
              class="
    rounded-tl-3xl
    bg-gradient-to-r
    from-teal_custom
    to-gray-800
    p-4
    shadow
    text-2xl text-white
"
            >
              <h3 class="font-bold pl-2">Transactions</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            <div className="mx-auto bg-white shadow rounded">
              <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch w-full">
                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                  <div className="lg:ml-6 flex items-start w-full">
                    <div
                      onClick={this.OnToggleExportTable}
                      className="text-white cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-teal_custom transition duration-150 ease-in-out hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center"
                    >
                      <i class="fal fa-print fa-lg"></i>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                  {/* <div className="flex items-center lg:border-l lg:border-r border-gray-300  py-3 lg:py-0 lg:px-6">
                    <p className="text-base text-gray-600 " id="page-view">
                      Viewing 1 - 20 of 60
                    </p>
                    <div className="text-gray-600  ml-2 border-transparent border cursor-pointer rounded mr-4">
                      <i class="fad fa-angle-left fa-2x"></i>
                    </div>
                    <div className="text-gray-600  border-transparent border rounded focus:outline-none cursor-pointer">
                      <i class="fad fa-angle-right fa-2x"></i>
                    </div>
                  </div> */}
                  <div className="lg:ml-6 flex items-center">
                    <div class="relative w-full">
                      <input
                        type="text"
                        name="search"
                        placeholder=" "
                        required
                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        onChange={this.onChange}
                        value={this.state.search}
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
                <table className="min-w-full bg-white ">
                  <thead>
                    <tr className="w-full h-16 border-gray-300  border-b py-8">
                      <th className="pl-14 text-gray-600 pr-6 text-left text-md font-normal">
                        Transaction ID
                      </th>
                      <th className="text-gray-600 pr-6 text-left text-md font-normal">
                        Creator Name
                      </th>
                      <th className="text-gray-600  pr-6 text-left text-md w-2/12 font-normal">
                        <div>Date</div>
                        <DatePicker
                          selected={this.state.InputDate}
                          onChange={(date) =>
                            this.setState({ InputDate: date })
                          }
                          value={this.state.InputDate}
                          closeOnScroll={true}
                          placeholderText="Select Date"
                          className="my-1 px-1 py-1 border-2 rounded-l"
                        />
                      </th>
                      <th className="text-gray-600   pr-6 text-left text-md font-normal">
                        <div className="text-center">Items</div>
                        {/* <div className="flex justify-around">
                          <div>Product Name</div> <div>Unit Price</div>{" "}
                          <div>Quantity</div>{" "}
                        </div> */}
                      </th>

                      <th className="text-gray-600  pr-6 text-left text-md font-normal">
                        Total Amount
                      </th>
                      <th className="text-gray-600   pr-6 text-left text-md font-normal">
                        Total Number of Items
                      </th>
                      <th className="text-gray-600  pr-6 text-left text-md font-normal">
                        Mode of Payment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="h-24 border-gray-300  border-b font-semibold"
                      >
                        <td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {transaction.transaction_id}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {transaction.creator}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {transaction.created_at}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 w-3/12">
                          {transaction.items.map((transac, index) => (
                            <tr
                              className={
                                transaction.items.length === 1
                                  ? "h-20 border-gray-300"
                                  : index + 1 === transaction.items.length
                                  ? "h-20 border-gray-300"
                                  : "h-20 border-gray-300 border-b-2"
                              }
                            >
                              <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                                {transac.product.name}
                                <div>
                                  ({transac.product_variation_info.color}/
                                  {transac.product_variation_info.size})
                                </div>
                              </td>
                              <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                                {transac.product.price}
                              </td>
                              <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                                {transac.quantity}
                              </td>
                            </tr>
                          ))}
                        </td>

                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {transaction.totalAmount}
                        </td>

                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {transaction.quantity}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {transaction.mode_of_payment}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          class={
            this.state.table_export_modal ? "h-screen " : "h-screen hidden"
          }
        >
          <TransactionsTableExportModal
            OnToggleExportTable={this.OnToggleExportTable}
            Transactions={filteredData}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, {
  getTransactionList,
})(TransactionSettingIndex);
