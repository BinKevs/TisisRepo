import React from "react";
import { connect } from "react-redux";
import {
  getTransactionList,
  updateTransactionStatus,
} from "../../../store/actions/transaction/transactions.js";
import {
  addReview,
  getReviewList,
} from "../../../store/actions/product/products";
import video1 from "../../../Group2.mp4";
import ReactPlayer from "react-player";
import noImageAvailable from "../../../no-image-available.png";
import ReviewsModal from "./ReviewsModal";
import RefundsModal from "./RefundsModal";
let NavButton = document.getElementsByClassName("NavButton");
let NavButtonActive = document.getElementsByClassName("NavButtonActive");
let filteredTransactionData = [];
class PurchasesIndex extends React.Component {
  componentDidMount() {
    this.props.getTransactionList();
    this.props.getReviewList();
  }
  onChange = (e) => {
    if (e.target.name === "VideoFile") {
      this.setState({
        [e.target.name]: e.target.files,
        VideoFileURL: URL.createObjectURL(e.target.files[0]),
      });
      console.log(URL.createObjectURL(e.target.files[0]));
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  state = {
    showModal: false,
    showModalOrderReceived: false,
    showModalRefund: false,
    showRefundInfo: false,
    comment: "",
    product_name: "",
    product_image: "",
    product_id: 0,
    transaction_item_id: 0,
    filter_nav: "All",
    transactionId: 0,
    RefundVideo: "",
    VideoFileURL: "",
    refund_item: "",
  };

  onSubmit = (star_rate) => {
    return (e) => {
      e.preventDefault();
      const { comment, product_id, transaction_item_id, transaction_id } =
        this.state;
      const review = {
        star_rate,
        comment,
        product: product_id,
        transaction_item_id,
        transaction_id,
      };
      this.props.addReview(review);
      this.setState({
        showModal: !this.state.showModal,
        product_name: "",
        product_image: "",
        product_id: "",
        transaction_item_id: "",
        transaction_id: "",
      });
      this.props.getTransactionList();
    };
  };
  onOrderReceivedSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("order_status", e.target.value);
    this.props.updateTransactionStatus(this.state.transactionId, formData);
    this.setState({
      showModalOrderReceived: !this.state.showModalOrderReceived,
      transactionId: 0,
      filter_nav: "Complete",
    });
  };

  onToggleModalOrderReceive = (transactionId) => {
    return (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.setState({
        showModalOrderReceived: !this.state.showModalOrderReceived,
        transactionId: transactionId,
      });
    };
  };
  onToggleModalOrderReceiveClose = (event) => {
    event.preventDefault();

    this.setState({
      showModalOrderReceived: !this.state.showModalOrderReceived,
    });
  };

  onToggleModalReview = (
    product_name,
    product_image,
    product_id,
    transaction_item_id,
    transaction_id
  ) => {
    return (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.setState({
        showModal: !this.state.showModal,
        product_name: product_name,
        product_image: product_image,
        product_id: product_id,
        transaction_item_id: transaction_item_id,
        transaction_id: transaction_id,
      });
    };
  };
  onToggleModalReviewClose = (event) => {
    event.preventDefault();
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  onToggleModalRefund = (refund_item) => {
    return (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.setState({
        showModalRefund: !this.state.showModalRefund,
        refund_item,
      });
    };
  };
  onToggleModalRefundClose = (event) => {
    event.preventDefault();
    this.setState({
      showModalRefund: !this.state.showModalRefund,
    });
  };

  onToggleNavButton = (event) => {
    event.preventDefault();
    for (var i = 0; i < NavButton.length; i++) {
      if (NavButtonActive.length > 0) {
        NavButtonActive[0].classList.remove("NavButtonActive");
      }
      event.target.classList.add("NavButtonActive");
    }
    this.setState({
      filter_nav: event.target.value,
      showRefundInfo: false,
    });
  };
  handleRefundNavigation = (event) => {
    event.preventDefault();
    for (var i = 0; i < NavButton.length; i++) {
      if (NavButtonActive.length > 0) {
        NavButtonActive[0].classList.remove("NavButtonActive");
      }
      event.target.classList.add("NavButtonActive");
    }
    this.setState({
      showRefundInfo: true,
    });
  };
  render() {
    filteredTransactionData = [];
    filteredTransactionData = this.props.transactions.filter((item) => {
      return this.state.filter_nav === "All"
        ? item.order_status.toString().includes("")
        : this.state.filter_nav === "To Ship"
        ? item.order_status.toString().includes(this.state.filter_nav) ||
          item.order_status.toString().includes("Preferring")
        : item.order_status.toString().includes(this.state.filter_nav);
    });

    return (
      <>
        <div class="bg-gray-100 flex-1 mt-24 pb-24 md:pb-5">
          <div class="bg-gray-100 pt-3">
            <div class=" bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow text-2xl text-white text-center">
              <h3 class="font-bold">Purchases</h3>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <section class="mx-auto p-2">
              <div class="w-full overflow-hidden shadow-lg bg-white p-1">
                <nav class="flex flex-col justify-evenly sm:flex-row">
                  <button
                    value="All"
                    onClick={this.onToggleNavButton}
                    class="NavButton NavButtonActive"
                  >
                    All
                  </button>
                  <button
                    value="Pending"
                    onClick={this.onToggleNavButton}
                    class="NavButton"
                  >
                    Pending
                  </button>
                  <button
                    value="To Ship"
                    onClick={this.onToggleNavButton}
                    class="NavButton "
                  >
                    To Ship
                  </button>
                  <button
                    value="To Receive"
                    onClick={this.onToggleNavButton}
                    class="NavButton"
                  >
                    To Receive
                  </button>

                  <button
                    value="Complete"
                    onClick={this.onToggleNavButton}
                    class="NavButton"
                  >
                    Complete
                  </button>
                  <button
                    onClick={this.handleRefundNavigation}
                    class="NavButton"
                  >
                    Refund/Return
                  </button>
                </nav>
              </div>
            </section>
            {this.state.showRefundInfo ? (
              <div className="space-y-6">
                <div className="mx-4">
                  <div className="mx-auto bg-white p-4">
                    <div className="flex justify-between">
                      <div class="text-gray-600 text-xl font-medium pb-4">
                        Refund/Return Status :{" "}
                        <span className="text-gray-900 tracking-widest">
                          Pending
                        </span>
                      </div>
                      <div class="text-gray-600 text-xl font-medium pb-4">
                        Date Requested :{" "}
                        <span className="text-gray-900 tracking-widest">
                          Oct 13 2021 22:09:46
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center  border-t-2 pt-5">
                      <div class="text-gray-900 text-2xl font-medium pb-4">
                        Product Details
                      </div>
                    </div>
                    <div className="bg-white mb-5">
                      <div className="p-2 flex justify-center w-full">
                        <div className="w-1/3">
                          <img
                            className=" border-gray-400 border-2 my-auto max-h-56 object-cover object-center rounded-3xl"
                            src="http://127.0.0.1:8000/images/Avon_Tire_3D_Ultra_EVO_Tire_Combo.jpg"
                            alt=""
                          />
                        </div>

                        <div className="ml-2 space-y-5 w-1/2 ">
                          <div>
                            Dynojet Power Commander 5 With Auto Tune And K&N Air
                            Filter Kit
                          </div>

                          <div>Brown/Large</div>
                          <div className="flex justify-between">
                            <div>x6</div>
                            <div className="text-gray-900">₱4132.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center  border-t-2 pt-5">
                      <div class="text-gray-900 text-2xl font-medium pb-4">
                        Refund/Return Details
                      </div>
                    </div>
                    <div className="bg-white border-b-2">
                      <div className="p-2 flex justify-center w-full">
                        <div className="w-1/3 border-4 h-60 rounded-3xl flex justify-center mb-5 ">
                          <ReactPlayer
                            width="80%"
                            height="100%"
                            playing={false}
                            controls={true}
                            url={video1}
                          />
                        </div>

                        <div className=" space-y-5 ml-14 w-1/2 ">
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea aspernatur, tenetur at delectus suscipit
                            dolor non asperiores harum beatae error rem odit
                            dignissimos adipisci laudantium vitae optio voluptas
                            maxime placeat!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mx-4">
                    <div className="mx-auto bg-white p-4">
                      <div className="text-center text-gray-500">
                        <i class="fal fa-clipboard-list-check fa-7x"></i>
                        <div className="font-semibold text-xl">
                          No order/s yet.
                        </div>
                        <div className="font-semibold text-xl">
                          Try refreshing the page.
                        </div>
                      </div>
                    </div>
                  </div> */}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredTransactionData.length > 0 ? (
                  filteredTransactionData.map((transaction) => (
                    <div className="mx-4">
                      <div className="mx-auto bg-white p-4">
                        <div className="flex justify-between">
                          <div class="text-gray-600 text-xl font-medium pb-4">
                            Status :{" "}
                            <span className="text-gray-900 tracking-widest">
                              {transaction.order_status}
                            </span>
                          </div>
                          <div class="text-gray-600 text-xl font-medium pb-4">
                            Date Created :{" "}
                            <span className="text-gray-900 tracking-widest">
                              {transaction.created_at}
                            </span>
                          </div>
                        </div>

                        <div className="bg-white border-t-2 border-b-2">
                          {transaction.items.map((item) => (
                            <div className="p-2 flex justify-center w-full">
                              <div className="w-1/3">
                                <img
                                  className=" border-gray-400 border-2 my-auto max-h-56 object-cover object-center rounded-3xl"
                                  src={
                                    item.product.file_content
                                      ? item.product.file_content[0].image
                                      : noImageAvailable
                                  }
                                  alt=""
                                />
                              </div>

                              <div className="ml-2 space-y-5 w-1/2 ">
                                <div>{item.product.name}</div>

                                <div>
                                  {item.product_variation_info.color}/
                                  {item.product_variation_info.size}
                                </div>
                                <div className="flex justify-between">
                                  <div>x{item.quantity}</div>
                                  <div className="text-gray-900">
                                    ₱{item.product.price}
                                  </div>
                                </div>
                                <div className="flex justify-start pt-5 space-x-4">
                                  {transaction.order_status !== "Complete" ? (
                                    <button
                                      onClick={this.onToggleModalRefund(item)}
                                      class={
                                        "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-md"
                                      }
                                    >
                                      <span>Refund</span>
                                    </button>
                                  ) : (
                                    ""
                                  )}

                                  {transaction.order_status === "Complete" ? (
                                    <>
                                      {/* {this.props.reviews.map((review) =>
                                    review.product !== item.product.id ? (
                                      
                                    ) : (
                                      ""
                                    )
                                  )} */}
                                      {item.review > 0 ? (
                                        ""
                                      ) : (
                                        <>
                                          <button
                                            onClick={this.onToggleModalReview(
                                              item.product.name,
                                              item.product.file_content[0]
                                                .image,
                                              item.product.id,
                                              item.id,
                                              transaction.id
                                            )}
                                            class={
                                              "bg-teal_custom hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-md"
                                            }
                                          >
                                            <span>Rate</span>
                                          </button>
                                        </>
                                      )}
                                      <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-md">
                                        <span>Buy Again</span>
                                      </button>{" "}
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div class="text-gray-800  font-medium pt-4 text-right">
                          <span className="text-xl text-gray-600">
                            Order Total :
                          </span>{" "}
                          <span className="text-2xl text-gray-900 tracking-widest">
                            ₱{transaction.totalAmount}
                          </span>
                        </div>
                        {transaction.order_status !== "Complete" ? (
                          <div className="flex justify-end my-5 ">
                            <button
                              onClick={this.onToggleModalOrderReceive(
                                transaction.id
                              )}
                              class="bg-teal_custom hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-md"
                            >
                              <span>Order Received</span>
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="mx-4">
                    <div className="mx-auto bg-white p-4">
                      <div className="text-center text-gray-500">
                        <i class="fal fa-clipboard-list-check fa-7x"></i>
                        <div className="font-semibold text-xl">
                          No order/s yet.
                        </div>
                        <div className="font-semibold text-xl">
                          Try refreshing the page.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div class={this.state.showModal ? "h-screen " : "h-screen hidden"}>
          <ReviewsModal
            onToggleModal={this.onToggleModalReviewClose}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            state={this.state}
          />
        </div>
        <div
          class={
            this.state.showModalOrderReceived ? "h-screen " : "h-screen hidden"
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
                  <form class="mt-9">
                    <div className="relative p-4 md:p-8 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400 ">
                      <div class="text-left p-0 mb-8">
                        <div>
                          <i class="far fa-motorcycle fa-3x mb-3 inline-block"></i>{" "}
                          <h1 class="font-Montserrat text-gray-800 text-2xl inline-block">
                            ABC Motor Parts
                          </h1>
                        </div>

                        <h1 class="text-gray-800 text-3xl font-medium">
                          Order Receive
                        </h1>
                      </div>
                      <div>
                        <div className="flex justify-center text-center font-medium text-xl">
                          By clicking "Confirm". You will not be able to return
                          or refund after you confirm. Please ensure you have
                          received the product/s and are satisfied with their
                          condition.
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full mt-4">
                        <button
                          value="Complete"
                          onClick={this.onOrderReceivedSubmit}
                          type="submit"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-2 text-md"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={this.onToggleModalOrderReceiveClose}
                          className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-md"
                        >
                          Cancel
                        </button>
                      </div>

                      <div
                        onClick={this.onToggleModalOrderReceiveClose}
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RefundsModal
          state={this.state}
          onToggleModalRefund={this.onToggleModalRefund}
          onToggleModalRefundClose={this.onToggleModalRefundClose}
          filteredTransactionData={filteredTransactionData}
          onChange={this.onChange}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
  reviews: state.products.reviews,
  AuthReducer: state.AuthReducer,
});
export default connect(mapStateToProps, {
  getTransactionList,
  addReview,
  updateTransactionStatus,
  getReviewList,
})(PurchasesIndex);
