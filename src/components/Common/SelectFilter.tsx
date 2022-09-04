import React from "react";
import Select from "react-select";

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    // borderBottom: "1px dotted pink",
  }),
  control: (provided: any) => ({
    ...provided,
    // none of react-select's styles are passed to <Control />
    border: "none",
    backgroundColor: "#f5f5f5",
    width: 200,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

export const SelectFilter = () => {
  return (
    <div>
      <Select
        isMulti
        styles={customStyles}
        // value={selectedOption[item.id].map((item) => ({
        //   value: item.value,
        //   label: item.label,
        // }))}
        // options={item.options.map((i) => ({
        //   value: i.value,
        //   label: i.title,
        // }))}
        // onChange={(e: any) => {
        //   setSelectedOption((value) => ({
        //     ...value,
        //     [item.id]: e.map((i) => ({
        //       value: i.value,
        //       label: i.label,
        //     })),
        //   }));
        //   setFilters((value) => ({
        //     ...value,
        //     page: 0,
        //     clearAll: false,
        //     [item.id]: e.map((item) => item.value),
        //   }));
        // }}
      />
    </div>
  );
};
