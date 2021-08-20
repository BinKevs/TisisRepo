import React from "react";
class OnlineTransactionQueuing extends React.Component {
  render() {
    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow text-2xl text-white">
              <h3 class="font-bold pl-2">Transaction Items</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            <div className="w-full overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800">
                <thead>
                  <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                    <th className="pl-14 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Transaction ID
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Product Name
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Variation
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 w-2/12 ">
                      Date
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Price
                    </th>

                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      Quantity
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 w-2/12 ">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                    <td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      QWE
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      QWE
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      QWE
                    </td>
                    {/* <td className="pr-6 whitespace-no-wrap">
                        <div className="flex items-center">
                        <div className="h-8 w-8">
                            <img
                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png"
                            alt
                            className="h-full w-full rounded-full overflow-hidden shadow"
                        />
                        </div>
                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">
                        Carrie Anthony
                            </p>
                            </div>
                    </td> */}
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      QWE
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      QWE
                    </td>
                    {/* <td className="pr-8 relative">
                        <div
                            id={item.id}
                            className="mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32"
                        >
                            <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <li
                                    
                                    className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                                >
                                    Edit
                                </li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                                    Delete
                                </li>
                            </ul>
                        </div>
                        <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={this.setSeeMore(item.id)}
                                className="icon icon-tabler icon-tabler-dots-vertical dropbtn"
                                width={28}
                                height={28}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={12} cy={19} r={1} />
                                <circle cx={12} cy={5} r={1} />
                            </svg>
                        </button>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default OnlineTransactionQueuing;
