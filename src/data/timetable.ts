import { TimetableType } from "@/types/TimetableTypes";

const ITEM_COLOR_PURPLE = "#d2d1f5";
const ITEM_COLOR_GRAY = "#e0e0e0";
const ITEM_COLOR_CYAN = "#c3ede5";
const ITEM_COLOR_GREEN = "#cfe8cc";
const ITEM_COLOR_ORANGE = "#f8d2d2";
const ITEM_COLOR_PINK = "#f5d8f2";
const ITEM_COLOR_YELLOW = "#f7efcf";
const ITEM_COLOR_BLUE = "#cce4fc";

export const timetable: TimetableType = {
  name: "Daily Routine",
  items: [
    {
      name: "Sleep",
      memo: "",
      start: "00:00",
      end: "07:00",
      color: ITEM_COLOR_PURPLE,
    },
    {
      name: "Morning Routine",
      memo: "Clean, Yoga or Meditation, Shower, Breakfast",
      start: "07:00",
      end: "08:00",
      color: ITEM_COLOR_ORANGE,
    },
    {
      name: "Coffee & Sprint Work",
      memo: "Small yet important tasks",
      start: "08:00",
      end: "09:30",
      color: ITEM_COLOR_CYAN,
    },
    {
      name: "Go to work",
      memo: "",
      start: "09:30",
      end: "10:00",
      color: ITEM_COLOR_GRAY,
    },
    {
      name: "Deep Work",
      memo: "Heavy & important tasks",
      start: "10:00",
      end: "13:00",
      color: ITEM_COLOR_CYAN,
    },
    {
      name: "Lunch",
      memo: "",
      start: "13:00",
      end: "14:00",
      color: ITEM_COLOR_ORANGE,
    },
    {
      name: "Light Work",
      memo: "Not important tasks",
      start: "14:00",
      end: "16:00",
      color: ITEM_COLOR_CYAN,
    },
    {
      name: "Go home",
      memo: "",
      start: "16:00",
      end: "16:30",
      color: ITEM_COLOR_GRAY,
    },
    {
      name: "Exercise & Shower",
      memo: "",
      start: "16:30",
      end: "17:30",
      color: ITEM_COLOR_GREEN,
    },
    {
      name: "Dinner",
      memo: "Cook while listening to radio",
      start: "17:30",
      end: "19:00",
      color: ITEM_COLOR_ORANGE,
    },
    {
      name: "Free Time",
      memo: "",
      start: "19:00",
      end: "20:30",
      color: ITEM_COLOR_YELLOW,
    },
    {
      name: "Herb Tea",
      memo: "Put away electronic devices",
      start: "20:30",
      end: "21:00",
      color: ITEM_COLOR_PINK,
    },
    {
      name: "Diary & Reading",
      memo: "Check long-term goals & plan for tomorrow, read books",
      start: "21:00",
      end: "23:00",
      color: ITEM_COLOR_BLUE,
    },
    {
      name: "Sleep",
      memo: "No smartphone",
      start: "23:00",
      end: "24:00",
      color: ITEM_COLOR_PURPLE,
    },
  ],
};
