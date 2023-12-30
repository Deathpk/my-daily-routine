import { ConfigType } from "@/types/ConfigTypes";
import * as color from "@/constants/itemcolor.cons";

export const config: ConfigType = {
  name: "Daily Routine",
  /* 
  leave the quotes blank
  or remove the quotes 
  for random stoic quotes,
  add one or more to cycle 
  between your own quotes
  */
  quotes: [
    // {
    //   quote:
    //     "Motivation is what gets you started. Habit is what keeps you going",
    //   author: "Aristotle",
    // },
  ],

  timetable: [
    {
      name: "Sleep",
      memo: "",
      start: "00:00",
      end: "06:00",
      color: color.ITEM_COLOR_PURPLE,
    },
    {
      name: "Morning Routine",
      memo: "Meditation, Breakfast, Ride bike.",
      start: "06:00",
      end: "07:30",
      color: color.ITEM_COLOR_ORANGE,
    },
    {
      name: "Coffee & Study",
      memo: "Backend and architecture stuff",
      start: "07:50",
      end: "09:00",
      color: color.ITEM_COLOR_CYAN,
    },
    {
      name: "Work on important tasks",
      memo: "Frelance or personal projects.",
      start: "09:20",
      end: "13:20",
      color: color.ITEM_COLOR_GRAY,
    },
    {
      name: "Lunch",
      memo: "Eat healthy food",
      start: "13:21",
      end: "14:30",
      color: color.ITEM_COLOR_CYAN,
    },
    {
      name: "Light work",
      memo: "Not important tasks",
      start: "14:41",
      end: "18:50",
      color: color.ITEM_COLOR_ORANGE,
    },
    {
      name: "Exercise",
      memo: "Ride the whole pampulha lap",
      start: "19:00",
      end: "20:30",
      color: color.ITEM_COLOR_CYAN,
    },
    {
      name: "Shower and free time",
      memo: "Take a shower and maybe play some games ?",
      start: "20:45",
      end: "22:00",
      color: color.ITEM_COLOR_GRAY,
    },
    {
      name: "Sleep",
      memo: "No smartphone",
      start: "22:00",
      end: "24:00",
      color: color.ITEM_COLOR_PURPLE,
    },
  ],
};
