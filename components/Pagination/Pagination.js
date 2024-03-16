import React from 'react'
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/20/solid'

const Pagination = ({ currentPage, setCurrentPage, postsPerPage, blogs, handlePagination }) => {
    let pages = []
    let totalPage = Math.ceil(blogs?.count / postsPerPage)
    for (let i = 1; i <= totalPage; i++) pages.push(i)


    return (
        <div>
            <div
                className={
                    'border-y md:border-0 md:border-t border-black dark:border-white py-[30px] flex justify-between items-center flex-col gap-7 md:flex-row'
                }
            >
                <button disabled={!blogs?.previous}
                        onClick={() => {
                            handlePagination(currentPage - 1)
                            setCurrentPage(currentPage - 1)
                        }}
                        className={'flex items-center'}>
                    <ArrowSmallLeftIcon className={'h-7 w-7'} />
                    <span className={'ml-2'}>Previous</span>
                </button>

                <div className={'flex flex-wrap gap-2'}>
                    {pages.map((page, index) =>
                        <button key={index}
                                onClick={() => {
                                    handlePagination(page)
                                    setCurrentPage(page)
                                }}
                                className={`${currentPage === page && 'bg-black text-white dark:bg-white dark:text-black rounded'} px-3 py-1`}>
                            {page}
                        </button>,
                    )}
                </div>

                <button disabled={!blogs?.next} onClick={() => {
                    handlePagination(currentPage + 1)
                    setCurrentPage(currentPage + 1)
                }}
                        className={'flex items-center'}>
                    <span className={'mr-2'}>Next</span>
                    <ArrowSmallRightIcon className={'h-7 w-7'} />
                </button>
            </div>
        </div>
    )
}

export default Pagination
