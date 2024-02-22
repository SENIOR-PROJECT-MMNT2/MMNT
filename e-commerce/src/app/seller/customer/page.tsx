import Link from "next/link";
import { SlTrash } from "react-icons/sl";
import { SlPencil } from "react-icons/sl";
export default function(){

interface Dashboord{
    id:number,
    name:string,
}
const dashboords : Dashboord[] = [
    { id:1,name:'addproduct'},
    { id:2,name:'category'},
    {id:3,name:'customer' },
]
    return(
        <div>
    
           <div style={{display:'flex',width:'100%'}}>

           <div >
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Dashboord</h5>
          </div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path>
                </svg>
              </div>
              Product
            </div>
            <Link href={"/seller/addproduct"}><div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path>
                </svg>
              </div>
              addproduct
            </div>
            </Link>
            <Link href={"/seller/category"}><div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clip-rule="evenodd"></path>
                </svg>
              </div>Category
            </div>
            </Link>
    
            <Link href={"/seller/customer"}> <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                </svg>
              </div>Customer
            </div>
            </Link>
            <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clip-rule="evenodd"></path>
                </svg>
              </div>Log Out
            </div>
          </nav>
          </div>
        </div>
    
        <div>
  
              
<div className="container max-w-5xl px-50 mx-auto sm:px-33" style={{marginLeft:70}}>
    <div className="py-8">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8  ">
            <div>
                <table className="min-w-full leading-normal w-4/5">
                    <thead>
                        <tr>
                            <th scope="col" className=" px-5 py-3 text-sm  font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200 ">
                                first name
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                lastname
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                age
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                email
                            </th>
                    
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 w-80">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#" className="relative block">
                                            <img alt="profil" src="data:image/png;base64,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" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                        user1
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                1
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    15
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    user1@gmail.com
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 w-80">
                            
                            </td> 
                          
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
        </div>
           </div>
        </div>
        
        
        
            
        
    )
}