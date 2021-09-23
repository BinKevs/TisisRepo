import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
let NavButton = document.getElementsByClassName("NavButton");
let SectionPanelActive = document.getElementsByClassName("SectionPanelActive");
let NavButtonActive = document.getElementsByClassName("NavButtonActive");
class AccountSetting extends React.Component {
  onToggleNavButton = (DivTarget) => {
    return (event) => {
      event.preventDefault();
      for (var i = 0; i < NavButton.length; i++) {
        if (NavButtonActive.length > 0) {
          NavButtonActive[0].classList.remove("NavButtonActive");
          SectionPanelActive[0].classList.add("hidden");
          SectionPanelActive[0].classList.remove("SectionPanelActive");
        }
        event.target.classList.add("NavButtonActive");
        document
          .getElementsByClassName(DivTarget)[0]
          .classList.add("SectionPanelActive");
        document
          .getElementsByClassName(DivTarget)[0]
          .classList.remove("hidden");
      }
    };
  };
  render() {
    return (
      <>
        {" "}
        <div class="bg-gray-100 flex-1 mt-14">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow text-2xl text-white">
              <h3 class="font-bold pl-2">Account Setting</h3>
            </div>
          </div>
          <div className="space-y-5 w-full">
            <section class="mx-auto p-2">
              <div class="w-full overflow-hidden shadow-lg bg-white p-1">
                <nav class="flex flex-col justify-evenly sm:flex-row">
                  <button
                    onClick={this.onToggleNavButton("ProfilePanel")}
                    class="NavButton NavButtonActive"
                  >
                    Profile
                  </button>
                  <button
                    onClick={this.onToggleNavButton("ContactPanel")}
                    class="NavButton"
                  >
                    Contact Details
                  </button>
                  <button
                    onClick={this.onToggleNavButton("PasswordPanel")}
                    class="NavButton"
                  >
                    Password
                  </button>
                </nav>
              </div>
            </section>
            <section class="mx-auto px-5 mt-5 ProfilePanel SectionPanelActive">
              <div class="w-full rounded-lg shadow-lg ">
                <div className="bg-white">
                  <form class="">
                    <div className="p-4">
                      <div class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                        Edit your account here
                      </div>
                      <div className="flex justify-around">
                        <div>
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
                              <span
                                class="text-sm text-red-600 hidden"
                                id="error"
                              >
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
                              <span
                                class="text-sm text-red-600 hidden"
                                id="error"
                              >
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
                            <span
                              class="text-sm text-red-600 hidden"
                              id="error"
                            >
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
                            <span
                              class="text-sm text-red-600 hidden"
                              id="error"
                            >
                              Username is required
                            </span>
                          </div>
                        </div>
                        <div className="border-4 inline-block align-middle">
                          <img
                            className=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="mt-10 w-1/2 flex justify-center">
                        <input
                          type="submit"
                          value="Save"
                          class="py-3 bg-gray-800 text-white w-1/5 rounded hover:bg-gray-600"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            <section class="mx-auto px-5 ContactPanel hidden">
              <div class="w-full mb-8 rounded-lg shadow-lg ">
                <div className="bg-white p-4">
                  <div class="px-4 py-3 border-gray-300">
                    <div class="text-left p-0 mt-4">
                      <h1 class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                        Contact Details
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
                      <div class="mt-10">
                        <input
                          type="submit"
                          value="Save"
                          class="py-3 bg-gray-800 text-white w-1/5 rounded hover:bg-gray-600"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <section class="mx-auto px-5 PasswordPanel hidden">
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
                          value="Save"
                          class="py-3 bg-gray-800 text-white w-1/5 rounded hover:bg-gray-600"
                        />
                      </div>
                    </form>
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
export default AccountSetting;