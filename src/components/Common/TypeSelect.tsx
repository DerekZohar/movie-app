import React from "react";
import { tabs } from "../../shared/constants";
import { NavLink, useSearchParams } from "react-router-dom";

export const TypeSelect = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.title}
          className={
            searchParams.get("type") === tab.path
              ? "text-black"
              : "text-gray-400"
          }
          to={window.location.pathname + "?type=" + tab.path}
        >
          {tab.title}
        </NavLink>
      ))}
    </div>
  );
};
