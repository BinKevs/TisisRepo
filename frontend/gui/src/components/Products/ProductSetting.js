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
  updateCategory,
  getCategoryList,
  updateProductVariation,
} from "../../store/actions/product/products";
import { getSupplierList } from "../../store/actions/supplier/suppliers";
import ProductModal from "./ProductModal";
import CategoryModal from "./CategoryModal";
import ProductVariation from "./ProductVariation";
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
    supplierID: 0,
    description: "",
    price: 0,
    categoryID: 0,
    stock: 0,
    size: "",
    color: "",
    weight: 0,
    productID: 0,
    search: "",
    urlFile: [],
    product_variation: [],
    modal: false,
    categoryForDropDownSelect: "",
    table_export_modal: false,
    ProductNameError: "",
    file_content: "",
    showModalCategory: false,
    categoryName: "",
    showModalCategoryAddEdit: false,
    showModalProductVariation: false,
    showModalProductVariationAddEdit: false,
    stockProductVariation: 0,
    sizeProductVariation: "",
    colorProductVariation: "",
    weightProductVariation: 0,
    IDProductVariation: 0,
  };
  handleUpdateProductVariation = (e) => {
    e.preventDefault();

    const {
      stockProductVariation,
      sizeProductVariation,
      colorProductVariation,
      weightProductVariation,
      IDProductVariation,
    } = this.state;
    const formProductVariationData = new FormData();

    formProductVariationData.append("stock", stockProductVariation);
    formProductVariationData.append("size", sizeProductVariation);
    formProductVariationData.append("color", colorProductVariation);
    formProductVariationData.append("weight", weightProductVariation);
    formProductVariationData.append("product_id", this.props.product.id);
    this.props.updateProductVariation(
      IDProductVariation,
      formProductVariationData
    );
    this.setState({
      showModalProductVariationAddEdit:
        !this.state.showModalProductVariationAddEdit,
      showModalProductVariation: !this.state.showModalProductVariation,
    });
  };
  handleModalCategory = () => {
    this.setState({
      showModalCategory: !this.state.showModalCategory,
    });
  };
  handleModalCategoryAddEdit = () => {
    this.setState({
      showModalCategoryAddEdit: !this.state.showModalCategoryAddEdit,
    });
  };
  handleModalProductVaration = () => {
    this.setState({
      showModalProductVariation: !this.state.showModalProductVariation,
      modal: !this.state.modal,
    });
  };
  handleModalProductVarationAddEdit = () => {
    this.setState({
      showModalProductVariationAddEdit:
        !this.state.showModalProductVariationAddEdit,
    });
  };
  onModalToggleCategoryEdit = (categoryID, categoryName) => {
    return (event) => {
      event.preventDefault();
      this.setState({
        categoryID: categoryID,
        categoryName: categoryName,
        showModalCategoryAddEdit: !this.state.showModalCategoryAddEdit,
      });
    };
  };
  onModalToggleProductVarationEdit = (
    IDProductVariation,
    stockProductVariation,
    sizeProductVariation,
    colorProductVariation,
    weightProductVariation
  ) => {
    return (event) => {
      event.preventDefault();
      this.setState({
        IDProductVariation: IDProductVariation,
        stockProductVariation: stockProductVariation,
        sizeProductVariation: sizeProductVariation,
        colorProductVariation: colorProductVariation,
        weightProductVariation: weightProductVariation,
        showModalProductVariationAddEdit:
          !this.state.showModalProductVariationAddEdit,
      });
      console.log(this.props.product.id);
    };
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
    let name = this.state.categoryName;
    const categoryForCategoryAdd = { name };
    this.props.addCategory(categoryForCategoryAdd);
    this.setState({
      categoryName: "",
    });
  };
  onSubmitUpdateCategory = (event) => {
    event.preventDefault();
    let name = this.state.categoryName;
    const categoryForCategoryAdd = { name };
    this.props.updateCategory(this.state.categoryID, categoryForCategoryAdd);
    this.setState({
      categoryID: 0,
      categoryName: "",
      showModalCategoryAddEdit: false,
    });
  };
  onModalToggleCategoryEdit = (categoryID, categoryName) => {
    return (event) => {
      event.preventDefault();
      this.setState({
        categoryID: categoryID,
        categoryName: categoryName,
        showModalCategoryAddEdit: !this.state.showModalCategoryAddEdit,
      });
    };
  };
  // when the isEditButtonClicked status is change this.props.product
  // *the product that will be edited* is being fetch because we trigger it in the bottom
  // then we will set it to the state and being passed on the formupdate component
  componentDidUpdate(prevProps, prevState) {
    if (this.props.product != prevProps.product) {
      const {
        id,
        name,
        description,
        price,
        supplier,
        category,
        stock,
        file_content,
        variation,
      } = this.props.product;
      this.setState({
        productName: name,
        description,
        price,
        supplierID: supplier,
        categoryID: category,
        stock,
        file_content,
        productID: id,
        product_variation: variation,
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
      const { productName, description, price, categoryID, supplierID, stock } =
        this.state;
      const formData = new FormData();

      formData.append("name", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", categoryID);
      formData.append("supplier", supplierID);

      this.props.updateProduct(productID, formData);
      this.setState({
        productName: "",
        description: "",
        price: 0,
        supplierID: 0,
        categoryID: 0,
        new_stock: 0,
        stock: 0,
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
        weight,
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
      formData.append("weight", weight);
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
                    <tr className="w-full h-16 border-gray-300 border-b py-8 text-left font-bold text-gray-500">
                      <th className="pl-14 pr-6 text-md">ID</th>
                      <th className=" pr-6 text-md">Product</th>
                      <th className="  pr-6 text-md">(Variation) Stock</th>
                      <th className="pr-6 text-md">Price</th>
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
                      <th className=" pr-6 text-md">Supplier</th>
                      <th className="  pr-6 text-md">Description</th>
                      <th className="pr-6 text-md">More</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((product) => (
                      <tr
                        key={product.id}
                        className="h-24 border-gray-300 border-b"
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
          handleModalProductVaration={this.handleModalProductVaration}
        />

        <ProductsTableExportModal
          OnToggleExportTable={this.OnToggleExportTable}
          products={filteredData}
          table_export_modal={this.state.table_export_modal}
        />

        <CategoryModal
          categories={this.props.categories}
          handleModalCategory={this.handleModalCategory}
          onModalToggleCategoryEdit={this.onModalToggleCategoryEdit}
          onChange={this.onChange}
          state={this.state}
          onSubmitCategory={this.onSubmitCategory}
          handleModalCategoryAddEdit={this.handleModalCategoryAddEdit}
          onSubmitUpdateCategory={this.onSubmitUpdateCategory}
        />

        <ProductVariation
          onChange={this.onChange}
          handleModalProductVaration={this.handleModalProductVaration}
          handleModalProductVarationAddEdit={
            this.handleModalProductVarationAddEdit
          }
          onModalToggleProductVarationEdit={
            this.onModalToggleProductVarationEdit
          }
          handleUpdateProductVariation={this.handleUpdateProductVariation}
          state={this.state}
        />
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
  updateCategory,
  addProduct,
  updateProductVariation,
})(ProductSetting);
