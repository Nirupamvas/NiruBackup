import { HoverEffect } from "./ui/card-hover-effect";

export function StepsToBook() {
  return (
    <div className="max-w-5xl mx-auto px-2 ">
      <h1 className="text-center text-3xl mt-4 font-semibold bg-blend-color-dodge">Design Your Dream Outfit in 4 Easy Steps</h1>
      <HoverEffect items={projects} />
    </div>
    
  );
}
export const projects = [
  {
    title: "Select the garment you want or upload your own design.",
    description:
      "",
    link: "#",
    stepCount:"Step 1: ",
  },
  {
    title: "An assigned designer will work on your requirements.",
    description:
      "",
    link: "#",
    stepCount:"Step 2: ",
  },
  {
    title: "Review the estimate and make the payment.",
    description:
      "",
    link: "#",
    stepCount:"Step 3: ",
  },
  {
    title: "Your custom garment will be delivered to your home.",
    description:
      "",
    link: "#",
    stepCount:"Step 4: ",
  },
];

export default StepsToBook;
