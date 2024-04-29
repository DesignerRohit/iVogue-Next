"use client"
import Newsletter from '@/app/Components/HeroSection/Newsletter'
import React from 'react'
import Image from 'next/image'
import img1 from "/public/images/blog/blog-details.png";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { BlogData } from '@/api/homepage/homepage';
import BlogInfo from '@/app/Components/Blog/BlogInfo';

const BlogDetails = ({params}) => {
    const blog = BlogData.find((blog)=>{
        return blog.key===params.blogId;
    })
    return (
        <>
           <BlogInfo image={blog.img} title={blog.title} date={blog.date} />
            <Newsletter />
        </>
    )
}

export default BlogDetails
