import React, { memo, useEffect } from 'react'
import { getUserAuth } from '@/axios/login/login'
export default memo(function Dashboard() {
  useEffect(() => {
    getUserAuth().then(res => {
      console.log(res)
    })
  },[])
  return (
    <div>
    </div>
  )
})
