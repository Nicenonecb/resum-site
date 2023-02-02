import React from 'react';
import { Divider,Input } from 'antd';




export default function BaseInfo() {


  return (
    <div className=" gap-x-2">
      <div className=" flex ">
        <div>2018届毕业</div>
        <Divider type="vertical" className='bg-white' />
        <div>前端开发</div>
      </div>
      <div>邮箱:bmljZW5vbmVjYkBnbWFpbC5jb20= </div>
      <div>微信:TmljZW5vbmVjYg==  </div>
      
      <Input placeholder="Basic usage" className='mt-10' />
    </div>
  )

}