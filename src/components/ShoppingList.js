import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, onItemFormSubmit }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [newItemForm, setNewItemForm] = useState("Produce")
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
    
  
    const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  const searchedItem = itemsToDisplay.filter((item) => {
    if (search === "") return true

    return item.name.toLowerCase().includes(search.toLowerCase()) 
  })

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} />
      <ul className="Items">
        {searchedItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
  
      </ul>
    </div>
  );
}

export default ShoppingList;
