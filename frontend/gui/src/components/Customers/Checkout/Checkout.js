import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { loadUser } from "../../../store/actions/account/auth";
import { addTransactionItems } from "../../../store/actions/transaction/transactions";
import { getTransactionList } from "../../../store/actions/transaction/transactions.js";
import {
  removeFromCart,
  changeCartValue,
  clearCart,
} from "../../../store/actions/cart/cartActions";
import { getVoucherList } from "../../../store/actions/product/products";
class Checkout extends React.Component {
  state = {
    address: "",
    contact_number: "",
    showModal: false,
    showModalVoucher: false,
    showModalEWallet: false,
    totalAmount: 0,
    Subtotal: 0,
    tax: 0,
    amount_tendered: 0,
    change: -1,
    transanction_id: 0,
    TotalQuantity: 0,
    payment_method: "",
    voucher_code: "",
    voucher_value: 0,
    voucher_error: "",
    currentScrollState: 0,
  };
  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.payment_method === "E-Wallet") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.setState({
        showModalEWallet: !this.state.showModalEWallet,
      });
    } else {
      let quantity = 0;
      this.props.cartItems.map((item) => (quantity += item.quantity));
      const address =
        this.props.AuthReducer.addresses.street +
        " " +
        this.props.AuthReducer.addresses.city_town +
        " " +
        this.props.AuthReducer.addresses.state_province_area +
        " " +
        this.props.AuthReducer.addresses.country;
      const contact_number = this.props.AuthReducer.contact_numbers;
      const action_done = "Transaction Added";
      const status = "Pending";
      const items = this.props.cartItems;
      const { totalAmount, payment_method, amount_tendered, change } =
        this.state;
      const data = {
        totalAmount,
        quantity,
        items,
        action_done,
        payment_method,
        status,
        address,
        contact_number,
      };
      this.props.addTransactionItems(data);
      this.props.getTransactionList();
      this.props.clearCart();
      this.props.history.push("/account/purchases");
    }
  };
  componentDidMount() {
    this.props.getVoucherList();
    this.props.loadUser();
    let VariableTotalAmount = 0;
    let Variablequantity = 0;
    this.props.cartItems.map(
      (item) => (
        (VariableTotalAmount += item.price * item.quantity),
        (Variablequantity += item.quantity)
      )
    );
    this.setState({
      totalAmount: this.HandleDecimalPlaces(VariableTotalAmount),
      Subtotal: this.HandleDecimalPlaces(
        (VariableTotalAmount -= VariableTotalAmount * 0.12)
      ),
      tax: this.HandleDecimalPlaces(VariableTotalAmount * 0.12),
      quantity: Variablequantity,
    });
  }
  handlePaymentMethod(PaymentMethod) {
    return (event) => {
      event.preventDefault();
      this.setState({ payment_method: PaymentMethod });
    };
  }
  handleModalContact = (e) => {
    e.preventDefault();
    this.setState({ showModal: !this.state.showModal });
  };

  handleModalVoucher = (e) => {
    e.preventDefault();

    this.setState({
      currentScrollState:
        window.pageYOffset || document.documentElement.scrollTop,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.setState({ showModalVoucher: !this.state.showModalVoucher });
  };

  handleModalEWallet = (e) => {
    e.preventDefault();
    this.setState({ showModalEWallet: !this.state.showModalEWallet });
  };

  handleVoucherApply = (e) => {
    e.preventDefault();
    this.props.vouchers.map((voucher) =>
      voucher.code === this.state.voucher_code
        ? this.setState({
            voucher_value: voucher.value,
            showModalVoucher: !this.state.showModalVoucher,
          })
        : this.setState({ voucher_value: 0 })
    );
    window.scrollTo({ top: this.state.currentScrollState, behavior: "smooth" });
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  trimmedString(stringX) {
    if (stringX.length === 12) {
      return stringX;
    } else {
      return stringX.substring(0, 24) + "...";
    }
  }
  HandleDecimalPlaces = (Variable) => {
    return Math.round((Variable + Number.EPSILON) * 100) / 100;
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    const { cartItems } = this.props;
    const { Subtotal, tax, totalAmount } = this.state;

    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow  text-2xl text-white">
              <h3 class="font-bold pl-2">Check Out</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            <section class="mx-auto p-6 rounded-lg shadow-lg bg-white">
              <div class="w-full mb-8">
                <div className="">
                  <div class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                    Delivery Address
                  </div>

                  <div class="flex-row">
                    <div className="font-semibold  px-4 py-3">
                      <div className="text-md flex items-center justify-between">
                        <span> Address</span>
                        <div>
                          <button
                            onClick={this.handleModalContact}
                            class="bg-teal_custom hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-4"
                          >
                            <i class="fal fa-edit fa-lg mr-2"></i>
                            <span>Edit Contact Details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div class="px-4 py-3 text-sm font-semibold">
                        <label class="inline-flex items-center mt-3">
                          <span class="ml-2">
                            {this.props.AuthReducer.addresses.street}{" "}
                            {this.props.AuthReducer.addresses.city_town}{" "}
                            {
                              this.props.AuthReducer.addresses
                                .state_province_area
                            }{" "}
                            {this.props.AuthReducer.addresses.country}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="font-semibold  px-4 py-3">
                      <div className="text-md flex items-center justify-between">
                        <span>Contact number</span>
                      </div>

                      <div className="flex">
                        {/* <div class="px-4 py-3 mt-3">
                                  <label class="inline-flex items-center">
                                    <input
                                      type="radio"
                                      name="contact_number"
                                      class="form-radio h-5 w-5 text-red-600"
                                      value={contact_number.phone_number}
                                      onChange={this.onChange}
                                      checked={
                                        this.state.contact_number ===
                                        contact_number.phone_number
                                          ? true
                                          : false
                                      }
                                    />
                                    <span class="ml-2 text-gray-700 text-sm">
                                      {index === 0
                                        ? "Default Contact Number"
                                        : "Contact Number #" +
                                          parseInt(index + 1)}
                                    </span>
                                  </label>
                                </div> */}
                        <div class="px-4 py-3 text-sm font-semibold">
                          <label class="inline-flex items-center mt-3">
                            <span class="ml-2">
                              {this.props.AuthReducer.contact_numbers}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div class="px-4 py-3 border-t border-gray-300">
                    <form onSubmit={this.handleSubmitToPayment} class="mt-4">
                      <div class="mt-10">
                        <input
                          type="submit"
                          value="Confirm changes and proceed to payment"
                          class="py-3 px-3 bg-gray-800 text-white rounded hover:bg-gray-600"
                        />
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
            </section>
          </div>

          <div className="p-5 w-full">
            <section class="w-full mx-auto p-6 rounded-lg shadow-lg mt-12 bg-white">
              <div class="flex">
                <div class="w-full px-4 py-3">
                  <div class="flex justify-between border-b pb-8 ">
                    <h1 class="font-medium text-3xl">Products Ordered</h1>
                  </div>
                  <div class="flex justify-between mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-full">
                      Product Details
                    </h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-full text-center">
                      Quantity
                    </h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-full text-center">
                      Unit Price
                    </h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-full text-center">
                      Sub Total
                    </h3>
                  </div>

                  <div className="max-h-72 overflow-y-scroll">
                    {cartItems.map((item) => (
                      <div class=" flex items-center justify-between hover:bg-gray-100 py-2">
                        <>
                          <div class="flex w-full">
                            <div class="HoverCartProductName flex flex-col justify-between flex-grow h-14 relative">
                              <span class="font-bold text-sm">
                                {/* {item.product_name} */}
                                {this.trimmedString(item.product_name)}
                                <div className="CartProductName bg-gray-100 absolute top-0 z-10 w-full">
                                  {item.product_name}
                                </div>
                              </span>
                              <span class="text-gray-600 text-sm">
                                {item.color}
                                {" / "}
                                {item.size}
                              </span>
                              {/* <div
                                href="#"
                                class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                onClick={() => removeFromCart(item)}
                              >
                                Remove
                              </div> */}
                            </div>
                          </div>

                          <span class="text-center w-full font-semibold text-sm pr-2 break-words">
                            {item.quantity}
                          </span>
                          <span class="text-center w-full font-semibold text-sm pr-2 break-words">
                            ₱{this.numberWithCommas(item.price)}
                          </span>
                          <span class="text-center w-full font-semibold text-sm break-words">
                            ₱
                            {this.numberWithCommas(
                              this.HandleDecimalPlaces(
                                item.price * item.quantity
                              )
                            )}
                          </span>
                        </>
                      </div>
                    ))}
                  </div>
                  <div class="flex justify-between border-t pt-8">
                    <h1 class="font-medium text-2xl">Gift Voucher</h1>
                    <button
                      onClick={this.handleModalVoucher}
                      class="bg-teal_custom hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-4"
                    >
                      <i class="fal fa-plus fa-lg mr-2"></i>
                      <span>Select Gift Voucher</span>
                    </button>
                  </div>
                  {this.state.voucher_value > 0 ? (
                    <div class="flex justify-between pt-8">
                      <h1 class="font-medium text-2xl">Voucher:</h1>
                      <h1 class="font-semibold text-2xl">
                        - ₱{this.state.voucher_value}
                      </h1>
                    </div>
                  ) : (
                    ""
                  )}

                  <div class="flex justify-between pt-8">
                    <h1 class="font-medium text-2xl">Shipping Fee:</h1>
                    <h1 class="font-semibold text-2xl">+ ₱40</h1>
                  </div>
                  <div className="flex flex-col pt-8 gap-y-2">
                    <div class="flex justify-between">
                      <h1 class="font-semibold text-2xl">Order Total: </h1>
                      <h2 class="font-semibold text-2xl">
                        ₱
                        {this.numberWithCommas(
                          totalAmount - this.state.voucher_value
                        )}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="p-5 w-full">
            <section class="w-full mx-auto p-6 rounded-lg shadow-lg mt-12 bg-white">
              {/* <div class="w-full mb-8 rounded-lg shadow-lg "></div> */}

              <div class="">
                <div class="w-full px-4 py-3">
                  <div class="flex justify-between border-b pb-8">
                    <h1 class="font-medium text-3xl">Payment options</h1>
                  </div>
                  <div class="flex flex-col xl:flex-row items-center justify-between mt-5 mb-5 space-x-3">
                    <button
                      onClick={this.handlePaymentMethod("Cash On Delivery")}
                      class={
                        this.state.payment_method === "Cash On Delivery"
                          ? "space-x-1 w-full text-lg text-gray-700 transition-colors duration-150 border-gray-500 rounded-lg focus:shadow-outline border-4"
                          : "space-x-1 w-full text-lg text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline  "
                      }
                    >
                      <i class="block pt-3 far fa-money-bill-wave fa-lg"></i>
                      <span className="block pb-3 font-semibold">
                        Cash On Delivery
                      </span>
                    </button>
                    <button
                      onClick={this.handlePaymentMethod("E-Wallet")}
                      class={
                        this.state.payment_method === "E-Wallet"
                          ? "space-x-1 w-full text-lg text-gray-700 transition-colors duration-150 border-gray-500 rounded-lg focus:shadow-outline  border-4"
                          : "space-x-1 w-full text-lg text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline  "
                      }
                    >
                      <i class="block pt-3 far fa-wallet fa-lg"></i>
                      <span className="block pb-3 font-semibold">E-Wallet</span>
                    </button>
                    {/* <div className="flex items-center justify-center bg-gray-100 shadow-lg z-0 rounded-xl p-4 m-3 w-full">
                      <PayPalButton
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  currency_code: "PHP",
                                  value: "12",
                                },
                              },
                            ],
                            // application_context: {
                            //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                            // }
                          });
                        }}
                        onApprove={(data, actions) => {
                          // Capture the funds from the transaction

                          this.onModalToggleFunction();
                          return actions.order
                            .capture()
                            .then(function (details) {
                              // Show a success message to your buyer
                              alert(
                                "Transaction completed by " +
                                  details.payer.name.given_name
                              );

                              // OPTIONAL: Call your server to save the transaction
                              return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                  orderID: data.orderID,
                                }),
                              });
                            });
                        }}
                      />
                    </div> */}

                    {/* <button class="space-x-1 w-full text-lg text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-white">
                      <i class="block pt-3 fad fa-gift-card fa-lg"></i>
                      <span className="block pb-3 font-semibold">
                        Gift check
                      </span>
                    </button> */}
                  </div>
                  <div className="flex justify-end mb-5">
                    <div className="flex flex-col">
                      <div class="flex justify-between gap-x-5">
                        <h1 class="font-medium text-2xl">Shipping Fee:</h1>
                        <h1 class="font-semibold text-2xl">₱40</h1>
                      </div>

                      <div class="flex justify-between gap-x-5">
                        <h1 class="font-semibold text-2xl">Order Total: </h1>
                        <h2 class="font-semibold text-2xl">
                          ₱{this.numberWithCommas(totalAmount)}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end pt-10">
                    <button
                      onClick={this.onSubmit}
                      class="bg-teal_custom hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-xl"
                    >
                      <span>Place Order</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
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
                          Address
                        </h1>
                      </div>

                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="street"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="name"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          House No., Street name, Building. Subd, Brgy
                        </label>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="city"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="name"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          City Town
                        </label>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="state"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="name"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          State Province Area
                        </label>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="country"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="name"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Country
                        </label>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="country"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="name"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Phone Number
                        </label>
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <button
                          type="submit"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-2 text-sm"
                        >
                          Submit
                        </button>
                        <button
                          onClick={this.handleModalContact}
                          className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                        >
                          Cancel
                        </button>
                      </div>

                      <div
                        onClick={this.handleModalContact}
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
        <div
          class={this.state.showModalVoucher ? "h-screen " : "h-screen hidden"}
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
                          Gift Vouchers
                        </h1>
                      </div>
                      <div className="border-4 py-3">
                        <div className="flex justify-center">
                          <div class="relative z-0 mb-5 w-2/5">
                            <input
                              type="text"
                              name="voucher_code"
                              onChange={this.onChange}
                              placeholder=" "
                              required
                              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                            />
                            <label
                              for="voucher_code"
                              class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                            >
                              Gift Voucher Code
                            </label>
                          </div>
                        </div>
                        <div className="flex justify-center ">
                          <button
                            onClick={this.handleVoucherApply}
                            class="bg-teal_custom hover:bg-gray-700 text-white font-bold p-2 rounded text-md w-2/5"
                          >
                            <span>Apply</span>
                          </button>
                        </div>
                      </div>

                      <div
                        onClick={this.handleModalVoucher}
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
        <div
          class={this.state.showModalEWallet ? "h-screen " : "h-screen hidden"}
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
                          E-Walley Payment
                        </h1>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex items-center justify-center bg-gray-100 shadow-lg z-10 rounded-xl p-4 m-3 w-2/5">
                          <i class="far fa-wallet fa-3x"></i>
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 shadow-lg z-10 rounded-xl p-4 m-3 w-2/5">
                          <PayPalButton
                            createOrder={(data, actions) => {
                              return actions.order.create({
                                purchase_units: [
                                  {
                                    amount: {
                                      currency_code: "PHP",
                                      value: totalAmount.toString(),
                                    },
                                  },
                                ],
                                // application_context: {
                                //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                                // }
                              });
                            }}
                            onApprove={(data, actions) => {
                              // Capture the funds from the transaction
                              this.handleClickPayPal(totalAmount);
                              this.onModalToggleFunction();
                              return actions.order
                                .capture()
                                .then(function (details) {
                                  // Show a success message to your buyer
                                  alert(
                                    "Transaction completed by " +
                                      details.payer.name.given_name
                                  );

                                  // OPTIONAL: Call your server to save the transaction
                                  return fetch("/paypal-transaction-complete", {
                                    method: "post",
                                    body: JSON.stringify({
                                      orderID: data.orderID,
                                    }),
                                  });
                                });
                            }}
                          />
                        </div>
                      </div>
                      <div
                        onClick={this.handleModalEWallet}
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
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    AuthReducer: state.AuthReducer,
    cartItems: state.cartReducer.cartItems,
    vouchers: state.products.vouchers,
  };
};
export default withRouter(
  connect(mapStateToProps, {
    loadUser,
    addTransactionItems,
    clearCart,
    getTransactionList,
    getVoucherList,
  })(Checkout)
);
