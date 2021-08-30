import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

let onlineNavButtons = document.getElementsByClassName(
  "accountSettingNavButton"
);
let OnlineNavButtonsActive = document.getElementsByClassName(
  "accountSettingNavButtonActive"
);
class OnlineCustomerAccountSetting extends React.Component {
  onToggleOnlineNavButton = (e) => {
    e.preventDefault();
    for (var i = 0; i < onlineNavButtons.length; i++) {
      if (OnlineNavButtonsActive.length > 0) {
        OnlineNavButtonsActive[0].classList.remove(
          "accountSettingNavButtonActive"
        );
      }

      e.target.classList.add("accountSettingNavButtonActive");
    }
  };
  render() {
    return (
      <>
        {" "}
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow text-2xl text-white">
              <h3 class="font-bold pl-2">Account Setting</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            {/* overflow-x-hidden */}

            <section class="mx-auto p-6">
              <div class="w-full pb-2 overflow-hidden rounded-lg shadow-lg bg-white">
                <nav class="flex flex-col justify-evenly sm:flex-row">
                  <button
                    onClick={this.onToggleOnlineNavButton}
                    class="accountSettingNavButton accountSettingNavButtonActive"
                  >
                    Orders
                  </button>
                  {/* <button
                    onClick={this.onToggleOnlineNavButton}
                    class="accountSettingNavButton"
                  >
                    Address
                  </button> */}
                  {/* <button
                    onClick={this.onToggleOnlineNavButton}
                    class="accountSettingNavButton"
                  >
                    Payment
                  </button>*/}
                  <button
                    onClick={this.onToggleOnlineNavButton}
                    class="accountSettingNavButton"
                  >
                    Personal Details
                  </button>
                  {/* <button
                    onClick={this.onToggleOnlineNavButton}
                    class="accountSettingNavButton"
                  >
                    Password
                  </button> */}
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
                      <th class="px-4 py-3">Quantity</th>
                      <th class="px-4 py-3">Status</th>
                      <th class="px-4 py-3">Order Date</th>
                      <th class="px-4 py-3">Completed Date</th>
                      <th class="px-4 py-3">Sub-Total</th>
                      <th class="px-4 py-3">Order-Total</th>
                    </tr>
                  </thead>
                  <tbody class="">
                    <tr class="text-gray-700 border-b border-gray-300">
                      {/* <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <div>
                            <p class="font-semibold text-black">Sufyan</p>
                            <p class="text-xs text-gray-600">Helmet</p>
                          </div>
                        </div>
                      </td> */}
                      <td class="px-4 py-3 text-sm font-semibold">Variation</td>
                      <td class="px-4 py-3 text-sm font-semibold">22</td>
                      <td class="px-4 py-3 text-sm font-semibold">Variation</td>
                      <td class="px-4 py-3 text-sm font-semibold">22</td>

                      <td class="px-4 py-3 text-sm font-semibold">Variation</td>
                      <td class="px-4 py-3 text-sm font-semibold">22</td>

                      <td class="px-4 py-3 text-sm">₱559.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="mx-auto p-6">
              <div class="w-full mb-8 rounded-lg shadow-lg ">
                <div className="bg-white">
                  <form class="mt-9">
                    <div className="p-4">
                      <div class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                        Edit your account here
                      </div>
                      <div class="mt-5 flex justify-between space-x-2">
                        <div class="relative z-0 w-1/2 mb-5">
                          <input
                            type="text"
                            name="first_name"
                            placeholder=" "
                            required
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                          />
                          <label
                            for="name"
                            class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                          >
                            First name
                          </label>
                          <span class="text-sm text-red-600 hidden" id="error">
                            First name is required
                          </span>
                        </div>
                        <div class="relative z-0 w-1/2 mb-5">
                          <input
                            type="text"
                            name="last_name"
                            placeholder=" "
                            required
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                          />
                          <label
                            for="last_name"
                            class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                          >
                            Last name
                          </label>
                          <span class="text-sm text-red-600 hidden" id="error">
                            Last name is required
                          </span>
                        </div>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="email"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="name"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Email
                        </label>
                        <span class="text-sm text-red-600 hidden" id="error">
                          Email is required
                        </span>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="username"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="name"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Username
                        </label>
                        <span class="text-sm text-red-600 hidden" id="error">
                          Username is required
                        </span>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <label class="text-gray-700 pt-3 pb-2">
                          <input type="checkbox" name="IsAdmin" />
                          <span class="ml-1">Is Admin Account?</span>
                        </label>
                      </div>

                      {/* <div className="flex items-center justify-center w-full mt-10">
                        <button
                          type="submit"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-2 text-sm"
                        >
                          Add
                        </button>
                       
                      </div> */}
                      <div class="mt-10">
                        <input
                          type="submit"
                          value="Confirm"
                          class="py-3 bg-gray-800 text-white w-1/5 rounded hover:bg-gray-600"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            <section class="mx-auto p-6">
              <div class="w-full mb-8 rounded-lg shadow-lg ">
                <div className="bg-white p-4">
                  <div class="px-4 py-3 border-gray-300">
                    <div class="text-left p-0 mt-4">
                      <h1 class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                        Change your password here
                      </h1>
                    </div>
                    <form class="mt-4">
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="password"
                          name="password"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="name"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Password
                        </label>
                        <span class="text-sm text-red-600 hidden" id="error">
                          Password is required
                        </span>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="password"
                          name="password2"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="name"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Confirm Password
                        </label>
                        <span class="text-sm text-red-600 hidden" id="error">
                          Confirm Password is required
                        </span>
                      </div>
                      <div class="mt-10">
                        <input
                          type="submit"
                          value="Confirm"
                          class="py-3 bg-gray-800 text-white w-1/5 rounded hover:bg-gray-600"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <section class="mx-auto p-6">
              <div class="w-full mb-8 rounded-lg shadow-lg ">
                <div className="bg-white p-4">
                  <div class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                    My Addresses
                  </div>

                  <div class="flex">
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
                    <Accordion allowZeroExpanded>
                      <AccordionItem>
                        <div class="text-left p-0 mt-4 flex">
                          <h1 class="text-gray-800 text-3xl font-medium mr-2">
                            Add new address here.
                          </h1>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <button class="bg-grey-light text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <i class="fal fa-toggle-on fa-2x mr-2"></i>
                                <span>Toggle form</span>
                              </button>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                        </div>

                        <AccordionItemPanel>
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
                              <span
                                class="text-sm text-red-600 hidden"
                                id="error"
                              >
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
                                <span
                                  class="text-sm text-red-600 hidden"
                                  id="error"
                                >
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
                                <span
                                  class="text-sm text-red-600 hidden"
                                  id="error"
                                >
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
                              <span
                                class="text-sm text-red-600 hidden"
                                id="error"
                              >
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
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
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
export default OnlineCustomerAccountSetting;
