import clsxUtility, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const clsx = (...classes: ClassValue[]) => twMerge(clsxUtility(...classes));

export default clsx;