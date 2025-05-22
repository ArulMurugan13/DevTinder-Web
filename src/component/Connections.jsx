import React, { useEffect } from 'react'
import { BACKEND_URL } from '../utils/constants'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

const Connections = () => {
        const dispatch = useDispatch();
        const connections = useSelector(store => store.connections);

    const fetchConnections = async ()=>{
        const res = await axios.get(BACKEND_URL+"/connections",{withCredentials:true});
        console.log(res?.data?.data);
        dispatch(addConnections(res?.data?.data));
    }

    useEffect(()=>{
        fetchConnections();
    },[]);

  return (
    <div className=''>
      <div className=" flex justify-center">
        <h1 className="text-2xl my-10">Connections</h1>
      </div>
    <div className='flex flex-col items-center '>
        {connections && (
            connections.map((con)=>{
                return (
                <div key={con?._id} className='my-5 p-3 flex justify-center w-1/2 bg-neutral rounded-lg shadow-2xl '>
                    <div className='mr-10'>
                        <img src={con?.photourl} alt={con?.fname} className='w-16 h-16'/>
                    </div>
                    <div>
                    <h2>{con?.fname}</h2>
                    <p>{con?.about}</p>
                    </div>
                </div>
                );
            })
    )}
    </div>
      
    </div>
  );
}

export default Connections