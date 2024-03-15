"use client";
import React from "react";
import WorkshopCard from "../Common/WorkshopCard";
import { WorkshopData } from "../../utils/data";

const WorkshopSection = () => {
  return (
    <div className="lg:w-3/5 mt-10 flex items-center justify-center flex-wrap gap-5 pb-16 ">
      {WorkshopData.map((item, index) => (
        <WorkshopCard
          key={index}
          imageUrl={item.imageUrl}
          name={item.name}
          designation={item.designation}
        />
      ))}
    </div>
  );
};

export default WorkshopSection;
