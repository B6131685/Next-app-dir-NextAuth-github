"use client";
import React from 'react'
import { redirect } from "next/navigation"
import { useSession } from 'next-auth/react';
import { log } from 'console';

const MePage = () => {
    const { data: session } = useSession();
    if(!session){ 
        redirect("/")
    }
    return (
    <div> Can see if auth = true</div>
  )
}

export default MePage