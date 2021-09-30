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
    this.myRef = React.createRef();
  }
  OnRightScroll = () => {
    document.getElementById("slider").scrollLeft += 120;
  };
  OnLeftScroll = () => {
    document.getElementById("slider").scrollLeft -= 120;
  };
  // scrollToMyRef = () =>
  //   window.scrollTo({ top: this.myRef.current.offsetTop, behavior: "smooth" });

  handleHideHomeSection = () => {
    this.setState({
      homeSectionHidden: !this.state.homeSectionHidden,
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
    console.log(filteredDataProduct);

    return (
      <>
        <div className="flex-1 w-full  lg:w-2/3 bg-gray-100 mt-20 md:mt-14 pb-24 md:pb-5">
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
              {/* flex
							items-center
							<i class="fad fa-bars fa-2x"></i> */}
              <h3 class="font-bold pl-2">Products</h3>
            </div>
          </div>

          <div class="w-full mt-2 p-8 order-last lg:order-first">
            <div className="flex flex-col xl:flex-row justify-end items-start xl:items-stretch w-full">
              <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-end">
                {/* <div className="flex items-center xl:border-l xl:border-r border-gray-300 dark:border-gray-200 py-3 xl:py-0 xl:px-6">
                  <p
                    className="text-base text-gray-600 dark:text-gray-400"
                    id="page-view"
                  >
                    Viewing 1 - 20 of 60
                  </p>
                  <div
                    className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded mr-4"
                    onclick="pageView(false)"
                  >
                    <i class="fad fa-angle-left fa-2x"></i>
                  </div>
                  <div
                    className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer"
                    onclick="pageView(true)"
                  >
                    <i class="fad fa-angle-right fa-2x"></i>
                  </div>
                </div> */}

                <div className="xl:ml-6 flex items-center">
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

            <main class={this.state.homeSectionHidden ? "hidden" : "my-8"}>
              <div class="container mx-auto px-6">
                <div
                  class="h-64 rounded-md overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/24-Great-Retro-2020-Motorcycles-Moto-Guzzi-V9-Roamer.jpg')",
                  }}
                >
                  <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div class="px-10 max-w-xl">
                      <h2 class="text-2xl text-white font-semibold">
                        Use "90off" on your first purchase
                      </h2>
                      <p class="mt-2 text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Tempore facere provident molestias ipsam sint
                        voluptatum pariatur.
                      </p>
                      <button
                        onClick={this.handleHideHomeSection}
                        class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                      >
                        <span>Shop Now</span>
                        <svg
                          class="h-5 w-5 mx-2"
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
                <div class="md:flex mt-8 md:-mx-4">
                  <div
                    class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
                    style={{
                      backgroundImage:
                        "url('https://images.bikeshala.com/blog/C9A8E58287/how-to-clean-motorcycle-disc-brakes-caliper-with-degreasing-cleaner-1080x1080.png')",
                    }}
                  >
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                      <div class="px-10 max-w-xl">
                        <h2 class="text-2xl text-white font-semibold">
                          Breaks
                        </h2>
                        <p class="mt-2 text-gray-400">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tempore facere provident molestias ipsam sint
                          voluptatum pariatur.
                        </p>
                        <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                          <span>Shop Now</span>
                          <svg
                            class="h-5 w-5 mx-2"
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
                    class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
                    style={{
                      backgroundImage:
                        "url('https://motorcyclebrave.com/wp-content/uploads/2020/08/Cost-of-changing-motorcycle-tires.jpg')",
                    }}
                  >
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                      <div class="px-10 max-w-xl">
                        <h2 class="text-2xl text-white font-semibold">Tires</h2>
                        <p class="mt-2 text-gray-400">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tempore facere provident molestias ipsam sint
                          voluptatum pariatur.
                        </p>
                        <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                          <span>Shop Now</span>
                          <svg
                            class="h-5 w-5 mx-2"
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
            <div
              ref={this.myRef}
              className="relative flex items-center mt-3 border-t-4 border-b-4"
            >
              <span
                onClick={this.OnLeftScroll}
                className="h-12 w-16 flex items-center justify-center text-gray-600"
              >
                <i class="fal fa-chevron-left fa-2x"></i>
              </span>
              <div
                id="slider"
                className="w-full flex overflow-x-hidden space-x-4"
              >
                {this.props.categories.map((category) => (
                  <button class="text-white px-4 bg-teal_custom rounded-full hover:bg-teal-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none whitespace-nowrap h-10">
                    {category.name}
                  </button>
                ))}
              </div>

              <span
                onClick={this.OnRightScroll}
                className="h-12 w-16 flex items-center justify-center text-gray-600"
              >
                <i class="fal fa-chevron-right fa-2x"></i>
              </span>
            </div>
            <div class="mt-8 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5">
              {filteredDataProduct.map((product) => (
                <Link
                  className="cursor-pointer"
                  to={"/product/".concat(product.id + "/")}
                >
                  <div
                    class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative hover:shadow-lg img-hover h-auto"
                    key={product.id}
                  >
                    {product.file_content[0] ? (
                      <img
                        src={product.file_content[0].image}
                        alt="stew"
                        class="h-32 sm:h-48 w-full object-cover imgg"
                      />
                    ) : (
                      <img
                        src={noImageAvailable}
                        alt="stew"
                        class="h-32 sm:h-48 w-full object-cover imgg"
                      />
                    )}

                    <div class="m-4 bodi">
                      <span class="font-bold">
                        {this.trimmedString(product.name)}
                      </span>
                      <span class="block text-gray-500 text-sm">
                        By {this.trimmedString(product.supplier)}
                      </span>
                    </div>

                    <div class="absolute top-0 ml-2 p-2 mt-2 bg-teal_custom text-white text-sm uppercase font-bold rounded-full ">
                      <i class="fad fa-tags fa-lg"></i>
                      <span>₱{this.numberWithCommas(product.price)}</span>
                    </div>
                    <div class="absolute bottom-0 right-2 ml-2 p-2 mb-2 text-gray-600  text-sm uppercase font-bold ">
                      {/* <span>({product.stock})</span> */}
                      {product.variation ? product.variation : ""}
                    </div>
                    <div class="product-tooltip absolute bottom-0 py-6 px-4 p-2 text-gray-800 text-sm uppercase font-bold">
                      <span>{product.name}</span>
                    </div>
                    <div class="middle">
                      <i class="fad fa-eye fa-3x"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapToStateToProps = (state) => ({
  products: state.products.products,
  // token: state.AuthReducer.token,
  isLoading: state.products.isLoading,
  categories: state.products.categories,
});
export default connect(mapToStateToProps, {
  getCategoryList,
  getProductList,
  deleteProduct,
  addToCart,
})(ProductListIndexOnlineCustomer);
