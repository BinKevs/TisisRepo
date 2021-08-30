import React from "react";

class CheckoutOrders extends React.Component {
  render() {
    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow  text-2xl text-white">
              <h3 class="font-bold pl-2">Check Out / Your Orders</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            <section class="mx-auto p-6 rounded-lg shadow-lg bg-white">
              <div class="w-full mb-8 overflow-hidden ">
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
              <div class="mt-10">
                <input
                  type="submit"
                  value="Confirm Order/s"
                  class="py-3 bg-gray-800 text-white w-1/5 rounded hover:bg-gray-600"
                />
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
export default CheckoutOrders;
