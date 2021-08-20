import React from "react";
class OnlineCustomerAccountSetting extends React.Component {
  render() {
    return (
      <>
        {" "}
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
              <h3 class="font-bold pl-2">Account Setting</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            {/* overflow-x-hidden */}
            <div class="bg-white border-t-2 py-2">
              <nav class="flex flex-col justify-evenly sm:flex-row">
                <button class=" py-4 px-6 block hover:gray-600 focus:outline-none text-gray-600 border-b-2 font-medium border-gray-600">
                  ORDERS
                </button>
                <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  ADDRESSES
                </button>
                <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  PERSONAL DETAILS
                </button>
                <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  PASSWORD
                </button>
              </nav>
            </div>
            <section class="mx-auto p-6 font-mono">
              <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg ">
                <div class="w-full">
                  <table class="w-full">
                    <thead>
                      <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th class="px-4 py-3">Item Name</th>
                        <th class="px-4 py-3">Quantity</th>
                        <th class="px-4 py-3">Status</th>
                        <th class="px-4 py-3">Order Date</th>
                        <th class="px-4 py-3">Completed Date</th>
                        <th class="px-4 py-3">Sub-Total</th>
                        <th class="px-4 py-3">Order-Total</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      <tr class="text-gray-700">
                        <td class="px-4 py-3 border">
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
                        <td class="px-4 py-3 text-ms font-semibold border">
                          22
                        </td>
                        <td class="px-4 py-3 text-xs border">
                          <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                            {" "}
                            Complete{" "}
                          </span>
                        </td>
                        <td class="px-4 py-3 text-sm border">6/4/2000</td>
                        <td class="px-4 py-3 text-sm border">6/4/2000</td>
                        <td class="px-4 py-3 text-sm border">₱459.00</td>
                        <td class="px-4 py-3 text-sm border">₱559.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
export default OnlineCustomerAccountSetting;
