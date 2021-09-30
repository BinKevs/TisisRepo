import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProductList,
  deleteProduct,
  getProduct,
  updateProduct,
  addProduct,
  addCategory,
  getCategoryList,
} from "../../store/actions/product/products";
import { getSupplierList } from "../../store/actions/supplier/suppliers";
import ProductModal from "./ProductModal";
import { ProductsTableExportModal } from "./Print/ProductsTableExportModal";
let products = [];

let FilesArray = [];
let filteredData = [];
let EditButtonIsClicked = false;
let isImageChanged = false;
let isItemAdded = false;
class ProductSetting extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    getProductList: PropTypes.func.isRequired,
    getProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
  };
  state = {
    productName: "",
    CategoryNameForCategoryAdd: "",
    supplierID: 0,
    description: "",
    price: 0,
    categoryID: 0,
    stock: 0,
    size: "",
    color: "",
    image: null,
    productID: 0,
    search: "",
    urlFile: [],
    modal: false,
    categoryForDropDownSelect: "",
    table_export_modal: false,
    ProductNameError: "",
    file_content: "",
    showModalCategory: false,
  };

  handleModalCategory = () => {
    this.setState({
      showModalCategory: !this.state.showModalCategory,
    });
  };
  handleCategoryDropDown(CategoryName) {
    return (event) => {
      event.preventDefault();
      this.setState({
        categoryForDropDownSelect: CategoryName,
      });
    };
  }
  OnRightScroll = () => {
    document.getElementById("slider").scrollLeft += 120;
  };
  OnLeftScroll = () => {
    document.getElementById("slider").scrollLeft -= 120;
  };
  componentDidMount() {
    this.props.getProductList();
    this.props.getSupplierList();
    this.props.getCategoryList();
    // this.props.getProduct(1);
  }

  // when the image field changes it will save the image and also change the state of
  // isImageChanged to true for the update Form component to know that we didnt change the image
  // because we sent all data whenever we make a post or update so when the isImageChanged's status is false we will not include the field
  onRemoveImage = (fileID) => {
    return (e) => {
      e.preventDefault();
      FilesArray = [];
      const fileListArr = [...this.state.file_content];
      if (fileID > -1) {
        fileListArr.splice(fileID, 1);
      }
      this.setState({
        file_content: fileListArr,
      });

      for (let i = 0; i < fileListArr.length; i++) {
        FilesArray.push({
          file: URL.createObjectURL(fileListArr[i]),
          type: fileListArr[i].type,
        });
      }
      this.setState({
        urlFile: FilesArray,
      });
    };
  };
  onChange = (e) => {
    // if (e.target.name === "image") {
    //   this.setState({
    //     [e.target.name]: e.target.files[0],
    //     urlFile: URL.createObjectURL(e.target.files[0]),
    //   });
    //   isImageChanged = true;
    // } else
    if (e.target.name === "file_content") {
      FilesArray = [];
      for (let i = 0; i < e.target.files.length; i++) {
        FilesArray.push({
          file: URL.createObjectURL(e.target.files[i]),
          type: e.target.files[i].type,
        });
      }
      this.setState({
        [e.target.name]: e.target.files,
      });
      this.setState({
        urlFile: FilesArray,
      });
    } else {
      if (e.target.name === "productName") {
        const found = this.props.products.some(
          (item) => item.name === e.target.value
        );
        if (found) {
          this.setState({
            ProductNameError: "Product name already exist!",
            [e.target.name]: e.target.value,
          });
        } else {
          this.setState({
            ProductNameError: "",
            [e.target.name]: e.target.value,
          });
        }
      } else {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
    }
  };
  // Submitting the name in the add category action
  onSubmitCategory = (event) => {
    event.preventDefault();
    let name = this.state.CategoryNameForCategoryAdd;
    const categoryForCategoryAdd = { name };

    this.props.addCategory(categoryForCategoryAdd);
    this.setState({
      CategoryNameForCategoryAdd: "",
    });
  };
  // when the isEditButtonClicked status is change this.props.product
  // *the product that will be edited* is being fetch because we trigger it in the bottom
  // then we will set it to the state and being passed on the formupdate component
  componentDidUpdate(prevProps, prevState) {
    if (this.props.product != prevProps.product) {
      const { id, name, description, price, supplier, category, stock, image } =
        this.props.product;
      this.setState({
        productName: name,
        description,
        price,
        supplierID: supplier,
        categoryID: category,
        stock,
        image,
        productID: id,
      });
      this.props.getProductList();
    }
    if (isItemAdded === true) {
      this.props.getProductList();
      isItemAdded = false;
    }
  }
  //this will sent the updated product in the this.props.updateProduct to the action and will reset the state
  onUpdateSubmit = (productID) => {
    return (e) => {
      e.preventDefault();
      const {
        productName,
        description,
        price,
        categoryID,
        supplierID,
        stock,
        image,
      } = this.state;
      const formData = new FormData();

      formData.append("name", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", categoryID);
      formData.append("supplier", supplierID);
      formData.append("stock", stock);
      if (isImageChanged) {
        formData.append("image", image);
      }

      this.props.updateProduct(productID, formData);
      this.setState({
        productName: "",
        description: "",
        price: 0,
        supplierID: 0,
        categoryID: 0,
        new_stock: 0,
        stock: 0,
        image: null,
        productID: 0,
      });
      EditButtonIsClicked = false;
      isImageChanged = false;
      this.ModalFunction();
    };
  };
  // when edit button is close this will reset the state and EditButtonIsClicked, isImageChanged and isEditButtonClicked states

  // sending the product that will be added to this.props.addProduct in the actions also reset the state
  onAddSubmit = (e) => {
    e.preventDefault();
    if (this.state.ProductNameError === "") {
      const {
        productName,
        description,
        price,
        categoryID,
        supplierID,
        stock,
        size,
        color,
        file_content,
      } = this.state;
      const action_done = "Product Added";
      const formData = new FormData();

      formData.append("name", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", categoryID);
      formData.append("supplier", supplierID);
      formData.append("stock", stock);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("action_done", action_done);
      for (let i = 0; i < file_content.length; i++) {
        formData.append("file_content", file_content[i]);
      }
      this.props.addProduct(formData);

      this.setState({
        productName: "",
        description: "",
        price: 0,
        supplierID: 0,
        categoryID: 0,
        new_stock: 0,
        stock: 0,
        size: "",
        color: "",
        image: null,
      });
      isImageChanged = false;
      this.ModalFunction();
      isItemAdded = true;
      this.props.getProductList();
      FilesArray = [];
    }
  };

  // when edit button click this will fetch the supplier that will be edited and change the isEditButtonClicked status to true
  onEditCloseButton = (event) => {
    event.preventDefault();
    this.setState({
      productName: "",
      description: "",
      price: 0,
      supplierID: 0,
      categoryID: 0,
      new_stock: 0,
      size: "",
      color: "",
      stock: 0,
      image: null,
      productID: 0,
    });
    EditButtonIsClicked = false;
    isImageChanged = false;
    this.ModalFunction();
  };
  //this will toggle the add modal form
  onModalToggleAdd = (e) => {
    e.preventDefault();
    this.ModalFunction();
  };
  //this will toggle the edit modal form
  onModalToggleEdit(productID) {
    return (event) => {
      event.preventDefault();
      this.props.getProduct(productID);
      this.ModalFunction();
      EditButtonIsClicked = true;
    };
  }

  // function that called to open or close modal
  ModalFunction() {
    this.setState({ modal: !this.state.modal });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // document.getElementById("Body").classList.toggle("overflow-hidden");
  }
  OnToggleExportTable = (event) => {
    event.preventDefault();
    this.setState({ table_export_modal: !this.state.table_export_modal });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("Body").classList.toggle("overflow-hidden");
  };
  render() {
    // destructure the products that came from the reducer so it will be easier to filter and show
    products = [];
    filteredData = [];

    this.props.products.map((product) =>
      products.push({
        id: product.id,
        product_id: product.product_id,
        name: product.name,
        price: product.price,
        category: product.category_info.name,
        supplier: product.supplier_info.name,
        description: product.description,
        variation: product.variation,
      })
    );
    // This will filter the data from inventories array filtered at the top
    const lowercasedFilter = this.state.search.toLowerCase();

    // if (this.state.categoryForDropDownSelect !== '') {
    // 	if (this.state.categoryForDropDownSelect === 'Select Category') {
    // 		filteredData = products.filter((item) => {
    // 			if (lowercasedFilter === '') {
    // 				return item;
    // 			} else {
    // 				return item.name
    // 					.toString()
    // 					.toLowerCase()
    // 					.includes(lowercasedFilter);
    // 			}
    // 		});
    // 	} else {
    // 		filteredData = products.filter((item) => {
    // 			return Object.keys(item).some((key) =>
    // 				item[key].toString().includes(this.state.categoryForDropDownSelect)
    // 			);
    // 		});
    // 	}
    // } else {
    // 	filteredData = products.filter((item) => {
    // 		if (lowercasedFilter === '') {
    // 			return item;
    // 		} else {
    // 			return item.name.toString().toLowerCase().includes(lowercasedFilter);
    // 		}
    // 	});
    // }

    filteredData = products.filter((item) => {
      return (
        item.name.toString().toLowerCase().includes(lowercasedFilter) ||
        item.product_id.toString().toLowerCase().includes(lowercasedFilter)
      );
    });
    if (this.state.categoryForDropDownSelect === "") {
      filteredData = products.filter((item) => {
        return (
          item.name.toString().toLowerCase().includes(lowercasedFilter) ||
          item.product_id.toString().toLowerCase().includes(lowercasedFilter)
        );
      });
    } else {
      if (this.state.categoryForDropDownSelect === "Select Category") {
        filteredData = products.filter((item) => {
          return (
            item.name.toString().toLowerCase().includes(lowercasedFilter) ||
            item.product_id.toString().toLowerCase().includes(lowercasedFilter)
          );
        });
      } else {
        filteredData = products.filter((item) => {
          return item.category
            .toString()
            .includes(this.state.categoryForDropDownSelect);
        });
      }
    }
    if (
      lowercasedFilter !== "" &&
      this.state.categoryForDropDownSelect !== "Select Category" &&
      this.state.categoryForDropDownSelect !== ""
    ) {
      filteredData = products.filter((item) => {
        return (
          item.category
            .toString()
            .includes(this.state.categoryForDropDownSelect) &&
          (item.name.toString().toLowerCase().includes(lowercasedFilter) ||
            item.product_id.toString().toLowerCase().includes(lowercasedFilter))
        );
      });
    }

    return (
      <>
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
              <h3 class="font-bold pl-2">Products</h3>
            </div>
          </div>

          <div className="p-5 w-full">
            <div className="mx-auto bg-white shadow rounded">
              <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch w-full">
                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                  <div className="lg:ml-6 flex items-start w-full">
                    <div
                      onClick={this.OnToggleExportTable}
                      className="text-white cursor-pointer bg-teal_custom hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center"
                    >
                      <i class="fal fa-print fa-lg"></i>
                    </div>
                    <div
                      onClick={this.onModalToggleAdd}
                      className="ml-4 text-white cursor-pointer bg-teal_custom hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center"
                    >
                      <i class="fal fa-plus fa-lg"></i>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                  {/* <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                    <p
                      className="text-base text-gray-600 "
                      id="page-view"
                    >
                      Viewing 1 - 20 of 60
                    </p>
                    <div
                      className="text-gray-600  ml-2 border-transparent border cursor-pointer rounded mr-4"
                      onclick="pageView(false)"
                    >
                      <i class="fad fa-angle-left fa-2x"></i>
                    </div>
                    <div
                      className="text-gray-600  border-transparent border rounded focus:outline-none cursor-pointer"
                      onclick="pageView(true)"
                    >
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
                        onChange={this.onChange}
                        value={this.state.search}
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
              <div className="w-full flex justify-end pr-6">
                <div
                  onClick={this.handleModalCategory}
                  className="flex ml-4 bg-teal_custom text-white cursor-pointer h-12 rounded items-center justify-center px-3"
                >
                  <i class="fal fa-sliders-v mr-2"></i>
                  <div>Categories Setting</div>
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                      <th className="pl-12 text-gray-600  font-normal pr-6 text-left text-sm ">
                        Item No.
                      </th>
                      <th className="text-gray-600  font-normal pr-6 text-left text-sm w-1/5">
                        Product
                      </th>
                      <th className="text-gray-600  font-normal pr-6 text-left text-sm ">
                        (Variation) Stock
                      </th>
                      <th className="text-gray-600  font-normal pr-6 text-left text-sm ">
                        Price
                      </th>
                      <th className="text-gray-600  font-normal pr-6 text-left text-sm w-2/12">
                        <select
                          onChange={this.onChange}
                          name="categoryForDropDownSelect"
                          class="w-full h-8 border rounded-lg text-xs my-2"
                        >
                          <option>Select Category</option>
                          {this.props.categories.map((category) => (
                            <option value={category.name}>
                              Category : {category.name}{" "}
                            </option>
                          ))}
                        </select>
                      </th>

                      <th className="text-gray-600  font-normal pr-6 text-left text-sm">
                        Supplier
                      </th>

                      <th className="text-gray-600  font-normal pr-6 text-left text-sm w-1/5">
                        Description
                      </th>
                      <td className="text-gray-600  font-normal pr-6 text-left text-sm">
                        More
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((product) => (
                      <tr
                        key={product.id}
                        className="h-24 border-gray-300 dark:border-gray-200 border-b"
                      >
                        <td className="pl-12 text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {product.product_id}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {product.name}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 w-3/12">
                          {product.variation
                            ? product.variation.map(
                                (productVariation, index) => (
                                  <tr
                                    className={
                                      product.variation.length === 1
                                        ? "h-20 border-gray-300"
                                        : index + 1 === product.variation.length
                                        ? "h-20 border-gray-300"
                                        : "h-20 border-gray-300 border-b-2"
                                    }
                                  >
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                                      <div>
                                        ({productVariation.color}/
                                        {productVariation.size})
                                      </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                                      {productVariation.stock}
                                    </td>
                                  </tr>
                                )
                              )
                            : ""}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {product.price}
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
													<p className="ml-2 text-gray-800 text-sm">
														Carrie Anthony
													</p>
												</div>
											</td> */}
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {product.category}
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                          {product.supplier}
                        </td>

                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800">
                          <div className="w-full h-36 overflow-clip overflow-hidden">
                            {product.description}
                          </div>
                        </td>
                        <td className="pr-8 relative">
                          <button className="button-see-more text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                            <div className="seeMore absolute left-0 top-0 mt-2 -ml-20 shadow-md z-10 w-32">
                              <ul className="bg-white shadow rounded p-2">
                                <li
                                  onClick={this.onModalToggleEdit(product.id)}
                                  className="cursor-pointer text-gray-600  text-sm leading-3 py-3 hover:bg-teal_custom hover:text-white px-3 font-normal"
                                >
                                  Edit
                                </li>
                                <li className="cursor-pointer text-sm leading-3 py-3 hover:bg-red-500 hover:text-white px-3 font-normal">
                                  Delete
                                </li>
                              </ul>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ProductModal
          modal={this.state.modal}
          onModalToggleAdd={this.onModalToggleAdd}
          state={this.state}
          onChange={this.onChange}
          suppliers={this.props.suppliers}
          categories={this.props.categories}
          onAddSubmit={this.onAddSubmit}
          onUpdateSubmit={this.onUpdateSubmit}
          EditButtonIsClicked={EditButtonIsClicked}
          isImageChanged={isImageChanged}
          onEditCloseButton={this.onEditCloseButton}
          OnRightScroll={this.OnRightScroll}
          OnLeftScroll={this.OnLeftScroll}
          onRemoveImage={this.onRemoveImage}
        />
        <div
          class={
            this.state.table_export_modal ? "h-screen " : "h-screen hidden"
          }
        >
          <ProductsTableExportModal
            OnToggleExportTable={this.OnToggleExportTable}
            products={filteredData}
          />
        </div>
        <div
          class={this.state.showModalCategory ? "h-screen " : "h-screen hidden"}
        >
          <div class="mx-auto max-w-screen-lg h-full">
            <div
              className="z-20 absolute top-0 right-0 bottom-0 left-0"
              id="modal"
            >
              <div class="modal-overlay absolute w-full h-full z-25 bg-gray-900 opacity-50"></div>
              <div className="h-full overflow-auto w-full flex flex-col">
                <div className="m-2 md:m-12">
                  <form class="mt-9">
                    <div className="relative p-4 md:p-8 bg-white dark:border-gray-700 shadow-md rounded border border-gray-400 ">
                      <div class="text-left p-0 mb-8">
                        <div>
                          <i class="far fa-motorcycle fa-3x mb-3 inline-block"></i>{" "}
                          <h1 class="font-Montserrat text-gray-800 text-2xl inline-block">
                            ABC Motor Parts
                          </h1>
                        </div>

                        <h1 class="text-gray-800 text-3xl font-medium">
                          Categories Setting
                        </h1>
                      </div>
                      <table className="min-w-full bg-white p-28">
                        <thead>
                          <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                            <th className="pl-12 text-gray-600  font-normal pr-6 text-left text-sm ">
                              ID
                            </th>
                            <th className="text-gray-600  font-normal pr-6 text-left text-sm">
                              Category Name
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.categories.map((category) => (
                            <tr
                              key={category.id}
                              className="h-24 border-gray-300 dark:border-gray-200 border-b"
                            >
                              <td className="pl-12 text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                                {category.id}
                              </td>
                              <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 ">
                                {category.name}
                              </td>
                              <td className="text-gray-800">
                                <div className="shadow rounded p-2 text-center cursor-pointer  text-sm py-3 bg-teal_custom text-white px-3 font-normal">
                                  Edit
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* <div className="flex items-center justify-center w-full mt-4">
                        <button
                          value="Complete"
                          type="submit"
                          className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 bg-cyan-700 rounded text-white px-8 py-2 text-md"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={this.handleModalCategory}
                          className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-md"
                        >
                          Cancel
                        </button>
                      </div> */}

                      <div
                        onClick={this.handleModalCategory}
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
const mapStateToProps = (state) => ({
  products: state.products.products,
  product: state.products.product,
  suppliers: state.suppliers.suppliers,
  categories: state.products.categories,
});

export default connect(mapStateToProps, {
  getProductList,
  getProduct,
  getSupplierList,
  getCategoryList,
  deleteProduct,
  updateProduct,
  addCategory,
  addProduct,
})(ProductSetting);
