import Swal from 'sweetalert2'

const Addphone = () => {

const handleAddphone=(event)=>{
  event.preventDefault();

  const form = event.target;
    const name = form.name.value;
    const bandname = form.bandname.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const newPhone={name,bandname,price,rating,photo,description,category}

// --------- dend data to the server------------
fetch('http://localhost:5000/phone', {
  method: 'POST',
  headers: {
    'content-Type': 'application/json',
  },
  body: JSON.stringify(newPhone),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    if (data.insertedId) {
     
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
  })
  .catch((error) => {
    console.error('Error:', error);
   
  });




}


  return (
    <div>
    <div>
<h1 className="text-center text-xl mb-4 font-[Rancho] ">Update Phone Details</h1>
<div>
<p className="text-center mb-4"> All of the phone product adding easily and update .</p>
</div>

{/* main div */}
<div className="bg-[#E9498C] max-w-4xl p-4  ">
{/* from card */}
<form onSubmit={handleAddphone} className="w-full  max-w-4x ">

{/*------------ 1st name & quantity--------------------- */}
<div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
 Name
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 
border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
focus:bg-white" id="grid-first-name" name="name" type="text" placeholder="Name"/>
<p className="text-red-500 text-xs italic">Please fill out this field.</p>
</div>
{/*-------------------------------  */}
<div className="w-full md:w-1/2 px-3">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
Brand Name
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 border
border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
focus:border-gray-500" id="grid-last-name" name="bandname" type="text" placeholder="Brand Name"/>
</div>
</div>

{/* ----------2nd --------- */}
<div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
Price
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 
border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
focus:bg-white" id="grid-first-name" name="price" type="text" placeholder="Price"/>
<p className="text-red-500 text-xs italic">Please fill out this field.</p>
</div>
{/* -------------------------- */}
<div className="w-full md:w-1/2 px-3">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
Rating
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 border
border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
focus:border-gray-500" name="rating" id="grid-last-name" type="text" placeholder="Rating"/>
</div>
</div>
{/* -----------------  3rd*/}

<div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
Short description
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 
border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
focus:bg-white" id="grid-first-name" name="description" type="text" placeholder="description"/>
<p className="text-red-500 text-xs italic">Please fill out this field.</p>
</div>
{/* -------------------------- dropdown category*/}
{/* <div className="w-full md:w-1/2 px-3">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
Details
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 border
border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
focus:border-gray-500" id="grid-last-name" type="text" name="details" placeholder="Details"/>
</div> */}
{/* ----------------- */}
<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200
         text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white
          focus:border-gray-500" id="grid-state" name='category'>
          <option>phone</option>
          <option>computer</option>
          <option>headphone</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
{/* ----------------------------- */}

</div>
{/*------------------ photo------ */}


<div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full px-3">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
Photo
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 border
border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
focus:border-gray-500" id="grid-password"  type="text" name="photo" placeholder="Photo URL"/>

</div>

</div>
{/*---------- button ----------------*/}
<button className="btn btn-wide font-[Rancho]">Upload Phone</button>


</form>



</div>




</div>
</div>
  );
};

export default Addphone;
