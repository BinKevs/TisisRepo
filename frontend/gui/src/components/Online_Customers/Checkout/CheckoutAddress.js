import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

class CheckoutAddress extends React.Component {
  render() {
    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow  text-2xl text-white">
              <h3 class="font-bold pl-2">
                Check Out / Contact And Shipping Details
              </h3>
            </div>
          </div>
          <div className="p-5 w-full">
            <section class="mx-auto p-6 rounded-lg shadow-lg bg-white">
              <div class="w-full mb-8">
                <div className="">
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

                  <div class="px-4 py-3 border-t border-gray-300">
                    <div class="text-left p-0 mt-4">
                      <h1 class="text-gray-800 text-3xl font-medium">
                        Contact and shipping details
                      </h1>
                    </div>
                    <form class="mt-4">
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="address"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="address"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Detailed Address
                        </label>
                        <span class="text-sm text-red-600 hidden" id="error">
                          Detailed Address
                        </span>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="contact_number"
                          placeholder=" "
                          required
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                        />
                        <label
                          for="contact_number"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Contact Number
                        </label>
                        <span class="text-sm text-red-600 hidden" id="error">
                          Contact Number
                        </span>
                      </div>
                      {/* <div class="relative z-0 w-full mb-5">
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
                      </div> */}

                      <div class="mt-10">
                        <input
                          type="submit"
                          value="Confirm changes and proceed to payment"
                          class="py-3 px-3 bg-gray-800 text-white rounded hover:bg-gray-600"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>{" "}
      </>
    );
  }
}
export default CheckoutAddress;
