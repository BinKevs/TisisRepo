import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProduct } from "../../store/actions/product/products";
import { addToCart } from "../../store/actions/cart/cartActions";
import ReactPlayer from "react-player";
import video1 from "../../Group2.mp4";
class ProductDetails extends React.Component {
  runCallback = (cb) => {
    return cb();
  };
  static propTypes = {
    product: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const productID = this.props.match.params.productID;
    this.props.getProduct(productID);
  }

  onSubmit(product_id, product_name, price, supplier) {
    return (event) => {
      event.preventDefault();
      const product = { product_id, product_name, price, supplier };
      this.props.addToCart(product);
    };
  }
  OnRightScroll = () => {
    document.getElementById("slider").scrollLeft += 120;
  };
  OnLeftScroll = () => {
    document.getElementById("slider").scrollLeft -= 120;
  };

  OnClickHoverImage(ImageSrc) {
    return (event) => {
      event.preventDefault();
      document.getElementById("featured").src = document.getElementById(
        "featured"
      ).src = ImageSrc;
    };
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    const { product } = this.props;

    return (
      <>
        <section class="flex-1 w-full text-gray-700 body-font bg-white">
          <div class="px-5 py-24 mx-auto">
            <div class="w-full mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full">
                {product.file_content ? (
                  <img
                    alt="ecommerce"
                    id="featured"
                    class="w-full object-cover object-center rounded border-2 border-gray-400"
                    src={product.file_content[0].image}
                  />
                ) : (
                  ""
                )}
                <div className="relative w-full flex items-center">
                  <span
                    onClick={this.OnLeftScroll}
                    className="h-12 w-16 flex items-center justify-center text-gray-600"
                  >
                    <i class="fad fa-angle-left fa-3x"></i>
                  </span>
                  <div
                    id="slider"
                    className="w-full flex overflow-x-hidden space-x-4"
                  >
                    {/* <img
                      // onClick={this.OnClickHoverImage(
                      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOP3QcMLRg8bxBQRR6DGaHmSPzwolfRO7Qw&usqp=CAU"
                      // )}
                      className="rounded thumbnail max-h-28"
                      src={this.props.images[0]}
                    /> */}
                    {product.file_content
                      ? product.file_content.map((file_content) => (
                          <img
                            onClick={this.OnClickHoverImage(file_content.image)}
                            id="thumbnail"
                            className="rounded thumbnail max-h-28"
                            src={file_content.image}
                          />
                        ))
                      : ""}
                  </div>

                  <span
                    onClick={this.OnRightScroll}
                    className="h-12 w-16 flex items-center justify-center text-gray-600"
                  >
                    <i class="fad fa-angle-right fa-3x"></i>
                  </span>
                </div>
                {/* <ReactPlayer playing={true} controls={true} url={video1} /> */}
              </div>
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {product.supplier_info ? product.supplier_info.name : ""}
                </h2>
                <h1 class="text-gray-900 text-2xl title-font font-medium mb-1">
                  {product.name}
                </h1>

                <span class="text-gray-900 text-3xl title-font font-bold mb-1">
                  ₱{product.price}
                </span>
                <div class="flex mt-6 pb-5 border-t-2 border-gray-200 mb-5"></div>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span class="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  {/* <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a class="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span> */}
                </div>
                <p class="leading-relaxed">{product.description}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div class="flex">
                    <span class="mr-3">Color</span>
                    <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div class="flex ml-6 items-center">
                    <span class="mr-3">Size</span>
                    <div class="relative">
                      <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <button
                    class="flex ml-auto text-white bg-teal_custom border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded cursor-pointer"
                    onClick={this.onSubmit(
                      product.id,
                      product.name,
                      product.price,
                      this.props.supplier_name
                    )}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-full space-y-5">
            {this.runCallback(() => {
              const col = [];
              for (var i = 0; i < 6; i++) {
                col.push(
                  <div class="flex justify-center items-center mx-auto w-4/6 bg-white rounded-xl shadow-2xl">
                    {/* <div class="md:flex-shrink-0">
                        <img
                          class="h-48 w-full object-cover md:w-48"
                          src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=448&q=80"
                          alt="A cat"
                        />
                      </div> */}
                    <img
                      class="h-16 w-16 rounded-full mx-4"
                      src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=448&q=80"
                      alt="A cat"
                    />
                    <div class="m-4">
                      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        Cat News
                      </div>
                      <a
                        href="#"
                        class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                      >
                        Cats are people's best friends
                      </a>
                      <p class="mt-2 text-gray-500">
                        According to a study, it has been proven that there is a
                        tight bond between cats and humans. According to a
                        study, it has been proven that there is a tight bond
                        between cats and humans. According to a study, it has
                        been proven that there is a tight bond between cats and
                        humans.
                      </p>
                    </div>
                  </div>
                );
              }
              return col;
            })}
          </div>
        </section>
      </>
    );
  }
}
const mapToStateToProps = (state) => ({
  product: state.products.product,
  supplier_name: state.products.supplier_name,
  images: state.products.images,
});
export default connect(mapToStateToProps, { getProduct, addToCart })(
  ProductDetails
);
