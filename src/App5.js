// Thinking in React 
// Thought process of building a searchable product data table with React.
//Imagine that you already have a JSON API and a mockup from a designer.

//To implement a UI in React, you will usually follow the same five steps.

//Step 1: Break the UI into a component hierarchy:
// FilterableProductTable
// SearchBar
// ProductTable
// ProductCategoryRow
// ProductRow

//Step 2: Build a static version in React (use props to pass data/ dont use state right now, State is reserved only for interactivity, that is, data that changes over time)
//(Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.)
//it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up.


//Step 3: Find the minimal but complete representation of UI state
// identify which value can be kept as state : here search text and value of checkbox


//Step 4: Identify where your state should live 
//identify component that use state [ProductTable, SearchBar], then find their common parent [FilterableProductTable] and decide where state lives : [FilterableProductTable]

//Step 5: Add inverse data flow 


// import { useState } from "react";

// function FilterableProductTable({ products }) {

//   const [filterText, setFilterText] = useState('');
//   const [inStockOnly, setInStockOnly] = useState(false);

//   return (
//     <div>
//       <SearchBar
//       filterText={filterText}
//       inStockOnly={inStockOnly}
//       onFilterTextChange={setFilterText}
//       onInStockOnlyChange={setInStockOnly}
//       />
//       <ProductTable products={products}
//       filterText={filterText}
//       inStockOnly={inStockOnly}
//       />
//     </div>
//   );
// }


// function ProductCategoryRow({ category }) {
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
  
//   function ProductRow({ product }) {
//     const name = product.stocked ? product.name :
//       <span style={{ color: 'red' }}>
//         {product.name}
//       </span>;
  
//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
  
//   function ProductTable({ products, filterText,inStockOnly }) {
//     const rows = [];
//     let lastCategory = null;
  
//     products.forEach((product) => {
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name} />
//       );
//       lastCategory = product.category;
//     });
  
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
  
//   function SearchBar({filterText,inStockOnly,onFilterTextChange,onInStockOnlyChange}) {
//     return (
//       <form>
//         <input type="text" value={filterText} placeholder="Search..." onChange={(e)=>onFilterTextChange(e.target.value)} />
//         <label>
//           <input type="checkbox"  checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
//           {' '}
//           Only show products in stock
//         </label>
//       </form>
//     );
//   }
  

//   const PRODUCTS = [
//     {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
//     {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
//     {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
//     {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
//     {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
//     {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
//   ];
//   console.log(PRODUCTS)
//   export default function App() {
//     return <FilterableProductTable products={PRODUCTS} />;
//   }
  

import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category} hu
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        //add the onChange event handlers and set the parent state from them:
        onChange={(e) => onFilterTextChange(e.target.value)} />  
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
console.log(PRODUCTS)

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}