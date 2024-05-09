"use client";

import SearchInput from "./custom/SearchInput";
import Link from "next/link";
import { nunito } from "./ui/fonts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "@/components/icons/logout";
import { Login } from "@/components/icons/login";
import { Profile } from "@/components/icons/profile";
import { getAccessToken, getSession, logout } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { getUserById } from "@/services/userServices";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState();

  const getUserInfo = async () => {
    const session = await getSession();
    const accessToken = await getAccessToken();

    if (session) {
      setUserInfo(await getUserById(session.id, accessToken));
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="flex justify-center px-32 py-2">
      <div className="pb-1 pt-2 bg-white grid grid-cols-12 items-start">
        {/* Logo */}
        <Link href="/" className={`${nunito.className} w-fit`}>
          <div className="flex-col items-center text-primary justify-center">
            <div className="flex">
              <div className="text-5xl font-extrabold">Har</div>
              <div className="text-5xl font-bold text-yellow-500">be</div>
            </div>
            <div className="font-bold text-center">Tốt & Nhanh</div>
          </div>
        </Link>

        {/* Body */}
        <div className="col-span-11 ml-10">
          <div className="flex justify-center items-center gap-10 pl-10">
            {/* Search */}
            <div className="flex-grow pr-10">
              <SearchInput placeholder={"Bạn tìm gì hôm nay"} />
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-3 items-center gap-8 text-sm justify-end">
              {/* Trang chủ */}
              <Link
                href="/"
                className="flex text-primary items-center col-span-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                <div>Trang chủ</div>
              </Link>

              {/* Tài khoản */}
              <DropdownMenu>
                <DropdownMenuTrigger className="space-x-2">
                  Tài khoản
                </DropdownMenuTrigger>
                {userInfo && (
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      className="space-x-2 cursor-pointer"
                      onClick={() => router.push("/profile")}
                    >
                      <Profile className="size-5" />
                      <span>Hồ sơ</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="space-x-2 cursor-pointer"
                      onSelect={() => {
                        logout();
                      }}
                    >
                      <LogOut className="size-5" />
                      <span>Đăng xuất</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                )}

                {!userInfo && (
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      className="space-x-2"
                      onSelect={() => logout()}
                    >
                      <Login className="size-5" />
                      <span>Đăng nhập</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                )}
              </DropdownMenu>

              {/* Cart */}
              <Link
                href="/cart"
                className="flex items-center border-l-2 pl-6 col-span-1 text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <div className="mb-4 w-5 h-4 rounded-full text-white flex items-center justify-center text-xs bg-red-500">
                  0
                </div>
              </Link>
            </div>
          </div>

          <div className="pl-10 my-1 flex justify-between items-center text-sm text-gray-500 ">
            {/* Danh mục */}
            <div className="flex gap-3">
              <div>điện gia dụng</div>
              <div>xe cộ</div>
              <div>mẹ & bé</div>
              <div>khỏe đẹp</div>
              <div>nhà cửa</div>
              <div>sách</div>
              <div>thể thao</div>
            </div>

            {/* Giao đến */}
            {/* <div className="flex">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                Giao đến:
              </div>
              <DialogAddress />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
