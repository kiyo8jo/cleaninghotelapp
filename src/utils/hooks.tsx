import { roomDataType } from "@/types/types";

// ----------------------------------------------------------------------
// Main,HouseMain
// ----------------------------------------------------------------------

// apiをたたいて1Fのデータを取得する関数
export const getRooms_1f = async (API_URL: string) => {
  const res_1f = await fetch(`${API_URL}/api/rooms/1f`);
  const rooms_1f: roomDataType[] = await res_1f.json();
  return rooms_1f;
};
// apiをたたいて2Fのデータを取得する関数
export const getRooms_2f = async (API_URL: string) => {
  const res_2f = await fetch(`${API_URL}/api/rooms/2f`);
  const rooms_2f: roomDataType[] = await res_2f.json();
  return rooms_2f;
};

// ----------------------------------------------------------------------
// Aside
// ----------------------------------------------------------------------

// selectタグの中のoptionを作成する関数（optionsがstring[],number[]の場合）
export const createOptions = (targetOptions: string[] | number[]) => {
  return targetOptions.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));
};
// selectタグの中のoptionを作成する関数（optionsが{value, text}[]の場合）
export const createObjOptions = (
  targetOptions: {
    value: number;
    text: string;
  }[]
) => {
  return targetOptions.map((option: { value: number; text: string }) => (
    <option value={option.value} key={option.value}>
      {option.text}
    </option>
  ));
};
// ----------------------------------------------------------------------
// HouseCard
// ----------------------------------------------------------------------

// Modal操作中のスクロールロック、解除
export const scrollBlock = () => {
  document.body.style.overflow = "hidden";
};

export const scrollBlockCancel = () => {
  document.body.style.overflow = "visible";
};

// ----------------------------------------------------------------------
// HouseCardContents
// ----------------------------------------------------------------------

// 通知状況や清掃状況に合わせてステータスにあったマーク(React Iconsを使用)を返す関数
import styles from "../components/house_components/HouseCardParts/HouseCardContents/HouseCardContents.module.css";

// 鍵マーク

export const getKey = (room: roomDataType) => {
  if (
    (room.cleaningType === "OUT" && room.out) ||
    (room.cleaningType === "OUT-IN" && room.out) ||
    (room.cleaningType === "STAY" && room.stay) ||
    room.cleaningType === "IN" ||
    room.cleaningType === "NONE"
  ) {
    return <FaKey />;
    // className={styles.key}
  }
};
// チェックマーク
import { FaCircleCheck } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";

export const getCheck = (room: roomDataType) => {
  if (
    (room.cleaningType === "OUT" && room.outCleaning) ||
    (room.cleaningType === "OUT-IN" && room.inCleaning) ||
    (room.cleaningType === "STAY" && room.stayCleaning) ||
    (room.cleaningType === "IN" && room.inCleaning) ||
    (room.cleaningType === "NONE" && room.noneCleaning)
  ) {
    return <FaCircleCheck />;
    // className={styles.cleaning}
  }
};

// ----------------------------------------------------------------------
// Aside
// ----------------------------------------------------------------------
export const sanitize = (value: string) => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};
