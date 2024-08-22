'use client'
import Input from '@/component/Input/Input'
import SearchTickets from '@/component/searchTickets'
import TicketResult from '@/component/ticketResult'
import React, { useState } from 'react'
import { ticketDummy } from '@/component/ticketResult/ticketDataResult'
import Pagination from '@mui/material/Pagination';

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);  
    const [postPerPage] = useState(6);  

   
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const ticketSli = ticketDummy.slice(firstPostIndex, lastPostIndex);

   
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="border rounded-[24px] bg-[rgba(25,29,35,0.5)] flex flex-col items-start gap-8 flex-[1_0_0%]">
            <div className='px-[32px] w-full border-b border-[#4B5768]'>
                <SearchTickets/>
            </div>
            <div className='flex px-8 items-center content-center gap-6 self-stretch flex-wrap'>
                {ticketSli.map((item, index) => (
                    <TicketResult 
                        key={index}
                        image={item.image}
                        ticketName={item.ticketName}
                        category={item.category}
                        location={item.location}
                        quantity={item.quantity}
                        Amount={item.Amount}
                        date={item.date}
                        link={item.link}
                    />
                ))}
            </div>
            <div className='flex px-6 py-8 justify-end items-center gap-8 self-stretch'>
                <Pagination 
                    count={Math.ceil(ticketDummy.length / postPerPage)} 
                    page={currentPage} 
                    onChange={handlePageChange} 
                    color="primary"
                />
            </div>
        </div>
    )
}
