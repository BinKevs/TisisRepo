import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  getProductList,
  deleteProduct,
  getCategoryList,
} from "../../store/actions/product/products";
import { addToCart } from "../../store/actions/cart/cartActions";
import { Link } from "react-router-dom";
import noImageAvailable from "../../no-image-available.png";

class ProductListIndexOnlineCustomer extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProductList: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
  };
  state = {
    search: "",
    homeSectionHidden: false,
    navigationHidden: false,
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  trimmedString(stringX) {
    if (stringX.length === 24) {
      return stringX;
    } else {
      return stringX.substring(0, 24) + "...";
    }
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit(product_id, product_name, price, supplier) {
    return (event) => {
      event.preventDefault();
      const product = { product_id, product_name, price, supplier };
      this.props.addToCart(product);
    };
  }
  componentDidMount() {
    this.props.getProductList();
    this.props.getCategoryList();
  }
  OnRightScroll = () => {
    document.getElementById("slider").scrollLeft += 120;
  };
  OnLeftScroll = () => {
    document.getElementById("slider").scrollLeft -= 120;
  };

  handleHideHomeSection = () => {
    this.setState({
      homeSectionHidden: !this.state.homeSectionHidden,
    });
  };
  handleGoToHome = () => {
    this.setState({
      homeSectionHidden: false,
    });
  };
  handleGoToShop = () => {
    this.setState({
      homeSectionHidden: true,
    });
  };
  handleHideNavigation = () => {
    this.setState({
      navigationHidden: !this.state.navigationHidden,
    });
  };
  render() {
    let products = [];
    let filteredDataProduct = [];
    let temp = 0;
    this.props.products.map(
      (product) => (
        product.variation.map((p) => (temp += p.stock)),
        products.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          file_content: product.file_content,
          variation: temp,
          category: product.category_info.name,
          supplier: product.supplier_info.name,
          stock: product.stock,
          description: product.description,
          status: product.status,
        }),
        (temp = 0)
      )
    );

    const SearchFilter = this.state.search.toLowerCase();
    filteredDataProduct = products.filter((item) => {
      if (item.status)
        if (SearchFilter === "") {
          return item;
        } else {
          return item.name.toString().toLowerCase().includes(SearchFilter);
        }
    });

    return (
      <>
        <div className="flex-1 w-full  lg:w-2/3 bg-gray-100 mt-20 md:mt-14 pb-24 md:pb-5">
          <div className="w-full mt-2 p-8 order-last lg:order-first">
            <header>
              <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-end w-full">
                    <div className="flex sm:hidden">
                      <button
                        type="button"
                        onClick={this.handleHideNavigation}
                        className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                        aria-label="toggle menu"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-6 w-6 fill-current"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <nav
                  className={
                    this.state.navigationHidden
                      ? "sm:flex sm:justify-center sm:items-center mt-4 hidden"
                      : "sm:flex sm:justify-center sm:items-center mt-4"
                  }
                >
                  <div className="flex flex-col sm:flex-row">
                    <div
                      onClick={this.handleGoToHome}
                      className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    >
                      Home
                    </div>
                    <div
                      onClick={this.handleGoToShop}
                      className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    >
                      Shop
                    </div>
                    <div className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                      Categories
                    </div>
                    <div className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                      Contact
                    </div>
                    <div className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                      About
                    </div>
                  </div>
                </nav>
                <div
                  className={
                    !this.state.homeSectionHidden
                      ? "hidden relative mt-6 max-w-lg mx-auto"
                      : "relative mt-6 max-w-lg mx-auto"
                  }
                >
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>

                  <input
                    className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                    type="text"
                    name="search"
                    placeholder="Search"
                    onChange={this.onChange}
                    value={this.state.search}
                  />
                </div>
              </div>
            </header>

            <div
              className={
                !this.state.homeSectionHidden
                  ? "hidden"
                  : "relative flex items-center mt-3 border-t-4 border-b-4"
              }
            >
              <span
                onClick={this.OnLeftScroll}
                className="h-12 w-16 flex items-center justify-center text-gray-600"
              >
                <i className="fal fa-chevron-left fa-2x"></i>
              </span>
              <div
                id="slider"
                className="w-full flex overflow-x-hidden space-x-4"
              >
                {this.props.categories.map((category) => (
                  <button className="text-white px-4 bg-gray-800 rounded-full hover:bg-teal-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none whitespace-nowrap h-10">
                    {category.name}
                  </button>
                ))}
              </div>

              <span
                onClick={this.OnRightScroll}
                className="h-12 w-16 flex items-center justify-center text-gray-600"
              >
                <i className="fal fa-chevron-right fa-2x"></i>
              </span>
            </div>
            <main className={this.state.homeSectionHidden ? "hidden" : "my-8"}>
              <div className="container mx-auto px-6">
                <div
                  className="h-64 rounded-md overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/24-Great-Retro-2020-Motorcycles-Moto-Guzzi-V9-Roamer.jpg')",
                  }}
                >
                  <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div className="px-10 max-w-xl">
                      <h2 className="text-2xl text-white font-semibold">
                        Use "90off" on your first purchase
                      </h2>
                      <p className="mt-2 text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Tempore facere provident molestias ipsam sint
                        voluptatum pariatur.
                      </p>
                      <button
                        onClick={this.handleHideHomeSection}
                        className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                      >
                        <span>Shop Now</span>
                        <svg
                          className="h-5 w-5 mx-2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:flex mt-8 md:-mx-4">
                  <div
                    className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
                    style={{
                      backgroundImage:
                        "url('https://images.bikeshala.com/blog/C9A8E58287/how-to-clean-motorcycle-disc-brakes-caliper-with-degreasing-cleaner-1080x1080.png')",
                    }}
                  >
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                      <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">
                          Breaks
                        </h2>
                        <p className="mt-2 text-gray-400">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tempore facere provident molestias ipsam sint
                          voluptatum pariatur.
                        </p>
                        <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                          <span>Shop Now</span>
                          <svg
                            className="h-5 w-5 mx-2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
                    style={{
                      backgroundImage:
                        "url('https://motorcyclebrave.com/wp-content/uploads/2020/08/Cost-of-changing-motorcycle-tires.jpg')",
                    }}
                  >
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                      <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">
                          Tires
                        </h2>
                        <p className="mt-2 text-gray-400">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tempore facere provident molestias ipsam sint
                          voluptatum pariatur.
                        </p>
                        <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                          <span>Shop Now</span>
                          <svg
                            className="h-5 w-5 mx-2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <div className={!this.state.homeSectionHidden ? "hidden" : ""}>
              <div className="mt-8 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {filteredDataProduct.map((product) => (
                  <Link
                    className="cursor-pointer"
                    to={"/product/".concat(product.id + "/")}
                  >
                    <div
                      className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative hover:shadow-lg img-hover h-auto"
                      key={product.id}
                    >
                      {product.file_content[0] ? (
                        <img
                          src={product.file_content[0].image}
                          alt="stew"
                          className="h-32 sm:h-48 w-full object-cover imgg"
                        />
                      ) : (
                        <img
                          src={noImageAvailable}
                          alt="stew"
                          className="h-32 sm:h-48 w-full object-cover imgg"
                        />
                      )}

                      <div className="m-4 bodi">
                        <span className="font-bold">
                          {this.trimmedString(product.name)}
                        </span>
                        <span className="block text-gray-500 text-sm">
                          By {this.trimmedString(product.supplier)}
                        </span>
                      </div>

                      <div className="absolute top-0 ml-2 p-2 mt-2 bg-teal_custom text-white text-sm uppercase font-bold rounded-full ">
                        <i className="fad fa-tags fa-lg"></i>
                        <span>₱{this.numberWithCommas(product.price)}</span>
                      </div>
                      <div className="absolute bottom-0 right-2 ml-2 p-2 mb-2 text-gray-600  text-sm uppercase font-bold ">
                        {/* <span>({product.stock})</span> */}
                        {product.variation ? product.variation : ""}
                      </div>
                      <div className="product-tooltip absolute bottom-0 py-6 px-4 p-2 text-gray-800 text-sm uppercase font-bold">
                        <span>{product.name}</span>
                      </div>
                      <div className="middle">
                        <i className="fad fa-eye fa-3x"></i>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapToStateToProps = (state) => ({
  products: state.products.products,
  isLoading: state.products.isLoading,
  categories: state.products.categories,
});
export default connect(mapToStateToProps, {
  getCategoryList,
  getProductList,
  deleteProduct,
  addToCart,
})(ProductListIndexOnlineCustomer);
