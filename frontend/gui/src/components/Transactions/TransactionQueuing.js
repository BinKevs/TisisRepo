import React from "react";
import { connect } from "react-redux";
import {
  getTransactionList,
  updateTransactionStatus,
} from "../../store/actions/transaction/transactions.js";
let filteredData = [];
class TransactionQueuing extends React.Component {
  state = {
    showActionButtonModal: false,
    showToReceiveModal: false,
    transactionId: 0,
    tracking_number: "",
  };
  componentDidMount() {
    this.props.getTransactionList();
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleUpdateSubmitOrderStatus = (event) => {
    event.preventDefault();
    if (event.target.value === "To Receive") {
      this.setState({
        showToReceiveModal: !this.state.showToReceiveModal,
        showActionButtonModal: !this.state.showActionButtonModal,
      });
    } else {
      const formData = new FormData();
      formData.append("order_status", event.target.value);
      this.props.updateTransactionStatus(this.state.transactionId, formData);
      this.setState({
        showActionButtonModal: !this.state.showActionButtonModal,
        transactionId: 0,
      });
    }
  };
  handleUpdateSubmitOrderStatusWithTrackingNumber = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("order_status", "To Receive");
    formData.append("tracking_number", this.state.tracking_number);
    this.props.updateTransactionStatus(this.state.transactionId, formData);
    this.setState({
      showActionButtonModal: false,
      showToReceiveModal: !this.state.showToReceiveModal,
      transactionId: 0,
      tracking_number: "",
    });
  };

  handleToggleActionModal(transactionId) {
    return (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.setState({
        showActionButtonModal: !this.state.showActionButtonModal,
        transactionId: transactionId,
      });
    };
  }
  handleToggleReceiveModal = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.setState({
      showActionButtonModal: !this.state.showActionButtonModal,
      showToReceiveModal: !this.state.showToReceiveModal,
    });
  };

  render() {
    filteredData = [];
    filteredData = this.props.transactions.filter((item) => {
      return item.order_status !== "Complete";
    });

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
                    <div
                      // onClick={this.OnToggleExportTable}
                      className="text-white cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-teal_custom transition duration-150 ease-in-out hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center"
                    >
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
              {filteredData.length > 0 ? (
                <div className="w-full overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="w-full h-16 border-gray-300 border-b py-8 text-left font-bold text-gray-500">
                        <th className="pl-14 pr-6 text-md">User</th>
                        <th className=" pr-6 text-md">Date</th>
                        <th className="  pr-6 text-md">Product</th>
                        <th className="pr-6 text-md">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((trans) => (
                        <tr
                          key={trans.id}
                          className="h-24 border-gray-300 border-b "
                        >
                          <td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            {trans.user_info.name}
                          </td>
                          <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            {trans.created_at}
                          </td>
                          <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            {trans.items.map((item, index) => (
                              <tr
                                key={item.id}
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
                                  <div>{item.quantity} qty</div>
                                </td>
                              </tr>
                            ))}
                          </td>

                          <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            <div className="space-y-5">
                              <p>{trans.order_status}</p>
                              <button
                                onClick={this.handleToggleActionModal(trans.id)}
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
              ) : (
                <div className="text-center text-gray-500">
                  <i class="fal fa-clipboard-list-check fa-7x"></i>
                  <div className="font-semibold text-xl">No order/s yet.</div>
                  <div className="font-semibold text-xl">
                    Try refreshing the page.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          class={
            this.state.showActionButtonModal ? "h-screen " : "h-screen hidden"
          }
        >
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
                          value="Pending"
                          onClick={this.handleUpdateSubmitOrderStatus}
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-4 text-md"
                        >
                          Pending
                        </button>
                        <button
                          onClick={this.handleUpdateSubmitOrderStatus}
                          value="Preferring"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-4 text-md"
                        >
                          Preferring
                        </button>
                        <button
                          onClick={this.handleUpdateSubmitOrderStatus}
                          value="To Ship"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-4 text-md"
                        >
                          To Ship
                        </button>
                        <button
                          onClick={this.handleUpdateSubmitOrderStatus}
                          value="To Receive"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-4 text-md"
                        >
                          To Receive
                        </button>
                      </div>

                      <div
                        onClick={this.handleToggleActionModal(0)}
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
        <div
          class={
            this.state.showToReceiveModal ? "h-screen " : "h-screen hidden"
          }
        >
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
                          To Receive
                        </h1>
                      </div>
                      <div class="flex flex-wrap mb-5">
                        <h2 class="px-4 pt-3 pb-2 text-gray-800 text-xl">
                          Tracking Number
                        </h2>
                        <div class="w-full mb-5">
                          <input
                            class="rounded border-2 border-gray-600 w-full py-4 px-6 placeholder-gray-700 focus:outline-none"
                            name="tracking_number"
                            onChange={this.onChange}
                            placeholder="Type The Tracking Number"
                            required
                          ></input>
                        </div>
                        <div className="flex justify-center w-full px-5">
                          <button
                            onClick={
                              this
                                .handleUpdateSubmitOrderStatusWithTrackingNumber
                            }
                            class="bg-teal_custom hover:bg-gray-700 text-white font-bold p-2 rounded text-md w-2/5"
                          >
                            <span>Submit</span>
                          </button>
                        </div>
                      </div>
                      <div
                        onClick={this.handleToggleReceiveModal}
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
