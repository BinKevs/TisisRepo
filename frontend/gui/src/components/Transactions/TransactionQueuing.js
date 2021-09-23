import React from "react";
import { connect } from "react-redux";
import {
  getTransactionList,
  updateTransactionStatus,
} from "../../store/actions/transaction/transactions.js";
let filteredData = [];
class TransactionQueuing extends React.Component {
  state = {
    showModal: false,
    transactionId: 0,
  };
  onUpdateSubmit = (transactionID) => {
    return (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("status", e.target.value);
      this.props.updateTransactionStatus(transactionID, formData);
      this.setState({
        showModal: !this.state.showModal,
        transactionId: 0,
      });
      this.props.getTransactionList();
    };
  };
  componentDidMount() {
    this.props.getTransactionList();
  }
  onToggleModal(transactionId) {
    return (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.setState({
        showModal: !this.state.showModal,
        transactionId: transactionId,
      });
    };
  }
  render() {
    filteredData = [];
    filteredData = this.props.transactions.filter((item) => {
      return item.status !== "Complete";
    });
    console.log(this.props.transactions);
    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow text-2xl text-white">
              <h3 class="font-bold pl-2">Transaction Queueing</h3>
            </div>
          </div>

          <div className="p-5 w-full">
            <div className="mx-auto bg-white shadow rounded">
              <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch w-full">
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
              <section class="mx-auto p-6">
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg bg-white">
                  <table class="w-full ">
                    <thead>
                      <tr class="text-sm font-normal text-left text-gray-600 bg-white border-b border-gray-300">
                        {/* <th class="px-4 py-3">Transaction ID</th> */}
                        <th class="px-4 py-3">User account</th>
                        <th class="px-4 py-3">Date</th>
                        <th class="px-4 py-3">Product</th>
                        <th class="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody class="">
                      {filteredData.map((trans) => (
                        <tr class="text-gray-700 border-b border-gray-300">
                          <td class="px-4 py-3 text-sm font-semibold">
                            {trans.user_info.name}
                          </td>
                          <td class="px-4 py-3 text-sm font-semibold">
                            {trans.created_at}
                          </td>
                          <td class="px-4 py-3 text-sm font-semibold">
                            {trans.items.map((item, index) => (
                              <tr
                                class={
                                  trans.items.length === 1
                                    ? "h-20 border-gray-300"
                                    : index + 1 === trans.items.length
                                    ? "h-20 border-gray-300"
                                    : "h-20 border-gray-300 border-b-2"
                                }
                              >
                                <td class="px-4 py-3 text-sm font-semibold">
                                  <div>{item.product.name}</div>
                                  <div>
                                    <p>Size : XL</p>
                                    <p>Color : RED</p>
                                  </div>
                                </td>
                                <td class="px-4 py-3 text-sm font-semibold">
                                  <div>{item.quantity}</div>
                                </td>
                              </tr>
                            ))}
                          </td>

                          <td class="px-4 py-3 text-sm">
                            <div className="space-y-5">
                              <p>{trans.status}</p>
                              <button
                                onClick={this.onToggleModal(trans.id)}
                                className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-2 text-sm"
                              >
                                Change
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class={this.state.showModal ? "h-screen " : "h-screen hidden"}>
          <div class="mx-auto max-w-screen-lg h-full">
            <div
              className="z-20 absolute top-0 right-0 bottom-0 left-0"
              id="modal"
            >
              <div class="modal-overlay absolute w-full h-full z-25 bg-gray-900 opacity-50"></div>
              <div className="h-full overflow-auto w-full flex flex-col">
                <div className="m-2 md:m-12">
                  <div class="mt-9">
                    <div className="relative p-4 md:p-8 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400 ">
                      <div class="text-left p-0 mb-8">
                        <div>
                          <i class="far fa-motorcycle fa-3x mb-3 inline-block"></i>{" "}
                          <h1 class="font-Montserrat text-gray-800 text-2xl inline-block">
                            ABC Motor Parts
                          </h1>
                        </div>

                        <h1 class="text-gray-800 text-2xl font-medium">
                          Change order status
                        </h1>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <button
                          onClick={this.onUpdateSubmit(
                            this.state.transactionId
                          )}
                          value="Pending"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-4 text-md"
                        >
                          Pending
                        </button>
                        <button
                          onClick={this.onUpdateSubmit(
                            this.state.transactionId
                          )}
                          value="Prefering"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-4 text-md"
                        >
                          Prefering
                        </button>
                        <button
                          onClick={this.onUpdateSubmit(
                            this.state.transactionId
                          )}
                          value="To Ship"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-4 text-md"
                        >
                          To Ship
                        </button>
                        <button
                          onClick={this.onUpdateSubmit(
                            this.state.transactionId
                          )}
                          value="To Receive"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-4 text-md"
                        >
                          To Receive
                        </button>
                      </div>

                      <div
                        onClick={this.onToggleModal(2)}
                        className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition duration-150 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-label="Close"
                          className="icon icon-tabler icon-tabler-x"
                          width={35}
                          height={35}
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  updateTransactionStatus,
})(TransactionQueuing);
