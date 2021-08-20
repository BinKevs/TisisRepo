import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
class CheckoutOnlineCustomer extends React.Component {
  render() {
    return (
      <>
        {" "}
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow  text-2xl text-white">
              <h3 class="font-bold pl-2">Check out</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            {/* overflow-x-hidden */}
            <section class="mx-auto p-6">
              <div class="w-full pb-2 overflow-hidden rounded-lg shadow-lg bg-white">
                <nav class="flex flex-col justify-evenly sm:flex-row">
                  <button class="py-4 px-6 block hover:gray-600 focus:outline-none text-gray-600 border-b-2 font-medium border-gray-600">
                    Orders
                  </button>
                  <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Address
                  </button>
                  <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Payment
                  </button>
                </nav>
              </div>
            </section>
            <section class="mx-auto p-6">
              <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg bg-white">
                <div class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                  My Order/s
                </div>
                <table class="w-full ">
                  <thead>
                    <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-300">
                      <th class="px-4 py-3">Item Name</th>
                      <th class="px-4 py-3">Variation</th>
                      <th class="px-4 py-3">Quantity</th>
                      <th class="px-4 py-3">Price</th>
                      <th class="px-4 py-3">Sub-Total</th>
                    </tr>
                  </thead>
                  <tbody class="">
                    <tr class="text-gray-700 border-b border-gray-300">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          {/* <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                class="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                class="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div> */}
                          <div>
                            <p class="font-semibold text-black">Sufyan</p>
                            <p class="text-xs text-gray-600">Helmet</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm font-semibold">Variation</td>
                      <td class="px-4 py-3 text-sm font-semibold">22</td>

                      <td class="px-4 py-3 text-sm">₱459.00</td>
                      <td class="px-4 py-3 text-sm">₱559.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="mx-auto p-6">
              <div class="w-full mb-8 rounded-lg shadow-lg ">
                <div className="bg-white">
                  <div class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                    My Addresses
                  </div>

                  <div class=" flex">
                    <div class="px-4 py-3 text-md font-semibold">
                      <label class="inline-flex items-center mt-3">
                        <input
                          type="radio"
                          class="form-radio h-5 w-5 text-red-600"
                          checked
                        />
                        <span class="ml-2 text-gray-700">Default Address</span>
                      </label>
                    </div>
                    <div class="px-4 py-3 text-md font-semibold">
                      <label class="inline-flex items-center mt-3">
                        <span class="ml-2">
                          454 A. Sandoval Ave, Pasig, Metro Manila
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class=" flex">
                    <div class="px-4 py-3 text-md font-semibold">
                      <label class="inline-flex items-center mt-3">
                        <input
                          type="radio"
                          class="form-radio h-5 w-5 text-red-600"
                          checked
                        />
                        <span class="ml-2 text-gray-700">Address #1</span>
                      </label>
                    </div>
                    <div class="px-4 py-3 text-md font-semibold">
                      <label class="inline-flex items-center mt-3">
                        <span class="ml-2">
                          454 A. Sandoval Ave, Pasig, Metro Manila
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class=" flex">
                    <div class="px-4 py-3 text-md font-semibold">
                      <label class="inline-flex items-center mt-3">
                        <input
                          type="radio"
                          class="form-radio h-5 w-5 text-red-600"
                          checked
                        />
                        <span class="ml-2 text-gray-700">Address #2</span>
                      </label>
                    </div>
                    <div class="px-4 py-3 text-md font-semibold">
                      <label class="inline-flex items-center mt-3">
                        <span class="ml-2">
                          454 A. Sandoval Ave, Pasig, Metro Manila
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="px-4 py-3 border-t border-gray-300">
                    <div class="text-left p-0 mt-4">
                      <h1 class="text-gray-800 text-3xl font-medium">
                        Add new address here.
                      </h1>
                    </div>
                    <form class="mt-4">
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="street"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="street"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Apartment, unit, suite, or floor #
                        </label>
                        <span class="text-sm text-red-600 hidden" id="error">
                          Apartment, unit, suite, or floor # is required
                        </span>
                      </div>
                      <div class="mt-5 flex justify-between space-x-2">
                        <div class="relative z-0 w-1/2 mb-5">
                          <input
                            type="text"
                            name="brgy"
                            placeholder=" "
                            required
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                          />
                          <label
                            for="brgy"
                            class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                          >
                            Baranggay
                          </label>
                          <span class="text-sm text-red-600 hidden" id="error">
                            Baranggay name is required
                          </span>
                        </div>
                        <div class="relative z-0 w-1/2 mb-5">
                          <input
                            type="text"
                            name="city"
                            placeholder=" "
                            required
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                          />
                          <label
                            for="city"
                            class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                          >
                            City
                          </label>
                          <span class="text-sm text-red-600 hidden" id="error">
                            City is required
                          </span>
                        </div>
                      </div>

                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="province"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="province"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Province
                        </label>
                        <span class="text-sm text-red-600 hidden" id="error">
                          Province is required
                        </span>
                      </div>

                      <div class="mt-10">
                        <input
                          type="submit"
                          value="Add Address"
                          class="py-3 bg-gray-800 text-white w-1/5 rounded hover:bg-gray-600"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <section class="mx-auto p-6">
              <div class="w-full mb-8 rounded-lg shadow-lg "></div>
              <div className="bg-white">
                <div class="lg:mx-4 w-full">
                  <div class="flex shadow-lg my-10">
                    <div class="w-full bg-white px-10 py-10">
                      <div class="flex justify-between border-b pb-8">
                        <h1 class="font-semibold text-2xl">Sale Summary</h1>
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
                </div>
                <div class="lg:mx-4 w-full">
                  <div class="shadow-lg my-10">
                    <div class="w-full bg-white px-10 py-10">
                      <div class="flex justify-between border-b pb-8">
                        <h1 class="font-semibold text-2xl">Payment options</h1>
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
export default CheckoutOnlineCustomer;
