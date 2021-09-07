import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class CheckoutOrders extends React.Component {
  state = {
    totalAmount: 0,
    Subtotal: 0,
    tax: 0,
    quantity: 0,
  };
  componentDidMount() {
    let VariableTotalAmount = 0;
    let Variablequantity = 0;
    this.props.cartItems.map(
      (item) => (
        (VariableTotalAmount += item.price * item.quantity),
        (Variablequantity += item.quantity)
      )
    );
    this.setState({
      totalAmount: this.HandleDecimalPlaces(VariableTotalAmount),
      Subtotal: this.HandleDecimalPlaces(
        (VariableTotalAmount -= VariableTotalAmount * 0.12)
      ),
      tax: this.HandleDecimalPlaces(VariableTotalAmount * 0.12),
      quantity: Variablequantity,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.cartItems !== prevProps.cartItems) {
      let VariableTotalAmount = 0;
      let Variablequantity = 0;
      this.props.cartItems.map(
        (item) => (
          (VariableTotalAmount += item.price * item.quantity),
          (Variablequantity += parseInt(item.quantity))
        )
      );
      this.setState({
        totalAmount: this.HandleDecimalPlaces(VariableTotalAmount),
        Subtotal: this.HandleDecimalPlaces(
          (VariableTotalAmount -= VariableTotalAmount * 0.12)
        ),
        tax: this.HandleDecimalPlaces(VariableTotalAmount * 0.12),
        quantity: Variablequantity,
      });
    }
  }
  HandleDecimalPlaces = (Variable) => {
    return Math.round((Variable + Number.EPSILON) * 100) / 100;
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    const { cartItems } = this.props;
    return (
      <>
        <div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-teal_custom to-gray-800 p-4 shadow  text-2xl text-white">
              <h3 class="font-bold pl-2">Check Out / Your Orders</h3>
            </div>
          </div>
          <div className="p-5 w-full">
            <section class="mx-auto p-6 rounded-lg shadow-lg bg-white">
              <div class="w-full mb-8 overflow-hidden ">
                <div class="px-4 py-6 text-gray-800 text-3xl font-medium border-b border-gray-300">
                  My Order/s
                </div>
                <table class="w-full ">
                  <thead>
                    <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-300">
                      <th class="px-4 py-3">Item Name</th>
                      <th class="px-4 py-3">Variation</th>
                      <th class="px-4 py-3">Quantity</th>
                      <th class="px-4 py-3">Price</th>
                      <th class="px-4 py-3">Sub-Total</th>
                    </tr>
                  </thead>
                  <tbody class="">
                    {cartItems.map((item) => (
                      <tr class="text-gray-700 border-b border-gray-300">
                        <td class="px-4 py-3 text-sm font-semibold">
                          {item.product_name}
                        </td>
                        <td class="px-4 py-3">
                          <div class="flex items-center text-sm">
                            {/* <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                class="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                class="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div> */}

                            <div>
                              <p class="text-sm  text-black">
                                Size :{" "}
                                <span className="font-bold">{item.size}</span>
                              </p>
                              <p class="text-sm text-black">
                                Color :{" "}
                                <span className="font-bold">{item.color}</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-3 text-sm font-semibold">
                          {item.quantity}
                        </td>

                        <td class="px-4 py-3 text-sm">
                          ₱ {this.numberWithCommas(item.price)}
                        </td>
                        <td class="px-4 py-3 text-sm">
                          ₱{" "}
                          {this.numberWithCommas(
                            this.HandleDecimalPlaces(item.price * item.quantity)
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div class="mt-10">
                <Link to="/customer-checkout/address">
                  <input
                    type="submit"
                    value="Confirm Order/s"
                    class="py-3 bg-gray-800 text-white w-1/5 rounded hover:bg-gray-600"
                  />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
const mapToStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
});
export default withRouter(connect(mapToStateToProps)(CheckoutOrders));
