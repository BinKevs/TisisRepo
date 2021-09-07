import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  getProductList,
  deleteProduct,
} from "../../store/actions/product/products";
import { addToCart } from "../../store/actions/cart/cartActions";
import { Link } from "react-router-dom";
import noImageAvailable from "../../no-image-available.png";
let products = [];
let filteredData = [];
class ProductListIndexOnlineCustomer extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProductList: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
  };
  state = {
    search: "",
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
  }

  render() {
    products = [];
    filteredData = [];
    this.props.products.map((product) =>
      products.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        file_content: product.file_content,
        category: product.category_info.name,
        supplier: product.supplier_info.name,
        stock: product.stock,
        description: product.description,
      })
    );

    const lowercasedFilter = this.state.search.toLowerCase();
    filteredData = products.filter((item) => {
      if (item.stock > 0) {
        if (lowercasedFilter === "") {
          return item;
        } else {
          return item.name.toString().toLowerCase().includes(lowercasedFilter);
        }
      }
    });
    console.log(filteredData);
    return (
      <>
        <div class="flex-1 bg-gray-100 mt-20 md:mt-14 pb-24 md:pb-5">
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
          <div class="w-full mt-4 p-8 order-last lg:order-first">
            <div className="flex flex-col xl:flex-row p-4 lg:p-8 justify-end items-start xl:items-stretch w-full">
              <div className="w-full xl:w-2/3 flex flex-col xl:flex-row items-start xl:items-center justify-end">
                <div className="flex items-center xl:border-l xl:border-r border-gray-300 dark:border-gray-200 py-3 xl:py-0 xl:px-6">
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
                </div>

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
            <div class="mt-8 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5">
              {filteredData.map((product) => (
                <Link
                  className="cursor-pointer"
                  to={"/customer/products/".concat(product.id + "/")}
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
                      <span>({product.stock})</span>
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
});
export default connect(mapToStateToProps, {
  getProductList,
  deleteProduct,
  addToCart,
})(ProductListIndexOnlineCustomer);
