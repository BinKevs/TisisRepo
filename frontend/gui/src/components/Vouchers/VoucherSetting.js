import React from "react";
import { connect } from "react-redux";
import {
  getVoucherList,
  addVoucher,
} from "../../store/actions/product/products";
class VoucherSetting extends React.Component {
  componentDidMount() {
    this.props.getVoucherList();
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  state = {
    code: "",
    value: "",
    showModal: false,
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { code, value } = this.state;
    const status = "Active";
    const voucher = { code, value, status };
    this.props.addVoucher(voucher);
    this.setState({
      code: "",
      value: "",
      showModal: !this.state.showModal,
    });
    this.props.getVoucherList();
  };
  onToggleModal = (event) => {
    event.preventDefault();
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  render() {
    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow text-2xl text-white">
              <h3 class="font-bold pl-2">Vouchers</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded">
              <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch w-full">
                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                  <div className="lg:ml-6 flex items-start w-full">
                    <div className="text-white cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-teal_custom transition duration-150 ease-in-out hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center">
                      <i class="fal fa-print fa-lg"></i>
                    </div>
                    <div
                      onClick={this.onToggleModal}
                      className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-teal_custom transition duration-150 ease-in-out hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center"
                    >
                      <i class="fal fa-plus fa-lg"></i>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                  {/* <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                    <p
                      className="text-base text-gray-600 dark:text-gray-400"
                      id="page-view"
                    >
                      Viewing
                    </p>
                    <div className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded mr-4">
                      <i class="fad fa-angle-left fa-2x"></i>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer">
                      <i class="fad fa-angle-right fa-2x"></i>
                    </div>
                  </div> */}
                  <div className="lg:ml-6 flex items-center">
                    <div class="relative w-full">
                      <input
                        type="text"
                        name="search"
                        placeholder=" "
                        required
                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                      />
                      <label
                        for="search"
                        class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                      >
                        Search
                      </label>
                    </div>
                    <i class="fad fa-search fa-lg"></i>
                  </div>
                </div>
              </div>
              <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800">
                  <tbody>
                    <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                      <th className="pl-14 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        ID
                      </th>
                      <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        Code
                      </th>
                      <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        Value
                      </th>
                      <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        Date Created
                      </th>
                      <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        Status
                      </th>
                    </tr>
                  </tbody>
                  <tbody>
                    {this.props.vouchers.map((voucher) => (
                      <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                        <td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          {voucher.id}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          {voucher.code}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          {voucher.value}
                        </td>

                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          {voucher.created_at}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          {voucher.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
                  <form onSubmit={this.onSubmit} class="mt-9">
                    <div className="relative p-4 md:p-8 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400 ">
                      <div class="text-left p-0 mb-8">
                        <div>
                          <i class="far fa-motorcycle fa-3x mb-3 inline-block"></i>{" "}
                          <h1 class="font-Montserrat text-gray-800 text-2xl inline-block">
                            ABC Motor Parts
                          </h1>
                        </div>

                        <h1 class="text-gray-800 text-3xl font-medium">
                          Add Voucher
                        </h1>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="code"
                          onChange={this.onChange}
                          placeholder=" "
                          required
                          class={
                            "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                          }
                        />
                        <label
                          for="code"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Code
                        </label>
                        <span class="text-sm text-red-600" id="error"></span>
                      </div>
                      <div class="relative z-0 w-full mb-5">
                        <input
                          type="text"
                          name="value"
                          onChange={this.onChange}
                          placeholder=" "
                          required
                          class={
                            "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
                          }
                        />
                        <label
                          for="value"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                        >
                          Value
                        </label>
                        <span class="text-sm text-red-600" id="error"></span>
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <button
                          type="submit"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-2 text-sm"
                        >
                          Submit
                        </button>
                        <button className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">
                          Cancel
                        </button>
                      </div>

                      <div
                        onClick={this.onToggleModal}
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
const mapStateToProps = (state) => ({ vouchers: state.products.vouchers });

export default connect(mapStateToProps, { getVoucherList, addVoucher })(
  VoucherSetting
);