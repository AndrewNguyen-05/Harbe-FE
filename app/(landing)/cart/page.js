import Image from "next/image";
import product1 from "@/public/pictures/product/product1.jpg";

const page = () => {
  const numbers = [0, 1, 2, 3, 4];

  return (
    <div className="bg-detail w-full px-40 py-10 h-full ">
      <table className="table-auto w-full mb-4">
        <thead className="bg-white mb-4 border-2">
          <tr>
            <th
              scope="col"
              className="flex items-center gap-2 py-5 px-12 text-sm text-left rtl:text-right font-semibold"
            >
              <input type="checkBox" />
              <span>Sản phẩm</span>
            </th>
            <th scope="col" className="py-2 px-5 text-sm font-semibold">
              Phân loại hàng
            </th>
            <th scope="col" className="py-2 px-5 text-sm font-semibold ">
              Đơn giá
            </th>
            <th scope="col" className="py-2 px-5 text-sm font-semibold">
              Số lượng
            </th>
            <th scope="col" className="py-2 px-5 text-sm font-semibold">
              Số tiền
            </th>
            <th scope="col" className="py-2 px-5 text-sm font-semibold"></th>
          </tr>
        </thead>
        <tbody className="bg-detail border-2">
          <tr className="bg-detail h-4"></tr>
          {numbers.map((cartItem) => (
            <>
              <tr key={cartItem} className="bg-white mb-4 font-medium">
                <td className="flex items-center gap-2 px-12 py-4 text-sm whitespace-nowrap">
                  <input type="checkBox" />
                  <Image src={product1} alt="Product" className="w-20" />
                  <p className="text-xs max-w-20">
                    Chuột không dây Logitech <br /> M330 Silent Plus - Giảm
                    ồn,...
                  </p>
                </td>
                <td className="px-2 py-4 text-sm whitespace-nowrap text-center">
                  Đen
                </td>
                <td className="px-2 py-4 text-sm whitespace-nowrap flex items-center justify-center gap-2">
                  <div className="text-gray-300 line-through">390.000đ</div>
                  339.000đ
                </td>
                <td className="px-2 py-4 text-sm whitespace-nowrap text-center">
                  <div className="flex items-center justify-center">
                    <button
                      style={{ border: "1px solid rgba(0, 0, 0, .09)" }}
                      className="inline-flex mt-2 p-2 rounded-sm items-center justify-center w-8"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={1}
                      style={{ border: "1px solid rgba(0, 0, 0, .09)" }}
                      className="inline-flex mt-2 p-2 w-12 text-center"
                    />
                    <button
                      style={{ border: "1px solid rgba(0, 0, 0, .09)" }}
                      className="inline-flex mt-2 p-2 rounded-sm items-center justify-center w-8"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4 text-sm whitespace-nowrap text-center text-primary">
                  339.000đ
                </td>
                <td className="px-2 py-4 text-sm whitespace-nowrap text-center text-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
              <tr className="bg-detail h-4"></tr>
            </>
          ))}
        </tbody>
        <tfoot className="bg-white divide-y-2 divide-dashed">
          <tr>
            <td className="px-12 py-4 text-sm whitespace-nowrap text-center"></td>
            <td className="px-2 py-4 text-sm whitespace-nowrap text-center"></td>
            <td className="px-2 py-4 text-sm whitespace-nowrap text-center"></td>
            <td className="px-2 py-4 text-sm whitespace-nowrap text-center flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>
              Mã giảm giá
            </td>
            <td
              cclassName="px-2 py-4 text-sm whitespace-nowrap text-center"
              colSpan={2}
            >
              <p className="text-primary text-end pr-16">Chọn hoặc nhập mã</p>
            </td>
          </tr>
          <tr className="font-medium">
            <td
              className="px-2 py-8 text-sm whitespace-nowrap flex items-center gap-2 pl-12"
              colSpan={1}
            >
              <input type="checkBox" />
              <span>Chọn tất cả (5)</span>
              <span>Xóa</span>
            </td>
            <td
              className="px-2 py-4 text-sm whitespace-nowrap text-end pr-16"
              colSpan={5}
            >
              <span>Tổng thanh toán (1 sản phẩm): </span>
              <span className="text-primary text-lg">đ339.000</span>
              <button className="px-16 bg-primary text-white py-3 rounded-md ms-8">
                Mua hàng
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default page;