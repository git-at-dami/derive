"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation'
import React from 'react'
import { MobileSidebar } from './sidebar';

function BreadcrumbHeader() {
  const pathName = usePathname();
  const paths = pathName === "/" ? [""] : pathName?.split("/");

  return (
    <div className='flex items-center flex-start'>
      <MobileSidebar />
      <Breadcrumb>
        <BreadcrumbList>
        { paths.map((path, index) => 
          <React.Fragment key={index}>
            <BreadcrumbItem>
            <BreadcrumbLink className='capitalize' href={`/${path}`}>
              {path === "" ? "derive" : path}
            </BreadcrumbLink>
          </BreadcrumbItem>
          </React.Fragment>
        )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbHeader
