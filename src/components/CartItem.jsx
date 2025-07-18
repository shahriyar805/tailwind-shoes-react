import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

function CartItem({ item: { product, quantity, size } }) {
  return (
    <div className="dark:hover:bg-night-50 cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent">
      <div className="flex space-x-2">
        {/* Image */}
        <img src={product.src} className="h-24" />
        <div className="space-y-2">
          {/* Title & description */}
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* Price */}
        <div className="flex-center font-bold dark:text-white">{product.price}$</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select defaultValue={size} title="" options={SIZES} className={"w-16 p-1 pl-2"} />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select defaultValue={quantity} title="" options={QTY} className={"w-16 p-1 pl-2"} />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
