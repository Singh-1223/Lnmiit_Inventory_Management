import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';
import notFound from "../assets/not-found-404error.gif";
import { CircularProgress, Stack } from "@mui/material";

const PendingInventoryRequests = () => {
  const [inventory, setInventory] = useState([]);
  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');
  const [showNoItems, setShowNoItems] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch inventory data when the component mounts
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await fetch('http://localhost:5000/allpendingrequests', {
        method: 'GET',
      });
      const data = await response.json();
      if (data.success) {
        const items = data.data;
        for (const item of items) {
          const user = await getUser(item.user);
          item.requestedBy = user ? user.username : 'Unknown';
        }
        setInventory(items);
        setResult(items);
      } else {
        console.error('Failed to fetch inventory:', data.message);
      }
    } catch (error) {
      console.error('Error fetching inventory:', error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const getUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/getuser/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
  
      if (data.success) {
        return data.user;
      } else {
        console.error('Error fetching user:', data.message);
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleChange = (value) => {
    setInput(value);
  };
  
  
  const handleApproveRequest = async (requestId) => {
    try {
      const response = await fetch(`http://localhost:5000/handlerequests/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'approve',
        }),
      });
      const data = await response.json();

      if (data.success) {
        const updatedRequests = inventory.filter((request) => request._id !== requestId);
         toast.success('Request Approved', { theme: 'light' });
         setTimeout(() => {
            setInventory(updatedRequests);
        },1000 );
        
      } else {
        console.error('Error approving request');
        toast.error('Error! Not able to approve the request', { theme: 'light' });
   
      }
    } catch (error) {
      console.error(error);
      toast.error('Error! Not able to approve the request', { theme: 'light' });
   
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      const response = await fetch(`http://localhost:5000/handlerequests/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'reject',
        }),
      });
      const data = await response.json();

      if (data.success) {
        const updatedRequests = inventory.filter((request) => request._id !== requestId);
        toast.success('Request Rejected', { theme: 'light' });
        setTimeout(() => {
           setInventory(updatedRequests);
       },1000 );
      } else {
        console.error('Error rejecting request');
        toast.error('Error! Not able to reject the request', { theme: 'light' });
      }
    } catch (error) {
      console.error(error);
      toast.error('Error! Not able to reject the request', { theme: 'light' });
    }
  };

  useEffect(() => {
    // Check if there are no filtered items
    const filteredItems = inventory.filter((items) =>
      items.itemName.toLowerCase().includes(input.toLowerCase())
    );

    // Set the flag to true if there are no filtered items
    setShowNoItems(filteredItems.length === 0);
  }, [inventory, input]);

  return (
    <div className='bg-zinc-300 pt-10'>
      <div className='bg-white flex items-center justify-center w-full max-w-md rounded-[12px] p-2 m-auto'>
        <FaSearch style={{ color: 'teal', fontSize: 20 }} />
        <input
          className='pl-2 outline-none border-none text-center w-[100%]'
          placeholder='Type to Search...'
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <div className=" w-screen min-h-screen container mx-auto mt-8 ">
        <h1 className="text-2xl font-bold mb-4 text-center">Requests List</h1>
        {loading && <CircularProgress />}
        {!loading && showNoItems && (
          // Display the GIF when there are no filtered items
          <img src={notFound} alt="No items found" className='m-auto p-auto h-[300px] w-[300px] rounded-[10px]'/>
        )}
        {!loading && !showNoItems && (
          <Stack spacing={{ xs: 1, sm: 2, md: 4 }}
            direction={{ xs: 'column', sm: 'row' }}
            useFlexGap flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            paddingBottom={4}
            paddingTop={3}
          >
            {inventory
              .filter((item) => item.itemName.toLowerCase().includes(input.toLowerCase()))
              .map((item) => (
                <div key={item._id} className="w-[350px] h-[210px] bg-white hover:bg-zinc-200 cursor-pointer p-4 shadow-md rounded-md ">
                  <h2 className="text-lg font-semibold mb-2">{item.itemName}</h2>
                  <p className="text-gray-600 mb-2">Item ID: {item.itemId.slice(0, 8)}</p>
                  <p className="text-gray-600 mb-2">Requested By : <span className='font-bold'>{item.requestedBy}</span></p>
                  <p className="text-gray-600">Quantity: {item.itemQuantity}</p>
                  <div className="flex">
                     <button 
                        className="w-[35%] bg-blue-500 hover:bg-blue-900 text-white font-bold py-1 px-2 m-4 rounded focus:outline-none focus:shadow-outline"
                         onClick={() => handleApproveRequest(item._id)}
                     >  
                        Approve
                     </button>
                    
                     <button 
                      className="w-[35%] bg-red-500 hover:bg-red-900 text-white font-bold py-1 px-2 m-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleRejectRequest(item._id)}
                      >
                        Reject
                      </button>
                  </div>
                </div>
              ))}
          </Stack>
        )}
      </div>
    </div>
  );
};

export default PendingInventoryRequests;






























































































