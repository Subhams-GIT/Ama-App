'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const NavBar = () => {
	const {data:session}=useSession();
	const user=session?.user
	
  return (
	<nav className="p-4 md:p-6 shadow-md bg-gray-900 text-white">
	<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
	  <a href="#" className="text-xl font-bold mb-4 md:mb-0">
		True Feedback
	  </a>
	  {session ? (
		<>
		  <span className="mr-4">
			Welcome, {user?.username ||user?.name}
		  </span>
		  <Button onClick={() => signOut({callbackUrl:'/'})} className="w-full md:w-auto bg-slate-100 text-black" variant='outline'>
			Logout
		  </Button>
		</>
	  ) : (
		<Link href="/signin">
		  <Button className="w-full md:w-auto bg-slate-100 text-black" variant={'outline'}>Login</Button>
		</Link>
	  )}
	</div>
  </nav>
  )
}

export default NavBar