import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Categories = () => {
  const [inputList, setInputList] = useState("");
  const [categories, setCategories] = useState([]);

  //   add category
  const addCategory = (e) => {
    if (inputList !== "") {
      setCategories((oldData) => {
        return [...oldData, inputList];
      });
      setInputList("");
    } else {
      return console.log("Error in addCategory");
    }
  };

  //   handle Delete
  const handleDelete = (index) => {
    let deleteCategoris = [...Categories];
    deleteCategoris.splice(index);
    setCategories(deleteCategoris);
  };

  return (
    <div className="flex-col w-auto mt-5">
      <div className="flex items-center gap-3 mb-5">
        <p className="text-2xl font-extrabold ">&#8280;</p>
        <h1 className="font-bold text-lg">Quetion First 1</h1>
      </div>

      <div className="w-75 mb-5">
        <input
          type="text"
          placeholder="Description(Optional)"
          className="border p-2 w-8/12"
          value={inputList}
          autoFocus
          onChange={(e) => setInputList(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white p-2 ml-2 w-16 rounded-sm hover:opacity-80 font-semibold"
          onClick={() => addCategory()}
        >
          Add
        </button>
      </div>

      <h1 className="font-semibold text-lg mb-5">Categories</h1>
      {categories?.map((question, index) => (
        <div className="flex items-center gap-3 mb-2">
          <p className="text-2xl font-extrabold">&#8280;</p>
          <input
            type="text"
            className="border p-2"
            key={index}
            value={question}
          />
          <FaTimes onClick={() => handleDelete(index)} />
        </div>
      ))}

      <div className="flex items-center gap-10 mt-12">
        <div className="text-center">
          <h2>Item</h2>
          <div className="flex items-center mt-4 gap-3 mb-8">
            <p className="text-2xl font-extrabold ">&#8280;</p>
            <input type="text" className="border p-2" />
            <p className="font-extrabold cursor-pointer">&#x2716;</p>
          </div>
        </div>

        <div className="text-center">
          <h2>Belongs To</h2>
          <div className="flex items-center mt-4 gap-3 mb-8">
            <input type="text" className="border p-2 drop-shadow-lg" />
            {/* <p className="text-2xl font-extrabold cursor-pointer">&#xd7;</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
