import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../api/product'
import CardProduct from '../../components/CardProduct/CardProduct'
import CardProduct1 from '../../components/CardProduct/CardProduct1'
import Pagination from '../../components/Pagination/Pagination'


const ProductPage = () => {
    const product = useSelector((state) => state.product)
    console.log(product.data);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProduct())
    },[])
    return (
        <>
            <div className='px-6 md:px-20 lg:px-24 lg:pt-20 pt-20 md:pt-28'>
                <div id="carouselExampleCrossfade" className="relative" data-te-carousel-init data-te-carousel-slide>
                    <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
                        <button type="button" data-te-target="#carouselExampleCrossfade" data-te-slide-to={0} data-te-carousel-active className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-te-target="#carouselExampleCrossfade" data-te-slide-to={1} className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 2" />
                        <button type="button" data-te-target="#carouselExampleCrossfade" data-te-slide-to={2} className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 3" />
                    </div>
                    <div className="relative w-full  overflow-hidden shadow-lg rounded-lg after:clear-both after:block after:content-['']">
                        <div className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item data-te-carousel-active>
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="block w-full" alt="Wild Landscape" />
                        </div>
                        <div className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="block w-full" alt="Camera" />
                        </div>
                        <div className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="block w-full" alt="Exotic Fruits" />
                        </div>
                    </div>
                    <button className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCrossfade" data-te-slide="prev">
                        <span className="inline-block h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
                    </button>
                    <button className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCrossfade" data-te-slide="next">
                        <span className="inline-block h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
                    </button>
                </div>
            </div>
            <div className='px-6 mx-auto my-4 space-y-5 md:px-8'>
                <div>
                    <select defaultValue={'category'} className="select w-1/2 max-w-xs">
                        <option disabled selected >Pick your favorite Simpson</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div>
                    <h4>Tags : <div className="badge badge-primary badge-outline">primary</div></h4>
                </div>
            </div>
            <div className='px-6 mx-auto my-6  '>
                <div className='my-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {/* {
                        product.data.map((el,i) => {
                            return(
                                <div key={i}>
                                    <CardProduct dataProduct={el}/>
                                </div>
                            )
                        })
                    } */}

                <CardProduct1 />
                <CardProduct1 />
                <CardProduct1 />
                <CardProduct1 />
                <CardProduct1 />
                <CardProduct1 />
                <CardProduct1 />
                <CardProduct1 />
                <CardProduct1 />
                <CardProduct1 />
                </div>
                <Pagination/>
            </div>
        </>
    )
}

export default ProductPage