import React from "react";
class OnlineTransactionQueuing extends React.Component {
  render() {
    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow text-2xl text-white">
              <h3 class="font-bold pl-2">Transaction Queueing</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            <div className="w-full overflow-x-auto">
              <section class="mx-auto p-6">
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg bg-white">
                  <div class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                    Queue Order/s
                  </div>
                  <table class="w-full ">
                    <thead>
                      <tr class="text-md font-semibold tracking-wide text-left text-gray-600 bg-white uppercase border-b border-gray-300">
                        {/* <th class="px-4 py-3">Transaction ID</th> */}
                        <th class="px-4 py-3">Product Name</th>
                        <th class="px-4 py-3">Variation</th>
                        <th class="px-4 py-3">Date</th>
                        <th class="px-4 py-3">Quantity</th>
                        <th class="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody class="">
                      <tr class="text-gray-700 border-b border-gray-300">
                        {/*<td class="px-4 py-3">
                          <div class="flex items-center text-sm">
                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
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
                            </div> 
                            <div>
                              <p class="font-semibold text-black">Sufyan</p>
                              <p class="text-xs text-gray-600">Helmet</p>
                            </div>
                          </div>
                        </td>*/}
                        {/* <td class="px-4 py-3 text-sm font-semibold">1821</td> */}
                        <td class="px-4 py-3 text-sm font-semibold">
                          Bolt Nut
                        </td>
                        <td class="px-4 py-3 text-sm font-semibold">
                          <div>
                            <p>Size : XL</p>
                            <p>Color : RED</p>
                          </div>
                        </td>
                        <td class="px-4 py-3 text-sm">Aug 02 2021 21:46:20</td>

                        <td class="px-4 py-3 text-sm">12</td>
                        <td class="px-4 py-3 text-sm">
                          <select class="w-full h-8 border rounded-lg text-xs my-2">
                            <option>Select Category</option>
                            <option>Category : 12</option>
                            <option>Category : 12</option>
                            <option>Category : 12</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default OnlineTransactionQueuing;
