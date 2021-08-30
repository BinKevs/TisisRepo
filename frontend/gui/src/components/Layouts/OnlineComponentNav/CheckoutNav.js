import { Link } from "react-router-dom";
let onlineNavButtons = document.getElementsByClassName(
  "accountSettingNavButton"
);
let OnlineNavButtonsActive = document.getElementsByClassName(
  "accountSettingNavButtonActive"
);
const onToggleOnlineNavButton = (e) => {
  e.preventDefault();
  for (var i = 0; i < onlineNavButtons.length; i++) {
    if (OnlineNavButtonsActive.length > 0) {
      OnlineNavButtonsActive[0].classList.remove(
        "accountSettingNavButtonActive"
      );
    }

    e.target.classList.add("accountSettingNavButtonActive");
  }
};
const CheckoutNav = () => {
  return (
    <section class="mx-auto p-6 mt-20 md:mt-14 pb-24 md:pb-5">
      <div class="w-full pb-2 overflow-hidden rounded-lg shadow-lg bg-white">
        <nav class="flex flex-col justify-evenly sm:flex-row">
          <button
            onClick={onToggleOnlineNavButton}
            class="accountSettingNavButton accountSettingNavButtonActive"
          >
            <Link to="/customer-checkout/orders">Orders</Link>
          </button>
          <button
            onClick={onToggleOnlineNavButton}
            class="accountSettingNavButton"
          >
            <Link to="/customer-checkout/address">Address</Link>
          </button>

          <button
            onClick={onToggleOnlineNavButton}
            class="accountSettingNavButton"
          >
            <Link to="/customer-checkout/payment">Payment</Link>
          </button>
        </nav>
      </div>
    </section>
  );
};
export default CheckoutNav;
