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
    {
      quote:
        "Motivation is what gets you started. Habit is what keeps you going",
      author: "Aristotle",
    },
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
      memo: "Breakfast, Ride bike, 10 Pushups, Shower, Meditate, Check your goals",
      start: "06:00",
      end: "08:10",
      color: color.ITEM_COLOR_YELLOW,
    },
    {
      name: "Coffee & Study",
      memo: "Docker, Requirements Analysis, Design Patterns, System Design, PHP, Node, Livewire, Filament",
      start: "08:10",
      end: "09:40",
      color: color.ITEM_COLOR_CYAN,
    },
    {
      name: "Work on important tasks",
      memo: "Frelance or personal projects.",
      start: "09:40",
      end: "13:40",
      color: color.ITEM_COLOR_GRAY,
    },
    {
      name: "Lunch",
      memo: "Eat healthy food",
      start: "13:40",
      end: "14:40",
      color: color.ITEM_COLOR_CYAN,
    },
    {
      name: "Light work",
      memo: "Not important tasks",
      start: "14:40",
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
      name: "Jornal and Sleep",
      memo: "Jornaling first, No smartphone after It's done!",
      start: "22:00",
      end: "24:00",
      color: color.ITEM_COLOR_PURPLE,
    },
  ],
};
