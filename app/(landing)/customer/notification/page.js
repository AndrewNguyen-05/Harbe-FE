"use client";

import { useState, useEffect } from "react";
import { getAccessToken, getSession } from "@/services/authServices";
import { getUserByProfile } from "@/services/userServices";
import { BreadCrumb } from "@/components/custom/BreadCrumb";
import Image from "next/image";
import { DatePicker } from "@/components/custom/DatePicker";
import { PaginationSelection } from "@/components/HomePage";
import { getAllNotifications } from "@/services/notificationSevice";
import trimText from "@/utils/trimText";
import { CustomViewDialog } from "@/components/custom/Admin/Dialog/CustomViewDialog";
import iconEye from "@/public/ic_eye.svg";
import { CustomViewNoti } from "@/components/custom/Customer/CustomViewNoti";

const NotificationPage = () => {
  const [notificationList, setNotificationList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [totalItems, setTotalItems] = useState(0);

  const getNotificationData = async () => {
    const data = await getAllNotifications(currentPage, itemsPerPage);
    console.log(data);
    setNotificationList(data?.content);
    setTotalItems(data.totalElements);
  };

  useEffect(() => {
    getNotificationData();
  }, [currentPage]);

  return (
    <>
      <div className="bg-white h-fit pb-10 rounded-md">
        <div className="mx-auto max-w-270 mt-[20px]">
          {/* <Breadcrumb pageName="Settings" /> */}

          <div className="rounded-sm bg-white shadow-default">
            <div className="px-7 py-4">
              <h3 className="text-xl font-medium text-black">
                Thông báo của tôi
              </h3>
            </div>
            <div className="px-7">
              {/* Notification list */}
              {notificationList && notificationList.length > 0 ? (
                notificationList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 py-4 w-full hover:bg-blue-100 px-[16px] rounded-[8px]"
                  >
                    <div
                      className="flex items-center pr-[16px]"
                      style={{ width: "30%" }}
                    >
                      {trimText(item.title, 24)}
                    </div>
                    <div
                      style={{ width: "70%" }}
                      className="flex flex-row items-center justify-between"
                    >
                      <div
                        className="text-gray-400 text-sm"
                        style={{ width: "90%" }}
                      >
                        {item.message}
                      </div>
                      <div className="cursor-pointer">
                        <CustomViewNoti
                          itemTrigger={
                            <Image
                              alt="Show product info icon"
                              src={iconEye}
                              className="w-[20px] h-[20px]"
                            />
                          }
                          title={"THÔNG BÁO"}
                          itemContent={
                            <>
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="mt-[8px] flex flex-row items-start justify-start w-full">
                                  <div className="flex flex-row items-start justify-start w-full"></div>
                                </div>
                              </div>
                            </>
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-5">Không có thông báo nào</div>
              )}

              {/* Pagination */}
              {notificationList && notificationList.length > 0 ? (
                <div>
                  <PaginationSelection
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
