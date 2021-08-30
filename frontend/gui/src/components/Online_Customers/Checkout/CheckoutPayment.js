import React from "react";

import { PayPalButton } from "react-paypal-button-v2";
class CheckoutPayment extends React.Component {
  render() {
    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow  text-2xl text-white">
              <h3 class="font-bold pl-2">Check Out / Payment</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            <section class="w-full mx-auto p-6 rounded-lg shadow-lg mt-12 bg-white">
              {/* <div class="w-full mb-8 rounded-lg shadow-lg "></div> */}

              <div class="flex">
                <div class="w-full px-4 py-3">
                  <div class="flex justify-between border-b pb-8 ">
                    <h1 class="font-medium text-3xl">Sale Summary</h1>
                  </div>
                  <div class="flex justify-between mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-full">
                      Product Details
                    </h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-full text-center">
                      Quantity
                    </h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-full text-center">
                      Price
                    </h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-full text-center">
                      Total
                    </h3>
                  </div>

                  <div class="flex items-center justify-center hover:bg-gray-100 py-5">
                    <div class="flex w-full">
                      <div class="flex flex-col justify-between flex-grow h-24">
                        <span class="font-bold text-sm">QWE</span>
                        <span class="text-red-500 text-xs">QWE</span>
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
                      QWE
                    </span>
                    <span class="text-center w-full font-semibold text-sm pr-2 break-words">
                      QWE
                    </span>
                    <span class="text-center w-full font-semibold text-sm break-words">
                      QWE
                    </span>
                  </div>

                  <div className="flex flex-col border-t pt-8 gap-y-2">
                    <div class="flex justify-between">
                      <h1 class="font-semibold text-lg">Sub Total : </h1>
                      <h2 class="font-semibold text-xl">QWE</h2>
                    </div>
                    <div class="flex justify-between">
                      <h1 class="font-semibold text-lg">Tax : </h1>
                      <h2 class="font-semibold text-xl">QWE</h2>
                    </div>
                    <div class="flex justify-between">
                      <h1 class="font-semibold text-2xl">
                        Total Amount to Pay:{" "}
                      </h1>
                      <h2 class="font-semibold text-2xl">QWE</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div class="my-10">
                <div class="w-full px-4 py-3">
                  <div class="flex justify-between border-b pb-8">
                    <h1 class="font-medium text-3xl">Payment options</h1>
                  </div>
                  <div class="flex flex-col 2xl:flex-row items-center justify-between mt-5 mb-5">
                    <button
                      onClick={this.onModalToggle}
                      class="space-x-1 w-full text-lg text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-white"
                    >
                      <i class="block pt-3 far fa-money-bill-wave fa-lg"></i>
                      <span className="block pb-3 font-semibold">Cash</span>
                    </button>
                    <div className="flex items-center justify-center bg-gray-100 shadow-lg z-10 rounded-xl p-4 m-3 w-full">
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
                    </div>

                    <button class="space-x-1 w-full text-lg text-gray-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-white">
                      <i class="block pt-3 fad fa-gift-card fa-lg"></i>
                      <span className="block pb-3 font-semibold">
                        Gift check
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
export default CheckoutPayment;
